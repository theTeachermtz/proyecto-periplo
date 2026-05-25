# Periplo — Project Context

Periplo es una plataforma de inglés en línea. Las clases son en vivo, 60 minutos exactos, 4 alumnos + 1 teacher. Los juegos son apps HTML/JS que viven en este repositorio y se proyectan en pantalla compartida.

---

## Directorios clave

| Ruta | Contenido |
|---|---|
| `C:\Users\Astra\Documents\proyecto-periplo\` | Repo principal — todos los juegos .html |
| `C:\Users\Astra\Documents\lesson plans\DAY2DAY.md` | Planes semanales completos (Lunes–Sábado) |
| `C:\Users\Astra\Documents\lesson plans\periplo_reading_listening_plan.md` | Lecturas y listenings por semana |
| `C:\Users\Astra\Documents\lesson plans\Horarios - Hoja 1.csv` | Estructura del currículo completo |
| `C:\Users\Astra\Documents\lesson plans\agent1.md` – `agent4.md` | Instrucciones del pipeline de 4 agentes |

---

## Formato de clase

- **Duración:** 60 minutos exactos (00:00 → 60:00)
- **Grupo:** 4 alumnos + 1 teacher
- **Estructura estándar (Lun–Jue):**
  - Warm-up: 00:00–08:00 (pitch) + 08:00–18:00 (vocab game)
  - Core 1: 18:00–40:00
  - Core 2: 40:00–55:00
  - Wrap-up: 55:00–60:00
- **Viernes y Sábado:** 00:00–12:00 (small talk), 12:00–18:00 (vocab), 18:00–40:00 (Core 1), 40:00–55:00 (Core 2), 55:00–60:00 (Wrap-up)

---

## Tipos de clase por día

| Día | Tipo |
|---|---|
| Lunes | Vocab + Reading |
| Martes | Grammar + Vocab |
| Miércoles | Reading + Grammar |
| Jueves | Grammar + Vocab + Listening |
| Viernes | Conversation / Arena |
| Sábado | Conversation / Arena |

---

## Reglas de Warm-up

- Pitch (`presentations.html`) ≤ 8 min — siempre primero
- Seguido de vocab game (anagram, emojispell, memorama, wordcascade, weakestlink, flashcards)
- **Viernes y Sábado:** NO pitch. Warm-up = small talk genuino 12 min (teacher hace conversación real sobre semana/planes)
- El warm-up nunca se desarrolla más allá de pitch + vocab game

## Reglas de Wrap-up

- **Siempre** 55:00–60:00
- **Siempre** teacher feedback específico por alumno
- **Nunca** es un juego
- **Nunca** se salta

---

## Reglas de Reading

- Lecturas **solo en Lunes y Miércoles** — nunca en Martes (Grammar+Vocab)
- 2 lecturas van a clase, 1–2 van a la biblioteca asíncrona del alumno
- El listening de Jueves usa `listening.html` con loop: Contexto → 1.0x → Debrief → 0.75x

---

## Reglas del slot de Vocab

El bloque Vocab (08:00–18:00) debe cubrir las tres capas — nunca solo el Verbs Pack:
1. **VP (Verbs Pack)** — emojispell, anagram, wordcascade
2. **NP (Nouns Pack)** — memorama, weakestlink, flashcards
3. **Key Structures** — drill oral o mini-jeopardy de las estructuras de la semana

---

## Juegos BANEADOS (nunca usar en clase)

`match.html` · `crossword.html` · `phonechat.html` · `voicereply.html` · `audiotranslator.html`

Los de `phonechat` / `voicereply` / `audiotranslator` son async (práctica del alumno fuera de clase).

---

## Juegos disponibles para clase

**Regla de oro: si está en esta tabla, se puede y se debe usar en planes de clase.** Los marcados con ⚙️ tienen build pendiente — el teacher los ejecuta oralmente o con los recursos disponibles hasta que el digital esté listo. La nota ⚙️ es un recordatorio de construcción, nunca un bloqueo de uso.

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
| `citymap.html` | citymap.html | Navegación con preposiciones | ⚙️ |
| `jeopardy.html` | dashboard-jeopardy.html | Grammar quiz competitivo | ⚙️ |
| `weakestlink.html` | dashboard-weakestlink.html | Vocab/grammar eliminatorio | ⚙️ |
| `familyfeud.html` | dashboard-ff.html | Respuestas grupales / encuestas | ⚙️ |
| `songpipeline.html` | dashboard-songpipeline.html | Canción con fill-in | ⚙️ |
| `conoceme.html` | dashboard-cm.html | Predicción de compañero + justificación oral (Do You Know Me?) | ⚙️ |
| `elespectro.html` | dashboard-espectro.html | Barra de extremos opuestos — posicionamiento y argumentación (Wavelength) | ⚙️ |
| `quememesoy.html` | dashboard-qms.html | Caption de meme con constraint de grammar (What Do You Meme?) | ⚙️ |
| `4verdades.html` | dashboard-4v.html | 4 verdades 1 mentira con constraint de grammar (Two Truths One Lie) | ⚙️ |
| `lastword.html` | dashboard-lw.html | Timer aleatorio + categoría — último en decir una palabra gana (Last Word) | ⚙️ |
| `afterwords.html` | dashboard-aw.html | Cadena de oraciones — última palabra de A es primera de B (After Words) | ⚙️ |
| `antifillerchallenge.html` | dashboard-afc.html | Habla 30 seg sin fillers en español — scoreboard en pantalla | ⚙️ |
| `speeddate.html` | dashboard-sd.html | 4 rondas de conversación con timer + constraint de grammar (Speed Dating) | ⚙️ |
| `welcomecommittee.html` | dashboard-wlc.html | 2 turistas vs 2 locales — navegación con preposiciones y estructuras B | ⚙️ |
| `contrasena.html` | dashboard-cnt.html | Grid de vocab — spy da pista de una palabra que conecta 2–3 del grid (Codenames) | ⚙️ |
| `loteria.html` | dashboard-lot.html | Lotería (port desde React pendiente) | ⚙️ |
| `adivina-quien.html` | dashboard-aq.html | Guess Who con preguntas en Past Simple + adjetivos (port desde React pendiente) | ⚙️ |
| `personallyincorrecto.html` | dashboard-pi.html | Elegir tarjeta que representa reacción de un compañero + justificación oral (Personally Incorrect) | ⚙️ |
| `applestoapples.html` | dashboard-ata.html | AP card + NP hand — judge elige mejor colocación + argumentación (Apples to Apples) | ⚙️ |
| `whatif.html` | dashboard-whatif.html | Imágenes comic causa/consecuencia — alumnos escriben oración con conditional asignado al azar; teacher califica en tiempo real | ✅ |
| `eldepas.html` | dashboard-depas.html | Tableros de depa randomizados — cada cuarto tiene objetos con atributos distintos por jugador, fuerza comparativos/superlativos orgánicos al comparar entre compañeros | ⚙️ |
| `smallworld.html` | dashboard-sw.html | Perfiles de personajes con rutinas (qué hacen, con quién, dónde, a qué hora) — alumnos descubren conexiones ocultas entre personajes haciendo preguntas; fuerza relative clauses y when/while naturales | ⚙️ |

---

## Niveles y módulos

```
BASIC:  B1 Foundation (Mes 1) → B2 Structures (Mes 2) → B Mix (Mes 3)
ADVANCED: A1 Foundation (Mes 4) → A2 Adv. Structures (Mes 5) → A Mix (Mes 6)
```

### Estado actual del currículo (escritos en DAY2DAY.md)

| Módulo | Semanas completadas |
|---|---|
| B1 Foundation | Sem 1 (Modal Verbs) |
| B2 Structures | Sem 1 (Prepositions) · Sem 2 (Object Pronouns) · Sem 3 (Quantifiers + Fillers) · Sem 4 (Possessive Pronouns + B2 Integration) |
| B Mix | Sem 1 (Small Talk & First Impressions) · Sem 2 (Tu Vida Digital en Inglés) · Sem 3 (Salud y Bienestar) · Sem 4 (Tu Yo Profesional) |
| A1 Foundation | Sem 1 (Past Simple + Regular Verbs -ed) · Sem 2 (Second Conditional + Micro-ciclo) · Sem 3 (Past Continuous + Phrasal Verbs) · Sem 4 (Was/Were Going To + Phrasal Verbs) |
| A2 Advanced Structures | Sem 1 (Used To · NP5 Attraction & Identity · AP5 · Phrasal Verbs from readings) · Sem 2 (Comparatives & Superlatives · NP6 Ambition & Competition · AP6 · Phrasal Verbs from readings) · Sem 3 (Relative Clauses + Modals Presente · NP7 Crime & Justice · AP7 · Phrasal Verbs from readings) · Sem 4 (Present Perfect Continuous · NP8 Systems & Society · AP8 · Phrasal Verbs from readings) |

---

## Gramática por módulo

### B1 Foundation
- Sem 1: Modal Verbs (Can, Should, Must) · VP1 · NP1
- Sem 2: Present Simple · VP2 · NP2 · Adj Pack 1
- Sem 3: Present Continuous · VP3 · NP3 · Adj Pack 2
- Sem 4: Past Simple · VP4 · NP4 · Adj Pack 3

### B2 Structures
- Sem 1: Prepositions (Place / Time / Movement / Other) · VP5 · NP5 · Adj Pack 4
- Sem 2: Object Pronouns · VP6 · NP6 · Adj Pack 5
- Sem 3: Quantifiers + There is/are + Fillers · VP7 · NP7
- Sem 4: Possessive Pronouns + B2 Integration · VP8 · NP8

### B Mix (integración sin gramática nueva)
- Sem 1: Small Talk & First Impressions · Retrieval VP1–VP2 / NP1–NP2
- Sem 2: Tu Vida Digital en Inglés · Retrieval VP3–VP4 / NP3–NP4
- Sem 3: Salud y Bienestar · VP9 / NP9 (Hospital & Health / Body & Health) ← único pack nuevo del módulo
- Sem 4: Tu Yo Profesional · Retrieval VP5–VP8 / NP5–NP8

### A1 Foundation
- Sem 1: Past Simple · Regular Verbs (-ed pronunciation /t/ /d/ /ɪd/) · NP1 (Success & Failure) · AP1
- Sem 2: Second Conditional · ALL Irregular Verbs (async: grupos A–F / G–L / M–R / S–Z) · NP2 (Truth & Lies) · AP2 → **Evaluación micro-ciclo Sem 1+2**
- Sem 3: Past Continuous · Phrasal Verbs from readings · NP3 (Media & Entertainment) · AP3
- Sem 4: Was/Were Going To · Phrasal Verbs from readings · NP4 (Regrets & Turning Points) · AP4

### A2 Advanced Structures
- Sem 1: Used To · Phrasal Verbs from readings · NP5 (Attraction & Identity) · AP5
- Sem 2: Comparatives & Superlatives · Phrasal Verbs from readings · NP6 (Ambition & Competition) · AP6
- Sem 3: Relative Clauses + Modals of Possibility (PRESENTE únicamente — might/could/may/must sin have+participio) · Phrasal Verbs from readings · NP7 (Mystery & Crime) · AP7
- Sem 4: Present Perfect Continuous (have/has been + V-ing — intro suave al auxiliar have y al participio been) · Phrasal Verbs from readings · NP8 (Systems & Society) · AP8

### P1 Structures (restructurado)
- Sem 1: Present Perfect + Past Perfect · Phrasal Verbs Pro · NP1 Pro (Law & Politics)
- Sem 2: Third Conditional + Mixed Conditionals · Idiomatic Expressions Pro · NP2 Pro (Finance & Economy)
- Sem 3: Passive Voice · Advanced Collocations · NP3 Pro (Science & Discovery)
- Sem 4: Past Conditionals (Should/Could/Would have + Mixed avanzado) · Advanced Collocations Pro · NP4 Pro (Uncountable & Abstract)

### P2 Structures (restructurado)
- Sem 1: Reported Speech + Inversion & Cleft Sentences · NP5 Pro (Formal & Academic)
- Sem 2: Gerunds & Infinitives + Perfect Continuous full (PPC + PaPC) · NP6 Pro (Collective Nouns)
- Sem 3: Sobrevivir la Entrevista de Trabajo — semana temática integral (sin gramática nueva; aplica todo P1+P2) · NP7 Pro (Job & Work Formal)
- Sem 4: Psicología & Comportamiento Humano — semana temática integral (sin gramática nueva; aplica todo P1+P2)
- P Mix: 4 semanas temáticas sin gramática dedicada · Sem 1 Vida & Hábitos · Sem 2 Trabajo & Decisiones · Sem 3 Historia, Ciencia & Dilemas Éticos · Sem 4 What If & Debates Locos

### A Mix (integración — idioms como temas)
- Sem 1: Pressure & Performance · Idioms cluster · Retrieval NP1–NP8 / AP1–AP8
- Sem 2: Success & Momentum · Idioms cluster · Retrieval NP1–NP8 / AP1–AP8
- Sem 3: Relationships & Conflict · Idioms cluster · Retrieval NP1–NP8 / AP1–AP8
- Sem 4: Risk & Decision · Idioms cluster · Retrieval NP1–NP8 / AP1–AP8

---

## Reglas especiales por nivel

### A1 / A2
- Verb pack lógica: Sem 1 = regulares (-ed), Sem 2 = todos los irregulares + evaluación micro-ciclo, Sem 3+ = phrasal verbs curados de las lecturas
- Flujo de vocab: Noun Pack (tema) → lecturas → phrasal verb pack
- AP (Adjective Packs) se cargan junto con NP cada semana — 10–15 adjetivos avanzados/temáticos
- Archivos de referencia: `advanced-vocab-packs.md` · `advanced-verb-packs.md`

### A Mix
- Sin gramática nueva — retrieval A1+A2
- Idiomatic expressions como temas semanales (4 clusters): Pressure & Performance · Success & Momentum · Relationships & Conflict · Risk & Decision
- Phrasal verbs siguen saliendo de las lecturas

### B2
- El pitch del Lunes es el super resumen comparativo de las 4 categorías gramaticales de la semana
- Viernes y Sábado: warm-up = small talk 12 min (NO pitch)

### B Mix
- El pitch = tabla de referencia de TODO lo que ya saben (las 5 estructuras B1+B2 + mención de packs VP1–VP8 / NP1–NP8 + "check tu portal")
- No se enseña gramática nueva — se corrige en silencio durante la clase
- El pitch no es clase — es un mapa de consulta
- Viernes y Sábado: no pitch, small talk 12 min

---

## Pipeline de planeación (4 agentes)

Cuando Israel pida generar un plan semanal, activar la skill `periplo-lesson-planner`.

- **Agente 1** — Plan base con juegos existentes en Periplo
- **Agente 2** — Optimiza mecánicas de los juegos del Agente 1
- **Agente 3** — Pedagoga creativa, cold start (solo recibe los parámetros de entrada, NO el output de A1 y A2)
- **Agente 4** — Director: integra los 3 planes, toma decisiones, genera el plan final en formato DAY2DAY

Output del Agente 4 → Israel aprueba/corrige → escribir a `DAY2DAY.md`

---

## Hilos conductores activos

| Hilo | Nivel/Sem | Personajes | Descripción |
|---|---|---|---|
| **The Drama** | B2 Sem 2+ | Ana, Marco, Sofia, Lee | Serie de situaciones relacionales — Object Pronouns emergieron naturalmente |
| **The Estate** | B2 Sem 4 | Ana, Marco, Sofia, Lee | Empresa que se disuelve — activos divididos con Possessive Pronouns |

---


## Vocab packs (referencia rápida)

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

---

## Rama Español (Periplo-es)

Periplo tiene una rama paralela para enseñar **español** a estudiantes de inglés (o cualquier otro idioma base). La arquitectura es idéntica a la rama inglés, pero con UID y hub propios.

### Diferencias clave vs. rama inglés

| Elemento | Rama Inglés | Rama Español |
|---|---|---|
| UID de Firebase | `teacher_builder_001` | `teacher_anita_001` |
| Hub principal | `index.html` | `index-es.html` |
| Ruta de datos | `artifacts/periplo-app-v1/users/teacher_builder_001/quizzes` | `artifacts/periplo-app-v1/users/teacher_anita_001/quizzes` |

### Archivos de la rama español

**Hub y dashboards:**
- `index-es.html` — Hub principal (Teacher Dashboard) de Anita
- `dashboard-fc-es.html` — Editor de Word Banks para español
- `dashboard-bg-es.html` — Editor de Board Games para español
- `dashboard-reading-es.html` — Editor de Reading para español

**Renderers de juegos (con fallback UID = teacher_anita_001):**
- `flashcards-es.html`
- `crossword-es.html`
- `anagram-es.html`
- `memorama-es.html`
- `emojispell-es.html`

### Regla de los renderers -es

El único motivo de existir de los archivos `-es` es que el **fallback del UID** apunte a `teacher_anita_001` en lugar de `teacher_builder_001`. Cuando el hub lanza un juego con `?uid=teacher_anita_001` en el URL, los renderers originales también funcionan. Los `-es` son necesarios para acceso directo (sin parámetro uid).

### Estructura del JSON de contenido

Idéntica en ambas ramas. Los campos `wordEn`, `wordEs`, `exampleEn`, `emojis` son los mismos — solo cambia el idioma del contenido que Anita sube al dashboard.
