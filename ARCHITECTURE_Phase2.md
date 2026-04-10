# Periplo — Architecture & Project Context (Phase 2 Master)

> **Production URL:** https://proyecto-periplo.vercel.app  
> **Repo:** https://github.com/theTeachermtz/proyecto-periplo  
> **Current Hub Version:** v20.3 (Search Enabled)

---

## 🎯 Purpose

A dynamic educational engine that transforms AI-generated JSON configurations into interactive learning experiences (Single & Multiplayer). The system is divided into two main branches: the **Teacher Hub** (creates content using AI → saves to Firestore) and the **Student Portal** (reads from Firestore → renders the games).

---

## ⚙️ Tech Stack

| Layer | Technology |
|------|-----------|
| UI Framework | React 18.2 via `esm.sh` + importmap |
| JSX Transform | Babel Standalone (`unpkg.com`) |
| Styling | Tailwind CSS CDN (`darkMode: 'class'`) |
| Iconography | Lucide React 0.263.1 via `esm.sh` |
| Database | Firebase v10.7.1 (Firestore) via `gstatic.com` |
| Auth | Firebase Auth `signInAnonymously` (used for multiplayer & presentations) |
| Celebrations | canvas-confetti 1.9.3 |
| Main Font | Plus Jakarta Sans (Google Fonts) |
| UNO Font | Varela Round (Google Fonts) |
| Presentations Font | Outfit + DM Serif Display + Space Grotesk |
| Mobile Drag & Drop | mobile-drag-drop 2.3.0-rc.2 (used in reading.html) |
| Deployment | Vercel (static hosting) |
| Bundling | **No bundler** — a single, self-contained `.html` file per screen |

---

## 🔥 Firebase / Firestore

### Configuration

