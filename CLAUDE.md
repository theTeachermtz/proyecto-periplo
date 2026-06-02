# Periplo — Master Context

> **Para la IA que lee esto:** Eres el asistente de Israel, el fundador de Periplo. Este documento es tu contexto permanente. Léelo completo al inicio de cada sesión. Todo lo que Israel te pida — código, planes de clase, workflows, brainstorm — vive dentro de este universo. Responde siempre en **español** a menos que Israel escriba en inglés. Antes de escribir a cualquier archivo: confirma que el contenido fue aprobado por Israel. Nunca inventes juegos que no existan en la tabla de juegos disponibles.

---

## El ecosistema Periplo

Periplo es una plataforma de idiomas en línea. Todo lo que existe — juegos, planes, cursos, talleres — es Periplo. Tiene **tres ramas activas** que se construyen en paralelo:

| Rama | Qué es | Idioma enseñado | Estado |
|---|---|---|---|
| **Curso de Inglés** | Clases en vivo 60 min, grupos de 4 alumnos + teacher | Inglés | Activo — currículo documentado |
| **Curso de Español** | Clases en vivo, misma arquitectura que inglés | Español | En construcción — alimenta Holy Guac |
| **Holy Guacamole** | Spanish Club semanal (1 vez/semana) | Español | Activo — talleres temáticos |

**Relación entre ramas:** El Curso de Español y Holy Guacamole se construyen juntos al mismo tiempo. El Curso de Español genera el contenido académico (vocab, gramática, lecturas); Holy Guacamole es la aplicación práctica semanal, más ligera y temática, que consume ese mismo contenido. No son lo mismo pero son interdependientes.

---

## Tipos de trabajo que Israel puede pedirte

- **Código nuevo** — crear un juego HTML/JS o dashboard desde cero
- **Modificar código existente** — bugs, features, rediseño visual, nuevos parámetros
- **Lesson plans** — planes semanales completos o días individuales con el pipeline de 4 agentes
- **Cursos completos** — diseñar módulos, semanas, secuenciación de gramática/vocab
- **Workshops / talleres** — sesiones específicas como los de Holy Guacamole (con slides, actividades, vocab)
- **Ordenar ideas** — Israel llega con una idea sin estructura y quieres ayuda para articularla

---

## Directorios clave

