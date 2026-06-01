/**
 * update-images.js  v2
 * Uses MediaWiki pageimages API (more reliable than REST summary)
 * + Wikimedia Commons as secondary source
 * + Google Custom Search as last resort
 *
 * Run:  node update-images.js
 */

import { initializeApp }                    from 'firebase/app';
import { getFirestore, collection, getDocs,
         doc, updateDoc }                   from 'firebase/firestore';
import sharp                                from 'sharp';

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const FIREBASE_CONFIG = {
    apiKey:            "AIzaSyD4d-Kx1jQbgrKIdeOftv7BM729m7MIGPo",
    authDomain:        "proyecto-periplo.firebaseapp.com",
    projectId:         "proyecto-periplo",
    storageBucket:     "proyecto-periplo.firebasestorage.app",
    messagingSenderId: "236795998392",
    appId:             "1:236795998392:web:0da24b4f018611b55c844d"
};
const TEACHER_UID    = 'teacher_anita_001';
// La API key de Google se lee de una variable de entorno — NUNCA se hardcodea ni se commitea.
// Antes de correr el script:   set GOOGLE_API_KEY=tu_key   (Windows)  /  export GOOGLE_API_KEY=tu_key  (Mac/Linux)
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_CX      = 'b33357881960e4c8a';

if (!GOOGLE_API_KEY) {
    console.error('\n❌ Falta la variable de entorno GOOGLE_API_KEY.');
    console.error('   Windows (cmd):   set GOOGLE_API_KEY=tu_key && node update-images.js');
    console.error('   PowerShell:      $env:GOOGLE_API_KEY="tu_key"; node update-images.js');
    console.error('   Mac/Linux:       GOOGLE_API_KEY=tu_key node update-images.js\n');
    process.exit(1);
}
// ─────────────────────────────────────────────────────────────────────────────

const app = initializeApp(FIREBASE_CONFIG);
const db  = getFirestore(app);

const sleep = ms => new Promise(r => setTimeout(r, ms));

const HEADERS = {
    'User-Agent': 'PeriploImageBot/1.0 (https://proyecto-periplo.vercel.app; educational app)',
    'Accept': 'application/json',
};

async function safeFetch(url, ms = 12000) {
    const ctrl = new AbortController();
    const t    = setTimeout(() => ctrl.abort(), ms);
    try {
        const res = await fetch(url, { signal: ctrl.signal, headers: HEADERS });
        if (res.status === 429) throw new Error('HTTP 429');
        if (!res.ok)           throw new Error(`HTTP ${res.status}`);
        return res;
    } finally { clearTimeout(t); }
}

// ── Aliases: words that need a more specific Wikipedia title ─────────────────
const WIKI_ALIASES = {
    'pastor':         'Tacos_al_pastor',
    'al pastor':      'Tacos_al_pastor',
    'gringa':         'Gringa_(taco)',
    'campechana':     'Taco_campechano',
    'taco con costra':'Taco_de_canasta',
    'volcan':         'Volcán_(taco)',
    'volcán':         'Volcán_(taco)',
    'suadero':        'Suadero',
    'tripa':          'Tripe',
    'longaniza':      'Longaniza',
    'maciza':         'Carnitas',
    'cabeza':         'Cabeza_(meat)',
    'horchata':       'Horchata',
    'jamaica':        'Hibiscus_tea',
    'tepache':        'Tepache',
    'cecina':         'Cecina',
    'arrachera':      'Skirt_steak',
    'chapulines':     'Chapulines',
    'esquites':       'Esquites',
    'huarache':       'Huarache_(food)',
    'sope':           'Sope_(food)',
    'tlayuda':        'Tlayuda',
    'chilaquiles':    'Chilaquiles',
    'pozole':         'Pozole',
    'menudo':         'Menudo_(soup)',
    'birria':         'Birria',
    'machaca':        'Machaca',
    'cochinita pibil':'Cochinita_pibil',
    'molcajete':      'Molcajete',
    'epazote':        'Epazote',
    'nopal':          'Nopal',
    'michelada':      'Michelada',
};

// ── Capitalize each word and replace spaces with underscore (Wikipedia format)
function wikiTitle(str) {
    // Check alias first
    const alias = WIKI_ALIASES[str.toLowerCase()];
    if (alias) return alias;
    return str
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join('_');
}

// ── MediaWiki pageimages API — the reliable way ───────────────────────────────
async function getWikiImage(title, lang = 'en') {
    try {
        const url = `https://${lang}.wikipedia.org/w/api.php?`
            + `action=query&prop=pageimages&titles=${encodeURIComponent(title)}`
            + `&format=json&pithumbsize=600&pilimit=1&redirects=1`;
        const res  = await safeFetch(url);
        const data = await res.json();
        const pages = Object.values(data.query?.pages || {});
        const src   = pages[0]?.thumbnail?.source;
        return src || null;
    } catch (_) { return null; }
}

