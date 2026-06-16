// periplo-eval-tax.js — Taxonomía de evaluación (temas de GRAMÁTICA) compartida.
// Fuente única de los topicIds + títulos + skills que usa evaluaciones.html, para que
// placement-test.html pueda PRE-LLENAR detailedMastery con los mismos nombres exactos.
// Solo gramática: es lo que el examen ubica con alta confianza (los ships abajo de tu
// nivel = dominados). Vocab/verbos/adjetivos/key-structures los cierra el teacher.
(function () {
  const U = ["Aplica estructura fluida", "Identifica al escuchar"]; // UNIVERSAL_SKILLS
  window.PERIPLO_EVAL_TAX = {
    // ── BASIC (B1 Foundation) ──
    modal_verbs:        { title: 'Modal Verbs',           skills: ["Significado correcto", "Omisión del 'to'", "Estructura Negativa", "Estructura Interrogativa", ...U] },
    present_simple:     { title: 'Present Simple',        skills: ["Regla de la 's'", "Auxiliar Do/Does", "Negación don't/doesn't", "WH Questions", ...U] },
    present_continuous: { title: 'Present Continuous',    skills: ["Verbo To Be", "Sufijo -ing", "Contraste vs Simple", "Reglas deletreo", ...U] },
    going_to:           { title: 'Future (Going to)',     skills: ["Inclusión To Be", "Partícula 'to'", "Contraste vs Will", "Negación", ...U] },
    // ── ADVANCED (A1 Foundation) ──
    past_simple:        { title: 'Past Simple',           skills: ["Confunde pasado/presente", "Usa did en afirmativo", "Did + Verb in Past", "Pronunciación -ed", ...U] },
    second_cond:        { title: 'Second Conditional',    skills: ["Would en cláusula IF", "Presente vs Pasado", "Uso de 'Were'", "Contracción 'd", ...U] },
    past_cont:          { title: 'Past Continuous',       skills: ["Olvida was/were", "When vs While", "Uso State Verbs", "Concordancia", ...U] },
    past_future:        { title: 'Past Future Intention', skills: ["Will para planes pasados", "Concordancia (They was)", "vs Used To", "Auxiliar be", ...U] },
    // ── PRO (P1 Structures) ──
    perf_tenses:        { title: 'Present/Past Perfect',  skills: ["Confunde con Past Simple", "Omite auxiliar Have/Had", "Error en Participio", "For/Since incorrecto", ...U] },
    perf_cont:          { title: 'Perfect Continuous',    skills: ["Omite 'been'", "Usa con State Verbs", "Confunde duración/resultado", "Falla estructura", ...U] },
    third_cond:         { title: 'Third Conditional',     skills: ["'Would' en cláusula IF", "Falla en participio", "Confunde irrealidad", "Olvida 'have'", ...U] },
    mixed_cond:         { title: 'Mixed Conditionals',    skills: ["Mezcla mal los tiempos", "Confunde resultado presente", "Estructura incompleta", "Uso ilógico", ...U] },
  };
})();
