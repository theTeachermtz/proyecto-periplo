

| 🚀 PERIPLO CONTENT AUTOMATOR DOC 1 — THE BRIEFING Architecture · Firebase · CSV · Streamlit  |  Version 1.0 |
| :---: |

| 🎯  SECTION 1 — OVERVIEW |
| :---- |

## **What is this project?**

**Periplo Content Automator** is a Python bot that replaces the teacher's manual work in the dashboards. Instead of opening dashboard-fc.html o dashboard-reading.html to create each activity by hand, the bot will read a CSV file, call the Gemini API, and save the resulting JSON directly to Firebase. Activities will appear **automatically** en index.html and in the student portal.

| ⚡  The core principle The bot does NOT interact with the web UI. The bot replicates exactly what the dashboard does internally: calls the AI with the same prompt, receives the JSON, and saves it to the same Firebase path. The renderers (flashcards.html, reading.html, etc.) will not know the difference. |
| :---- |

## **The 3 Platform Layers**

**Layer A — Management:**  index.html (Teacher Hub) \+ student\_portal.html. These are the final consumers of the JSON in Firebase.

**Layer B — Dashboards:**  The dashboard-\*.html files. The bot replaces them entirely. They are the source of truth for prompts and JSON schemas.

**Layer C — Renderers:**  The games (flashcards.html, reading.html, etc.). They read the JSON from Firebase and convert it into a playable activity. The bot never touches these files.

| 📋  Mapa completo de Dashboards → Renderers Each Layer B dashboard feeds one or more Layer C renderers. The table below shows the complete mapping. |
| :---- |

| Dashboard | Generates data for... | type in Firebase | Folder in index.html |
| ----- | ----- | ----- | ----- |
| dashboard-presentations.html | presentations.html | PRESENTATION | 📽️ Presentations |
| dashboard-reading.html | reading.html | READING | 📖 Reading |
| dashboard-fc.html | flashcards.html, anagram.html, memorama.html, crossword.html, emojispell.html | WORD\_BANK / WORDPACK | 📚 Word Bank |
| dashboard-bg.html | connect4.html, periplo-party.html | BOARDGAME\_BANK | 🎲 Board Games |
| dashboard-match.html | match.html | MATCH | 🎯 Match |
| dashboard-lm.html | lingomatch.html | LINGOMATCH | 🔗 LingoMatch |
| dashboard-pc.html | phonechat.html / voicereply.html / audiotranslator.html | PHONECHAT | 📱 Phone Chat |
| dashboard-wc.html | wordcascade.html, wordbuildings.html | DUAL\_WORD | ☄️ Dual Word |
| dashboard-listening.html | listening.html | LISTENING | 🎧 Listening |
| dashboard-uno.html | uno.html | UNO | 🃏 UNO |
| dashboard-ne.html | neverever.html | NEVEREVER | 🤫 Never Ever |

| 🔥  SECTION 2 — FIREBASE: THE ONE WRITE PATH THAT MATTERS |
| :---- |

## **Firebase Configuration**

The project uses Firebase Firestore. These are the connection values extracted from the source code:

| // firebaseConfig — PRODUCTION VALUES |
| :---- |
| const firebaseConfig \= { |
|   apiKey:            "AIzaSyD4d-Kx1jQbgrKIdeOftv7BM729m7MIGPo", |
|   authDomain:        "proyecto-periplo.firebaseapp.com", |
|   projectId:         "proyecto-periplo", |
|   storageBucket:     "proyecto-periplo.firebasestorage.app", |
|   messagingSenderId: "236795998392", |
|   appId:             "1:236795998392:web:0da24b4f018611b55c844d" |
| }; |
|  |
| // CRITICAL CONSTANTS — never change |
| const FS\_APP\_ID    \= "periplo-app-v1"; |
| const TEACHER\_UID  \= "teacher\_builder\_001"; |

## **The Exact Write Path**

The bot must ALWAYS write to this Firestore path. No other path exists. If the document ends up in any other collection, **it will NOT appear in index.html.**

| // SINGLE WRITE PATH — Python (firebase-admin) |
| :---- |
| COLLECTION\_PATH \= "artifacts/periplo-app-v1/users/teacher\_builder\_001/quizzes" |
|  |
| // Create new document (auto-generated ID): |
| db.collection(COLLECTION\_PATH).add(payload) |
|  |
| // If a specific ID is needed: |
| db.collection(COLLECTION\_PATH).document(custom\_id).set(payload) |
|  |
| // JavaScript equivalent (for reference): |
| // collection(db, "artifacts", "periplo-app-v1", "users", "teacher\_builder\_001", "quizzes") |

