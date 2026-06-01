// ============================================================
// PERIPLO — IA Assistant compartido (Google Gemini)
// Edita SOLO este archivo para cambiar la lógica de API key / Gemini
// en TODOS los dashboards. Se carga con <script src="periplo-ai.js">
// DESPUÉS de periplo-config.js y NO pasa por Babel (sin JSX aquí).
//
// Uso en un dashboard (que sí tiene Babel/React):
//   const AI = window.PERIPLO_AI;
//   const ApiKeyBar = AI.createApiKeyBar(React);
//   ...
//   const k = AI.loadKey(); if (k) setApiKey(k);
//   const models = await AI.fetchModels(apiKey);
//   const preferred = AI.pickPreferredModel(models);
//   const raw = await AI.callGemini({ apiKey, model: selectedModel, prompt });
//   const data = AI.extractJSON(raw);
// ============================================================
window.PERIPLO_AI = (() => {
    'use strict';

    // ---- localStorage: una sola llave para todos los dashboards ----
    const STORAGE_KEY = 'periplo_google_key';
    const loadKey  = () => { try { return localStorage.getItem(STORAGE_KEY) || ''; } catch (e) { return ''; } };
    const saveKey  = (k) => { try { localStorage.setItem(STORAGE_KEY, k); } catch (e) {} };
    const clearKey = () => { try { localStorage.removeItem(STORAGE_KEY); } catch (e) {} };

    // ---- endpoints / config ----
    const BASE = 'https://generativelanguage.googleapis.com/v1beta';
    const DEFAULT_MODEL = 'models/gemini-2.5-flash';
    const PREFERRED = ['gemini-2.5-flash', 'gemini-2.0'];

    // ---- escanear modelos disponibles para una key ----
    const fetchModels = async (apiKey) => {
        if (!apiKey || !apiKey.trim()) throw new Error('API Key requerida');
        const res = await fetch(`${BASE}/models?key=${apiKey.trim()}`);
        if (!res.ok) {
            // intenta leer el motivo real de Google (API_KEY_INVALID, referer, etc.)
            let detail = '';
            try { const j = await res.json(); detail = j?.error?.message ? ' — ' + j.error.message : ''; } catch (e) {}
            throw new Error(`Error conectando con Google (${res.status})${detail}`);
        }
        const data = await res.json();
        return (data.models || [])
            .filter(m => m.supportedGenerationMethods?.includes('generateContent'))
            .map(m => m.name);
    };

    // ---- elegir modelo preferido de una lista ----
    const pickPreferredModel = (models) => {
        if (!models || models.length === 0) return '';
        for (const p of PREFERRED) {
            const found = models.find(m => m.includes(p));
            if (found) return found;
        }
        return models[0];
    };

    // ---- llamar a Gemini para generar; devuelve el TEXTO crudo ----
    // opts: { apiKey, model?, prompt, signal?, json?, temperature?, maxOutputTokens? }
    const callGemini = async (opts) => {
        const {
            apiKey,
            model = DEFAULT_MODEL,
            prompt,
            signal = null,
            json = false,
            temperature = 0.7,
            maxOutputTokens = 8192,
        } = opts || {};
        if (!apiKey || !apiKey.trim()) throw new Error('API Key requerida');
        if (!prompt) throw new Error('Prompt vacío');

        const generationConfig = { temperature, maxOutputTokens };
        if (json) generationConfig.responseMimeType = 'application/json';

        const res = await fetch(`${BASE}/${model}:generateContent?key=${apiKey.trim()}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig }),
            signal,
        });
        if (!res.ok) {
            let detail = '';
            try { const j = await res.json(); detail = j?.error?.message ? ' — ' + j.error.message : ''; } catch (e) {}
            throw new Error(`API Error ${res.status}${detail}`);
        }
        const result = await res.json();
        return result.candidates?.[0]?.content?.parts?.[0]?.text || '';
    };

    // ---- extraer un objeto JSON de la respuesta de la IA ----
    const extractJSON = (rawText) => {
        const match = (rawText || '').match(/\{[\s\S]*\}/);
        if (!match) throw new Error('La IA no devolvió un JSON válido.');
        return JSON.parse(match[0]);
    };

    // ---- iconos SVG inline (sin dependencia de lucide) ----
    const svg = (React, paths, extra) => React.createElement(
        'svg',
        Object.assign({
            xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 16, viewBox: '0 0 24 24',
            fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
        }, extra || {}),
        paths.map((d, i) => typeof d === 'string'
            ? React.createElement('path', { key: i, d })
            : React.createElement(d.tag, Object.assign({ key: i }, d.attrs)))
    );
    const Icon = {
        key:    (R, p) => svg(R, [{ tag: 'circle', attrs: { cx: 7.5, cy: 15.5, r: 5.5 } }, 'm21 2-9.6 9.6', 'm15.5 7.5 3 3L22 7l-3-3'], p),
        search: (R, p) => svg(R, [{ tag: 'circle', attrs: { cx: 11, cy: 11, r: 8 } }, 'm21 21-4.3-4.3'], p),
        trash:  (R, p) => svg(R, ['M3 6h18', 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'], p),
        loader: (R, p) => svg(R, ['M21 12a9 9 0 1 1-6.219-8.56'], Object.assign({ className: 'animate-spin' }, p)),
    };

    // ---- factory del componente UI (recibe React; sin JSX) ----
    // props: { apiKey, setApiKey, models, selectedModel, setSelectedModel,
    //          isLoading, onFetch, onClear, variant, accentBtn, showSelector, placeholder }
    const createApiKeyBar = (React) => {
        const e = React.createElement;

        // estilos por variante de layout
        const V = {
            modal: {
                wrap:  'bg-black/30 p-4 rounded-xl border border-zinc-800/50 flex flex-col sm:flex-row gap-2 items-center',
                inner: 'w-full flex items-center gap-2 bg-zinc-900 p-1.5 rounded-xl border border-zinc-700',
                input: 'bg-transparent text-white px-2 py-1 text-xs font-mono w-full focus:outline-none',
                fetch: 'p-2 text-black rounded-lg transition-colors shrink-0',
                clear: 'p-2 bg-zinc-800 hover:bg-rose-600 text-zinc-400 hover:text-white rounded-lg transition-colors shrink-0',
                sel:   'bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2.5 text-xs text-white w-full sm:w-auto outline-none',
                keyIcon: 'text-zinc-500 ml-2 shrink-0',
            },
            compact: {
                wrap:  'flex items-center gap-1.5 flex-shrink-0',
                inner: 'flex items-center gap-1.5',
                input: 'bg-zinc-900 border border-zinc-700 text-white rounded-lg px-2 py-1.5 text-xs font-mono w-28 focus:border-orange-500 outline-none',
                fetch: 'btn-juicy p-1.5 text-white rounded-lg',
                clear: 'p-1.5 bg-zinc-800 hover:bg-rose-600 text-zinc-400 hover:text-white rounded-lg transition-colors shrink-0',
                sel:   'bg-zinc-900 border border-zinc-700 rounded-lg px-1.5 py-1.5 text-[10px] text-white max-w-[120px] outline-none',
                keyIcon: 'hidden',
            },
            sidebar: {
                wrap:  'bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl flex gap-2 items-center border border-orange-200 dark:border-orange-800',
                inner: 'flex-1 flex items-center gap-2',
                input: 'flex-1 bg-white dark:bg-zinc-950 p-2 rounded outline-none text-sm text-zinc-900 dark:text-white',
                fetch: 'p-2 text-white rounded-lg transition-colors shrink-0',
                clear: 'p-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-rose-500 text-zinc-500 hover:text-white rounded-lg transition-colors shrink-0',
                sel:   'bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-2 py-2 text-xs text-zinc-900 dark:text-white outline-none',
                keyIcon: 'hidden',
            },
        };

        return function ApiKeyBar(props) {
            const {
                apiKey, setApiKey,
                models = [], selectedModel = '', setSelectedModel,
                isLoading = false, onFetch, onClear,
                variant = 'modal',
                accentBtn = 'bg-orange-500 hover:bg-orange-400',
                showSelector = true,
                placeholder = 'Tu API Key de Google...',
            } = props;
            const s = V[variant] || V.modal;

            const handleChange = (ev) => {
                const val = ev.target.value;
                setApiKey(val);
                saveKey(val);
            };
            const handleClear = () => {
                clearKey();
                setApiKey('');
                if (setSelectedModel) setSelectedModel('');
                if (onClear) onClear();
            };

            const innerKids = [];
            if (s.keyIcon !== 'hidden') innerKids.push(Icon.key(React, { key: 'ki', size: 14, className: s.keyIcon }));
            innerKids.push(e('input', {
                key: 'in', type: 'password', value: apiKey, onChange: handleChange,
                placeholder, className: s.input,
            }));
            if (showSelector) {
                innerKids.push(e('button', {
                    key: 'fb', onClick: onFetch, disabled: isLoading || !apiKey,
                    className: `${s.fetch} ${accentBtn} disabled:opacity-40`, title: 'Escanear Modelos',
                }, isLoading ? Icon.loader(React, { size: 16 }) : Icon.search(React, { size: 16 })));
            }
            if (apiKey) {
                innerKids.push(e('button', {
                    key: 'cb', onClick: handleClear,
                    className: s.clear, title: 'Borrar la API Key guardada',
                }, Icon.trash(React, { size: 16 })));
            }

            const wrapKids = [e('div', { key: 'inner', className: s.inner }, innerKids)];
            if (showSelector && models.length > 0) {
                wrapKids.push(e('select', {
                    key: 'sel', value: selectedModel,
                    onChange: (ev) => setSelectedModel && setSelectedModel(ev.target.value),
                    className: s.sel,
                }, models.map(m => e('option', { key: m, value: m }, m.replace('models/', '')))));
            }

            return e('div', { className: s.wrap }, wrapKids);
        };
    };

    return {
        STORAGE_KEY, DEFAULT_MODEL,
        loadKey, saveKey, clearKey,
        fetchModels, pickPreferredModel, callGemini, extractJSON,
        createApiKeyBar,
    };
})();