```js
const firebaseConfig = {
  apiKey: "TU_FIREBASE_API_KEY",
  authDomain: "proyecto-periplo.firebaseapp.com",
  projectId: "proyecto-periplo",
  storageBucket: "proyecto-periplo.firebasestorage.app",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};
const APP_ID  = 'periplo-app-v1';
const USER_ID = 'teacher_builder_001'; // usuario único (Teacher Hub sin auth multi-user)
Collection Paths

artifacts/periplo-app-v1/users/teacher_builder_001/folders        ← File system folders
artifacts/periplo-app-v1/users/teacher_builder_001/quizzes        ← Saved activities/games
artifacts/periplo-app-v1/public/data/rooms/{code}                 ← Multiplayer rooms (General/Party)
artifacts/periplo-app-v1/public/data/memorama_rooms/{code}        ← Memorama specialized rooms


quizzes Document Schema

{
  "title":      "string",
  "type":       "FLASHCARDS | ANAGRAM | CROSSWORD | MEMORAMA | CONNECT4 | READING | MATCH | LINGOMATCH | UNO | LISTENING | PHONECHAT | BOARDGAME | PRESENTATION | EMOJISPELL | LOTERIA | WORDCASCADE | WORDTOWER",
  "theme": {
    "accent":  "#hexcolor",
    "preview": "#hexcolor"
  },
  "tags": {
    "level":    "basic | advanced | pro | otro",
    "category": "grammar | verbs | nouns | adjectives | key_structs | otro",
    "topic":    "string (from TAXONOMY tree)"
  },
  "content":    {},
  "parentPath": "string ('' = root, 'Folder/Subfolder' for nested)",
  "createdAt":  "serverTimestamp()",
  "updatedAt":  "serverTimestamp()",
  "isDeleted":  "boolean (soft delete)"
}

⚠️ Critical DB Rules:

parentPath and tags are mandatory. Without them, the search engine and index.html file system will break.

No nested arrays allowed (arrays inside arrays in Firestore). Rounds and game boards must be modeled as indexed objects: roundsWords: { "0": [...], "1": [...] } instead of roundsWords: [[...], [...]].

The theme object containing hex colors is mandatory for all documents with dynamic visual rendering.

🏷️ Master Taxonomy (TAXONOMY)

A 3-level tree. It is hardcoded in every dashboard that saves to Firestore. If updated, it must be updated across all dashboards.
TAXONOMY
├── basic
│   ├── grammar      → [Modal Verbs, Present Simple, Present Continuous, Future (Going to), Otro]
│   ├── verbs        → [Pack 1: Daily Routine … Pack 9: Medical & Survival, Otro]
│   ├── nouns        → [Pack 1: Modern Nomad … Pack 5: Weekend Getaway, Otro]
│   ├── adjectives   → [Pack 1: Personality & Looks … Pack 5: Opinions & Taste, Otro]
│   ├── key_structs  → [WH Questions, FANBOYS & Correlative, Subordinating Conj., Preps x3, Possessive & Object Pron., Quantifiers, Frequency Adverbs, Otro]
│   └── otro         → [Otro]
├── advanced
│   ├── grammar      → [Past Simple, Second Conditional, Past Continuous, Past Future Intention, Otro]
│   ├── verbs        → [Irregular A-F … Regular /ɪd/ Sound, Otro]
│   ├── nouns        → [Pack 1: Success & Failure … Pack 5: Env. & Science, Otro]
│   ├── adjectives   → [Short/Long/Irregular Comparatives, Superlatives, Otro]
│   ├── key_structs  → [Used to, Comparative/Superlative Rules, Idioms, Possessive Nouns, Relative Clauses, Modals of Possibility, Passive Voice, Otro]
│   └── otro         → [Otro]
├── pro
│   ├── grammar      → [Present/Past Perfect, Perfect Continuous, Third Conditional, Mixed Conditionals, Otro]
│   ├── verbs        → [Phrasal Verbs 2, Idiomatic Expressions, Sayings & Proverbs, Advanced Collocations, Otro]
│   ├── nouns        → [Pack 1: Law & Politics … Pack 5: Formal & Academic, Otro]
│   ├── adjectives   → [Formal Register Adj., Nuance & Tone Adj., Otro]
│   ├── key_structs  → [Inversion, Cleft Sentences, Participle Clauses, Wish & Regret, Double Comparatives, Otro]
│   └── otro         → [Otro]
└── otro
    └── otro         → [Otro]

🏗️ The 2 Main Branches
Branch 1 — Teacher Hub (Dashboards / Builders)
Screen Pattern: Left Panel (Settings, Prompt, Taxonomy) + Right Panel (Interactive Preview).

Standard Flow:

index.html → click on game type → dashboard-X.html?folder=PATH
    ↓
Dashboard: configure AI (Google Gemini, API Key in localStorage: 'periplo_google_key')
    ↓
"IA Assist" → fetch to Gemini API → Structured JSON fills the form
    ↓
"Save" → Taxonomy Modal → addDoc/updateDoc in Firestore
    ↓
Redirect back to index.html?folder=PATH

AI Backend:

Provider: Google Gemini (Direct REST API, no SDK)

Endpoint: https://generativelanguage.googleapis.com/v1beta/{model}:generateContent?key={apiKey}

Preferred Model: gemini-2.5-flash > gemini-2.0-*

Cancellation: AbortController must always be implemented to prevent hanging requests.

Branch 2 — Student Portal (Renders / Games)
Standard Flow:

index.html → click on activity → render.html?id=DOCID
    ↓
getDoc(db, ...quizzes, id) → extracts { content, theme, tags }
    ↓
Theme Injection: makeWrapStyle(slide, theme) injects hex colors dynamically
    ↓
Student plays → immediate feedback → progress saved in LOCAL memory (RAM)

¡Qué onda, loco! Tienes toda la razón, perdóname por hacerte dar vueltas. Para Daniel tiene que ir todo en inglés, impecable y directo al grano.

Como soy un modelo de lenguaje de IA, no tengo una función directa para escupir un archivo .md que se descargue mágicamente en tu compu, pero lo que sí puedo hacer es darte TODO el documento en inglés en un solo bloque continuo. Así solo le das al botón de "Copiar" que sale en la esquina del bloque, lo pegas en tu bloc de notas o VS Code, lo guardas como ARCHITECTURE-MASTER-FASE2.md y listo.

Aquí lo tienes completito y traducido para Daniel:

Markdown
# Periplo — Architecture & Project Context (Phase 2 Master)

> **Production URL:** https://proyecto-periplo.vercel.app  
> **Repo:** https://github.com/theTeachermtz/proyecto-periplo  
> **Current Hub Version:** v20.3 (Search Enabled)

---

## 🎯 Purpose

A dynamic educational engine that transforms AI-generated JSON configurations into interactive learning experiences (Single & Multiplayer). The system is divided into two main branches: the **Teacher Hub** (creates content using AI → saves to Firestore) and the **Student Portal** (reads from Firestore → renders the games).

---

## ⚙️ Tech Stack

| Layer | Technology |
|------|-----------|
| UI Framework | React 18.2 via `esm.sh` + importmap |
| JSX Transform | Babel Standalone (`unpkg.com`) |
| Styling | Tailwind CSS CDN (`darkMode: 'class'`) |
| Iconography | Lucide React 0.263.1 via `esm.sh` |
| Database | Firebase v10.7.1 (Firestore) via `gstatic.com` |
| Auth | Firebase Auth `signInAnonymously` (used for multiplayer & presentations) |
| Celebrations | canvas-confetti 1.9.3 |
| Main Font | Plus Jakarta Sans (Google Fonts) |
| UNO Font | Varela Round (Google Fonts) |
| Presentations Font | Outfit + DM Serif Display + Space Grotesk |
| Mobile Drag & Drop | mobile-drag-drop 2.3.0-rc.2 (used in reading.html) |
| Deployment | Vercel (static hosting) |
| Bundling | **No bundler** — a single, self-contained `.html` file per screen |

---

## 🔥 Firebase / Firestore

### Configuration

```js
const firebaseConfig = {
  apiKey: "AIzaSyD4d-Kx1jQbgrKIdeOftv7BM729m7MIGPo",
  authDomain: "proyecto-periplo.firebaseapp.com",
  projectId: "proyecto-periplo",
  storageBucket: "proyecto-periplo.firebasestorage.app",
  messagingSenderId: "236795998392",
  appId: "1:236795998392:web:0da24b4f018611b55c844d"
};
const APP_ID  = 'periplo-app-v1';
const USER_ID = 'teacher_builder_001'; // Single user setup for now (Teacher Hub without multi-user auth)
Collection Paths
Plaintext
artifacts/periplo-app-v1/users/teacher_builder_001/folders        ← File system folders
artifacts/periplo-app-v1/users/teacher_builder_001/quizzes        ← Saved activities/games
artifacts/periplo-app-v1/public/data/rooms/{code}                 ← Multiplayer rooms (General/Party)
artifacts/periplo-app-v1/public/data/memorama_rooms/{code}        ← Memorama specialized rooms
quizzes Document Schema (Mandatory Contract)
JSON
{
  "title":      "string",
  "type":       "FLASHCARDS | ANAGRAM | CROSSWORD | MEMORAMA | CONNECT4 | READING | MATCH | LINGOMATCH | UNO | LISTENING | PHONECHAT | BOARDGAME | PRESENTATION | EMOJISPELL | LOTERIA | WORDCASCADE | WORDTOWER",
  "theme": {
    "accent":  "#hexcolor",
    "preview": "#hexcolor"
  },
  "tags": {
    "level":    "basic | advanced | pro | otro",
    "category": "grammar | verbs | nouns | adjectives | key_structs | otro",
    "topic":    "string (from TAXONOMY tree)"
  },
  "content":    {},
  "parentPath": "string ('' = root, 'Folder/Subfolder' for nested)",
  "createdAt":  "serverTimestamp()",
  "updatedAt":  "serverTimestamp()",
  "isDeleted":  "boolean (soft delete)"
}
⚠️ Critical DB Rules:

parentPath and tags are mandatory. Without them, the search engine and index.html file system will break.

No nested arrays allowed (arrays inside arrays in Firestore). Rounds and game boards must be modeled as indexed objects: roundsWords: { "0": [...], "1": [...] } instead of roundsWords: [[...], [...]].

The theme object containing hex colors is mandatory for all documents with dynamic visual rendering.

🏷️ Master Taxonomy (TAXONOMY)
A 3-level tree. It is hardcoded in every dashboard that saves to Firestore. If updated, it must be updated across all dashboards.

Plaintext
TAXONOMY
├── basic
│   ├── grammar      → [Modal Verbs, Present Simple, Present Continuous, Future (Going to), Otro]
│   ├── verbs        → [Pack 1: Daily Routine … Pack 9: Medical & Survival, Otro]
│   ├── nouns        → [Pack 1: Modern Nomad … Pack 5: Weekend Getaway, Otro]
│   ├── adjectives   → [Pack 1: Personality & Looks … Pack 5: Opinions & Taste, Otro]
│   ├── key_structs  → [WH Questions, FANBOYS & Correlative, Subordinating Conj., Preps x3, Possessive & Object Pron., Quantifiers, Frequency Adverbs, Otro]
│   └── otro         → [Otro]
├── advanced
│   ├── grammar      → [Past Simple, Second Conditional, Past Continuous, Past Future Intention, Otro]
│   ├── verbs        → [Irregular A-F … Regular /ɪd/ Sound, Otro]
│   ├── nouns        → [Pack 1: Success & Failure … Pack 5: Env. & Science, Otro]
│   ├── adjectives   → [Short/Long/Irregular Comparatives, Superlatives, Otro]
│   ├── key_structs  → [Used to, Comparative/Superlative Rules, Idioms, Possessive Nouns, Relative Clauses, Modals of Possibility, Passive Voice, Otro]
│   └── otro         → [Otro]
├── pro
│   ├── grammar      → [Present/Past Perfect, Perfect Continuous, Third Conditional, Mixed Conditionals, Otro]
│   ├── verbs        → [Phrasal Verbs 2, Idiomatic Expressions, Sayings & Proverbs, Advanced Collocations, Otro]
│   ├── nouns        → [Pack 1: Law & Politics … Pack 5: Formal & Academic, Otro]
│   ├── adjectives   → [Formal Register Adj., Nuance & Tone Adj., Otro]
│   ├── key_structs  → [Inversion, Cleft Sentences, Participle Clauses, Wish & Regret, Double Comparatives, Otro]
│   └── otro         → [Otro]
└── otro
    └── otro         → [Otro]