| Ruta | Contenido |
|---|---|
| `C:\Users\Astra\Documents\GitHub\proyecto-periplo\` | Repo principal — todos los juegos .html |
| `C:\Users\Astra\Documents\lesson plans\DAY2DAY.md` | Planes semanales completos (Lunes–Sábado) |
| `C:\Users\Astra\Documents\lesson plans\periplo_reading_listening_plan.md` | Lecturas y listenings por semana |
| `C:\Users\Astra\Documents\lesson plans\Horarios - Hoja 1.csv` | Estructura del currículo completo |
| `C:\Users\Astra\Documents\lesson plans\agent1.md` – `agent4.md` | Instrucciones del pipeline de 4 agentes |
| `C:\Users\Astra\Documents\Holy Guac\` | Materiales de Holy Guacamole |

---

## Rama 1 — Curso de Inglés

### Formato de clase

- **Duración:** 60 minutos exactos (00:00 → 60:00)
- **Grupo:** 4 alumnos + 1 teacher
- **Estructura estándar (Lun–Jue):**
  - Warm-up: 00:00–08:00 (pitch) + 08:00–18:00 (vocab game)
  - Core 1: 18:00–40:00
  - Core 2: 40:00–55:00
  - Wrap-up: 55:00–60:00
- **Viernes y Sábado:** 00:00–12:00 (small talk), 12:00–18:00 (vocab), 18:00–40:00 (Core 1), 40:00–55:00 (Core 2), 55:00–60:00 (Wrap-up)

### Tipos de clase por día

| Día | Tipo |
|---|---|
| Lunes | Vocab + Reading |
| Martes | Grammar + Vocab |
| Miércoles | Reading + Grammar |
| Jueves | Grammar + Vocab + Listening |
| Viernes | Conversation / Arena |
| Sábado | Conversation / Arena |

### Reglas de Warm-up

- Pitch (`presentations.html`) ≤ 8 min — siempre primero
- Seguido de vocab game (anagram, emojispell, memorama, wordcascade, weakestlink, flashcards)
- **Viernes y Sábado:** NO pitch. Warm-up = small talk genuino 12 min (teacher hace conversación real sobre semana/planes)
- El warm-up nunca se desarrolla más allá de pitch + vocab game

### Reglas de Wrap-up

- **Siempre** 55:00–60:00
- **Siempre** teacher feedback específico por alumno
- **Nunca** es un juego
- **Nunca** se salta

### Reglas de Reading

- Lecturas **solo en Lunes y Miércoles** — nunca en Martes (Grammar+Vocab)
- 2 lecturas van a clase, 1–2 van a la biblioteca asíncrona del alumno
- El listening de Jueves usa `listening.html` con loop: Contexto → 1.0x → Debrief → 0.75x

### Reglas del slot de Vocab

El bloque Vocab (08:00–18:00) debe cubrir las tres capas — nunca solo el Verbs Pack:
1. **VP (Verbs Pack)** — emojispell, anagram, wordcascade
2. **NP (Nouns Pack)** — memorama, weakestlink, flashcards
3. **Key Structures** — drill oral o mini-jeopardy de las estructuras de la semana

---

## Juegos disponibles (ambas ramas)

**Regla de oro:** Si está en esta tabla, se puede y se debe usar en planes. Los marcados con ⚙️ tienen build pendiente — el teacher los ejecuta oralmente hasta que el digital esté listo. ⚙️ es un recordatorio de construcción, nunca un bloqueo de uso.

| Juego | Dashboard | Tipo | Estado |
|---|---|---|---|
| `presentations.html` | dashboard-presentations.html | Pitch / grammar visual | ✅ |
| `reading.html` | dashboard-reading.html | Lectura con fill-in + WH Questions | ✅ |
| `listening.html` | dashboard-listening.html | Audio con loop 1.0x / 0.75x | ✅ |
| `anagram.html` | dashboard-fc.html | Vocab — deletreo | ✅ |
| `memorama.html` | dashboard-fc.html | Vocab — asociación | ✅ |
| `emojispell.html` | dashboard-fc.html | Vocab — emojis como pista | ✅ |
| `flashcards.html` | dashboard-fc.html | Vocab — reconocimiento visual | ✅ |
| `wordcascade.html` | dashboard-wc.html | Vocab — cascada cronometrada | ✅ |
| `wordbuildings.html` | dashboard-wc.html | Vocab — construcción de palabras | ✅ |
| `connect4.html` | dashboard-bg.html | Grammar + vocab bajo presión | ✅ |
| `periplo-party.html` | dashboard-bg.html | Mini-retos variados, cierre | ✅ |
| `lingomatch.html` | dashboard-lm.html | Grammar estructurado | ✅ |
| `uno.html` | dashboard-uno.html | Vocab/grammar mecánica UNO (máx 25 min, hard stop) | ✅ |
| `neverever.html` | dashboard-ne.html | Conversación / revelación personal | ✅ |
| `talktime.html` | dashboard-tt.html | Conversación guiada / debate | ✅ |
| `loteria.html` | dashboard-lot.html | Lotería Mexicana bilingüe — baraja + tabla 4×4 | ✅ |
| `whatif.html` | dashboard-whatif.html | Condicionales — causa/consecuencia visual | ✅ |
| `citymap.html` | citymap.html | Navegación con preposiciones | ⚙️ |
| `jeopardy.html` | dashboard-bg.html | Grammar quiz competitivo | ✅ |
| `weakestlink.html` | dashboard-weakestlink.html | Vocab/grammar eliminatorio | ⚙️ |
| `familyfeud.html` | dashboard-ff.html | Respuestas grupales / encuestas | ⚙️ |
| `songpipeline.html` | dashboard-songpipeline.html | Canción con fill-in | ⚙️ |
| `conoceme.html` | dashboard-cm.html | Predicción de compañero + justificación oral | ⚙️ |
| `elespectro.html` | dashboard-espectro.html | Barra de extremos opuestos — posicionamiento y argumentación | ⚙️ |
| `quememesoy.html` | dashboard-qms.html | Caption de meme con constraint de grammar | ⚙️ |
| `4verdades.html` | dashboard-4v.html | 4 verdades 1 mentira con constraint de grammar | ⚙️ |
| `lastword.html` | dashboard-lw.html | Timer aleatorio + categoría — último en decir una palabra gana | ⚙️ |
| `afterwords.html` | dashboard-aw.html | Cadena de oraciones — última palabra de A es primera de B | ⚙️ |
| `antifillerchallenge.html` | dashboard-afc.html | Habla 30 seg sin fillers — scoreboard en pantalla | ⚙️ |
| `speeddate.html` | dashboard-sd.html | 4 rondas de conversación con timer + constraint de grammar | ⚙️ |
| `welcomecommittee.html` | dashboard-wlc.html | 2 turistas vs 2 locales — navegación con preposiciones | ⚙️ |
| `contrasena.html` | dashboard-cnt.html | Grid de vocab — spy da pista que conecta palabras del grid | ⚙️ |
| `adivina-quien.html` | dashboard-aq.html | Guess Who con preguntas en Past Simple + adjetivos | ⚙️ |
| `personallyincorrecto.html` | dashboard-pi.html | Elegir tarjeta que representa reacción de un compañero | ⚙️ |
| `applestoapples.html` | dashboard-ata.html | AP card + NP hand — judge elige mejor colocación | ⚙️ |
| `eldepas.html` | dashboard-depas.html | Tableros de depa — fuerza comparativos/superlativos | ⚙️ |
| `smallworld.html` | dashboard-sw.html | Perfiles con rutinas — descubrir conexiones ocultas | ⚙️ |

### Juegos baneados (nunca en clase)

`match.html` · `crossword.html` · `phonechat.html` · `voicereply.html` · `audiotranslator.html`

Los de phonechat / voicereply / audiotranslator son async (práctica del alumno fuera de clase).

---

## Currículo — Curso de Inglés

### Niveles y módulos

```
BASIC:    B1 Foundation (Mes 1) → B2 Structures (Mes 2) → B Mix (Mes 3)
ADVANCED: A1 Foundation (Mes 4) → A2 Adv. Structures (Mes 5) → A Mix (Mes 6)
PRO:      P1 Structures (Mes 7) → P2 Structures (Mes 8) → P Mix (Mes 9)
```

### Estado actual (escrito en DAY2DAY.md)

| Módulo | Semanas completadas |
|---|---|
| B1 Foundation | Sem 1 (Modal Verbs) |
| B2 Structures | Sem 1–4 completas |
| B Mix | Sem 1–4 completas |
| A1 Foundation | Sem 1–4 completas |
| A2 Advanced Structures | Sem 1–4 completas |

### Gramática por módulo

**B1 Foundation**
- Sem 1: Modal Verbs (Can, Should, Must) · VP1 · NP1
- Sem 2: Present Simple · VP2 · NP2 · Adj Pack 1
- Sem 3: Present Continuous · VP3 · NP3 · Adj Pack 2
- Sem 4: Past Simple · VP4 · NP4 · Adj Pack 3

**B2 Structures**
- Sem 1: Prepositions · VP5 · NP5 · Adj Pack 4
- Sem 2: Object Pronouns · VP6 · NP6 · Adj Pack 5
- Sem 3: Quantifiers + There is/are + Fillers · VP7 · NP7
- Sem 4: Possessive Pronouns + B2 Integration · VP8 · NP8

**B Mix** (integración sin gramática nueva)
- Sem 1: Small Talk & First Impressions · Retrieval VP1–VP2 / NP1–NP2
- Sem 2: Tu Vida Digital en Inglés · Retrieval VP3–VP4 / NP3–NP4
- Sem 3: Salud y Bienestar · VP9 / NP9
- Sem 4: Tu Yo Profesional · Retrieval VP5–VP8 / NP5–NP8

**A1 Foundation**
- Sem 1: Past Simple · Regular Verbs (-ed: /t/ /d/ /ɪd/) · NP1 (Success & Failure) · AP1
- Sem 2: Second Conditional · ALL Irregular Verbs · NP2 (Truth & Lies) · AP2 → Evaluación micro-ciclo
- Sem 3: Past Continuous · Phrasal Verbs from readings · NP3 (Media & Entertainment) · AP3
- Sem 4: Was/Were Going To · Phrasal Verbs from readings · NP4 (Regrets & Turning Points) · AP4

**A2 Advanced Structures**
- Sem 1: Used To · Phrasal Verbs · NP5 (Attraction & Identity) · AP5
- Sem 2: Comparatives & Superlatives · Phrasal Verbs · NP6 (Ambition & Competition) · AP6
- Sem 3: Relative Clauses + Modals Presente · Phrasal Verbs · NP7 (Mystery & Crime) · AP7
- Sem 4: Present Perfect Continuous · Phrasal Verbs · NP8 (Systems & Society) · AP8

**A Mix** (integración — idioms como temas)
- Sem 1: Pressure & Performance · Idioms cluster · Retrieval NP1–NP8 / AP1–AP8
- Sem 2: Success & Momentum · Idioms cluster
- Sem 3: Relationships & Conflict · Idioms cluster
- Sem 4: Risk & Decision · Idioms cluster

**P1 Structures**
- Sem 1: Present Perfect + Past Perfect · Phrasal Verbs Pro · NP1 Pro (Law & Politics)
- Sem 2: Third Conditional + Mixed Conditionals · Idiomatic Expressions Pro · NP2 Pro (Finance)
- Sem 3: Passive Voice · Advanced Collocations · NP3 Pro (Science & Discovery)
- Sem 4: Past Conditionals (Should/Could/Would have) · NP4 Pro (Uncountable & Abstract)

**P2 Structures**
- Sem 1: Reported Speech + Inversion & Cleft Sentences · NP5 Pro (Formal & Academic)
- Sem 2: Gerunds & Infinitives + Perfect Continuous · NP6 Pro (Collective Nouns)
- Sem 3: Semana temática — Sobrevivir la Entrevista de Trabajo (sin gramática nueva)
- Sem 4: Semana temática — Psicología & Comportamiento Humano
- P Mix: 4 semanas temáticas sin gramática dedicada

### Vocab packs

| Pack | Tema |
|---|---|
| VP1 | Daily Routine & Work |
| VP2 | Home & Communication |
| VP3 | Travel & Adventure |
| VP4 | Feelings & Reactions |
| VP5 | Action & Strategy |
| VP6 | Social & Relationships |
| VP7 | Social & Science |
| VP8 | Corporate & Economy |
| VP9 | Hospital & Health |
| NP1 | Modern Nomad |
| NP2 | Home & Daily Life |
| NP3 | Travel & Places |
| NP4 | Emotions & Mind |
| NP5 | Weekend Getaway |
| NP6 | People & Society |
| NP7 | Society & Lab |
| NP8 | Money & Power |
| NP9 | Body & Health |

### Reglas especiales por nivel

**A1 / A2:** Verb pack lógica: Sem 1 = regulares (-ed), Sem 2 = todos los irregulares + micro-ciclo, Sem 3+ = phrasal verbs curados de lecturas. Flujo: NP (tema) → lecturas → phrasal verb pack. AP (Adjective Packs) se cargan con NP cada semana.

**A Mix:** Sin gramática nueva — retrieval A1+A2. Idiomatic expressions como temas semanales.

**B2:** El pitch del Lunes = super resumen comparativo de las 4 categorías gramaticales de la semana.

**B Mix:** El pitch = tabla de referencia de todo lo que ya saben. No se enseña gramática nueva — se corrige en silencio. El pitch no es clase, es un mapa de consulta.

### Hilos conductores activos

| Hilo | Nivel/Sem | Personajes | Descripción |
|---|---|---|---|
| **The Drama** | B2 Sem 2+ | Ana, Marco, Sofia, Lee | Serie de situaciones relacionales |
| **The Estate** | B2 Sem 4 | Ana, Marco, Sofia, Lee | Empresa que se disuelve — activos divididos |

---

## Rama 2 — Curso de Español

La rama de español enseña **español** a estudiantes de inglés. Arquitectura idéntica a la rama inglés. Se construye en paralelo con Holy Guacamole — el curso genera el contenido académico, Holy Guac lo aplica.

### Firebase y archivos

| Elemento | Rama Inglés | Rama Español |
|---|---|---|
| UID | `teacher_builder_001` | `teacher_anita_001` |
| Hub | `index.html` | `index-es.html` |
| Ruta Firestore | `.../users/teacher_builder_001/quizzes` | `.../users/teacher_anita_001/quizzes` |

**Dashboards propios:**
- `dashboard-fc-es.html` — Word Banks para español
- `dashboard-bg-es.html` — Board Games para español
- `dashboard-reading-es.html` — Reading para español

**Renderers con fallback UID = teacher_anita_001:**
`flashcards-es.html` · `crossword-es.html` · `anagram-es.html` · `memorama-es.html` · `emojispell-es.html`

**Renderers compartidos (no necesitan -es porque toman uid del URL):**
`loteria.html` · `dashboard-lot.html` (sirven ambas ramas vía `?uid=`)

### Regla de los renderers -es

El único motivo de existir de los archivos `-es` es que el fallback del UID apunte a `teacher_anita_001`. Cuando el hub lanza un juego con `?uid=teacher_anita_001`, los renderers originales también funcionan. Los `-es` son necesarios solo para acceso directo sin parámetro uid.

---

## Rama 3 — Holy Guacamole Spanish Club

Holy Guacamole es un club de español, **una vez por semana**, de formato más ligero y temático que el curso formal. No es un curso secuencial — es una experiencia de práctica cultural y lingüística semanal.

### Características

- **Frecuencia:** 1 vez/semana (sábados)
- **Tono:** Divertido, cultural, experiencial — no una clase tradicional
- **Formato:** Taller temático con actividades variadas (no 60 min estrictos de clase)
- **Contenido:** Consume vocab y temas del Curso de Español, pero no depende de haberlos visto antes
- **Archivo base de materiales:** `C:\Users\Astra\Documents\Holy Guac\`

### Tipos de sesión

Los talleres de Holy Guacamole pueden ser:
- Temáticos culturales (comida, tradiciones, México, jerga)
- Fonéticos / pronunciación (acentuación, reglas como "Crack the Code")
- Basados en juegos (Lotería, actividades interactivas)
- Conversacionales con contexto (roleplay en taquería, mercado, etc.)

### Relación con el Curso de Español

El Curso de Español diseña el contenido académico (gramática, vocab packs, lecturas). Holy Guacamole toma ese contenido y lo aplica en formato experiencial. Se construyen al mismo tiempo — una semana de curso puede generar 1-2 sesiones de Holy Guac.

---

## Pipeline de planeación (4 agentes)

Cuando Israel pida generar un plan semanal del **Curso de Inglés**, activar la skill `periplo-lesson-planner`.

- **Agente 1** — Plan base con juegos existentes en Periplo
- **Agente 2** — Optimiza mecánicas de los juegos del Agente 1
- **Agente 3** — Pedagoga creativa, cold start (solo recibe parámetros de entrada, NO el output de A1 y A2)
- **Agente 4** — Director: integra los 3 planes, toma decisiones, genera el plan final en formato DAY2DAY

Output del Agente 4 → Israel aprueba/corrige → escribir a `DAY2DAY.md`

Para **Holy Guacamole** o el **Curso de Español**, no hay pipeline formal todavía — trabajar directamente con Israel.

---

## Arquitectura técnica (para trabajo de código)

- **Stack:** HTML + JavaScript + React (vía Babel standalone) + Firebase Firestore — sin build step
- **CSS:** Tailwind CDN via `<script src="https://cdn.tailwindcss.com">`
- **Firebase config:** `<script src="periplo-config.js"></script>` setea `window.PERIPLO_FIREBASE_CONFIG`
- **Firestore path:** `` `artifacts/periplo-app-v1/users/${TEACHER_UID}/quizzes` ``
- **URL param pattern:** `new URLSearchParams(window.location.search).get('uid') || 'teacher_builder_001'`
- **Deploy:** Vercel — `https://proyecto-periplo.vercel.app/`
- **Modo teacher:** `?mode=teacher` en URL del renderer
- **Link de alumno:** incluye `?student=true` en URL

