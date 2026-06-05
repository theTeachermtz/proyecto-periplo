# Gem Periplo — Guía de uso y prompts de arranque

Este archivo es para copiar y pegar en Google Gemini Gem al crear un juego nuevo.

---

## Cómo configurar el Gem

### 1. Crear el Gem en gemini.google.com → Gems → Crear Gem

### 2. Archivos que subirle como conocimiento

| Archivo | Por qué |
|---|---|
| `CLAUDE.md` | Contexto completo: estándares, UI snippets, Firebase, banner, student mode |
| `periplo.css` | Hoja de estilos compartida — para no redeclarar clases que ya existen |
| `periplo-config.js` | Patrón de inicialización de Firebase |
| `spell-the-phrase.html` | Renderer de referencia canónico — tiene los 3 estándares: welcome screen + safe area + capture input |

### 3. Instructions del Gem (pegar esto en el campo "Instructions")

```
Eres un asistente especializado en crear renderers HTML para Periplo,
una plataforma de inglés/español en línea.

Tu único trabajo es generar archivos .html de juegos siguiendo
EXACTAMENTE los estándares documentados en el CLAUDE.md que tienes
en tu base de conocimiento.

REGLAS NO NEGOCIABLES al generar cualquier renderer:

1. Stack: HTML + React (Babel standalone, sin build step) + Firebase Firestore + Tailwind CDN
2. Para imports de React y Firebase: sigue el patrón de importmap de spell-the-phrase.html
3. Siempre importar periplo.css antes del <style> inline
4. Patrón Firebase: urlParams.get('uid') || 'teacher_builder_001' y urlParams.get('id')
5. El juego siempre abre en gameState === 'welcome' (pantalla de instrucciones)
6. El header usa el banner estándar Periplo: bg-zinc-950, badge P indigo-600
7. Safe area: pt-safe en header, pb-safe en botones del fondo
8. Modo alumno: si ?student=true, la badge P es <div> (no botón), sin salida al hub
9. Para juegos con teclado: usar el patrón capture-input descrito en el CLAUDE.md
10. Nunca inventar clases CSS que ya existen en periplo.css

Cuando Israel te pida un juego, pregunta:
- ¿Ya existe la mecánica descrita o necesita aclaración?
- ¿Va en rama inglés, español, o ambas?
- ¿Tiene schema propio o usa uno existente (WORDPACK, etc.)?

Luego genera el renderer completo, listo para copiar y pegar.
```

---

## Prompts de arranque — 19 juegos pendientes

Copia el prompt del juego que quieras crear y pégalo en el Gem.
Orden recomendado: empieza con el Grupo 1 (más simples).

---

## GRUPO 1 — Timer y reacción (empieza aquí)

### `antifillerchallenge.html`

```
Crea `antifillerchallenge.html` para Periplo.

Mecánica: Un alumno habla 30 segundos sobre un tema. Los otros 3
alumnos cuentan cada filler word que escuchan (uh, um, like, so,
you know, basically, literally). Al terminar, el scoreboard muestra
cuántos fillers tuvo cada hablante en sus turnos.

Rama: Inglés.

Schema Firestore (type: 'ANTIFILLER'):
- title: string
- topics: string[]  ← temas de conversación, uno por ronda
- fillerWords: string[]  ← lista de fillers a vigilar (se muestra al árbitro)

UI principal:
- gameState: 'welcome' | 'setup' | 'speaking' | 'counting' | 'results'
- Setup: el teacher elige el tema de la ronda desde la lista
- Speaking: timer de 30s visible, tema grande en pantalla, nombre del hablante
- Counting: cada árbitro tiene un botón grande "+1 filler" — toca cada vez que
  escucha uno. Contador visible en tiempo real. Botón "Tiempo — siguiente"
- Results: tabla con nombre de alumno y total de fillers acumulados en todos sus turnos.
  El que tuvo menos gana.
- Los 4 nombres de alumnos se ingresan en la pantalla de setup (campos de texto simples).
- Sin Firestore para los conteos — todo en estado local.
```

---

### `lastword.html`