| 🚨  CRITICAL RULE — The "type" field is the router The document's type field is what index.html uses to determine which folder to display the activity in, which renderer to link to, and which emoji/color to paint it with. An incorrect or missing type sends the document to "Uncategorized" and may break the game link. See valid types table in Section 4\. |
| :---- |

## **Base Document Structure in Firestore**

Every document saved by the bot must have at minimum these fields. The content field varies by type (see Doc 2):

| { |
| :---- |
|   "title":          "Present Simple: Daily Life",   // string — viene del CSV |
|   "type":           "READING",                      // string — ver tabla de tipos |
|   "content":        { ... },                        // object — payload de la IA (ver Doc 2\) |
|   "tags": { |
|     "levels":       \["B1"\],                         // array  — ver tabla de mapeo |
|     "categories":   \["grammar"\],                    // array  — viene del CSV |
|     "topics":       \["Present Simple"\]              // array  — viene del CSV |
|   }, |
|   "studentVisible": false,                          // boolean — viene del CSV |
|   "isDeleted":      false,                          // boolean — siempre false al crear |
|   "createdAt":      \<serverTimestamp()\>             // timestamp — Firebase server timestamp |
| } |

### **Base structure field reference**

| Campo | Tipo | Description |
| ----- | ----- | ----- |
| title | *string* | Título de la actividad. Viene de la columna title del CSV. |
| type | *string* | Tipo estandarizado. Ver tabla de tipos válidos. Ej: "WORD\_BANK", "READING". |
| content | *object* | El payload JSON completo generado por la IA. Estructura varía por tipo. Ver Doc 2\. |
| tags.levels | *array* | \["B1"\] o \["A1", "A2"\]. Mapeo: basic → B1/B2, advanced → A1/A2. CRÍTICO para que index.html clasifique la tarjeta. |
| tags.categories | *array* | \["grammar"\] Viene de la columna category del CSV. |
| tags.topics | *array* | \["Present Simple"\] Viene de topic\_tag del CSV. |
| studentVisible | *boolean* | true si student\_visible \= true en el CSV. Controla si aparece en el portal del alumno. |
| isDeleted | *boolean* | Siempre false al crear. El bot nunca crea documentos con isDeleted: true. |
| createdAt | *timestamp* | Timestamp de creación en Firebase. El bot debe enviarlo como serverTimestamp(). |

### **CSV level → tags.levels mapping in Firebase**

index.html classifies cards into tabs (Basic / Advanced / Pro) by reading the tags.levels array. Values must start with B, A, or P for the filter to work:

| Valor en CSV (level) | tags.levels en Firebase | Tab in index.html |
| ----- | ----- | ----- |
| basic | \["B1"\] o \["B2"\] | Basic tab (blue) — sky-400 text |
| intermediate | \["B2"\] o \["A1"\] | Advanced tab (yellow) — amber-400 text |
| advanced | \["A1"\] o \["A2"\] | Advanced tab (yellow) — amber-400 text |
| pro | \["P1"\] o \["P2"\] | Pro tab (violet) — violet-400 text |

| 👁️  SECTION 3 — STUDENT PORTAL VISIBILITY |
| :---- |

## **How studentVisible works**

El portal del alumno (student\_portal.html) queries Firestore with the filter where("studentVisible", "==", true). Only documents with that field set to **true** appear to the student.

**Bot rule:** Always save with studentVisible: false unless the CSV has student\_visible: true. Never publish automatically without explicit teacher confirmation in the CSV.

## **publishedModes — Word Bank (FLASHCARD) only**

Cuando el tipo es WORD\_BANK, the portal does not show a single game — it asks the teacher which sub-games to publish. If the bot wants to publish to the student, it must include the publishedModes:

| // Publish all Word Bank sub-games: |
| :---- |
| "publishedModes": \["flashcards", "crossword", "anagram", "memorama", "emojispell"\] |
|  |
| // Publish flashcards only: |
| "publishedModes": \["flashcards"\] |
|  |
| // If studentVisible is false, publishedModes can be omitted or \[\] |

| 📊  SECTION 4 — THE MASTER CSV |
| :---- |

## **The "Chameleon" CSV Philosophy**

The CSV has a **core of universal columns** (required for every row) plus **extra parameter columns** (param\_\*) that are only used based on the dashboard\_type. Empty columns for a given type are silently ignored. One row \= one activity in Firebase.

| 🗑️  The "week" field was removed The week number is not needed because the bot executes CSV rows top-to-bottom sequentially. The order field (integer) already defines the sequence within the same CSV. |
| :---- |