### Patrón estándar de un renderer

```javascript
const app = initializeApp(window.PERIPLO_FIREBASE_CONFIG);
const db = getFirestore(app);
const urlParams = new URLSearchParams(window.location.search);
const TEACHER_UID = urlParams.get('uid') || 'teacher_builder_001';
const QUIZ_ID = urlParams.get('id');
```

### Patrón estándar de un dashboard (editor)

```javascript
const TEACHER_UID = urlParams.get('uid') || 'teacher_builder_001';
const QUIZZES_PATH = `artifacts/periplo-app-v1/users/${TEACHER_UID}/quizzes`;
const BACK_URL = (urlParams.get('uid') || '').includes('anita') ? 'index-es.html' : 'index.html';
```

---

## Tipos de dashboard y patrón de construcción

### Patrón renderer → dashboard (regla de oro)

Todo juego sigue este orden de construcción, siempre:

1. **Renderer** (`juego.html`) — primero. Demo funcional que acepta `?id=` param y carga de Firestore (o fallback JSON). Es lo que el alumno y el teacher usan en clase.
2. **Dashboard** (`dashboard-juego.html`) — después. Editor que construye el question bank / word bank que el renderer consume. Se accede desde el hub (`index.html`) en `+ Actividad`.

Nunca construir el dashboard antes del renderer. El renderer define el formato de datos en Firestore — el dashboard lo respeta. El dashboard es solo el constructor del contenido.

