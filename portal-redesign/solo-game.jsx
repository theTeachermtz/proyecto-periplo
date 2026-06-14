/* PERIPLO · Modo Solo rediseñado — interactivo, dos estilos de mapa.
   Estilos: 'sendero' (camino de niveles) y 'constelacion' (espacio brillante).
   Reusa de home-game.jsx: window.THEMES, window.Icon, window.Btn3D.
   Exporta window.SoloGame.                                                       */
const { useState, useRef, useEffect } = React;

/* ─── ICONOS extra ─── */
const SPATHS = {
  play: 'M7 5l12 7-12 7Z',
  check: 'M5 13l4 4L19 7',
  lock: 'M6 10V8a6 6 0 0 1 12 0v2M5 10h14v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9Z',
  back: 'M15 6l-6 6 6 6',
  chev: 'M9 6l6 6-6 6',
  home: 'M3 11.2 12 4l9 7.2M5.5 9.8V19a1 1 0 0 0 1 1H10v-5h4v5h3.5a1 1 0 0 0 1-1V9.8',
  map: 'M9 4 3 6.4v13.6L9 17.6l6 2.4 6-2.4V4l-6 2.4L9 4Zm0 0v13.6m6-11.2v13.6',
  cal: 'M4 7h16v13H4zM4 11h16M8 3v4M16 3v4',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
};
function SIcon({ d, size = 22, color = 'currentColor', sw = 2.4, fill = 'none' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
         strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d={SPATHS[d]} /></svg>
  );
}

/* ─── DATOS DEMO ─── */
const SOLO_DEMO = {
  avatar: '🦊',
  level: 'Basic', levelIcon: '🌱',
  currentWeek: 3,        // mundo activo
  doneInCurrent: 3,      // misiones hechas en el mundo activo
};
const MISSIONS = [
  { key: 'pres',  label: 'Presentación', sub: 'La explicación del tema', emoji: '📽️', ck: 'purple' },
  { key: 'fc',    label: 'Flashcards',   sub: 'Vocabulario · Verbos',    emoji: '🃏', ck: 'blue'   },
  { key: 'mem',   label: 'Memorama',     sub: 'Vocabulario · Nouns',     emoji: '🧠', ck: 'green'  },
  { key: 'read',  label: 'Reading',      sub: 'Lee y comprende',         emoji: '📖', ck: 'yellow' },
  { key: 'spell', label: 'EmojiSpell',   sub: 'Deletrea sin errores',    emoji: '😎', ck: 'pink'   },
  { key: 'list',  label: 'Listening',    sub: 'Entrena el oído',         emoji: '🎧', ck: 'blue'   },
];
const WORLDS = [
  { id: 'modal',  week: 1,  title: 'Modal Verbs',        sub: 'Can · Should · Must',  module: 'B1' },
  { id: 'presS',  week: 2,  title: 'Present Simple',     sub: 'Do/Does · 3ª persona', module: 'B1' },
  { id: 'presC',  week: 3,  title: 'Present Continuous', sub: 'To be + –ing',         module: 'B1' },
  { id: 'pastS',  week: 4,  title: 'Past Simple',        sub: 'Verbos regulares',     module: 'B1' },
  { id: 'prep',   week: 5,  title: 'Prepositions',       sub: 'Time · Place · Move',  module: 'B2' },
  { id: 'objP',   week: 6,  title: 'Object Pronouns',    sub: 'Me · You · Him…',      module: 'B2' },
  { id: 'quant',  week: 7,  title: 'Quantifiers',        sub: 'There is / are',       module: 'B2' },
  { id: 'poss',   week: 8,  title: 'Possessives',        sub: 'Mine · Yours · Hers',  module: 'B2' },
  { id: 'small',  week: 9,  title: 'Small Talk',         sub: 'First Impressions',    module: 'B-MIX' },
  { id: 'digi',   week: 10, title: 'Vida Digital',       sub: 'Tech & Social',        module: 'B-MIX' },
  { id: 'salud',  week: 11, title: 'Salud y Bienestar',  sub: 'Health & Wellness',    module: 'B-MIX' },
  { id: 'prof',   week: 12, title: 'Yo Profesional',     sub: 'Work & Career',        module: 'B-MIX' },
];
const MOD_LABEL = { 'B1': 'Módulo 1 · Cimientos', 'B2': 'Módulo 2 · Construye', 'B-MIX': 'Módulo 3 · Mundo real' };