🏗️ The 2 Main Branches
Branch 1 — Teacher Hub (Dashboards / Builders)
Screen Pattern: Left Panel (Settings, Prompt, Taxonomy) + Right Panel (Interactive Preview).

Standard Flow:

Plaintext
index.html → click on game type → dashboard-X.html?folder=PATH
    ↓
Dashboard: configure AI (Google Gemini, API Key in localStorage: 'periplo_google_key')
    ↓
"IA Assist" → fetch to Gemini API → Structured JSON fills the form
    ↓
"Save" → Taxonomy Modal → addDoc/updateDoc in Firestore
    ↓
Redirect back to index.html?folder=PATH
AI Backend:

Provider: Google Gemini (Direct REST API, no SDK)

Endpoint: https://generativelanguage.googleapis.com/v1beta/{model}:generateContent?key={apiKey}

Preferred Model: gemini-2.5-flash > gemini-2.0-*

Cancellation: AbortController must always be implemented to prevent hanging requests.

Branch 2 — Student Portal (Renders / Games)
Standard Flow:

Plaintext
index.html → click on activity → render.html?id=DOCID
    ↓
getDoc(db, ...quizzes, id) → extracts { content, theme, tags }
    ↓
Theme Injection: makeWrapStyle(slide, theme) injects hex colors dynamically
    ↓
Student plays → immediate feedback → progress saved in LOCAL memory (RAM)
Student Portal Golden Rules:

1. Read-only Firestore (getDoc / onSnapshot). Renders MUST NEVER call addDoc or updateDoc on the source document. The only exception is multiplayer rooms writing to the rooms/ collection.

2. Persistence — No Reset (Saved States):
Minigame progress must be saved directly inside the slide/game object in memory (RAM), NOT in Firestore. This allows users to navigate back/forward or flip flashcards without resetting the React component's state.

// Mandatory pattern in all interactive minigames:
const [qIndex, setQIndex]         = useState(slide.savedQIndex || 0);
const [isFinished, setIsFinished] = useState(slide.isFinished || false);

// When advancing — mutate the RAM object + update state:
slide.savedQIndex = nextIdx;
setQIndex(nextIdx);

// Upon completion:
slide.isFinished = true;   // Survives re-renders, does NOT write to Firestore
onComplete();

Standardized saved state fields: savedQIndex, isFinished, savedUserAnswers, savedAvailable.

3. Theme Injection:
The render must extract colors from the theme object and apply them to the UI.

const FALLBACK_THEME = { bg: '#09090b', text: 'white', accent: '#3b82f6', subtle: 'rgba(255,255,255,0.08)' };

const resolveTheme = (docThemeObj) => ({
  bg:     docThemeObj?.preview || FALLBACK_THEME.bg,
  text:   'white',
  accent: docThemeObj?.accent  || FALLBACK_THEME.accent,
  subtle: 'rgba(255,255,255,0.08)'
});

4. Hover Trap in Safari iOS:
Never use :hover in global CSS. Always wrap hover effects inside @media (hover: hover) { }. Interactive buttons must include touch-action: manipulation.

🛠️ The 10 Dashboards — "Chameleonic" Design
What "Chameleonic" means: A single dashboard can generate documents with drastically different content structures depending on the subType/button the teacher selects. The main type of the document in Firestore (assigned via index.html) tells the system which render should consume it; the dashboard handles building the correct JSON structure for that specific render.