### Tipos de dashboard (granularidad del currículo)

| Tipo | Ejemplo | Qué inyecta al prompt | Chips individuales |
|---|---|---|---|
| **A — Tema general** | `dashboard-bg.html`, `dashboard-uno.html` | Etiquetas: "Modal Verbs", "VP3" — sin palabras exactas | No |
| **B — Curriculum detallado** | `dashboard-match.html`, `dashboard-stp.html` | Listado exacto de palabras del plan de estudio | Sí — cada palabra excluible individualmente |
| **C — Sin currículo** | `dashboard-reading.html`, `dashboard-listening.html` | Solo texto libre / tema | N/A |

### Comportamiento estándar de un dashboard Tipo B

- **Dos canastas independientes:** Grammar (selector de nivel propio) + Verbs/Vocab (selector de nivel propio). Cambiar el nivel de una canasta no afecta a la otra ni borra su selección.
- **Multi-select en ambas canastas:** Se pueden combinar varios grammar packs (ej: Third Conditional + Mixed Conditionals) y varios verb packs (ej: Irregular A-F + Irregular G-M) en la misma generación.
- **Word pool con chips excluibles:** Al seleccionar un pack, sus palabras aparecen como chips individuales (emerald = grammar, blue = verbs). Clic en un chip → se excluye del prompt (visualización con line-through). Útil para quitar palabras específicas antes de generar.
- **Las palabras del plan de estudio vienen de los CSV** en `lesson plans/` (Verb Mastery, Noun Mastery, etc.) y se mantienen sincronizadas — no inventar listas a mano.