## **CSV Columns — Full Specification**

| Columna | Tipo | Description |
| ----- | ----- | ----- |
| **📌 CORE — Required for every row** |  |  |
| order | *integer* | Execution order top to bottom. e.g. 1, 2, 3... |
| dashboard\_type | *enum (ver tabla)* | Activity type code to generate. See Valid Types table below. |
| ai\_prompt | *string* | Full instruction for the AI. Replaces what you currently write by hand in the dashboard. |
| title | *string* | Visible title of the activity in index.html. |
| **🏷️ TAXONOMY — For classification in index.html** |  |  |
| level | *enum* | basic | intermediate | advanced. Defines which tab it appears in on the index. |
| category | *string* | Free thematic category. e.g. grammar, vocabulary, conversation, listening. |
| topic\_tag | *string* | Specific topic label. e.g. "Present Simple", "Phrasal Verbs". Shown as a badge on the card. |
| **⚙️ PARAMETERS — Type-specific (leave empty if not applicable)** |  |  |
| param\_count | *integer* | Number of items to generate. FLASHCARD → number of cards. READING → number of questions. PHONECHAT → number of turns. |
| param\_pack | *string* | Sub-pack or mode name. FLASHCARD → "Pack 1: Verbs". BOARDGAME → "connect4" | "periplo-party". PHONECHAT → "typing" | "voice" | "unscramble". |
| param\_mode | *string* | Generation mode if supported. PRESENTATION → "theory" | "minigames" | "ALL". |
| param\_context | *string* | Situational context for the AI. Equivalent to the Context field in the old CSV. e.g. "A formal meeting about sales results". |
| param\_grammar | *string* | Grammar structure to enforce. PHONECHAT and PRESENTATION only. e.g. "Past Simple \+ used to". |
| **👁️ VISIBILITY** |  |  |
| student\_visible | *boolean* | true | false. If true, the activity will appear in the student portal when saved. Default: false. |

## **Valid dashboard\_type Values**

| dashboard\_type (CSV) | type in Firebase | param\_pack required? | Notes |
| ----- | ----- | ----- | ----- |
| PRESENTATION | PRESENTATION | No | param\_mode: theory | minigames | ALL |
| READING | READING | No | param\_count \= nº de preguntas (recomendado: 5\) |
| FLASHCARD | WORD\_BANK | **Sí** | "Pack 1: Verbs", "Pack 2: Nouns", etc. Un documento por pack. |
| MATCH | MATCH | No | AI generates matching pairs from ai\_prompt |
| LINGOMATCH | LINGOMATCH | No |  |
| PHONECHAT | PHONECHAT | **Sí** | param\_pack: "typing" | "voice" | "unscramble" |
| LISTENING | LISTENING | No |  |
| WORDCASCADE | DUAL\_WORD | No | Feeds wordcascade.html and wordbuildings.html |
| UNO | UNO | No |  |
| BOARDGAME | BOARDGAME\_BANK | **Sí** | param\_pack: "connect4" | "periplo-party" |
| NEVEREVER | NEVEREVER | No |  |

## **CSV Example — Complete Basic Week**

This is what a typical Basic level week looks like. Empty cells are left blank in the real CSV:

| order,dashboard\_type,ai\_prompt,title,level,category,topic\_tag,param\_count,param\_pack,param\_mode,param\_context,param\_grammar,student\_visible |
| :---- |
| 1,PRESENTATION,"Teach Present Simple for affirmative, negative and question forms",Present Simple: Core Rules,basic,grammar,Present Simple,,,ALL,,Present Simple,false |
| 2,READING,"A young woman describes her morning routine in London",Morning in London,basic,grammar,Present Simple,5,,,,Present Simple,false |
| 3,READING,"A professional chef explains his daily kitchen habits",A Chefs Daily Habits,basic,grammar,Present Simple,5,,,,,false |
| 4,FLASHCARD,"Generate the 20 most common daily routine verbs",Daily Routine Verbs,basic,vocabulary,Routine Verbs,20,Pack 1: Verbs,,,,,false |
| 5,FLASHCARD,"Generate the 15 most common time expressions",Time Expressions,basic,vocabulary,Time Expressions,15,Pack 2: Time Expressions,,,,,false |
| 6,MATCH,"Create 10 matching pairs: Present Simple verb \+ its Spanish translation",Verb Match,basic,grammar,Present Simple,,,,,,,false |
| 7,PHONECHAT,"Two friends at a coffee shop talking about morning routines",Morning Chat,basic,conversation,Present Simple,8,typing,,At a coffee shop,Present Simple,false |