1. dashboard-presentations.html → Presentations Builder
Generates theory slides + integrated minigames.

Render: presentations.html

content Schema:

{
  "slides": [
    { "id": "uuid", "type": "theory", "layout": "cover", "heading": "...", "subtitle": "..." },
    { "id": "uuid", "type": "multipleChoice", "questions": [{ "question": "...", "options": ["A","B","C"], "correctIndex": 0 }] }
  ]
}

2. dashboard-fc.html → Flashcards Master
Generates vocabulary lists. A single deck feeds multiple renders.

Renders: flashcards.html, anagram.html, crossword.html, memorama.html, emojispell.html, loteria.html

Base content Schema:

{
  "cards": [
    { "wordEn": "escape", "wordEs": "escapar", "emojis": "🏃‍♂️💨", "exampleEn": "We need to escape." }
  ]
}

3. dashboard-match.html → Match Builder
Generates word pairs for speed/reflex games.

Renders: match.html (matchmadness), lingomatch.html (triple column).

4. dashboard-reading.html → Reading Builder AI
Generates stories with Drag & Drop token logic.

Render: reading.html

5. dashboard-pc.html → Phone Chat Builder
Generates simulated WhatsApp-style dialogues.

Renders: phonechat.html

content Schema:

{
  "messages": [
    { "id": "msg-1", "speaker": "bot", "text": "Hello!", "audioEn": "Hello!" },
    { "id": "msg-2", "speaker": "user", "expectedAnswer": "I want to book a room.", "hint": "Quiero reservar una habitación." }
  ]
}

6. dashboard-lm.html → LingoMatch Builder
Generates word pairs with dynamic audio support.

Render: lingomatch.html

7. dashboard-bg.html → Board Games Builder
Generates multi-format question banks for board games and trivia. Supports 10 question types (multipleChoice, dragDrop, unscramble, fillBlank, etc.).

Renders: connect4.html, periplo-party.html, jeopardy.html.

8. dashboard-listening.html → Listening Builder
Generates quizzes based on YouTube URLs + TOEFL-style questions.

Render: listening.html

9. dashboard-uno.html → UNO Builder AI
Generates 112-card thematic decks organized into 4 categories.

Render: uno.html

10. dashboard-wc.html → Word Control Builder
Generates word lists focused on arcade mechanics (falling words, building towers).

Renders: wordcascade.html, wordtower.html

content Schema:

{
  "words": [
    { "en": "knowledge", "es": "conocimiento" }
  ],
  "settings": {
    "speed": "normal | fast",
    "mode": "cascade | tower"
  }
}

🎲 Multiplayer Core
Generic Room Structure / Periplo-Party (rooms/{code})

{
  "code": "string",
  "gameState": "MENU | PLAYING | MINIGAME | GAME_OVER",
  "turn": "string (active player uid)",
  "players": { "s1": "uid_host", "j1": "uid", "j2": "uid", "j3": "uid", "j4": "uid" },
  "playerNames": { "uid_host": "Name", "uid_j1": "Name" },
  "positions": { "1": 0, "2": 0, "3": 0, "4": 0 }, 
  "scores": { "1": 0, "2": 0, "3": 0, "4": 0 }, 
  "activeMinigame": null 
}

Memorama Rooms (memorama_rooms/{code})

{
  "roomId": "string",
  "gameState": "MENU | PLAYING | ROUND_TRANSITION | GAME_OVER",
  "players": { "s1": "uid_host", "j1": "uid", "j2": "uid", "j3": "uid", "j4": "uid" },
  "playerNames": { "uid_host": "Name" },
  "roundsWords": { "0": [{"wordEn": "...", "wordEs": "..."}], "1": [...] },
  "deck": [],
  "flippedIndices": [],
  "matchedUniqueIds": [],
  "scores": { "1": 0, "2": 0, "3": 0, "4": 0 }
}

⚠️ roundsWords MUST be an object with string numeric keys ("0", "1"...). Do not use nested arrays.

⚠️ Final Gotchas
Mandatory parentPath & tags: Without them, the document becomes invisible in index.html.

Saved States in Minigames: Save progress in the local object (e.g., slide.savedQIndex), never in Firestore.

UNO is a special case: It uses the Varela Round font, and the body requires position: fixed; inset: 0; overflow: hidden.

Gemini API Key in localStorage: Key is periplo_google_key. Never save this to Firestore.