---

## Módulo compartido `periplo-ai.js` (IA Assistant)

**TODA la lógica del "IA Assistant" (API key de Gemini) vive en un solo archivo: `periplo-ai.js`.** Igual que `periplo-config.js` y `periplo-taxonomy.js`, se carga con `<script src>` y expone `window.PERIPLO_AI`. Los 19 dashboards lo consumen — **un cambio se hace una sola vez aquí, no archivo por archivo.**

### Qué expone `window.PERIPLO_AI`

- **Key (localStorage, llave única `periplo_google_key`):** `loadKey()`, `saveKey(k)`, `clearKey()`.
- **Modelos:** `fetchModels(apiKey)` → array de modelos; `pickPreferredModel(models)` → 2.5-flash › 2.0 › primero.
- **Generación:** `callGemini({ apiKey, model, prompt, signal?, json?, temperature? })` → devuelve el TEXTO crudo. Con `json:true` añade `responseMimeType: application/json`.
- **Parseo:** `extractJSON(rawText)` → objeto (regex `{...}` + JSON.parse). Para respuestas tipo **array** `[...]`, parsear local (extractJSON solo maneja objetos).
- **UI:** `createApiKeyBar(React)` → componente `<ApiKeyBar>` (factory, sin JSX, iconos SVG inline — no depende de lucide).