```
Crea `lastword.html` para Periplo.

Mecánica: Una categoría aparece en pantalla. Los alumnos dicen
palabras de esa categoría en voz alta en orden. El teacher inicia
un timer OCULTO (aleatorio entre 20–45 segundos). Cuando suena,
el último en haber dicho una palabra gana la ronda.

Rama: Inglés.

Schema Firestore (type: 'LAST_WORD'):
- title: string
- categories: string[]  ← ej: "Animals", "Things in a kitchen", "Jobs"

UI principal:
- gameState: 'welcome' | 'playing' | 'ring'
- Playing: categoría actual en texto grande (centro), botón "¡Tiempo!" del teacher
  (se activa al azar entre 20–45s desde que empezó la ronda, pero el teacher puede
  pulsarlo manualmente también). Botón "Siguiente categoría".
- Ring: animación de campana, texto "¡La última palabra ganó!"
  Botón para siguiente ronda.
- Sin nombres de alumnos — el teacher lleva el marcador oral.
- No necesita modo teacher/alumno diferenciado: se proyecta en pantalla grande.
```

---

### `afterwords.html`

```
Crea `afterwords.html` para Periplo.

Mecánica: Cadena de oraciones. Alumno A dice una oración. La ÚLTIMA
PALABRA de su oración es la PRIMERA PALABRA de la oración del
Alumno B. El teacher controla el ritmo y muestra la palabra de
enlace en pantalla grande.

Rama: Inglés.

Schema Firestore (type: 'AFTERWORDS'):
- title: string
- startWords: string[]  ← palabras con las que puede arrancar la cadena
- grammarConstraint: string  ← ej: "Use Past Simple in every sentence"

UI principal:
- gameState: 'welcome' | 'playing'
- Playing: pantalla dividida en dos zonas:
  (arriba) constraint badge + palabra de enlace actual en grande (ej: "MONDAY")
  (abajo) historial de la cadena — las últimas 3–4 oraciones desplazándose
- El teacher escribe la palabra de enlace manualmente en un input
  al final de cada oración (la última palabra que dijo el alumno).
- Botón "Reiniciar cadena" con confirmación.
- No hay puntuación — es actividad de flujo.
```

---

## GRUPO 2 — Conversación con constraint

### `speeddate.html`

```
Crea `speeddate.html` para Periplo.

Mecánica: 4 rondas de conversación en parejas. Cada ronda tiene
un tema y un grammar constraint. El timer corre. Al terminar,
las parejas rotan. Con 4 alumnos: A-B y C-D → A-C y B-D → etc.

Rama: Inglés.

Schema Firestore (type: 'SPEED_DATE'):
- title: string
- rounds: Array<{
    topic: string,         ← ej: "Your ideal weekend"
    constraint: string,    ← ej: "Use Second Conditional"
    duration: number       ← segundos, ej: 180
  }>

UI principal:
- gameState: 'welcome' | 'round' | 'rotate' | 'done'
- Round: número de ronda, tema grande, constraint badge (color prominente),
  countdown timer. Botón "Terminar ronda" manual por si se acabó antes.
- Rotate: instrucción de rotación de parejas en pantalla. Con nombres si
  los ingresaron, si no: "Pareja 1 / Pareja 2 rota". Botón "Siguiente ronda".
- Done: todas las rondas completadas, pantalla de cierre con resumen de temas.
- Los nombres son opcionales — 4 campos vacíos en setup, si quedan vacíos
  mostrar "Alumno 1", "Alumno 2", etc.
```

---

### `elespectro.html`

```
Crea `elespectro.html` para Periplo.

Mecánica: Una barra horizontal con dos extremos opuestos
(ej: "Always late ←→ Always on time"). Cada alumno se posiciona
en el espectro y justifica su posición en inglés.

Rama: Inglés.

Schema Firestore (type: 'ESPECTRO'):
- title: string
- items: Array<{
    leftLabel: string,    ← ej: "Total introvert"
    rightLabel: string,   ← ej: "Total extrovert"
    question: string      ← ej: "Where are you on the social energy scale?"
  }>

UI principal:
- gameState: 'welcome' | 'playing'
- Playing: la barra del espectro ocupa el centro de la pantalla.
  Extremo izquierdo y derecho con etiquetas grandes.
  La pregunta aparece arriba.
  4 marcadores (uno por alumno, colores distintos) que el teacher
  arrastra/toca para posicionar a cada alumno. Nombres encima de
  cada marcador.
- Botón "Siguiente ítem".
- Setup: ingresar 4 nombres de alumnos.
- Los marcadores se resetean al centro para cada nuevo ítem.
```