function worldStatus(w) {
  if (w.week < SOLO_DEMO.currentWeek) return { status: 'done', done: 6 };
  if (w.week === SOLO_DEMO.currentWeek) return { status: 'active', done: SOLO_DEMO.doneInCurrent };
  return { status: 'locked', done: 0 };
}
function missionsFor(w) {
  const { done, status } = worldStatus(w);
  return MISSIONS.map((m, i) => ({
    ...m, idx: i + 1,
    state: status === 'locked' ? 'locked'
      : i < done ? 'done' : i === done ? 'active' : 'locked',
  }));
}

/* ════════════════════════════════════════════════════════════
   HOJA DE MISIÓN
════════════════════════════════════════════════════════════ */
function MissionSheet({ t, data, onClose }) {
  if (!data) return null;
  const { m } = data;
  const ac = t[m.ck];
  const locked = m.state === 'locked', done = m.state === 'done';
  const eyebrow = `Misión ${m.idx} de 6`;
  const stateText = locked ? 'Termina la misión anterior para desbloquearla.'
    : done ? 'Ya la superaste. Puedes volver a jugarla cuando quieras.'
    : '¡Es tu turno! Complétala para avanzar.';
  return (
    <div onClick={onClose} style={{ position: 'absolute', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-end' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,20,.5)', backdropFilter: 'blur(4px)' }} />
      <div onClick={e => e.stopPropagation()} className="sheet-up" style={{
        position: 'relative', width: '100%', background: t.card,
        borderRadius: '30px 30px 0 0', borderTop: `1px solid ${t.line}`,
        padding: '14px 20px calc(20px + env(safe-area-inset-bottom,18px))',
        boxShadow: '0 -10px 40px rgba(0,0,0,.3)',
      }}>
        <div style={{ width: 44, height: 5, borderRadius: 9, background: t.line, margin: '0 auto 18px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
          <div style={{
            width: 62, height: 62, borderRadius: 19, flexShrink: 0, fontSize: 31,
            background: locked ? t.cardSub : `linear-gradient(150deg, ${ac.f}, ${ac.e})`,
            boxShadow: locked ? 'none' : `0 5px 0 ${ac.e}`,
            filter: locked ? 'grayscale(1)' : 'none', opacity: locked ? .7 : 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{m.emoji}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 11, letterSpacing: '.1em',
              textTransform: 'uppercase', color: locked ? t.ink2 : ac.f }}>{eyebrow}</p>
            <h3 style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: 23, color: t.ink, lineHeight: 1.05, marginTop: 2 }}>{m.label}</h3>
          </div>
        </div>
        <p style={{ fontFamily: 'Nunito', fontWeight: 600, fontSize: 14, color: t.ink2, lineHeight: 1.5, marginBottom: 18 }}>
          {m.sub}. {stateText}
        </p>
        {locked ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
            padding: 15, borderRadius: 16, background: t.cardSub, color: t.ink2 }}>
            <SIcon d="lock" size={17} color={t.ink2} /><span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 15 }}>Misión bloqueada</span>
          </div>
        ) : (
          <window.Btn3D face={done ? t.blue.f : ac.f} edge={done ? t.blue.e : ac.e} big style={{ width: '100%' }} onClick={onClose}>
            <SIcon d="play" size={19} color="#fff" fill="#fff" sw={0} /> {done ? 'Volver a jugar' : 'Empezar misión'}
          </window.Btn3D>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   VISTA DE MUNDO — 6 misiones (compartida por ambos mapas)
════════════════════════════════════════════════════════════ */
function WorldView({ t, world, onBack, onMission }) {
  const ms = missionsFor(world);
  const { done, status } = worldStatus(world);
  const pct = Math.round(done / 6 * 100);
  const active = ms.find(m => m.state === 'active');
  return (
    <div style={{ padding: '8px 16px 16px' }}>
      <button onClick={onBack} style={{
        display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 14, cursor: 'pointer',
        padding: '8px 14px 8px 10px', borderRadius: 999, border: 'none', background: t.card,
        boxShadow: `0 3px 0 ${t.cardEdge}, ${t.softShadow}`,
      }}>
        <SIcon d="back" size={15} color={t.ink} sw={2.8} />
        <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 13, color: t.ink }}>Volver al mapa</span>
      </button>

      {/* header del mundo */}
      <div style={{
        position: 'relative', borderRadius: 26, overflow: 'hidden', padding: '20px 20px',
        background: `linear-gradient(140deg, ${t.purple.f}, ${t.blue.f})`,
        boxShadow: `0 6px 0 ${t.purple.e}, ${t.softShadow}`, marginBottom: 18,
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 85% 10%, rgba(255,255,255,.3), transparent 45%)' }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 76, height: 76, flexShrink: 0, borderRadius: '50%', position: 'relative',
            background: 'rgba(255,255,255,.18)', border: '3px solid rgba(255,255,255,.6)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: 24, color: '#fff', lineHeight: 1 }}>{pct}%</span>
            <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 8.5, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.85)' }}>logrado</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.85)' }}>
              {world.module} · Parada {world.week}
            </p>
            <h2 style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: 25, color: '#fff', lineHeight: 1.05, margin: '3px 0 5px' }}>{world.title}</h2>
            <span style={{ display: 'inline-block', fontFamily: 'Fredoka', fontWeight: 600, fontSize: 12, color: '#fff',
              background: 'rgba(255,255,255,.22)', borderRadius: 999, padding: '3px 11px' }}>{done}/6 misiones</span>
          </div>
        </div>
      </div>

      <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 11, letterSpacing: '.13em', textTransform: 'uppercase', color: t.ink2, margin: '0 2px 12px' }}>
        Misiones del mundo
      </p>

      {/* lista de misiones (trail) */}
      <div style={{ position: 'relative' }}>
        {ms.map((m, i) => {
          const ac = t[m.ck];
          const locked = m.state === 'locked', isDone = m.state === 'done', act = m.state === 'active';
          return (
            <div key={m.key} style={{ display: 'flex', gap: 13, marginBottom: i < 5 ? 11 : 0 }}>
              {/* spine + node number */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 30, flexShrink: 0 }}>
                <div style={{
                  width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                  background: isDone ? `linear-gradient(150deg,${t.green.f},${t.green.e})`
                    : act ? `linear-gradient(150deg,${ac.f},${ac.e})` : t.cardSub,
                  boxShadow: locked ? 'none' : `0 3px 0 ${isDone ? t.green.e : ac.e}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Fredoka', fontWeight: 700, fontSize: 13,
                  color: locked ? t.ink2 : '#fff',
                }}>
                  {isDone ? <SIcon d="check" size={15} color="#fff" sw={3} /> : locked ? <SIcon d="lock" size={13} color={t.ink2} /> : m.idx}
                </div>
                {i < 5 && <div style={{ flex: 1, width: 3, background: t.line, borderRadius: 9, marginTop: 4 }} />}
              </div>
              {/* card */}
              <button onClick={() => !locked && onMission({ m })} style={{
                flex: 1, textAlign: 'left', border: act ? `2px solid ${ac.f}` : 'none', cursor: locked ? 'default' : 'pointer',
                background: t.card, borderRadius: 18, padding: '12px 13px',
                display: 'flex', alignItems: 'center', gap: 12, opacity: locked ? .6 : 1,
                boxShadow: locked ? `0 2px 0 ${t.cardEdge}` : `0 4px 0 ${t.cardEdge}, ${t.softShadow}`,
                marginBottom: i < 5 ? 0 : 6,
              }} className={locked ? '' : 'g-tile'}>
                <span style={{
                  width: 44, height: 44, borderRadius: 13, flexShrink: 0, fontSize: 23,
                  background: locked ? t.cardSub : `linear-gradient(150deg,${ac.f}22,${ac.f}0a)`,
                  filter: locked ? 'grayscale(1)' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{m.emoji}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 15, color: t.ink, lineHeight: 1.1 }}>{m.label}</p>
                  <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: 11.5,
                    color: isDone ? t.green.f : act ? ac.f : t.ink2, marginTop: 2 }}>
                    {isDone ? '✓ Superada' : act ? 'Aquí vas · ¡juega!' : locked ? 'Bloqueada' : m.sub}
                  </p>
                </div>
                {!locked && <SIcon d={isDone ? 'play' : 'chev'} size={17} color={t.faint} fill={isDone ? t.faint : 'none'} sw={isDone ? 0 : 2.4} />}
              </button>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div style={{ marginTop: 18 }}>
        {active ? (
          <window.Btn3D face={t.green.f} edge={t.green.e} big style={{ width: '100%' }} onClick={() => onMission({ m: active })}>
            <SIcon d="play" size={19} color="#fff" fill="#fff" sw={0} /> Misión {active.idx} · {active.label}
          </window.Btn3D>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 16, borderRadius: 18,
            background: t.dark ? 'rgba(46,210,126,.14)' : '#E9FBF0', color: t.green.f }}>
            <SIcon d="check" size={18} color={t.green.f} sw={3} />
            <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 15 }}>¡Mundo conquistado! Repasa lo que quieras</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   MAPA · SENDERO (camino de niveles)
════════════════════════════════════════════════════════════ */
function MapSendero({ t, onWorld }) {
  const ref = useRef(null);
  const [W, setW] = useState(402);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
    ro.observe(el); setW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const STEP = 134, TOP = 112, GAP = 58;
  let y = TOP, lastMod = null;
  const nodes = WORLDS.map((w, i) => {
    const modStart = w.module !== lastMod;
    if (modStart && lastMod !== null) y += GAP;
    lastMod = w.module;
    const cx = W * (0.5 + 0.26 * Math.sin(i * 0.95));
    const node = { ...w, ...worldStatus(w), cx, cy: y, modStart };
    y += STEP;
    return node;
  });
  const H = y + 30;
  const active = nodes.find(n => n.status === 'active');
  const linePath = nodes.map((n, i) => `${i ? 'L' : 'M'} ${n.cx.toFixed(1)} ${n.cy}`).join(' ');
  const litPath = active ? nodes.filter(n => n.cy <= active.cy).map((n, i) => `${i ? 'L' : 'M'} ${n.cx.toFixed(1)} ${n.cy}`).join(' ') : '';

  return (
    <div ref={ref} style={{ position: 'relative', height: H, margin: '0 0 4px' }}>
      {/* trail */}
      <svg width="100%" height={H} style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <path d={linePath} fill="none" stroke={t.dark ? 'rgba(255,255,255,.12)' : 'rgba(120,90,40,.16)'} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 20" />
        {litPath && <path d={litPath} fill="none" stroke={t.green.f} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 20" style={{ opacity: .9 }} />}
      </svg>
      {/* module banners */}
      {nodes.filter(n => n.modStart).map(n => (
        <div key={'m' + n.module} style={{
          position: 'absolute', top: n.cy - 62, left: '50%', transform: 'translateX(-50%)', zIndex: 2,
          fontFamily: 'Fredoka', fontWeight: 600, fontSize: 11, letterSpacing: '.08em', color: '#fff',
          background: `linear-gradient(150deg,${t.yellow.f},${t.flame.f})`, boxShadow: `0 3px 0 ${t.flame.e}`,
          borderRadius: 999, padding: '5px 16px', whiteSpace: 'nowrap',
        }}>{MOD_LABEL[n.module]}</div>
      ))}
      {/* nodes */}
      {nodes.map(n => {
        const locked = n.status === 'locked', done = n.status === 'done', act = n.status === 'active';
        const R = act ? 40 : 33;
        const face = done ? t.green : act ? t.blue : null;
        return (
          <div key={n.id} style={{ position: 'absolute', left: n.cx, top: n.cy, transform: 'translate(-50%,-50%)', zIndex: 3 }}>
            {/* avatar sobre el activo */}
            {act && (
              <div className="bob" style={{
                position: 'absolute', top: -20, left: '84%', zIndex: 5,
                width: 38, height: 38, borderRadius: '50%', background: `linear-gradient(150deg,${t.yellow.f},${t.flame.f})`,
                border: `2.5px solid ${t.card}`, boxShadow: `0 4px 0 ${t.flame.e}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
              }}>{SOLO_DEMO.avatar}</div>
            )}
            <button onClick={() => !locked && onWorld(n)} className={locked ? '' : 'g-node'} style={{
              width: R * 2, height: R * 2, borderRadius: '50%', border: 'none', padding: 0,
              cursor: locked ? 'default' : 'pointer', position: 'relative',
              background: locked ? t.cardSub : `linear-gradient(150deg,${face.f},${face.e})`,
              boxShadow: locked ? `inset 0 -4px 0 ${t.cardEdge}` : `0 6px 0 ${face.e}, 0 10px 18px rgba(0,0,0,.18)`,
              border: act ? `3px solid ${t.card}` : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {done ? <SIcon d="check" size={28} color="#fff" sw={3.2} />
                : locked ? <SIcon d="lock" size={22} color={t.faint} />
                : <span style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: 24, color: '#fff' }}>{n.week}</span>}
              {/* progreso del activo */}
              {act && (
                <span style={{ position: 'absolute', bottom: -7, left: '50%', transform: 'translateX(-50%)',
                  fontFamily: 'Fredoka', fontWeight: 700, fontSize: 10, color: '#fff', whiteSpace: 'nowrap',
                  background: t.blue.e, borderRadius: 999, padding: '1px 8px' }}>{n.done}/6</span>
              )}
            </button>
            {/* etiqueta */}
            <div style={{ position: 'absolute', top: R * 2 + (act ? 22 : 6), left: '50%', transform: 'translateX(-50%)',
              width: 122, textAlign: 'center', pointerEvents: 'none', opacity: locked ? .55 : 1 }}>
              <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 13, color: t.ink, lineHeight: 1.1 }}>{n.title}</p>
              <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: 10, color: done ? t.green.f : act ? t.blue.f : t.ink2, marginTop: 1 }}>
                {done ? '✓ Completado' : act ? 'Aquí vas' : 'Bloqueado'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   MAPA · CONSTELACIÓN (espacio brillante)
════════════════════════════════════════════════════════════ */
const STAR_DUST = [[12,40],[28,14],[48,60],[66,24],[84,48],[20,84],[40,30],[58,90],[76,70],[90,18],[8,64],[34,72],[52,18],[70,50],[88,86],[16,22],[44,96],[62,44],[80,32],[96,60],[5,35],[55,10],[78,38],[18,92],[65,78],[87,28],[11,50]];
function MapConstelacion({ t, onWorld }) {
  const ref = useRef(null);
  const [W, setW] = useState(402);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
    ro.observe(el); setW(el.clientWidth);
    return () => ro.disconnect();
  }, []);
  const XF = [0.24, 0.7, 0.4, 0.76];
  const STEP = 100, TOP = 58, GAP = 46;
  let y = TOP, lastMod = null;
  const nodes = WORLDS.map((w, i) => {
    const modStart = w.module !== lastMod;
    if (modStart && lastMod !== null) y += GAP;
    lastMod = w.module;
    const node = { ...w, ...worldStatus(w), cx: XF[i % 4] * W, cy: y, modStart };
    y += STEP;
    return node;
  });
  const H = y + 30;
  const active = nodes.find(n => n.status === 'active');
  const line = nodes.map((n, i) => `${i ? 'L' : 'M'} ${n.cx.toFixed(1)} ${n.cy}`).join(' ');
  const lit = active ? nodes.filter(n => n.cy <= active.cy).map((n, i) => `${i ? 'L' : 'M'} ${n.cx.toFixed(1)} ${n.cy}`).join(' ') : '';
  const COLORS = { done: t.green, active: t.blue };

  return (
    <div ref={ref} style={{
      position: 'relative', height: H, margin: '0 0 4px', borderRadius: 0,
      background: 'radial-gradient(130% 70% at 50% 0%, #2A2150 0%, #181233 50%, #0E0A22 100%)',
    }}>
      {/* polvo de estrellas */}
      {STAR_DUST.map(([x, yp], i) => (
        <span key={i} style={{ position: 'absolute', left: `${x}%`, top: `${yp / 100 * H}px`,
          width: i % 4 === 0 ? 3 : 2, height: i % 4 === 0 ? 3 : 2, borderRadius: 9,
          background: '#fff', opacity: i % 3 === 0 ? .6 : .28, pointerEvents: 'none' }} />
      ))}
      {/* líneas */}
      <svg width="100%" height={H} style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <path d={line} fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" />
        {lit && <path d={lit} fill="none" stroke={t.blue.f} strokeWidth="2.5" strokeLinecap="round" style={{ opacity: .85 }} />}
      </svg>
      {/* module labels */}
      {nodes.filter(n => n.modStart).map(n => (
        <div key={'m' + n.module} style={{ position: 'absolute', top: n.cy - 38, left: 16, zIndex: 2 }}>
          <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: t.yellow.f }}>{n.module} · {MOD_LABEL[n.module].split('·')[1]}</span>
        </div>
      ))}
      {/* estrellas */}
      {nodes.map(n => {
        const locked = n.status === 'locked', done = n.status === 'done', act = n.status === 'active';
        const c = done ? COLORS.done : act ? COLORS.active : null;
        const R = act ? 30 : done ? 25 : 24;
        return (
          <div key={n.id} style={{ position: 'absolute', left: n.cx, top: n.cy, transform: 'translate(-50%,-50%)', zIndex: 3 }}>
            {act && (
              <div className="bob" style={{
                position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)', zIndex: 5,
                width: 34, height: 34, borderRadius: '50%', background: `${t.yellow.f}33`, border: `2.5px solid ${t.yellow.f}`,
                boxShadow: `0 0 16px ${t.yellow.f}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
              }}>{SOLO_DEMO.avatar}</div>
            )}
            <button onClick={() => !locked && onWorld(n)} className={locked ? '' : 'g-node'} style={{
              width: R * 2, height: R * 2, borderRadius: '50%', border: 'none', padding: 0,
              cursor: locked ? 'default' : 'pointer', position: 'relative',
              background: locked ? 'rgba(255,255,255,.07)'
                : `radial-gradient(circle at 36% 30%, #fff, ${c.f} 48%, ${c.e} 100%)`,
              boxShadow: act ? `0 0 0 7px ${c.f}22, 0 0 30px ${c.f}` : locked ? 'inset 0 0 0 1px rgba(255,255,255,.12)' : `0 0 18px ${c.f}aa`,
              border: locked ? '1.5px dashed rgba(255,255,255,.25)' : `1.5px solid ${c ? c.f : '#fff'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {done ? <SIcon d="check" size={22} color="#0E0A22" sw={3.4} />
                : locked ? <SIcon d="lock" size={18} color="rgba(255,255,255,.5)" />
                : <span style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: 20, color: '#0E0A22' }}>{n.week}</span>}
            </button>
            <div style={{ position: 'absolute', top: R * 2 + 7, left: '50%', transform: 'translateX(-50%)',
              width: 120, textAlign: 'center', pointerEvents: 'none', opacity: locked ? .5 : 1 }}>
              <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 12.5, color: '#FBF7FF', lineHeight: 1.1 }}>{n.title}</p>
              <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: 9.5, color: done ? t.green.f : act ? t.blue.f : 'rgba(255,255,255,.5)', marginTop: 1 }}>
                {act ? `${n.done}/6 · aquí vas` : done ? 'Trazada' : 'Oculta'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   SOLO GAME — shell + state machine
════════════════════════════════════════════════════════════ */
function SoloGame({ t = window.THEMES.light, style = 'constelacion' }) {
  const [world, setWorld] = useState(null);
  const [sheet, setSheet] = useState(null);
  const isConst = style === 'constelacion';
  const unlocked = WORLDS.filter(w => worldStatus(w).status !== 'locked').length;

  // En constelación, el mapa trae su propio fondo espacial oscuro.
  const screenBg = isConst && !world ? '#0E0A22' : t.bg;

  return (
    <div style={{ position: 'relative', height: '100%', background: screenBg, color: t.ink,
      fontFamily: 'Nunito, sans-serif', display: 'flex', flexDirection: 'column' }}>
      {/* scroll area */}
      <div style={{ flex: 1, overflow: 'auto', paddingBottom: 90 }}>
        {!world && (
          <div style={{ padding: '54px 0 14px' }}>
            {/* header */}
            <div style={{ padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 11, letterSpacing: '.13em', textTransform: 'uppercase',
                  color: isConst ? t.blue.f : t.purple.f }}>Modo Solo</p>
                <h1 style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: 25, color: isConst ? '#FBF7FF' : t.ink, lineHeight: 1.05, marginTop: 2 }}>
                  {isConst ? 'Constelación Basic' : 'Tu sendero · Basic'}
                </h1>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0,
                fontFamily: 'Fredoka', fontWeight: 600, fontSize: 13, color: isConst ? '#FBF7FF' : t.ink,
                background: isConst ? 'rgba(255,255,255,.1)' : t.card, borderRadius: 999, padding: '6px 13px',
                boxShadow: isConst ? 'none' : `0 3px 0 ${t.cardEdge}` }}>
                {SOLO_DEMO.levelIcon} {SOLO_DEMO.level}
              </span>
            </div>
            {/* mapa */}
            {isConst ? <MapConstelacion t={t} onWorld={setWorld} /> : <MapSendero t={t} onWorld={setWorld} />}
            {/* footer */}
            <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: 12, textAlign: 'center', padding: '14px 24px 0',
              color: isConst ? 'rgba(255,255,255,.6)' : t.ink2, lineHeight: 1.5 }}>
              {unlocked} de {WORLDS.length} mundos desbloqueados · avanza a tu ritmo 🚀
            </p>
          </div>
        )}
        {world && (
          <div className="zoom-in" style={{ paddingTop: 46 }}>
            <WorldView t={t} world={world} onBack={() => setWorld(null)} onMission={setSheet} />
          </div>
        )}
      </div>

      <MissionSheet t={t} data={sheet} onClose={() => setSheet(null)} />
    </div>
  );
}

Object.assign(window, { SoloGame });
