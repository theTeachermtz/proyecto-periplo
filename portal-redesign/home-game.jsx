/* PERIPLO · Inicio rediseñado — versión "mobile game" (brillante, chunky, dopamínico)
   Pantalla Inicio themeable. Exporta window.HomeGame, window.DEMO, window.THEMES.
   Datos demo (sin Firebase).                                                        */

/* ─────────────────────────────────────────────────────────────
   DATOS DEMO
───────────────────────────────────────────────────────────── */
const DEMO = {
  name: 'Sofía Ramírez',
  firstName: 'Sofía',
  avatar: { emoji: '🦊' },
  level: 'basic',
  lore: { name: 'Dreamer', icon: '🌱' },
  arch: { name: 'Explorer', emoji: '🗺️' },
  streak: 12,
  xp: 2480,
  module: 'Present Continuous',
  moduleSub: 'To be + –ing',
  moduleProgress: 0.62,           // 62%
  missionN: 4, missionTotal: 6,   // misión 4 de 6
  week: [1, 1, 1, 1, 0, 0, 0],    // L M X J V S D — 1=hecho ; "hoy" = primer 0 - 1
  todayIdx: 3,                    // J = hoy
  classesPerWeek: 3,
  classesTaken: 2,
  nextClass: { day: 'Mar', time: '5:00 pm', topic: 'Speaking · Conversación' },
  weakCount: 2,
  topicsOpen: 8,
  resources: 14,
};
const DAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

/* ─────────────────────────────────────────────────────────────
   TEMAS (tokens)
───────────────────────────────────────────────────────────── */
const THEMES = {
  light: {
    name: 'Día', dark: false,
    bg: 'radial-gradient(120% 80% at 50% -10%, #FFF4DD 0%, #FCEAC9 55%, #F6DEB4 100%)',
    ink: '#33303B', ink2: '#8A8295', faint: '#B6AEBC',
    card: '#FFFFFF', cardSub: '#FBF4EA', line: 'rgba(50,40,30,0.08)',
    cardEdge: '#EAD9BE',                       // borde inferior 3D de tarjetas
    cardShadow: '0 4px 0 #EAD9BE, 0 12px 22px rgba(150,110,50,0.12)',
    softShadow: '0 8px 20px rgba(150,110,50,0.10)',
    flame: { f: '#FF6A3D', e: '#D8431A' },
    green: { f: '#22B26A', e: '#178A4F' },
    blue:  { f: '#3B9BF0', e: '#1F73C9' },
    yellow:{ f: '#FFC22E', e: '#E29400' },
    purple:{ f: '#8B6CF0', e: '#6747D2' },
    pink:  { f: '#FF5C8A', e: '#DB335F' },
    heroGrad: 'linear-gradient(135deg, #FF8A3D 0%, #FF5C6E 60%, #FF4D8D 100%)',
    heroEdge: '#D8431A',
    navBg: 'rgba(255,255,255,0.92)', navEdge: 'rgba(50,40,30,0.07)',
    statusDark: false,
  },
  dark: {
    name: 'Noche', dark: true,
    bg: 'radial-gradient(120% 80% at 50% -10%, #2A2150 0%, #1B1638 50%, #120F26 100%)',
    ink: '#FBF7FF', ink2: '#A79FC9', faint: '#6E668F',
    card: '#2A2350', cardSub: '#221C44', line: 'rgba(255,255,255,0.09)',
    cardEdge: '#15102E',
    cardShadow: '0 4px 0 #15102E, 0 12px 24px rgba(0,0,0,0.4)',
    softShadow: '0 10px 26px rgba(0,0,0,0.4)',
    flame: { f: '#FF7A45', e: '#C9461C' },
    green: { f: '#2ED27E', e: '#19914F' },
    blue:  { f: '#54A9FF', e: '#2E72CC' },
    yellow:{ f: '#FFCE3D', e: '#D89C00' },
    purple:{ f: '#A98BFF', e: '#7553E0' },
    pink:  { f: '#FF6E9E', e: '#D43E72' },
    heroGrad: 'linear-gradient(135deg, #FF8A3D 0%, #FF5168 58%, #E83C8E 100%)',
    heroEdge: '#B53216',
    navBg: 'rgba(36,30,68,0.94)', navEdge: 'rgba(255,255,255,0.08)',
    statusDark: true,
  },
};