---

### `4verdades.html`

```
Crea `4verdades.html` para Periplo.

Mecánica: 4 afirmaciones aparecen en pantalla. Una es mentira.
Los alumnos votan cuál es la mentira. El teacher revela cuál era.
El constraint de gramática se usa para escribir las afirmaciones.

Rama: Inglés.

Schema Firestore (type: 'CUATRO_VERDADES'):
- title: string
- grammarConstraint: string  ← ej: "All statements use Past Simple"
- rounds: Array<{
    statements: string[4],   ← exactamente 4 afirmaciones
    lieIndex: number,        ← 0-3, cuál es la mentira
    subject: string          ← ej: "About Sofia" (quién es el sujeto)
  }>

UI principal:
- gameState: 'welcome' | 'voting' | 'reveal' | 'done'
- Voting: subject + constraint badge arriba. 4 tarjetas grandes con las
  afirmaciones (A, B, C, D). Los alumnos levantan la mano — teacher
  lleva cuenta mentalmente. Botón "Revelar" del teacher.
- Reveal: la mentira se destaca (tachada o roja). Las verdades quedan verdes.
  Botón "Siguiente ronda".
- Contador de rondas completadas.
```

---

## GRUPO 3 — Juegos de cartas y selección

### `conoceme.html`

```
Crea `conoceme.html` para Periplo.

Mecánica: El teacher muestra una afirmación sobre uno de los
alumnos (sin decir quién). Los otros 3 predicen de quién es.
Luego de la predicción, el sujeto real confirma/niega y justifica
en inglés.

Rama: Inglés.

Schema Firestore (type: 'CONOCEME'):
- title: string
- statements: Array<{
    statement: string,    ← ej: "This person has never eaten sushi"
    subject: string       ← nombre del alumno (solo lo ve el teacher)
  }>

UI principal:
- Dos vistas: teacher (ve el subject) y alumno (no lo ve).
- Modo teacher (?mode=teacher): afirmación + nombre del sujeto visible.
  Botón "Revelar quién es".
- Modo alumno/proyección: solo la afirmación. 4 botones con los nombres
  para votar. Teacher ingresa los 4 nombres al inicio.
- Reveal: nombre del sujeto aparece con animación. Botón "Siguiente".
- Los nombres se guardan en localStorage para la sesión.
```

---

### `applestoapples.html`

```
Crea `applestoapples.html` para Periplo.

Mecánica: Sale una tarjeta de ADJETIVO (AP card). Cada alumno
juega la tarjeta de SUSTANTIVO (NP card) de su mano que mejor
encaja. El judge de la ronda elige el ganador. Los roles rotan.

Rama: Inglés.

Schema Firestore (type: 'APPLES_TO_APPLES'):
- title: string
- apCards: string[]    ← adjetivos, ej: ["Exciting", "Boring", "Dangerous"]
- npCards: string[]    ← sustantivos, ej: ["A first date", "Mondays", "Pizza"]

UI principal:
- gameState: 'welcome' | 'setup' | 'playing' | 'judging' | 'done'
- Setup: 4 nombres de alumnos. Se reparten 5 NP cards a cada uno
  (estado local, no Firestore para la mano).
- Playing: AP card del turno en pantalla grande. Las 4 manos se muestran
  en 4 cuadrantes de la pantalla del teacher. El judge NO ve el cuadrante propio.
- Judging: las 4 NP cards jugadas (sin nombre) se muestran al judge.
  Judge toca la ganadora. Se revela quién jugó qué.
- Al final de la ronda: el ganador gana 1 punto, recibe nueva NP card.
- Scoreboard visible todo el tiempo.
```

---

### `personallyincorrecto.html`

