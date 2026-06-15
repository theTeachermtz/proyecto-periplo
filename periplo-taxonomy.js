// ============================================================
// PERIPLO — Taxonomía del Curso de Inglés (fuente única de verdad)
// Edita SOLO este archivo para actualizar la taxonomía en TODOS los dashboards ingleses
// ============================================================
window.PERIPLO_TAXONOMY = (() => {
    const TAXONOMY = {
        basic: {
            grammar:     ["Modal Verbs","Present Simple","Present Continuous","Future (Going to)","Otro"],
            verbs:       ["Pack 1: Daily Routine","Pack 2: Home & Communication","Pack 3: Travel & Adventure","Pack 4: Feelings & Reactions","Pack 5: Action & Strategy","Pack 6: Social & Relationships","Pack 7: Science & Lab","Pack 8: Corporate & Economy","Pack 9: Hospital & Health","Otro"],
            nouns:       ["Pack 1: Modern Nomad","Pack 2: Hungry Traveler","Pack 3: Travel & Places","Pack 4: Emotions & Mind","Pack 5: Weekend Getaway","Pack 6: People & Society","Pack 7: Science & Lab","Pack 8: Money & Power","Pack 9: Body & Health","Otro"],
            adjectives:  ["Pack 1: Personality & Looks","Pack 2: Feelings & State","Pack 3: Places & Vibes","Pack 4: The -ed/-ing Trap","Pack 5: Opinions & Taste","Otro"],
            key_structs: ["WH Questions","FANBOYS & Correlative","Subordinating Conj.","Prep. Time","Prep. Place","Prep. Movement & Other","Possessive & Object Pron.","Quantifiers","Frequency Adverbs","Otro"],
            otro:        ["Otro"]
        },
        advanced: {
            grammar:     ["Past Simple","Second Conditional","Past Continuous","Past Future Intention","Otro"],
            verbs:       ["Irregular A-F","Irregular G-M","Irregular R-S","Irregular T-W","Regular /t/ Sound","Regular /d/ Sound","Regular /ɪd/ Sound","Otro"],
            nouns:       ["Pack 1: Success & Failure","Pack 2: Truth & Lies","Pack 3: Media & Entertainment","Pack 4: Regrets & Turning Points","Pack 5: Attraction & Identity","Pack 6: Ambition & Competition","Pack 7: Mystery & Crime","Pack 8: Systems & Society","Otro"],
            adjectives:  ["Short Comparatives","Long Comparatives","Irregular Comparatives","Superlatives","Otro"],
            key_structs: ["Used to / Use to","Comparative Rules","Superlative Rules","Idiomatic Expressions","Possessive Nouns","Relative Clauses","Modals of Possibility","Passive Voice","Otro"],
            otro:        ["Otro"]
        },
        pro: {
            grammar:     ["Present/Past Perfect","Perfect Continuous","Third Conditional","Mixed Conditionals","Otro"],
            verbs:       ["Phrasal Verbs 2","Idiomatic Expressions","Sayings & Proverbs","Advanced Collocations","Otro"],
            nouns:       ["Pack 1: Law & Politics","Pack 2: Finance & Econ.","Pack 3: Collective Nouns","Pack 4: Uncountables","Pack 5: Formal & Academic","Otro"],
            adjectives:  ["Formal Register Adj.","Nuance & Tone Adj.","Otro"],
            key_structs: ["Inversion","Cleft Sentences","Participle Clauses","Wish & Regret","Double Comparatives","Otro"],
            otro:        ["Otro"]
        },
        otro: { otro: ["Otro"] }
    };

    const NEW_LEVELS = ["B1","B2","B-MIX","A1","A2","A-MIX","P1","P2","P-MIX"];

    const NEW_CATS = [
        { id: 'grammar',     label: 'Grammar' },
        { id: 'verbs',       label: 'Verb Mastery' },
        { id: 'nouns',       label: 'Noun Mastery' },
        { id: 'adjectives',  label: 'Adjective Mastery' },
        { id: 'key_structs', label: 'Key Structures' },
        { id: 'otro',        label: 'Otro (Macro Skills)' }
    ];

    const MACRO_SKILLS = ["Speaking","Listening","Reading","Grammar","Vocabulary","Pronunciation"];

    const getAllTopicsForCategory = (categoryId, selectedLevels) => {
        let topics = [];
        const activeDbKeys = new Set();
        selectedLevels.forEach(lvl => {
            if (lvl.startsWith('B')) activeDbKeys.add('basic');
            if (lvl.startsWith('A')) activeDbKeys.add('advanced');
            if (lvl.startsWith('P')) activeDbKeys.add('pro');
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
