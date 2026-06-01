---
description: Llena con imágenes reales los mazos de flashcards y cultural cards (recuérdalo). Acepta un nombre opcional para filtrar.
---

Corre el script de imágenes de Periplo TÚ MISMO (en background) y reporta el resultado al usuario. El objetivo es que Israel no tenga que tocar la terminal.

## Qué hace el script
`scripts/update-images.js` recorre ambas bibliotecas (`teacher_builder_001` + `teacher_anita_001`), busca fotos reales en Wikipedia/Wikimedia Commons, las comprime (~320px JPEG, <1MB) y las guarda en Firebase. Ignora la papelera (`isDeleted`) y salta tarjetas que ya tienen imagen. NO requiere API key (Wikipedia/Commons son públicas).

## Pasos a seguir

1. **Toma el nombre del mazo** de los argumentos del usuario (lo que escriba después de `/update-images`). Ej: `/update-images Irregulares A-F` → filtro `"Irregulares A-F"`. Si no escribió nada, corre sin filtro (todos los mazos).

2. **Verifica node_modules** una sola vez: si `scripts/node_modules` no existe, corre `cd scripts && npm install` primero.

3. **Ejecuta el script en background** (puede tardar — hace ~1.5s por imagen):
   - Con nombre:  `cd scripts && node update-images.js "<nombre>"`
   - Sin nombre:  `cd scripts && node update-images.js`
   Usa `run_in_background: true` en la herramienta Bash porque un mazo de 30 tarjetas tarda ~1 min.

4. **Cuando termine**, lee la salida y reporta a Israel en español de forma breve: cuántas imágenes nuevas se pusieron, cuántas ya tenían, y cuántas no se encontraron. Si alguna no se encontró, dile cuáles (suelen ser palabras abstractas que se quedan con emoji de respaldo — eso está bien).

5. **Recuérdale** que recargue el flashcards en Vercel para ver las imágenes.

## Notas
- La `GOOGLE_API_KEY` es opcional (solo mejora el último recurso de búsqueda). Si no está en el entorno, el script igual funciona con Wikipedia/Commons.
- Si el usuario quiere apuntar a un mazo específico, basta un pedazo del título (coincidencia parcial, sin importar mayúsculas).