### Cómo se usa en un dashboard

```javascript
const AI = window.PERIPLO_AI;
const ApiKeyBar = AI.createApiKeyBar(React);
// init:    const k = AI.loadKey(); if (k) setApiKey(k);
// fetch:   const m = await AI.fetchModels(apiKey); setSelectedModel(AI.pickPreferredModel(m));
// genera:  const raw = await AI.callGemini({ apiKey, model: selectedModel, prompt }); const data = AI.extractJSON(raw);
```

```jsx
<ApiKeyBar variant="modal" accentBtn="bg-orange-500 hover:bg-orange-400 text-black"
    apiKey={apiKey} setApiKey={setApiKey}
    models={availableModels} selectedModel={selectedModel} setSelectedModel={setSelectedModel}
    isLoading={isLoadingModels} onFetch={fetchModels} onClear={() => setAvailableModels([])} />
```

### Reglas del componente `<ApiKeyBar>`

| Prop | Para qué |
|---|---|
| `variant` | `'modal'` (caja oscura), `'compact'` (header inline), `'sidebar'` (claro/oscuro) |
| `accentBtn` | string de clases Tailwind COMPLETAS del botón lupita (no concatenar — Tailwind CDN no las generaría) |
| `showSelector` | `false` solo para casos de modelo fijo (multimodal). Por defecto `true`: lupita + dropdown |

- **Estándar:** TODOS los dashboards llevan lupita + selector de modelo + botón de basura. El botón de basura aparece solo cuando hay key.
- **Excepciones (no migrar la generación, solo la key):** `dashboard-whatif.html` y las imágenes de `dashboard-presentations*.html` usan llamadas **multimodales** (`inline_data` / `imagen-4.0 :predict`) que NO pasan por `callGemini`. Ahí el ApiKeyBar va con `showSelector={false}` o se conserva la llamada local.
- **La key se teclea, nunca se hardcodea.** `periplo-ai.js` no contiene ninguna key. La de Firebase (`AIza...MIGPo`) sí va hardcodeada en cada dashboard (es pública por diseño) — no confundir con la de Gemini.

---

## Flujo de trabajo con Git (Israel + Anita)

Israel y Anita trabajan el mismo repo en paralelo. **Anita suele editar archivos directo en GitHub web** (sobre todo los renderers `-es` como `flashcards-es.html`), mientras Israel trabaja en local. Esto causa que el local de Israel quede desactualizado y aparezcan conflictos al commitear/sincronizar.

**Regla para evitar conflictos:** antes de empezar a trabajar en cualquier archivo en local, hacer `git pull` primero para traer lo que Anita haya subido por web.