| 📁  SECTION 5 — FOLDERS IN INDEX.HTML |
| :---- |

## **How index.html organizes activity cards**

The index.html (Teacher Hub v22) organizes all Firestore documents into visual folders. The folder assignment is **automatic** based on the type field of the document. The bot does not need to specify a folder — it only needs to use the correct type.

**Additional condition:** For a card to appear in the correct folder and **NOT in "Uncategorized",** the document MUST have the tags.levels field with at least one value (e.g. \["B1"\]). Without this field, the document goes to the "Uncategorized" folder even if the type is correct.

| Emoji \+ Name | accepted types | When it appears here |
| ----- | ----- | ----- |
| **📚 Word Bank** | WORD\_BANK, WORDPACK, FLASHCARDS, CROSSWORD, ANAGRAM, MEMORAMA, EMOJISPELL | When the bot saves a FLASHCARD. The same doc feeds all sub-games. |
| **🎲 Board Games** | BOARDGAME\_BANK, CONNECT4 | When param\_pack is "connect4" or "periplo-party". |
| **📽️ Presentations** | PRESENTATION | Direct PRESENTATION type. |
| **📖 Reading** | READING | Direct READING type. |
| **🎧 Listening** | LISTENING | Direct LISTENING type. |
| **☄️ Dual Word** | DUAL\_WORD, WordCascade | WORDCASCADE type from CSV. Feeds wordcascade and wordbuildings. |
| **📱 Phone Chat** | PHONECHAT | param\_pack: "typing". The gameMode in content determines the renderer. |
| **🔊 Voice Replay** | VOICEREPLY | Internally PHONECHAT with content.gameMode: "voice". |
| **🌐 Audio Translator** | AUDIOTRANSLATOR | Internally PHONECHAT with content.gameMode: "unscramble". |
| **🎯 Match** | MATCH | Direct MATCH type. |
| **🔗 LingoMatch** | LINGOMATCH | Direct LINGOMATCH type. |
| **🃏 UNO** | UNO | Direct UNO type. |
| **🤫 Never Ever** | NEVEREVER | Direct NEVEREVER type. |

| 🎯  Special case: PHONECHAT → three different folders The PHONECHAT type in Firebase can end up in 3 different folders depending on content.gameMode: "typing" → Phone Chat, "voice" → Voice Replay, "unscramble" → Audio Translator. The bot must set content.gameMode correctly based on the CSV's param\_pack. |
| :---- |

| 🖥️  SECTION 6 — STREAMLIT INTERFACE |
| :---- |

## **Design Principle**

**Absolute minimalism.** The Streamlit UI has one purpose: load a CSV and run the bot. All the "magic" happens in the Python backend. The teacher does not need to see code, complex logs, or advanced settings. The interface should be simple enough to use without instructions.

## **Interface Elements**

| UI Element | Description |
| ----- | ----- |
| **API Key Input** | Text field for the Gemini API Key. Stored in st.session\_state. Required before running. |
| **File Uploader** | File selector. Accepts .csv files only. Loads the master CSV. |
| **Preview Table** | Expandable table showing the first 5 rows of the loaded CSV for visual validation. |
| **Run Button** | "🚀 Run Automation" — Triggers the full pipeline. Only enabled if API key and CSV are loaded. |
| **Progress Bar** | Per-row progress bar. Shows "Processing row X of Y: \[title\]". |
| **Log Box** | Scrollable text area printing real-time logs. Format: ✅ OK | ❌ ERROR | ⏭️ SKIP. |
| **Results Summary** | On completion: metric cards with successful, failed, and skipped row counts. |
| **Download Errors CSV** | Button that appears only if there were errors. Downloads a CSV of failed rows for re-running. |

## **Streamlit User Flow**

1. The teacher opens the Streamlit app in the browser.

2. Enters their Gemini API Key in the text field.

3. Drags or selects their master CSV file.

4. Reviews the preview of the first 5 rows to confirm the CSV is correct.

5. Clicks "🚀 Run Automation".

6. Watches the progress bar and real-time logs.

7. On completion, sees the summary: X successful, Y failed, Z skipped.

8. If there are errors, downloads the error CSV, fixes them, and re-runs.

## **Retry and Error Logic**

The bot must handle the following scenarios without stopping the full pipeline:

* API error (timeout, rate limit): Retry the same row up to 3 times with exponential backoff (2s, 4s, 8s).

* Invalid JSON from AI: Retry once with a slightly different prompt. If it fails again, mark the row as ERROR and continue.

