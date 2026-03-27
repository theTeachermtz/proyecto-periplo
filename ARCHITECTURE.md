# Hub de Juegos Educativos - Periplo (Architecture & Context)

## 🎯 Propósito
Centro de aprendizaje de inglés para maestros de ESL. Permite generar, administrar y jugar actividades educativas interactivas.

## 🗄️ Arquitectura Base de Datos y Backend
- **Tecnología:** Firebase Firestore y Firebase Authentication (Anonymous SignIn).
- **Adiós a localStorage:** Todo el contenido (Quizzes, Juegos, Salas Multijugador) se guarda y se lee en tiempo real desde Firebase.
- **Ruta de Quizzes (Maestro):** `artifacts/periplo-app-v1/users/teacher_builder_001/quizzes`
- **Ruta de Salas Online (Multijugador):** `artifacts/periplo-app-v1/public/data/rooms`

## 🏷️ Sistema Universal de Taxonomía (CRÍTICO)
TODOS los nuevos dashboards deben incluir obligatoriamente el sistema de Taxonomía antes de guardar en Firebase. 
- **Estructura:** 3 Dropdowns dependientes (`Level` -> `Category` -> `Topic`).
- **Niveles:** `basic`, `advanced`, `pro`.
- **JSON Output:** Al guardar, el documento en Firebase DEBE incluir el objeto: `tags: { level: "...", category: "...", topic: "..." }`.

## 🎮 Ecosistema de Juegos y Dashboards (Builders)
La plataforma se divide en dos caras: El **Juego** (UI del alumno) y el **Dashboard Builder** (UI del maestro para inyectar/generar el contenido).

### 1. Familia "Match" (Pares de Palabras)
- **Juego:** `lingomatch.html`
- **Builder:** `dashboard-match.html` (Usa el Diccionario interno de la Taxonomía para arrastrar y soltar palabras en la bolsa, con límite de 96 pares).

### 2. Familia "Connect 4" (Evaluación Dinámica y Multijugador)
- **Juego:** `connect4.html` (Soporta Multijugador Online por Salas y Roles. Tiene 9 tipos de minijuegos incrustados que reaccionan según sea el turno o si es el maestro observando).
- **Builder:** `dashboard-connect4.html` (Usa la API de Gemini para generar JSON con 9 arreglos distintos según lo que el maestro configure en los *sliders* de cantidad).

### 3. Familia "UNO" (Mazo de 112 Cartas)
- **Juego:** `uno.html` (Multijugador Online por Salas. Lógica de cambio de turno, comodines, robar cartas y castigos).
- **Builder:** `dashboard-uno.html` (Genera 4 columnas de 19 palabras usando la API de Gemini. Guarda bajo el type "UNO").

### 4. Familia "Phone Chat" (Diálogos)
- **Juego:** `phonechat.html`
- **Builder:** `dashboard-pc.html` (Formato de arreglo con id, botMessage, userHint y expectedAnswer).

### 5. Otros Dashboards en Desarrollo
- `dashboard-reading.html` (Textos + Drag & Drop)
- `dashboard-listening.html` (Audios/Videos YouTube + Preguntas)
- `dashboard-fc.html` (Flashcards genéricas)

## 🤖 Integración de IA Generativa (Gemini)
Los Dashboards (Builders) utilizan llamadas REST a la API de Google Generative AI (`generativelanguage.googleapis.com/v1beta/models/...`) para generar el contenido JSON crudo (`responseMimeType: "application/json"`). 
**Regla de Oro:** La IA recibe un prompt estricto con el esquema JSON deseado y NUNCA debe devolver formato markdown (\`\`\`json).

## 🚀 Similitudes y Reutilización de Código
- **Las Salas Multijugador (`LobbyScreen`, `RolesScreen`):** La lógica de crear salas, generar un código de 4 dígitos, unirse y asignar roles (`isHost`, `observer`, colores) es **idéntica** y reutilizable entre `connect4.html` y `uno.html`.
- **UI de Dashboards:** Todos comparten un Header negro superior (con botón de volver, input de API Key y botón verde de guardar) y un diseño oscuro (`bg-zinc-950`) usando Tailwind CSS.

## 📝 Instrucciones para la IA (System Prompt)
1. **Asume este contexto siempre:** Conoces la estructura de Firebase y la Taxonomía de Periplo.
2. **Reutiliza pero verifica:** Si se pide un nuevo juego multijugador, usa la lógica de salas de Connect4/UNO, pero adapta la lógica del tablero.
3. **No rompas la Taxonomía:** Cualquier nuevo Dashboard DEBE incluir el modal de guardado con `saveLevel`, `saveCat` y `saveTopic`.
