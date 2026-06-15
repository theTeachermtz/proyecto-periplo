// ============================================================
// PERIPLO — Helper de Modo Solo (renderer ↔ portal del alumno)
// ------------------------------------------------------------
// El portal lanza una misión con un token:
//     juego.html?id=...&uid=teacher_builder_001&student=true&solo=<world>:<mission>
// El renderer, al GANAR, llama PeriploSolo.complete() para volver al portal
// con la recompensa. TODA la economía (XP, monedas, racha, cupo diario) vive
// en el portal — este helper solo transporta "terminé la misión X".
//
// Uso en un renderer:
//     <script src="periplo-solo.js"></script>
//     const solo = PeriploSolo.active();   // {world, mission, token} | null
//     // ...al llegar a la pantalla de victoria, si hay misión activa:
//     // muestra un botón "Reclamar recompensa" → PeriploSolo.complete()
// Fuera de modo Solo (sin ?solo=), active() es null y el juego se comporta igual.
// ============================================================
(function () {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('solo'); // "worldId:missionKey"
    let parsed = null;
    if (raw && raw.indexOf(':') > -1) {
        const i = raw.indexOf(':');
        const world = raw.slice(0, i);
        const mission = raw.slice(i + 1);
        if (world && mission) parsed = { world: world, mission: mission, token: raw };
    }
    // A dónde volver al terminar (default: portal del alumno). El uid del alumno
    // lo resuelve el portal por Firebase Auth, no hace falta pasarlo aquí.
    const RETURN = params.get('ret') || 'student_portal.html';

    window.PeriploSolo = {
        active: function () { return parsed; },
        isActive: function () { return !!parsed; },
        // Vuelve al portal señalando la misión completada.
        complete: function () {
            if (!parsed) return;
            const sep = RETURN.indexOf('?') > -1 ? '&' : '?';
            window.location.href = RETURN + sep + 'done=' + encodeURIComponent(parsed.token);
        },
    };
})();
