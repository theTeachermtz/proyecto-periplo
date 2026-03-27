# Hub de Juegos Educativos - Arquitectura y Contexto

## 🎯 Propósito
Centro de aprendizaje de inglés con 11+ juegos interactivos. Cada juego tiene su lógica, pero muchos comparten dashboards estandarizados basados en taxonomía de estudio.

---

## 📁 Estructura de Archivos

### Archivo Raíz
- **index.html** - Punto de entrada. Menú principal con botón "+Actividad" (desplegable) que muestra todos los juegos/dashboards disponibles.

### Sistema de Visualización/Conversión
- **__activity.html** - Visualizador/Conversor. Permite duplicar juegos que comparten el mismo dashboard. Ej: creas un Flashcards, lo previsualizas como Anagram, Crossword, Memorama desde aquí, y si te gusta, das "guardar como" y se guarda una copia en index.html.

---

## 🎮 Juegos (11 Total)

| Juego | Archivo | Dashboard Asociado | Descripción |
|-------|---------|-------------------|-------------|
| Flashcards | flashcards.html | dashboard-fc.html | Tarjetas de estudio |
| Anagram | anagram.html | dashboard-fc.html | Resolver anagramas |
| Crossword | crossword.html | dashboard-fc.html | Crucigramas |
| Memorama | memorama.html | dashboard-fc.html | Juego de memoria |
| UNO | uno.html | dashboard-uno.html | Juego de cartas (complejo) |
| Connect4 | connect4.html | dashboard-connect4.html | Conecta 4 |
| LingoMatch | lingomatch.html | dashboard-match.html | Matching de palabras |
| Reading | reading.html | dashboard-reading.html | Lectura interactiva |
| Listening | listening.html | dashboard-listening.html | Comprensión auditiva |
| Phone Chat | phonechat.html | dashboard-pc.html | Diálogos/gramática conversacional |
| City Map | citymap.html | dashboard-lm.html | Mapa interactivo |

---

## 📊 Dashboards (9 Total)

### Dashboards Compartidos (Múltiples Juegos)
- **dashboard-fc.html** → Usado por: Flashcards, Anagram, Crossword, Memorama
  - *Función*: Entrada de datos y gestión de contenido para juegos basados en vocabulario/palabras
  - *Almacenamiento*: localStorage (datos persistentes)
  - *Estructura*: Formularios para crear/editar/eliminar elementos

### Dashboards Únicos
- **dashboard-uno.html** → UNO (juego complejo, lógica propia)
- **dashboard-connect4.html** → Connect4 (lógica de tablero)
- **dashboard-match.html** → LingoMatch (matching de pares)
- **dashboard-reading.html** → Reading (gestión de textos + preguntas drag-and-drop)
- **dashboard-listening.html** → Listening (gestión de audios/videos YouTube + preguntas TOEFL)
- **dashboard-pc.html** → Phone Chat (diálogos + correcciones gramaticales)
- **dashboard-lm.html** → City Map (mapa interactivo)
- **dashboard-schedule.html** → Schedule (gestión de calendario/cronograma)

---

## 🏷️ Taxonomía de Estudio

**Objetivo Actual**: Estandarizar todos los dashboards con un sistema de clasificación común basado en el plan de estudio.

*Detalles específicos de taxonomía a llenar cuando se defina completamente*

---

## 🔑 Convenciones de Código

### Almacenamiento de Datos
- Método principal: **localStorage**
- Formato: JSON
- Clave de acceso: `[juego]_data` (ej: `flashcards_data`, `uno_data`)

### Estructura de Elementos en index.html
- Los accesos a juegos se guardan como **carpeta/documentos estilo Google Drive**
- Cada elemento tiene:
  - ID único
  - Nombre
  - Referencia al juego/dashboard asociado
  - Metadatos (fecha creación, última edición, etc.)

### Reglas de Dashboards
⚠️ **Regla de Oro**: Algunos dashboards pueden ser SIMILARES pero NUNCA son idénticos.
- Antes de reutilizar código de un dashboard en otro, revisar diferencias específicas
- Documentar por qué difieren (lógica de juego, campos adicionales, etc.)

---

## 🎓 Archivos Administrativos/Especiales

| Archivo | Descripción |
|---------|-------------|
| student_portal.html | Portal de estudiantes (gestión de usuarios) |
| students.html | Listado/gestión de estudiantes |
| evaluaciones.html | Panel de evaluaciones |
| schedule.html | Calendario de actividades (juego o herramienta) |

---

## 📌 Mapa de Flujo

```
index.html (raíz)
    ↓
Botón "+Actividad" → Desplegable con todos los juegos
    ↓
Usuario elige un juego (ej: Flashcards)
    ↓
flashcards.html carga
    ↓
"Crear/Editar" → Abre dashboard-fc.html
    ↓
En dashboard: usuario crea contenido
    ↓
Datos se guardan en localStorage
    ↓
De vuelta a flashcards.html, juego lee los datos y funciona
```

---

## 🔄 Similitudes (Pero NO Idénticas)

### Dashboards que Pueden Parecer Iguales
- **dashboard-reading.html** vs **dashboard-listening.html**
  - Lectura: maneja TEXTOS + preguntas drag-and-drop
  - Listening: maneja AUDIOS/VIDEOS YouTube + preguntas TOEFL con timestamping
  - Diferencia clave: tipo de contenido y formato de preguntas

- **dashboard-match.html** vs **dashboard-fc.html**
  - Match: pares de palabras (A ↔ B)
  - FC: vocabulario individual (entrada de datos simple)
  - Diferencia clave: estructura de datos y lógica de validación

---

## 🚀 Etapas de Desarrollo Actuales

1. **Estandarización en progreso**: Agregar sistema de taxonomía a todos los dashboards
2. **Nuevos juegos planeados**: Según el plan de estudio
3. **Mejoras de UX**: Consistencia visual entre dashboards

---

## 📍 Repositorio
[Insertar URL de GitHub aquí]

---

## 📝 Notas Importantes para Claude (IA)

Cuando traballes en este proyecto:
1. Siempre revisar si el dashboard ya existe antes de crear uno nuevo
2. Si un dashboard es muy similar a otro, considerar reutilizar código base
3. Mantener la taxonomía consistente en todos los dashboards
4. Documentar cambios en este archivo cuando se agreguen nuevos juegos/dashboards
5. Las similitudes entre dashboards NO significan que sean iguales → revisar diferencias específicas antes de copiar código