```
Crea `personallyincorrecto.html` para Periplo.

Mecánica: Una situación/pregunta aparece. Cada alumno juega una
tarjeta de reacción de su mano. El judge elige cuál tarjeta
representa mejor la REACCIÓN REAL de un compañero específico
(no la más graciosa, sino la más acertada). El compañero aludido
confirma o desmiente.

Rama: Inglés.

Schema Firestore (type: 'PERSONALLY_INCORRECTO'):
- title: string
- scenarios: string[]    ← situaciones, ej: "Your phone dies at 10% battery"
- reactionCards: string[] ← reacciones, ej: ["Panics immediately", "Doesn't care at all"]

UI principal:
- gameState: 'welcome' | 'setup' | 'playing' | 'judging' | 'reveal'
- Setup: 4 nombres. Se reparten 5 reaction cards a cada uno.
- Playing: scenario en pantalla. Cada alumno elige una reaction card
  de su mano (se muestran en 4 cuadrantes).
- Judging: el judge ve las 4 reaction cards jugadas (anónimas).
  Elige una. Al mismo tiempo elige a qué compañero se refiere.
- Reveal: se muestra quién jugó la carta elegida y si coincidió con
  el compañero señalado. Puntos por acierto.
```

---

### `quememesoy.html`

```
Crea `quememesoy.html` para Periplo.

Mecánica: Un meme (imagen) aparece en pantalla. Los alumnos
escriben un caption usando una estructura gramatical específica.
El judge elige el mejor caption. Discusión oral sobre por qué ganó.

Rama: Inglés.

Schema Firestore (type: 'MEME_CAPTION'):
- title: string
- memes: Array<{
    imageUrl: string,         ← URL pública de la imagen
    grammarConstraint: string ← ej: "Use Second Conditional"
  }>

UI principal:
- gameState: 'welcome' | 'playing' | 'sharing' | 'judging'
- Playing: meme en grande (imagen), grammar constraint badge visible.
  Timer de 60s para escribir el caption. Los alumnos escriben en papel.
- Sharing: cuadro para que el teacher escriba cada caption y los muestre.
- Judging: judge elige el ganador. Scoreboard.
- La imagen debe renderizarse con object-fit:contain para no distorsionar el meme.
```

---

## GRUPO 4 — Tablero y visual complejo

### `adivina-quien.html`

```
Crea `adivina-quien.html` para Periplo.

Mecánica: Guess Who con personajes ficticios. Cada alumno tiene
un personaje secreto. Hacen preguntas de sí/no en Past Simple
(o el grammar constraint de la semana) para eliminarlo de la
grilla del oponente. Gana quien identifique el personaje del
oponente primero.

Rama: Inglés.

Schema Firestore (type: 'ADIVINA_QUIEN'):
- title: string
- grammarConstraint: string   ← ej: "Questions must use Past Simple"
- characters: Array<{
    name: string,
    attributes: {
      gender: string,
      hairColor: string,
      hasGlasses: boolean,
      hasMustache: boolean,
      occupation: string,
      trait: string
    },
    emoji: string
  }>

UI principal:
- Grilla de personajes (4×4 o 5×4 según cantidad).
- Cada tarjeta: emoji grande + nombre + atributos en chips pequeños.
- El teacher puede tocar/eliminar personajes de la grilla (se oscurecen).
- Grammar constraint siempre visible como badge arriba.
- MVP: modo normal donde todos ven la grilla proyectada y el teacher arbitra.
```

---

### `eldepas.html`

```
Crea `eldepas.html` para Periplo.

Mecánica: Se muestran perfiles de departamentos con atributos comparables.
Los alumnos deben hacer comparaciones usando comparativos y superlativos
en inglés.

Rama: Inglés.

Schema Firestore (type: 'EL_DEPAS'):
- title: string
- apartments: Array<{
    name: string,
    rent: number,
    size: number,
    bedrooms: number,
    location: string,
    amenities: string[],
    rating: number,
    emoji: string
  }>
- comparativePrompts: string[]  ← ej: "Which apartment is the most affordable?"

UI principal:
- Vista de 2 o 3 tarjetas de depa lado a lado (scroll horizontal si hay más).
- Cada tarjeta muestra todos los atributos con íconos (💰 precio, 📐 tamaño, etc).
- Prompt de comparación actual visible arriba (rotativo, manual).
- El teacher avanza los prompts con un botón.
- Los alumnos responden oralmente.
- Grammar reminder: "comparatives & superlatives" siempre visible.
```