* Firebase error: Mark the row as ERROR and continue. Never block the pipeline.

* Missing CSV column: Skip the row with ⏭️ SKIP and a clear message about which column is missing.

| \# Recommended real-time log format: |
| :---- |
| ✅ \[1/7\] "Present Simple: Core Rules" (PRESENTATION) — guardado en Firebase | ID: abc123 |
| ✅ \[2/7\] "Morning in London" (READING) — guardado en Firebase | ID: def456 |
| ❌ \[3/7\] "A Chefs Daily Habits" — ERROR: API timeout después de 3 intentos |
| ✅ \[4/7\] "Daily Routine Verbs" (WORD\_BANK) — guardado en Firebase | ID: ghi789 |
| ⏭️ \[5/7\] Fila 5 — SKIP: columna "title" vacía |
| ✅ \[6/7\] "Verb Match" (MATCH) — guardado en Firebase | ID: jkl012 |
| ✅ \[7/7\] "Morning Chat" (PHONECHAT) — guardado en Firebase | ID: mno345 |
|  |
| ───────────────────────────────────── |
| RESUMEN: ✅ 5 exitosas  ❌ 1 error  ⏭️ 1 saltada |

| 🐍  SECTION 7 — PYTHON PIPELINE |
| :---- |

## **Recommended Modules**

* firebase-admin — Write to Firestore from Python.

* google-generativeai — Official Gemini API client.

* pandas — CSV reading and validation.

* streamlit — Minimalist web interface.

* tenacity — Retry handling with exponential backoff.

* python-dotenv — Secure API Key handling in development.

## **Main Pipeline Pseudocode**

| def run\_pipeline(csv\_path: str, api\_key: str): |
| :---- |
|     df \= pandas.read\_csv(csv\_path) |
|     validate\_columns(df)  \# Verificar que las columnas core existen |
|  |
|     for idx, row in df.iterrows(): |
|         try: |
|             \# 1\. Validar fila |
|             if not row\["dashboard\_type"\] or not row\["ai\_prompt"\]: |
|                 log(f"⏭️ \[{idx}\] SKIP — campos obligatorios vacíos") |
|                 continue |
|  |
|             \# 2\. Seleccionar handler según tipo |
|             handler \= get\_handler(row\["dashboard\_type"\]) |
|  |
|             \# 3\. Llamar a Gemini con el prompt del handler |
|             content \= handler.generate(row, api\_key)  \# Incluye retry logic |
|  |
|             \# 4\. Construir el payload de Firebase |
|             payload \= build\_payload(row, content) |
|  |
|             \# 5\. Guardar en Firestore |
|             doc\_ref \= db.collection(COLLECTION\_PATH).add(payload) |
|             log(f"✅ \[{idx}\] "{row\['title'\]}" — ID: {doc\_ref\[1\].id}") |
|  |
|         except Exception as e: |
|             log(f"❌ \[{idx}\] "{row\['title'\]}" — ERROR: {e}") |
|             errors.append(row) |
|  |
|     return generate\_summary(errors) |

## **Handler Architecture by Type**

Each dashboard\_type has a Python handler with 2 responsibilities: (1) build the correct prompt for Gemini, and (2) parse and validate the JSON response. See Doc 2 for the exact prompts and JSON schemas per handler.

| class BaseHandler: |
| :---- |
|     def build\_prompt(self, row: dict) \-\> str: ... |
|     def parse\_response(self, raw\_json: str) \-\> dict: ... |
|     def generate(self, row: dict, api\_key: str) \-\> dict: |
|         prompt \= self.build\_prompt(row) |
|         raw \= call\_gemini\_with\_retry(prompt, api\_key) |
|         return self.parse\_response(raw) |
|  |
| \# Un handler por tipo: |
| class PresentationHandler(BaseHandler): ... |
| class ReadingHandler(BaseHandler): ... |
| class FlashcardHandler(BaseHandler): ... |
| class MatchHandler(BaseHandler): ... |
| class PhoneChatHandler(BaseHandler): ... |
| \# ... etc |
|  |
| HANDLERS \= { |
|     "PRESENTATION": PresentationHandler(), |
|     "READING":      ReadingHandler(), |
|     "FLASHCARD":    FlashcardHandler(), |
|     "MATCH":        MatchHandler(), |
|     "PHONECHAT":    PhoneChatHandler(), |
|     \# ... |
| } |

| Doc 1 of 3 — The Briefing  |  Periplo Content Automator Continues in: Doc 2 — Dashboard Schemas  &  Doc 3 — Renderer Schemas |
| :---: |

