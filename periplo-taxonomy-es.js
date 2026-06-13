// ============================================================
// PERIPLO — Taxonomía del Curso de Español (fuente única de verdad)
// Edita SOLO este archivo para actualizar la taxonomía en TODOS los dashboards -es
// Módulos: ES1 → ES2 → ES3 → ES4 → ES5 → ES-Mix1
// ============================================================
window.PERIPLO_TAXONOMY_ES = (() => {
    const TAXONOMY = {
        es1: {
            gramatica:   ["Fonética y Acentuación","Alfabeto y Números","Género y Número","El Artículo + HAY","Conjugar con todos los pronombres: tener que, querer, necesitar, poder, debería","El verbo HABER","Verbo ESTAR + gerundio (-ando/-iendo)"],
            verbos:      [],
            vocabulario: ["NP1-ES: La Casa y los Objetos","Verbos para preparar un guacamole","Palabras para tu visita a un restaurante mexicano","Emociones que se expresan con el verbo ESTAR","Emociones que se expresan con el verbo TENER"],
            adjetivos:   ["AP1-ES"],
            estructuras: ["Las 5 vocales puras","Sílaba tónica","Tilde diacrítica","Cognados y faux amis","el/la/los/las","Hay un/una/unos/unas","¿Cuántos hay?"],
            otro:        ["Otro"]
        },
        es2: {
            gramatica:   ["SER","ESTAR","TENER + HAY QUE / TENER QUE","SER vs ESTAR — contraste"],
            verbos:      [],
            vocabulario: ["NP2-ES: El Cuerpo y la Apariencia","NP3-ES: Las Emociones y los Estados","NP4-ES: La Familia y las Relaciones"],
            adjetivos:   ["AP1-ES","AP2-ES"],
            estructuras: ["Soy/Eres/Es + profesión/origen","Estoy/Está + estado/emoción","Tengo que + infinitivo","Hay que + infinitivo","Es aburrido vs Está aburrido"],
            otro:        ["Otro"]
        },
        es3: {
            gramatica:   ["Verbos Regulares -AR","Verbos Regulares -ER/-IR","Irregulares Grupo A (ir/hacer/querer/poder)","Irregulares Grupo B + cambio vocálico"],
            verbos:      ["VP1-ES: Verbos Rutinarios -AR","VP2-ES: Verbos Cotidianos -ER/-IR","VP3-ES: Irregulares Top 12"],
            vocabulario: ["NP4-ES: La Familia y las Relaciones","NP5-ES: El Trabajo y los Estudios"],
            adjetivos:   ["AP3-ES","AP4-ES"],
            estructuras: ["No + verbo (negación)","¿Tú hablas...? (interrogación)","Cambio e→ie (querer/pensar)","Cambio o→ue (poder/dormir)","Cambio e→i (pedir/decir)"],
            otro:        ["Otro"]
        },
        es4: {
            gramatica:   ["Verbos Reflexivos pt.1 — rutinas","Verbos Reflexivos pt.2 — recíprocos y contraste","Verbos tipo GUSTAR + Objeto Indirecto","Presente Progresivo (estar + gerundio)"],
            verbos:      ["VP4-ES: Verbos Reflexivos","VP5-ES: Verbos tipo GUSTAR"],
            vocabulario: ["NP5-ES: El Trabajo y los Estudios","NP6-ES: El Tiempo Libre y los Hobbies"],
            adjetivos:   ["AP4-ES"],
            estructuras: ["Me/te/se + verbo reflexivo","Llamo vs Me llamo","Verbos recíprocos (nos vemos)","Me gusta + infinitivo","Me gustan + sustantivo","Estoy + V-ando/iendo"],
            otro:        ["Otro"]
        },
        es5: {
            gramatica:   ["Futuro Próximo: IR A + infinitivo","Futuro Simple — regulares + 12 irregulares","Pretérito Indefinido -AR regulares","Pretérito Indefinido -ER/-IR + irregulares frecuentes"],
            verbos:      ["VP6-ES: Verbos de Acción Futura","VP7-ES: Pretérito -AR + Irregulares I","VP8-ES: Pretérito -ER/-IR + Irregulares II"],
            vocabulario: ["NP7-ES: Los Planes y el Transporte","NP8-ES: Las Experiencias y el Pasado"],
            adjetivos:   [],
            estructuras: ["Voy a + infinitivo","Futuro regular: -é/-ás/-á/-emos/-éis/-án","12 irregulares del futuro (tener/venir/decir/hacer...)","Pretérito regular -AR: -é/-aste/-ó","Pretérito regular -ER/-IR: -í/-iste/-ió","Irregulares: fui/hice/tuve/pude/vine/dije"],
            otro:        ["Otro"]
        },
        'es-mix1': {
            gramatica:   [],
            verbos:      ["VP1-ES (retrieval)","VP2-ES (retrieval)","VP3-ES (retrieval)","VP4-ES (retrieval)","VP5-ES (retrieval)","VP6-ES (retrieval)","VP7-ES (retrieval)","VP8-ES (retrieval)"],
            vocabulario: ["NP1-ES (retrieval)","NP2-ES (retrieval)","NP3-ES (retrieval)","NP4-ES (retrieval)","NP5-ES (retrieval)","NP6-ES (retrieval)","NP7-ES (retrieval)","NP8-ES (retrieval)"],
            adjetivos:   ["AP1-ES (retrieval)","AP2-ES (retrieval)","AP3-ES (retrieval)","AP4-ES (retrieval)"],
            estructuras: ["SER + ESTAR + TENER (integración)","Presente completo","Futuro próximo + simple","Pretérito indefinido"],
            otro:        ["Otro"]
        }
    };

    const NEW_LEVELS = ["ES1","ES2","ES3","ES4","ES5","ES-Mix1"];

    const NEW_CATS = [
        { id: 'gramatica',   label: 'Gramática' },
        { id: 'verbos',      label: 'Verbos (VP)' },
        { id: 'vocabulario', label: 'Vocabulario (NP)' },
        { id: 'adjetivos',   label: 'Adjetivos (AP)' },
        { id: 'estructuras', label: 'Estructuras Clave' },
        { id: 'otro',        label: 'Otro' }
    ];

    const MACRO_SKILLS = ["Expresión Oral","Comprensión Auditiva","Lectura","Gramática","Vocabulario","Pronunciación"];

    const getAllTopicsForCategory = (categoryId, selectedLevels) => {
        let topics = [];
        const activeDbKeys = new Set();
        selectedLevels.forEach(lvl => {
            const key = lvl.toLowerCase();
            if (TAXONOMY[key]) activeDbKeys.add(key);
        });
        activeDbKeys.forEach(dbKey => {
            if (TAXONOMY[dbKey] && TAXONOMY[dbKey][categoryId]) {
                topics.push(...TAXONOMY[dbKey][categoryId]);
            }
        });
        return [...new Set(topics)];
    };

    return { TAXONOMY, NEW_LEVELS, NEW_CATS, MACRO_SKILLS, getAllTopicsForCategory };
})();