---

### `smallworld.html`

```
Crea `smallworld.html` para Periplo.

Mecánica: Cada alumno tiene un perfil de personaje ficticio con
nombre, ocupación y rutina diaria. El reto: descubrir las
"conexiones ocultas" entre los personajes. Los alumnos hacen
preguntas en inglés para encontrar las conexiones.

Rama: Inglés.

Schema Firestore (type: 'SMALL_WORLD'):
- title: string
- characters: Array<{
    name: string,
    occupation: string,
    neighborhood: string,
    routine: string[],
    hiddenConnections: string[]
  }>
- grammarConstraint: string   ← ej: "Use Present Simple for routines"

UI principal:
- gameState: 'welcome' | 'discovery' | 'reveal'
- Discovery: perfiles en tarjetas. La rutina es VISIBLE,
  las hidden connections son OCULTAS.
- El teacher revela conexiones tocando cada una (toggle visible/oculto).
- Reveal: todas las conexiones visibles, mapa de relaciones resumido.
```

---

### `contrasena.html`

```
Crea `contrasena.html` para Periplo.

Mecánica: Un grid de palabras (4×4 o 5×5) aparece en pantalla.
Un alumno es el "spy" y ve en secreto qué palabras están marcadas
como del mismo grupo. Da UNA SOLA pista (una palabra + un número)
para que su equipo adivine cuáles están relacionadas. Como Codenames.

Rama: Inglés.

Schema Firestore (type: 'CONTRASENA'):
- title: string
- grids: Array<{
    words: string[],
    team1Words: number[],
    team2Words: number[],
    assassin: number
  }>

UI principal:
- Vista spy (?mode=teacher): palabras con color por equipo
  (equipo 1 = azul, equipo 2 = rojo, neutral = gris, asesino = negro).
- Vista jugadores: solo palabras en gris neutro. Al tocar una se revela su color.
- Turno actual visible (Equipo 1 / Equipo 2). Contador de palabras restantes.
- Las palabras reveladas se oscurecen/colorean en el tablero de jugadores.
```

---

### `citymap.html`

```
Crea `citymap.html` para Periplo.

Mecánica: Un mapa de ciudad cuadriculado en pantalla. El teacher da
instrucciones de navegación en inglés usando preposiciones y phrasal
verbs de dirección ("go straight", "turn left at", "go past the",
"it's on the corner of"). Los alumnos siguen en su copia en papel.

Rama: Inglés.

Schema Firestore (type: 'CITY_MAP'):
- title: string
- maps: Array<{
    name: string,
    grid: Array<Array<string>>,    ← cuadrícula, ej: "bakery", "park", "" (calle vacía)
    routes: Array<{
      start: string,
      destination: string,
      instructions: string[]
    }>
  }>

UI principal:
- El mapa como cuadrícula CSS. Cada celda con lugar/emoji/nombre.
  Calles vacías en gris oscuro.
- Modo teacher: instrucciones de la ruta actual visibles.
- Pantalla proyectada: solo el mapa. Un marcador que el teacher
  mueve por el grid al ritmo de las instrucciones.
- Instrucción actual visible abajo en texto grande.
- SIMPLIFICACIÓN MVP: grid de 6×6 con lugares fijos.
  El schema solo guarda las rutas/instrucciones.
```

---

### `welcomecommittee.html`