**Si ya hay un conflicto al intentar commitear:**
1. `git fetch origin` y comparar las versiones — a menudo los cambios de ambos son funcionalmente idénticos (solo difieren en espacios en blanco).
2. Confirmar con Israel con cuál versión quedarse antes de resolver.
3. Resolver tomando la versión acordada (`git checkout --ours/--theirs <archivo>`), cerrar el merge con un commit de merge (**no destructivo** — conserva el historial de ambos) y hacer push.
4. Nunca hacer force-push para "limpiar" el historial sin que Israel lo pida — destruiría los commits de Anita.

---

## API Key de Google / Gemini (IA Assistant de los dashboards)

Los dashboards (`dashboard-fc-es.html`, `dashboard-fc.html`, etc.) tienen un **"IA Assistant"** que genera vocabulario con la **API de Gemini**. La key se teclea a mano en el campo de password (la lupita) — **NO está hardcodeada en el código y nunca debe commitearse.**

### ⚠️ La cuenta de la API NO es la de trabajo

| Para qué | Cuenta de Google |
|---|---|
| **API de Gemini + facturación** | **`tuzo.arsi@gmail.com`** ← aquí se pagó la API |
| Todo lo demás (trabajo, etc.) | `israel.martinez.silva1904@gmail.com` |

La key de Gemini vive en el proyecto de Google Cloud **"Default Gemini Project"** (`gen-lang-client-0505684142`), que pertenece a **`tuzo.arsi`**. Si en Cloud Console sale "necesitas acceso adicional" o el botón de crear key bloqueado → estás en la cuenta equivocada; cambiar a `tuzo.arsi`.

### La key correcta y cómo usarla

- **Key activa:** `Periplo_Daniel_Final` (empieza con `AIzaSyBVREwbDco-...`).
- **Restricción:** HTTP referrers → solo funciona desde **`proyecto-periplo.vercel.app/*`**.
- **Por eso:** la lupita solo jala si el dashboard se abre en **`https://proyecto-periplo.vercel.app/`** — NO en localhost ni en preview (esos no mandan el referer de Vercel y dan **403**).

### Diagnóstico de errores comunes

- **"Error conectando con Google" / "Error al buscar modelos":** casi siempre es que la key pegada está **muerta** (borrada/rotada) o es una vieja. Verificar cuál key está activa en Cloud Console (cuenta `tuzo.arsi`) y volver a pegar la buena.
- **403 `API_KEY_HTTP_REFERRER_BLOCKED`:** la app no se abrió desde `proyecto-periplo.vercel.app`, o falta ese dominio en los Website restrictions de la key.
- **NO confundir** esta key de Gemini con la **API key de Firebase** (`AIza...MIGPo`), que es pública por diseño, va en todos los renderers y no es un secreto.

### Para el script de imágenes

`scripts/update-images.js` lee la key de la variable de entorno `GOOGLE_API_KEY` (nunca hardcodeada):
```
$env:GOOGLE_API_KEY="la_key"; node update-images.js   # PowerShell
```

---

## Banner estándar Periplo (renderers)

Todos los renderers (tanto inglés como `-es`) usan el mismo banner sticky en la parte superior. **No inventar headers propios.**

### Estructura JSX

```jsx
<header className="sticky top-0 z-20 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-6 py-3"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
    {/* LEFT: badge P + divider + título + subtítulo */}
    <div className="flex items-center gap-4">
        <button onClick={goBack} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-base shadow-lg shadow-indigo-600/20">P</div>
        </button>
        <div className="hidden sm:block w-px h-8 bg-zinc-800 mx-1"/>
        <div>
            <h1 className="text-lg font-black text-white leading-none tracking-tight">{título del juego}</h1>
            <p className="text-[10px] font-bold uppercase tracking-widest mt-1" style={{ color: accentColor }}>Modo: {nombre}</p>
        </div>
    </div>
    {/* RIGHT: botones específicos del juego */}
    <div className="flex items-center gap-2">
        ...
    </div>
</header>
```

### Reglas

| Elemento | Valor fijo |
|---|---|
| Background | `bg-zinc-950` — siempre oscuro, no cambia con dark mode toggle |
| Badge | `bg-indigo-600 rounded-xl w-10 h-10` con letra **P** en blanco, `font-black` |
| Divider | `w-px h-8 bg-zinc-800` |
| Título | `text-lg font-black text-white tracking-tight` |
| Subtítulo | `text-[10px] font-bold uppercase tracking-widest` — color varía por juego |
| Font del banner | `Plus Jakarta Sans` (importar junto con el font de contenido) |
| Sticky | `sticky top-0 z-20` |

### Colores de subtítulo por tipo de juego

| Tipo | Color |
|---|---|
| Vocab / Flashcards (inglés) | `text-sky-500` |
| Grammar / Anagram | `text-rose-500` |
| Cultural / Recuérdalo | `text-orange-400` |
| Listening | `text-emerald-400` |
| Reading | `text-amber-400` |
| Conversación | `text-violet-400` |