// ── Wikimedia Commons search — finds images by keyword ───────────────────────
async function getCommonsImage(query) {
    try {
        const url = `https://commons.wikimedia.org/w/api.php?`
            + `action=query&list=search&srsearch=${encodeURIComponent(query)}`
            + `&srnamespace=6&srlimit=1&format=json`;
        const res  = await safeFetch(url);
        const data = await res.json();
        const file = data.query?.search?.[0]?.title;
        if (!file) return null;

        // Get the actual image URL for this Commons file
        const infoUrl = `https://commons.wikimedia.org/w/api.php?`
            + `action=query&titles=${encodeURIComponent(file)}`
            + `&prop=imageinfo&iiprop=url&iiurlwidth=480&format=json`;
        const res2  = await safeFetch(infoUrl);
        const data2 = await res2.json();
        const pages = Object.values(data2.query?.pages || {});
        return pages[0]?.imageinfo?.[0]?.thumburl || null;
    } catch (_) { return null; }
}

// ── Google Custom Search fallback ─────────────────────────────────────────────
async function getGoogleImage(query) {
    try {
        const url = `https://www.googleapis.com/customsearch/v1?`
            + `key=${GOOGLE_API_KEY}&cx=${GOOGLE_CX}`
            + `&q=${encodeURIComponent(query)}&searchType=image&imgSize=medium&num=1`;
        const res  = await safeFetch(url);
        const data = await res.json();
        return data.items?.[0]?.link || null;
    } catch (_) { return null; }
}

// ── Try all sources in order ──────────────────────────────────────────────────
async function findImageUrl(wordEs) {
    const title = wikiTitle(wordEs);          // e.g. "Cochinita_Pibil"
    const titleEn = wikiTitle(wordEs);

    // 1. Spanish Wikipedia (exact title)
    let url = await getWikiImage(title, 'es');
    if (url) return url;

    // 2. English Wikipedia (exact title)
    url = await getWikiImage(titleEn, 'en');
    if (url) return url;

    // 3. English Wikipedia with "Mexican" context
    url = await getWikiImage(`${titleEn} (food)`, 'en');
    if (url) return url;

    // 4. Wikimedia Commons (great for food photography)
    url = await getCommonsImage(`${wordEs} Mexican food`);
    if (url) return url;

    // 5. Wikimedia Commons without context
    url = await getCommonsImage(wordEs);
    if (url) return url;

    // 6. Google Custom Search (last resort)
    url = await getGoogleImage(`${wordEs} comida mexicana`);
    return url;
}

// ── Download + compress to base64 ────────────────────────────────────────────
async function fetchAndCompress(imageUrl) {
    const res    = await safeFetch(imageUrl, 15000);
    const buffer = Buffer.from(await res.arrayBuffer());
    const out    = await sharp(buffer)
        .resize(320, 320, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 58 })
        .toBuffer();
    return `data:image/jpeg;base64,${out.toString('base64')}`;
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
    const path = `artifacts/periplo-app-v1/users/${TEACHER_UID}/quizzes`;

    console.log('🔍 Reading Firebase...\n');
    const snap = await getDocs(collection(db, path));

    const docs = snap.docs.filter(d => {
        const data = d.data();
        return data.type === 'CULTURAL_CARDS' && data.isDeleted !== true;
    });
    if (!docs.length) { console.log('No Cultural Cards found.'); process.exit(0); }
    console.log(`Found ${docs.length} set(s)\n`);

    for (const docSnap of docs) {
        const data  = docSnap.data();
        const cards = [...(data.content?.cards || [])];
        let changed = false;
        let found = 0, skipped = 0, failed = 0;

        console.log(`📋  "${data.title}" — ${cards.length} cards`);

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const pad  = `  [${String(i+1).padStart(2)}/${cards.length}]`;

            if (card.imageData) {
                // Re-compress if existing image is large (>15KB)
                // Always re-fetch with correct alias to fix wrong images
                const existingKb = Math.round(card.imageData.length * 0.75 / 1024);
                process.stdout.write(`${pad} ${card.wordEs} (replacing ${existingKb}KB)...`);
                // Re-compress oversized existing image
                process.stdout.write(`${pad} ${card.wordEs} (recompressing ${existingKb}KB)...`);
                // Fall through to re-fetch with alias
            }

            process.stdout.write(`${pad} ${card.wordEs}...`);

            try {
                const imageUrl = await findImageUrl(card.wordEs);
                if (!imageUrl) { console.log(' ✗ not found'); failed++; continue; }

                const imageData = await fetchAndCompress(imageUrl);
                const kb = Math.round(imageData.length * 0.75 / 1024);
                console.log(` ✓ ${kb}KB`);

                cards[i] = { ...card, imageData };
                changed = true;
                found++;
            } catch (e) {
                console.log(` ✗ ${e.message.slice(0, 60)}`);
                failed++;
            }

            await sleep(1500); // Wikipedia requires polite crawling
        }

        console.log(`\n  Summary: ${found} new images, ${skipped} already had one, ${failed} not found`);

        if (changed) {
            await updateDoc(doc(db, path, docSnap.id), { 'content.cards': cards });
            console.log(`  💾 Saved to Firebase\n`);
        } else {
            console.log(`  (no changes)\n`);
        }
    }

    console.log('✅ All done! Reload recuerdalo.html to see the images.');
    process.exit(0);
}

main().catch(err => { console.error('Fatal:', err.message); process.exit(1); });