```
Crea `welcomecommittee.html` para Periplo.

Mecánica: 2 alumnos son "turistas" y 2 son "locales". Los turistas
tienen un destino secreto y piden indicaciones en inglés. Los locales
guían usando preposiciones de lugar y dirección. Ambos grupos tienen
el mismo mapa.

Rama: Inglés.

Schema Firestore (type: 'WELCOME_COMMITTEE'):
- title: string
- scenarios: Array<{
    mapName: string,
    startLocation: string,
    secretDestination: string,
    keyPhrases: string[]
  }>
- grammarFocus: string

UI principal:
- Vista turista (?role=tourist): destino secreto + keyPhrases.
- Vista local (?role=local): solo el mapa + keyPhrases (sin destino).
- Vista teacher (?mode=teacher): todo visible.
- El mapa reutiliza el mismo componente de citymap.html.
- Timer de 3 minutos por escenario.
- Al terminar: reveal del destino para todos.
```

---

## GRUPO 5 — Contenido externo (los más complejos, al final)

### `weakestlink.html`

```
Crea `weakestlink.html` para Periplo.

Mecánica: Quiz eliminatorio estilo "The Weakest Link". Los alumnos
responden preguntas en cadena (A→B→C→D→A...). Si fallan, pierden
sus puntos acumulados. Al final de la ronda, el grupo vota quién sale.
El último en quedar es el ganador.

Rama: Inglés.

Schema Firestore (type: 'WEAKEST_LINK'):
- title: string
- questions: Array<{
    question: string,
    answer: string,
    category: string
  }>

UI principal:
- gameState: 'welcome' | 'setup' | 'playing' | 'vote' | 'elimination' | 'final'
- Setup: 4 nombres. Turno inicial aleatorio.
- Playing: pregunta en pantalla grande. Nombre del alumno activo.
  Barra de "banco" acumulado. Botón "Correcto" / "Incorrecto" del teacher.
  Correcto suma al banco; incorrecto resetea el banco del alumno.
  Botón "Banco" para salvar puntos antes de responder.
- Vote: 4 botones con nombres para votar al eslabón más débil. El más votado sale.
- Elimination: el eliminado sale con animación.
- Scoreboard lateral siempre visible.
```

---

### `familyfeud.html`

```
Crea `familyfeud.html` para Periplo.

Mecánica: Family Feud. Una pregunta de encuesta aparece. Las 2 familias
(2 alumnos c/u) se turnan para adivinar las respuestas más populares.
Cada respuesta tiene puntos según su ranking.

Rama: Inglés.

Schema Firestore (type: 'FAMILY_FEUD'):
- title: string
- rounds: Array<{
    question: string,
    answers: Array<{
      text: string,
      points: number
    }>
  }>

UI principal:
- gameState: 'welcome' | 'setup' | 'playing' | 'steal' | 'scoreboard'
- El tablero clásico: respuestas ocultas (████ con número de caracteres).
  Se revelan al acertar.
- Setup: nombre de Familia 1 y Familia 2.
- Playing: turno activo, 3 X's máximo. Al 3er X, pasa a steal.
- Steal: la otra familia tiene UN intento para robar los puntos.
- El teacher controla todo: "Correcto" revela la respuesta más alta
  no adivinada; "X" marca equivocación; puede seleccionar qué respuesta
  específica se adivinó.
- Scoreboard entre rondas.
```

---

### `songpipeline.html`

```
Crea `songpipeline.html` para Periplo.

Mecánica: La letra de una canción aparece en pantalla con palabras clave
en BLANCO (fill-in). Los alumnos escuchan y completan los blancos.
El teacher controla el ritmo: revela las respuestas una por una o todas.

Rama: Inglés.

Schema Firestore (type: 'SONG_PIPELINE'):
- title: string
- artist: string
- lyrics: Array<{
    line: string,
    blanks: Array<{
      word: string,
      position: number
    }>
  }>
- teacherNotes: string
- audioUrl: string

UI principal:
- gameState: 'welcome' | 'listening' | 'reveal'
- Listening: letra línea por línea, blancos como "___".
  Los blancos son boxes clicables — el teacher los toca para revelar.
  Botón "Revelar todo" para el debrief.
- Si hay audioUrl: iframe de YouTube incrustado arriba (o botón de enlace externo).
- Modo teacher: resaltado de cuáles blancos están revelados/pendientes.
- Fuente de la letra: mínimo text-lg para legibilidad proyectada.
- Sin input digital de alumnos — completan en papel o en voz alta.
```