---

## Script de imágenes — Cultural Cards + Flashcards

`scripts/update-images.js` — Node.js script que busca imágenes reales en Wikipedia/Commons y las guarda comprimidas en Firebase. Sirve para **dos cosas**: las cultural cards de `recuerdalo` y las imágenes de los mazos de **flashcards** (sustituyen a los emojis para dar el look premium).

### Cómo correrlo

```bash
cd scripts
node update-images.js                              # todos los mazos sin imágenes
node update-images.js "Irregulares A-F"            # solo mazos cuyo título contenga ese texto
node update-images.js "Irregulares A-F" --force    # re-procesa aunque ya tengan imagen (reemplaza)
```

- **Filtro por nombre** (arg opcional): coincidencia parcial, sin importar mayúsculas. Siempre **ignora la papelera** (`isDeleted`).
- **`--force`**: re-procesa tarjetas que ya tienen imagen (para reemplazar fotos viejas/feas con mejor fuente).
- Comando rápido: **`/update-images <nombre>`** — la IA lo corre en background y reporta. Israel no toca la terminal.

### Fuentes de imágenes (en orden)

1. **Pexels** (fotos stock profesionales, la mejor) — requiere `PEXELS_API_KEY` en el entorno. Ya guardada permanente en el Windows de Israel (`setx`). Saca key gratis en pexels.com/api.
2. **Wikimedia Commons** (keyword) · 3. **Wikipedia** (por título) · 4. **Google CSE** (si hay `GOOGLE_API_KEY`).
- Las flashcards con campo **`imageQuery`** (frase visual generada por el IA Assist, ej. "begin" → "runners starting race") buscan ESA frase en Pexels/Commons — evita que verbos caigan en artículos equivocados (begin → un pueblo francés). El dashboard genera `imageQuery` automáticamente.

### Qué hace

1. Recorre **ambos UIDs** (`teacher_builder_001` + `teacher_anita_001`) y los tipos `CULTURAL_CARDS`, `WORDPACK` (flashcards inglés) y `WORD_BANK` (flashcards español). Ignora `isDeleted: true`.
2. **Cultural cards:** búsqueda optimizada comida mexicana (Wikipedia ES → EN → Commons → Google CSE) usando `WIKI_ALIASES` y re-fetch siempre.
3. **Flashcards:** usa `imageQuery` (si existe) → Pexels → Commons → Google. Sin `imageQuery`, cae al término en inglés. **Skip si ya tiene `imageData`** (salvo `--force`).
4. Comprime a JPEG 320px (~8-20KB por imagen) para respetar el límite de 1MB de Firestore.
5. Guarda en Firebase. Los renderers (`flashcards.html`, `flashcards-es.html`, `recuerdalo`) muestran `imageData` si existe y el emoji como fallback (componente `<CardVisual>`).

### Editar/generar imágenes a mano (dashboard-fc)

Cada tarjeta en `dashboard-fc.html` tiene en la columna izquierda 3 acciones:
- **✨ IA** — genera una ilustración con la API de Imagen (`imagen-4.0 :predict`) usando la oración de ejemplo (`exampleEn`) como prompt. Si ya hay imagen, actúa como "refresh" (regenera solo esa). Usa la key del IA Assist (la del navegador). **Cuesta cuota de Google** (cuenta tuzo.arsi) — úsalo solo en las pocas que la búsqueda automática no acierte.
- **Cambiar/Subir** — sube tu propia foto.
- **Quitar** — vuelve al emoji.

TODAS las imágenes (subidas o generadas) se comprimen en el navegador (canvas, JPEG 320px ~60%) ANTES de guardar, para respetar el límite de 1MB de Firestore. ⚠️ Nota: `dashboard-presentations*.html` NO comprime (por eso "5 imágenes no guarda"); flashcards sí.

### Modo verbos de flashcards (`?mode=verbs`)

`flashcards.html?id=...&mode=verbs` activa un modo especial para advanced: **frente = presente** (`wordEn`), **reverso = pasado + participio** (campos `past`/`participle` si existen, o se parsea `wordEs` separando por `/`, ej. `"went / gone"`), ejemplo en inglés. Los minijuegos se desactivan en este modo. Es solo de la rama inglés.

### Para agregar nuevas palabras al diccionario

Editar `WIKI_ALIASES` en `scripts/update-images.js` — agregar `'palabra': 'Titulo_Wikipedia'`.

### Dependencias

`firebase` + `sharp` — ya instaladas en `scripts/node_modules/`. Si se borran: `cd scripts && npm install`.
