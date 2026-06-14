/* PERIPLO · Agenda + Más + BottomNav (estilo mobile-game).
   Reusa window.THEMES, window.Btn3D, window.Icon, window.DEMO.
   Exporta window.AgendaGame, window.MasGame, window.BottomNav.            */
const { useState: useStateAM } = React;

/* ─── BARRA INFERIOR COMPARTIDA ─── */
function BottomNav({ t, tab, onNav }) {
  const items = [
    { id: 'home',   label: 'Inicio', icon: 'home', ck: 'flame'  },
    { id: 'solo',   label: 'Solo',   icon: 'map',  ck: 'purple' },
    { id: 'agenda', label: 'Agenda', icon: 'cal',  ck: 'blue'   },
    { id: 'mas',    label: 'Más',    icon: 'grid', ck: 'green'  },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 60,
      background: t.navBg, backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
      borderTop: `1px solid ${t.navEdge}`,
      boxShadow: `0 -4px 22px ${t.dark ? 'rgba(0,0,0,.4)' : 'rgba(150,110,50,.1)'}`,
      padding: '8px 14px calc(10px + env(safe-area-inset-bottom,18px))',
      display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end',
    }}>
      {items.map(n => {
        const on = n.id === tab; const ac = t[n.ck];
        return (
          <button key={n.id} onClick={() => onNav(n.id)} style={{
            border: 'none', background: 'transparent', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '2px 6px', flex: 1,
          }}>
            <span style={{
              width: 52, height: 34, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: on ? `linear-gradient(150deg, ${ac.f}, ${ac.e})` : 'transparent',
              boxShadow: on ? `0 3px 0 ${ac.e}` : 'none',
              transition: 'background .15s',
            }}>
              <window.Icon d={n.icon} size={21} color={on ? '#fff' : t.faint} sw={on ? 2.6 : 2.2} />
            </span>
            <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 10.5, color: on ? ac.f : t.faint }}>{n.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   AGENDA
════════════════════════════════════════════════════════════ */
const WEEK_AG = [
  { d: 'L', has: true,  done: true },
  { d: 'M', has: false, done: false },
  { d: 'X', has: false, done: false },
  { d: 'J', has: true,  done: false, today: true },
  { d: 'V', has: false, done: false },
  { d: 'S', has: true,  done: true },
  { d: 'D', has: false, done: false },
];
const UPCOMING = [
  { day: 'JUE', dn: '16', time: '6:00 pm', topic: 'Grammar · Present Continuous', teacher: 'Teacher Beto', live: true },
  { day: 'SÁB', dn: '18', time: '11:00 am', topic: 'Speaking · Conversación', teacher: 'Teacher Ana' },
];
const TAKEN = [
  { day: 'LUN', dn: '12', topic: 'Vocabulary · Verbos', teacher: 'Teacher Ana' },
  { day: 'SÁB', dn: '10', topic: 'Listening · Práctica', teacher: 'Teacher Lu' },
];

function AgendaGame({ t = window.THEMES.light }) {
  const lbl = { fontFamily: 'Fredoka', fontWeight: 600, fontSize: 11, letterSpacing: '.13em', textTransform: 'uppercase' };
  const taken = 2, total = 3;
  return (
    <div style={{ height: '100%', background: t.bg, color: t.ink, fontFamily: 'Nunito, sans-serif' }}>
      <div style={{ height: '100%', overflow: 'auto', padding: '54px 16px 96px' }}>
        {/* título */}
        <p style={{ ...lbl, color: t.blue.f, marginBottom: 4 }}>Tu agenda</p>
        <h1 style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: 26, color: t.ink, marginBottom: 16 }}>Esta semana</h1>

        {/* meta semanal */}
        <div style={{
          position: 'relative', borderRadius: 26, overflow: 'hidden', padding: '20px',
          background: `linear-gradient(140deg, ${t.blue.f}, ${t.purple.f})`,
          boxShadow: `0 6px 0 ${t.blue.e}, ${t.softShadow}`, marginBottom: 16,
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 88% 12%, rgba(255,255,255,.3), transparent 45%)' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <p style={{ ...lbl, color: 'rgba(255,255,255,.85)', whiteSpace: 'nowrap' }}>Meta semanal</p>
                <p style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: 30, color: '#fff', lineHeight: 1, marginTop: 4 }}>
                  {taken}<span style={{ fontSize: 18, opacity: .8 }}> / {total}</span>
                </p>
              </div>
              <span style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: 12, color: '#fff',
                background: 'rgba(255,255,255,.22)', borderRadius: 999, padding: '5px 12px' }}>¡Vas bien! 🎯</span>
            </div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
              {Array.from({ length: total }).map((_, i) => (
                <div key={i} style={{ flex: 1, height: 10, borderRadius: 999,
                  background: i < taken ? '#fff' : 'rgba(255,255,255,.28)' }} />
              ))}
            </div>
            <window.Btn3D face="#fff" edge="rgba(0,0,0,.18)" big style={{ width: '100%', color: t.blue.e }}>
              <span style={{ fontSize: 18 }}>＋</span> Agendar una clase
            </window.Btn3D>
          </div>
        </div>

        {/* semana en chips */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          {WEEK_AG.map((w, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
              <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 10, color: t.ink2 }}>{w.d}</span>
              <div style={{
                width: '100%', aspectRatio: '1', borderRadius: 12,
                background: w.done ? `linear-gradient(150deg,${t.green.f},${t.green.e})`
                  : w.has ? `linear-gradient(150deg,${t.blue.f},${t.blue.e})` : t.card,
                border: w.today ? `2.5px solid ${t.flame.f}` : 'none',
                boxShadow: w.has || w.done ? `0 3px 0 ${w.done ? t.green.e : t.blue.e}` : `0 2px 0 ${t.cardEdge}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
              }}>{w.done ? '✓' : w.has ? '📚' : ''}</div>
            </div>
          ))}
        </div>

        {/* próximas */}
        <p style={{ ...lbl, color: t.ink2, margin: '0 2px 11px' }}>Próximas clases</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 20 }}>
          {UPCOMING.map((c, i) => <ClassCard key={i} t={t} c={c} />)}
        </div>

        {/* tomadas */}
        <p style={{ ...lbl, color: t.ink2, margin: '0 2px 11px' }}>Clases tomadas</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {TAKEN.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: t.card,
              borderRadius: 18, padding: '12px 14px', boxShadow: `0 3px 0 ${t.cardEdge}`, opacity: .9 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                background: t.dark ? 'rgba(46,210,126,.16)' : '#E9FBF0',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <window.Icon d="play" size={16} color={t.green.f} fill={t.green.f} sw={0} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 14, color: t.ink, lineHeight: 1.1 }}>{c.topic}</p>
                <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: 11, color: t.ink2, marginTop: 2 }}>{c.day} {c.dn} · {c.teacher}</p>
              </div>
              <span style={{ width: 26, height: 26, borderRadius: '50%', background: `linear-gradient(150deg,${t.green.f},${t.green.e})`,
                boxShadow: `0 2px 0 ${t.green.e}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <window.Icon d="bolt" size={0} color="#fff" />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClassCard({ t, c }) {
  const ac = c.live ? t.green : t.blue;
  return (
    <div style={{
      background: t.card, borderRadius: 22, padding: '15px 15px',
      border: c.live ? `2px solid ${t.green.f}` : 'none',
      boxShadow: `0 4px 0 ${t.cardEdge}, ${t.softShadow}`,
      display: 'flex', alignItems: 'center', gap: 13,
    }}>
      {/* fecha */}
      <div style={{
        width: 56, height: 60, borderRadius: 16, flexShrink: 0,
        background: `linear-gradient(150deg,${ac.f},${ac.e})`, boxShadow: `0 4px 0 ${ac.e}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 10, color: '#fff', textTransform: 'uppercase', letterSpacing: '.05em' }}>{c.day}</span>
        <span style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: 22, color: '#fff', lineHeight: 1 }}>{c.dn}</span>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        {c.live && (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 4,
            fontFamily: 'Fredoka', fontWeight: 600, fontSize: 9.5, letterSpacing: '.08em', textTransform: 'uppercase',
            color: t.green.f, background: t.dark ? 'rgba(46,210,126,.16)' : '#E9FBF0', borderRadius: 999, padding: '2px 8px' }}>
            <span style={{ width: 6, height: 6, borderRadius: 9, background: t.green.f }} /> Próxima
          </span>
        )}
        <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 15, color: t.ink, lineHeight: 1.1 }}>{c.topic}</p>
        <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: 11.5, color: t.ink2, marginTop: 3 }}>{c.time} · {c.teacher}</p>
      </div>
      <window.Btn3D face={ac.f} edge={ac.e}>Entrar</window.Btn3D>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   MÁS
════════════════════════════════════════════════════════════ */
function MasGame({ t = window.THEMES.light, theme = 'light', onTheme }) {
  const d = window.DEMO;
  const lbl = { fontFamily: 'Fredoka', fontWeight: 600, fontSize: 11, letterSpacing: '.13em', textTransform: 'uppercase' };
  const rows = [
    { emoji: '🎯', label: 'Mi Progreso',          sub: 'Skills · arquetipo',            ck: 'green'  },
    { emoji: '🛠️', label: 'Mi Taller',            sub: '2 puntos por reforzar',         ck: 'pink', badge: 2 },
    { emoji: '🎮', label: 'Patio de Juegos',      sub: 'Juegos por tema, en orden',     ck: 'yellow' },
    { emoji: '📚', label: 'Recursos del Viajero', sub: 'Lecturas · Listenings',         ck: 'blue'   },
  ];
  const Row = ({ r }) => {
    const ac = t[r.ck];
    return (
      <button className="g-tile" style={{
        width: '100%', textAlign: 'left', border: 'none', cursor: 'pointer',
        background: t.card, borderRadius: 20, padding: '13px 14px',
        display: 'flex', alignItems: 'center', gap: 13,
        boxShadow: `0 4px 0 ${t.cardEdge}, ${t.softShadow}`,
      }}>
        <span style={{ position: 'relative', flexShrink: 0 }}>
          <span style={{ width: 46, height: 46, borderRadius: 14, fontSize: 23,
            background: `linear-gradient(150deg,${ac.f},${ac.e})`, boxShadow: `0 4px 0 ${ac.e}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{r.emoji}</span>
          {r.badge && <span style={{ position: 'absolute', top: -6, right: -6, minWidth: 20, height: 20, padding: '0 5px',
            borderRadius: 999, background: t.flame.f, border: `2px solid ${t.card}`, boxShadow: `0 2px 0 ${t.flame.e}`,
            fontFamily: 'Fredoka', fontWeight: 700, fontSize: 11, color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{r.badge}</span>}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 15, color: t.ink, lineHeight: 1.1 }}>{r.label}</p>
          <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: 11.5, color: t.ink2, marginTop: 2 }}>{r.sub}</p>
        </div>
        <window.Icon d="chev" size={19} color={t.faint} />
      </button>
    );
  };
  return (
    <div style={{ height: '100%', background: t.bg, color: t.ink, fontFamily: 'Nunito, sans-serif' }}>
      <div style={{ height: '100%', overflow: 'auto', padding: '54px 16px 96px' }}>
        {/* perfil */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 15, background: t.card, borderRadius: 24, padding: 18,
          boxShadow: `0 5px 0 ${t.cardEdge}, ${t.softShadow}`, marginBottom: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', flexShrink: 0, fontSize: 32,
            background: `linear-gradient(150deg, ${t.yellow.f}, ${t.flame.f})`, boxShadow: `0 4px 0 ${t.flame.e}`,
            border: `3px solid ${t.card}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{d.avatar.emoji}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: 20, color: t.ink, lineHeight: 1.05 }}>{d.name}</h2>
            <div style={{ display: 'flex', gap: 6, marginTop: 7, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 11, color: '#fff',
                background: `linear-gradient(150deg,${t.green.f},${t.green.e})`, borderRadius: 999, padding: '3px 10px' }}>
                {d.lore.icon} {d.lore.name}</span>
              <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 11, color: '#fff',
                background: `linear-gradient(150deg,${t.flame.f},${t.flame.e})`, borderRadius: 999, padding: '3px 10px' }}>
                🔥 {d.streak}</span>
            </div>
          </div>
        </div>

        {/* aprendizaje */}
        <p style={{ ...lbl, color: t.ink2, margin: '0 2px 11px' }}>Tu aprendizaje</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
          {rows.map((r, i) => <Row key={i} r={r} />)}
        </div>

        {/* ajustes */}
        <p style={{ ...lbl, color: t.ink2, margin: '0 2px 11px' }}>Ajustes</p>
        <div style={{ background: t.card, borderRadius: 20, overflow: 'hidden', boxShadow: `0 4px 0 ${t.cardEdge}, ${t.softShadow}`, marginBottom: 18 }}>
          {/* Tema — misma fila, pero con toggle Día/Noche a la derecha */}
          <div style={{
            padding: '13px 14px', display: 'flex', alignItems: 'center', gap: 12,
            borderBottom: `1px solid ${t.line}`,
          }}>
            <span style={{ fontSize: 20, width: 30, textAlign: 'center' }}>🎨</span>
            <span style={{ flex: 1, fontFamily: 'Fredoka', fontWeight: 600, fontSize: 14.5, color: t.ink }}>Tema</span>
            <ThemeToggle t={t} theme={theme} onTheme={onTheme} />
          </div>
          {[{ emoji: '🔔', label: 'Notificaciones' }, { emoji: '🌐', label: 'Idioma · Español' }, { emoji: '❓', label: 'Ayuda y soporte' }].map((o, i, arr) => (
            <button key={i} className="g-tile" style={{
              width: '100%', textAlign: 'left', border: 'none', cursor: 'pointer', background: 'transparent',
              padding: '13px 14px', display: 'flex', alignItems: 'center', gap: 12,
              borderBottom: i < arr.length - 1 ? `1px solid ${t.line}` : 'none',
            }}>
              <span style={{ fontSize: 20, width: 30, textAlign: 'center' }}>{o.emoji}</span>
              <span style={{ flex: 1, fontFamily: 'Fredoka', fontWeight: 600, fontSize: 14.5, color: t.ink }}>{o.label}</span>
              <window.Icon d="chev" size={18} color={t.faint} />
            </button>
          ))}
        </div>

        <button style={{ width: '100%', border: `2px solid ${t.pink.f}40`, background: 'transparent', cursor: 'pointer',
          borderRadius: 16, padding: '13px', fontFamily: 'Fredoka', fontWeight: 600, fontSize: 14, color: t.pink.f }}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

/* ─── TOGGLE DÍA/NOCHE (interruptor deslizante) ─── */
function ThemeToggle({ t, theme, onTheme }) {
  const isDark = theme === 'dark';
  const W = 64, H = 32, KN = 26, PAD = 3;
  return (
    <button onClick={() => onTheme && onTheme(isDark ? 'light' : 'dark')} aria-label="Cambiar tema"
      style={{
        position: 'relative', width: W, height: H, flexShrink: 0, border: 'none', cursor: 'pointer', padding: 0,
        borderRadius: 999,
        background: isDark ? `linear-gradient(150deg,${t.purple.f},${t.purple.e})` : `linear-gradient(150deg,${t.yellow.f},${t.flame.f})`,
        boxShadow: `inset 0 2px 5px rgba(0,0,0,.22), 0 2px 0 ${isDark ? t.purple.e : t.flame.e}`,
        transition: 'background .2s',
      }}>
      {/* iconos fijos: sol izquierda, luna derecha */}
      <span style={{ position: 'absolute', left: 9, top: '50%', transform: 'translateY(-50%)', fontSize: 13, opacity: isDark ? .9 : 0, transition: 'opacity .2s' }}>☀️</span>
      <span style={{ position: 'absolute', right: 9, top: '50%', transform: 'translateY(-50%)', fontSize: 13, opacity: isDark ? 0 : .9, transition: 'opacity .2s' }}>🌙</span>
      {/* knob con el icono activo */}
      <span style={{
        position: 'absolute', top: PAD, left: isDark ? W - KN - PAD : PAD, width: KN, height: KN, borderRadius: '50%',
        background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14,
        transition: 'left .22s cubic-bezier(.34,1.56,.64,1)',
      }}>{isDark ? '🌙' : '☀️'}</span>
    </button>
  );
}

Object.assign(window, { AgendaGame, MasGame, BottomNav });
