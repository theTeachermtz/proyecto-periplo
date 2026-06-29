// ============================================================
// PERIPLO — Helper de sesión de alumno (renderer ↔ portal)
// ------------------------------------------------------------
// El portal lanza un juego en modo alumno:
//     juego.html?id=...&uid=...&student=true[&solo=<world>:<mission>]
//
// Al TERMINAR, el renderer llama PeriploSolo.complete() para volver al portal:
//   · En Modo Solo (?solo=world:mission) → vuelve con ?done=token (premia XP/racha).
//   · En Patio/Taller (?student=true)    → vuelve con ?played=file:id (cuenta la jugada).
//   · Sin modo alumno (preview del teacher) → no hace nada; el juego usa su propio goBack.
//
// TODA la economía (XP, monedas, racha, contador de jugadas) vive en el portal —
// este helper solo transporta "terminé el juego X".
//
// Uso en un renderer:
//     <script src="periplo-solo.js"></script>
//     // en la pantalla de victoria, si PeriploSolo.isStudent():
//     //   botón "Volver al portal" → PeriploSolo.complete()
// ============================================================
(function () {
    const params = new URLSearchParams(window.location.search);

    // ── Token de Modo Solo (worldId:missionKey) ──
    const raw = params.get('solo');
    let parsed = null;
    if (raw && raw.indexOf(':') > -1) {
        const i = raw.indexOf(':');
        const world = raw.slice(0, i);
        const mission = raw.slice(i + 1);
        if (world && mission) parsed = { world: world, mission: mission, token: raw };
    }

    const isStudent = params.get('student') === 'true';

    // A dónde volver al terminar (default: portal del alumno). El uid del alumno
    // lo resuelve el portal por Firebase Auth, no hace falta pasarlo aquí.
    const RETURN = params.get('ret') || 'student_portal.html';

    // Clave de juego = "<basename del archivo sin .html>:<id>".
    // Debe coincidir con el playKey que arma el Patio en el portal.
    const quizId = params.get('id') || '';
    const file = (location.pathname.split('/').pop() || '').replace(/\.html$/i, '');
    const playKey = file + ':' + quizId;

    function goReturn(qs) {
        const sep = RETURN.indexOf('?') > -1 ? '&' : '?';
        window.location.href = RETURN + sep + qs;
    }

    window.PeriploSolo = {
        active: function () { return parsed; },
        isActive: function () { return !!parsed; },     // ¿es una misión de Modo Solo?
        isStudent: function () { return isStudent; },    // ¿venimos del portal del alumno?
        playKey: function () { return playKey; },

        // Termina la sesión y vuelve al portal con la señal correcta.
        complete: function () {
            if (parsed) { goReturn('done=' + encodeURIComponent(parsed.token)); return; }
            if (isStudent) { goReturn('played=' + encodeURIComponent(playKey)); return; }
            // preview del teacher: sin retorno especial
        },

        // Salir sin "completar" (botón Volver a media partida): vuelve al portal SIN contar jugada.
        exit: function () {
            if (parsed || isStudent) { goReturn('exit=1'); }
        },
    };
})();