/* ─────────────────────────────────────────────────────────────
   ICONOS
───────────────────────────────────────────────────────────── */
const IPATHS = {
  home: 'M3 11.2 12 4l9 7.2M5.5 9.8V19a1 1 0 0 0 1 1H10v-5h4v5h3.5a1 1 0 0 0 1-1V9.8',
  map:  'M9 4 3 6.4v13.6L9 17.6l6 2.4 6-2.4V4l-6 2.4L9 4Zm0 0v13.6m6-11.2v13.6',
  cal:  'M4 7h16v13H4zM4 11h16M8 3v4M16 3v4',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  play: 'M7 5l12 7-12 7Z',
  chev: 'M9 6l6 6-6 6',
  bolt: 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z',
};
function Icon({ d, size = 22, color = 'currentColor', sw = 2.4, fill = 'none' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
         strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d={IPATHS[d]} />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   BOTÓN 3D PRESIONABLE
───────────────────────────────────────────────────────────── */
function Btn3D({ face, edge, children, style, big, onClick }) {
  return (
    <button onClick={onClick} className="g-btn" style={{
      '--c': face, '--c2': edge, background: face,
      border: 'none', cursor: 'pointer', color: '#fff', whiteSpace: 'nowrap',
      borderRadius: big ? 20 : 16, padding: big ? '15px 22px' : '11px 16px',
      fontFamily: 'Fredoka, sans-serif', fontWeight: 600,
      fontSize: big ? 18 : 15, letterSpacing: '.01em',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
      ...style,
    }}>{children}</button>
  );
}

/* ─────────────────────────────────────────────────────────────
   PANTALLA INICIO
───────────────────────────────────────────────────────────── */
function HomeGame({ t = THEMES.light, d = DEMO, onNav }) {
  const lbl = { fontFamily: 'Fredoka, sans-serif', fontWeight: 600, fontSize: 11,
                letterSpacing: '.13em', textTransform: 'uppercase' };
  const tile = (emoji, title, sub, accent, onClick) => (
    <button onClick={onClick} className="g-tile" style={{
      '--edge': t.cardEdge,
      background: t.card, border: 'none', cursor: 'pointer', textAlign: 'left',
      borderRadius: 22, padding: '15px 13px',
      display: 'flex', flexDirection: 'column', gap: 12,
      boxShadow: `0 4px 0 ${t.cardEdge}, ${t.softShadow}`,
    }}>
      <span style={{
        width: 48, height: 48, borderRadius: 15, flexShrink: 0,
        background: `linear-gradient(150deg, ${accent.f}, ${accent.e})`,
        boxShadow: `0 4px 0 ${accent.e}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 25,
      }}>{emoji}</span>
      <div>
        <p style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 600, fontSize: 15, color: t.ink, lineHeight: 1.1 }}>{title}</p>
        <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: 11.5, color: accent.f, marginTop: 3 }}>{sub}</p>
      </div>
    </button>
  );

  return (
    <div style={{
      height: '100%', background: t.bg, color: t.ink,
      fontFamily: 'Nunito, sans-serif', display: 'flex', flexDirection: 'column',
    }}>
      {/* ── scroll area ── */}
      <div style={{ flex: 1, overflow: 'auto', padding: '54px 16px 96px' }}>

        {/* TOP BAR */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 18 }}>
          <div style={{
            width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
            background: `linear-gradient(150deg, ${t.yellow.f}, ${t.flame.f})`,
            boxShadow: `0 3px 0 ${t.flame.e}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
            border: `2.5px solid ${t.card}`,
          }}>{d.avatar.emoji}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: 12.5, color: t.ink2 }}>¡Hola de nuevo!</p>
            <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 19, color: t.ink, lineHeight: 1.05 }}>{d.firstName} 👋</p>
          </div>
          {/* XP coin */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0,
            background: t.card, borderRadius: 999, padding: '7px 13px 7px 9px',
            boxShadow: `0 3px 0 ${t.cardEdge}, ${t.softShadow}`,
          }}>
            <span style={{
              width: 22, height: 22, borderRadius: '50%', fontSize: 13,
              background: `linear-gradient(150deg, ${t.yellow.f}, ${t.yellow.e})`,
              boxShadow: `0 2px 0 ${t.yellow.e}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>⭐</span>
            <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 14.5, color: t.ink }}>{d.xp.toLocaleString()}</span>
          </div>
        </div>

        {/* ── STREAK HERO ── */}
        <div style={{
          position: 'relative', borderRadius: 28, overflow: 'hidden',
          background: t.heroGrad, boxShadow: `0 6px 0 ${t.heroEdge}, 0 16px 30px rgba(216,67,26,0.32)`,
          padding: '20px 20px 18px', marginBottom: 16,
        }}>
          {/* sparkle deco */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(circle at 88% 12%, rgba(255,255,255,.35), transparent 42%)' }} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ position: 'relative', flexShrink: 0, width: 78, height: 78,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 64, filter: 'drop-shadow(0 4px 6px rgba(120,20,0,.35))' }}>🔥</span>
              <span style={{ position: 'absolute', fontFamily: 'Fredoka', fontWeight: 700,
                fontSize: 30, color: '#fff', textShadow: '0 2px 4px rgba(150,30,0,.5)', marginTop: 6 }}>{d.streak}</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ ...lbl, color: 'rgba(255,255,255,.85)' }}>Racha de fuego</p>
              <p style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: 27, color: '#fff', lineHeight: 1, margin: '3px 0 5px' }}>
                {d.streak} días seguidos
              </p>
              <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: 12.5, color: 'rgba(255,255,255,.92)' }}>
                ¡Juega hoy y suma el día {d.streak + 1}! 💪
              </p>
            </div>
          </div>
          {/* week strip */}
          <div style={{ position: 'relative', display: 'flex', gap: 6, marginTop: 16 }}>
            {DAYS.map((dy, i) => {
              const done = d.week[i] === 1;
              const today = i === d.todayIdx;
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 10, color: 'rgba(255,255,255,.8)' }}>{dy}</span>
                  <div style={{
                    width: '100%', aspectRatio: '1', borderRadius: 11,
                    background: done ? 'rgba(255,255,255,.96)' : 'rgba(255,255,255,.18)',
                    border: today ? '2.5px solid #fff' : '2.5px solid transparent',
                    boxShadow: today ? '0 0 0 3px rgba(255,255,255,.35)' : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 15,
                  }}>{done ? '🔥' : today ? <span style={{ fontFamily:'Fredoka',fontWeight:700,fontSize:13,color:'#fff' }}>?</span> : ''}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── MISIÓN DE HOY (CTA primario) ── */}
        <div style={{
          background: t.card, borderRadius: 26, padding: 18, marginBottom: 16,
          boxShadow: `0 5px 0 ${t.cardEdge}, ${t.softShadow}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 13, gap: 8 }}>
            <p style={{ ...lbl, color: t.blue.f, whiteSpace: 'nowrap', letterSpacing: '.1em' }}>◆ Misión de hoy</p>
            <span style={{
              fontFamily: 'Fredoka', fontWeight: 600, fontSize: 11, color: t.ink2,
              background: t.cardSub, borderRadius: 999, padding: '3px 10px',
            }}>Misión {d.missionN}/{d.missionTotal}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 14 }}>
            <div style={{
              width: 54, height: 54, borderRadius: 17, flexShrink: 0, fontSize: 28,
              background: `linear-gradient(150deg, ${t.blue.f}, ${t.purple.f})`,
              boxShadow: `0 4px 0 ${t.blue.e}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>🚀</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 18, color: t.ink, lineHeight: 1.05 }}>{d.module}</p>
              <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: 12, color: t.ink2, marginTop: 2 }}>{d.moduleSub}</p>
            </div>
          </div>
          {/* progress */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 15 }}>
            <div style={{ flex: 1, height: 12, borderRadius: 999, background: t.cardSub, overflow: 'hidden',
              boxShadow: `inset 0 2px 4px ${t.dark ? 'rgba(0,0,0,.35)' : 'rgba(0,0,0,.08)'}` }}>
              <div style={{ width: `${d.moduleProgress * 100}%`, height: '100%', borderRadius: 999,
                background: `linear-gradient(90deg, ${t.green.f}, ${t.blue.f})` }} />
            </div>
            <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 13, color: t.green.f }}>{Math.round(d.moduleProgress * 100)}%</span>
          </div>
          <Btn3D face={t.green.f} edge={t.green.e} big style={{ width: '100%' }}>
            <Icon d="play" size={20} color="#fff" fill="#fff" sw={0} /> Continuar mi viaje
          </Btn3D>
        </div>

        {/* ── EXPLORA (tiles) ── */}
        <p style={{ ...lbl, color: t.ink2, margin: '4px 2px 10px' }}>Explora</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 16 }}>
          {tile('🎮', 'Patio', `${d.topicsOpen} temas`, t.yellow)}
          {tile('🚀', 'Solo', 'Tu viaje', t.purple, () => onNav && onNav('solo'))}
          {tile('📚', 'Recursos', `${d.resources} listos`, t.blue)}
        </div>

        {/* ── ALERTA · TALLER ── */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 13, marginBottom: 16,
          background: t.dark ? 'rgba(255,92,138,0.14)' : '#FFF0F4',
          border: `2px solid ${t.pink.f}3a`, borderRadius: 22, padding: '14px 15px',
        }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{
              width: 46, height: 46, borderRadius: 14, fontSize: 24,
              background: `linear-gradient(150deg, ${t.pink.f}, ${t.pink.e})`,
              boxShadow: `0 4px 0 ${t.pink.e}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>🛠️</div>
            <span style={{
              position: 'absolute', top: -6, right: -6, minWidth: 22, height: 22, padding: '0 5px',
              borderRadius: 999, background: t.flame.f, border: `2px solid ${t.card}`,
              boxShadow: `0 2px 0 ${t.flame.e}`,
              fontFamily: 'Fredoka', fontWeight: 700, fontSize: 12, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{d.weakCount}</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 15, color: t.ink, lineHeight: 1.1 }}>Tu Taller te espera</p>
            <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: 12, color: t.ink2, marginTop: 2 }}>
              {d.weakCount} puntos por reforzar
            </p>
          </div>
          <Btn3D face={t.pink.f} edge={t.pink.e}>Pulir</Btn3D>
        </div>

        {/* ── PRÓXIMA CLASE ── */}
        <button onClick={() => onNav && onNav('agenda')} className="g-tile" style={{
          width: '100%', textAlign: 'left', border: 'none', cursor: 'pointer',
          background: t.card, borderRadius: 22, padding: '14px 15px',
          display: 'flex', alignItems: 'center', gap: 13,
          boxShadow: `0 4px 0 ${t.cardEdge}, ${t.softShadow}`,
        }}>
          <div style={{
            width: 50, height: 50, borderRadius: 15, flexShrink: 0,
            background: t.dark ? 'rgba(84,169,255,0.16)' : '#EAF4FF',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 10, color: t.blue.f, textTransform: 'uppercase' }}>{d.nextClass.day}</span>
            <span style={{ fontFamily: 'Fredoka', fontWeight: 700, fontSize: 13, color: t.blue.f, marginTop: -1 }}>5pm</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ ...lbl, color: t.ink2, fontSize: 10 }}>Próxima clase</p>
            <p style={{ fontFamily: 'Fredoka', fontWeight: 600, fontSize: 15, color: t.ink, marginTop: 3, lineHeight: 1.1 }}>{d.nextClass.topic}</p>
            <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: 11.5, color: t.ink2, marginTop: 3 }}>
              {d.classesTaken}/{d.classesPerWeek} clases esta semana
            </p>
          </div>
          <Icon d="chev" size={20} color={t.faint} />
        </button>

        <div style={{ height: 8 }} />
      </div>
    </div>
  );
}

Object.assign(window, { HomeGame, DEMO, THEMES, Icon, Btn3D });
