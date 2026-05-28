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
