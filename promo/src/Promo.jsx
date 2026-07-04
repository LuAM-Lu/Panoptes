import React from 'react';
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const FPS = 30;

// Duración de escenas (frames @30fps)
const S1 = 150;  // Intro logo (5s)
const S2 = 240;  // El problema (8s)
const S3 = 300;  // La solución DSIP (10s)
const S4 = 300;  // Mapa Vivo C3I (10s)
const S5 = 240;  // Inversión (8s)
const S6 = 210;  // CTA (7s)
export const PROMO_DURATION = S1 + S2 + S3 + S4 + S5 + S6; // 1440 = 48s

const INK = '#eef0f5';
const BG = '#0b0d16';
const PRIMARY = '#818cf8';
const VIOLET = '#a78bfa';
const GREEN = '#34d399';
const ORANGE = '#fb923c';
const RED = '#f87171';
const FONT = '"Plus Jakarta Sans", "Segoe UI", system-ui, sans-serif';

const Fill = ({ children, style }) => (
  <AbsoluteFill
    style={{
      backgroundColor: BG,
      fontFamily: FONT,
      color: INK,
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    }}
  >
    {children}
  </AbsoluteFill>
);

const Glow = ({ color = PRIMARY, size = 900, x = '50%', y = '45%', opacity = 0.22 }) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: size,
      height: size,
      transform: 'translate(-50%, -50%)',
      background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
      opacity,
      pointerEvents: 'none',
    }}
  />
);

const GridBG = () => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundImage:
        'linear-gradient(rgba(129,140,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.07) 1px, transparent 1px)',
      backgroundSize: '64px 64px',
    }}
  />
);

const Kicker = ({ children, color = PRIMARY }) => (
  <div
    style={{
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: 10,
      textTransform: 'uppercase',
      color,
      fontFamily: FONT,
    }}
  >
    {children}
  </div>
);

// Aparece con spring desde abajo
const Rise = ({ delay = 0, children, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 200 } });
  return (
    <div
      style={{
        opacity: s,
        transform: `translateY(${interpolate(s, [0, 1], [60, 0])}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const fadeInOut = (frame, dur, fadeIn = 15, fadeOut = 15) =>
  interpolate(
    frame,
    [0, fadeIn, dur - fadeOut, dur],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

/* ─────────── ICONOS SVG (sin emojis) ─────────── */
const IconBase = ({ children, color = '#fff', size = 42 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const TrafficIcon = ({ color, size }) => (
  <IconBase color={color} size={size}>
    <rect x="8" y="2" width="8" height="20" rx="3" />
    <circle cx="12" cy="6.5" r="1.7" fill={color} stroke="none" />
    <circle cx="12" cy="12" r="1.7" fill={color} stroke="none" />
    <circle cx="12" cy="17.5" r="1.7" fill={color} stroke="none" />
  </IconBase>
);

const BatteryIcon = ({ color, size }) => (
  <IconBase color={color} size={size}>
    <rect x="2.5" y="7" width="17" height="10" rx="2" />
    <line x1="22" y1="10.5" x2="22" y2="13.5" />
    <polyline points="12,9 9.5,12.2 13,12.2 10.5,15.4" />
  </IconBase>
);

const CameraIcon = ({ color, size }) => (
  <IconBase color={color} size={size}>
    <rect x="2" y="6.5" width="13" height="9" rx="2" />
    <path d="M15 10l6-3v10l-6-3" />
    <circle cx="8.5" cy="11" r="2.2" />
  </IconBase>
);

const BillboardIcon = ({ color, size }) => (
  <IconBase color={color} size={size}>
    <rect x="3" y="3.5" width="18" height="11.5" rx="2" />
    <line x1="12" y1="15" x2="12" y2="20.5" />
    <line x1="8" y1="20.5" x2="16" y2="20.5" />
    <rect x="6.5" y="6.5" width="4.2" height="4.2" rx="0.6" fill={color} stroke="none" />
    <line x1="13.5" y1="7.5" x2="18" y2="7.5" />
    <line x1="13.5" y1="10" x2="18" y2="10" />
    <line x1="6.5" y1="13" x2="18" y2="13" />
  </IconBase>
);

const PhoneIcon = ({ color, size }) => (
  <IconBase color={color} size={size}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
  </IconBase>
);

const MailIcon = ({ color, size }) => (
  <IconBase color={color} size={size}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </IconBase>
);

/* ─────────── ESCENA 1: INTRO ─────────── */
const Intro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 14, mass: 0.8 } });
  const opacity = fadeInOut(frame, S1, 10, 20);
  return (
    <Fill style={{ opacity }}>
      <GridBG />
      <Glow />
      <Img
        src={staticFile('logo.png')}
        style={{
          width: 380,
          height: 380,
          objectFit: 'contain',
          transform: `scale(${pop})`,
          filter: 'drop-shadow(0 0 60px rgba(129,140,248,0.55))',
        }}
      />
      <Rise delay={18}>
        <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -2, marginTop: 30 }}>
          Proyecto Panoptes
        </div>
      </Rise>
      <Rise delay={32}>
        <div style={{ fontSize: 34, fontWeight: 700, color: PRIMARY, marginTop: 8 }}>
          El Ojo que todo lo ve de la Seguridad Ciudadana
        </div>
      </Rise>
    </Fill>
  );
};

/* ─────────── ESCENA 2: EL PROBLEMA ─────────── */
const StatCard = ({ delay, value, label, color }) => (
  <Rise
    delay={delay}
    style={{
      background: 'rgba(255,255,255,0.05)',
      border: `2px solid ${color}44`,
      borderTop: `6px solid ${color}`,
      borderRadius: 28,
      padding: '54px 44px',
      width: 460,
      textAlign: 'center',
    }}
  >
    <div style={{ fontSize: 84, fontWeight: 800, color }}>{value}</div>
    <div style={{ fontSize: 27, fontWeight: 600, color: '#c3c7d6', marginTop: 16, lineHeight: 1.4 }}>
      {label}
    </div>
  </Rise>
);

const Problema = () => {
  const frame = useCurrentFrame();
  const opacity = fadeInOut(frame, S2);
  return (
    <Fill style={{ opacity }}>
      <GridBG />
      <Glow color={RED} opacity={0.12} />
      <Kicker color={RED}>La realidad de nuestras calles</Kicker>
      <div style={{ display: 'flex', gap: 44, marginTop: 70 }}>
        <StatCard delay={12} value="6h" label="de apagones diarios en el estado Portuguesa" color={ORANGE} />
        <StatCard delay={26} value="32%" label="de los 134 semáforos está fuera de servicio" color={RED} />
        <StatCard delay={40} value="0" label="cámaras coordinadas entre sí: vigilancia fragmentada" color={VIOLET} />
      </div>
    </Fill>
  );
};

/* ─────────── ESCENA 3: LA SOLUCIÓN ─────────── */
const Bullet = ({ delay, icon, title, desc, color }) => (
  <Rise
    delay={delay}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      background: 'rgba(255,255,255,0.05)',
      borderRadius: 22,
      padding: '26px 34px',
      width: 860,
    }}
  >
    <div
      style={{
        width: 74,
        height: 74,
        borderRadius: 18,
        background: `${color}22`,
        border: `2px solid ${color}55`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
    <div>
      <div style={{ fontSize: 32, fontWeight: 800 }}>{title}</div>
      <div style={{ fontSize: 23, color: '#c3c7d6', marginTop: 4 }}>{desc}</div>
    </div>
  </Rise>
);

const Solucion = () => {
  const frame = useCurrentFrame();
  const opacity = fadeInOut(frame, S3);
  // Semáforo animado: ciclo de luces
  const phase = Math.floor(frame / 45) % 3;
  const lightColors = [GREEN, ORANGE, RED];
  return (
    <Fill style={{ opacity }}>
      <GridBG />
      <Glow color={GREEN} opacity={0.1} x="75%" />
      <div style={{ display: 'flex', alignItems: 'center', gap: 110 }}>
        <div>
          <Kicker color={GREEN}>La solución · Nodo DSIP</Kicker>
          <div style={{ height: 40 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Bullet delay={10} icon={<TrafficIcon color={GREEN} size={42} />} title="Semáforos ECO LED" desc="Reducen el consumo eléctrico en más del 80%" color={GREEN} />
            <Bullet delay={24} icon={<BatteryIcon color={ORANGE} size={42} />} title="Baterías LiFePO4" desc="Semáforo y cámaras activos hasta 5h durante apagones" color={ORANGE} />
            <Bullet delay={38} icon={<CameraIcon color={PRIMARY} size={42} />} title="Cámaras ANPR + IA" desc="Lectura automática de placas y videoanalítica en tiempo real" color={PRIMARY} />
            <Bullet delay={52} icon={<BillboardIcon color={VIOLET} size={42} />} title="Valla LED con QR" desc="Pauta publicitaria autogestionada que financia el sistema" color={VIOLET} />
          </div>
        </div>
        {/* Semáforo estilizado */}
        <Rise delay={20}>
          <div
            style={{
              width: 170,
              borderRadius: 40,
              background: 'rgba(255,255,255,0.06)',
              border: '2px solid rgba(255,255,255,0.12)',
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 26,
              alignItems: 'center',
            }}
          >
            {lightColors.map((c, i) => (
              <div
                key={c}
                style={{
                  width: 104,
                  height: 104,
                  borderRadius: '50%',
                  background: phase === i ? c : 'rgba(255,255,255,0.07)',
                  boxShadow: phase === i ? `0 0 60px ${c}` : 'none',
                  transition: 'none',
                }}
              />
            ))}
            <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: 3, color: '#c3c7d6', marginTop: 6 }}>
              DSIP-04
            </div>
          </div>
        </Rise>
      </div>
    </Fill>
  );
};

/* ─────────── ESCENA 4: MAPA VIVO ─────────── */
const Ping = ({ x, y, color, delay }) => {
  const frame = useCurrentFrame();
  const t = Math.max(0, frame - delay);
  const cycle = (t % 60) / 60;
  const appear = interpolate(t, [0, 10], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <div style={{ position: 'absolute', left: x, top: y, opacity: appear }}>
      <div
        style={{
          position: 'absolute',
          width: 90,
          height: 90,
          borderRadius: '50%',
          border: `4px solid ${color}`,
          transform: `translate(-50%, -50%) scale(${0.3 + cycle * 1.3})`,
          opacity: 1 - cycle,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 26,
          height: 26,
          borderRadius: '50%',
          background: color,
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 26px ${color}`,
        }}
      />
    </div>
  );
};

const MapaVivo = () => {
  const frame = useCurrentFrame();
  const opacity = fadeInOut(frame, S4);
  const zoom = interpolate(frame, [0, S4], [1.05, 1.18]);
  const scanY = (frame * 6) % 1080;
  return (
    <Fill style={{ opacity }}>
      <Img
        src={staticFile('mapa.png')}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'grayscale(0.9) brightness(0.42) contrast(1.1)',
          transform: `scale(${zoom})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(11,13,22,0.75), rgba(11,13,22,0.25) 40%, rgba(11,13,22,0.8))',
        }}
      />
      {/* línea de escaneo */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: scanY,
          height: 3,
          background: `linear-gradient(90deg, transparent, ${PRIMARY}, transparent)`,
          opacity: 0.65,
        }}
      />
      <Ping x="30%" y="55%" color={GREEN} delay={15} />
      <Ping x="58%" y="60%" color={PRIMARY} delay={30} />
      <Ping x="78%" y="28%" color={RED} delay={45} />
      <Ping x="45%" y="35%" color={ORANGE} delay={60} />
      <Ping x="66%" y="72%" color={VIOLET} delay={75} />

      <div style={{ position: 'absolute', top: 90, left: 0, right: 0, textAlign: 'center' }}>
        <Rise delay={6}>
          <Kicker>Central de comando C3I</Kicker>
          <div style={{ fontSize: 74, fontWeight: 800, marginTop: 16 }}>
            Toda la ciudad en un Mapa Vivo
          </div>
        </Rise>
      </div>
      <div style={{ position: 'absolute', bottom: 90, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
        <Rise delay={40}>
          <div
            style={{
              fontFamily: 'Consolas, monospace',
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
              color: GREEN,
              background: 'rgba(11,13,22,0.85)',
              border: `1px solid ${GREEN}55`,
              borderRadius: 14,
              padding: '18px 36px',
            }}
          >
            ● IA: DETECCIÓN ANPR + BIOMETRÍA · DESPACHO A VEN 911 EN 1 CLIC
          </div>
        </Rise>
      </div>
    </Fill>
  );
};

/* ─────────── ESCENA 5: INVERSIÓN ─────────── */
const Money = ({ delay, target, prefix = '$', label, color, decimals = 0 }) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame - delay, [0, 55], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const eased = 1 - Math.pow(1 - t, 3);
  const value = (target * eased).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <Rise
      delay={delay}
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: `2px solid ${color}44`,
        borderRadius: 28,
        padding: '48px 54px',
        width: 500,
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 70, fontWeight: 800, color, fontVariantNumeric: 'tabular-nums' }}>
        {prefix}
        {value}
      </div>
      <div style={{ fontSize: 25, fontWeight: 600, color: '#c3c7d6', marginTop: 14, lineHeight: 1.4 }}>
        {label}
      </div>
    </Rise>
  );
};

const Inversion = () => {
  const frame = useCurrentFrame();
  const opacity = fadeInOut(frame, S5);
  return (
    <Fill style={{ opacity }}>
      <GridBG />
      <Glow color={VIOLET} opacity={0.14} />
      <Kicker color={VIOLET}>Inversión transparente y autosustentable</Kicker>
      <div style={{ display: 'flex', gap: 44, marginTop: 70 }}>
        <Money delay={10} target={328106} label="Plan piloto completo: 1 central C3I + 10 nodos DSIP" color={PRIMARY} />
        <Money delay={24} target={0} label="Costo al presupuesto público en modalidad concesión" color={GREEN} />
        <Money delay={38} target={5000} label="Ingreso publicitario mensual potencial (10 vallas LED)" color={VIOLET} />
      </div>
      <Rise delay={60} style={{ marginTop: 60 }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: '#c3c7d6' }}>
          Ahorro eléctrico del <span style={{ color: GREEN, fontWeight: 800 }}>80%</span> · Contrato de mantenimiento a{' '}
          <span style={{ color: PRIMARY, fontWeight: 800 }}>15 años</span> · Más de{' '}
          <span style={{ color: VIOLET, fontWeight: 800 }}>150 empleos</span> generados
        </div>
      </Rise>
    </Fill>
  );
};

/* ─────────── ESCENA 6: CTA ─────────── */
const CTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 16 } });
  const opacity = fadeInOut(frame, S6, 12, 30);
  return (
    <Fill style={{ opacity }}>
      <GridBG />
      <Glow />
      <Img
        src={staticFile('logo.png')}
        style={{
          width: 240,
          height: 240,
          objectFit: 'contain',
          transform: `scale(${pop})`,
          filter: 'drop-shadow(0 0 44px rgba(129,140,248,0.5))',
        }}
      />
      <Rise delay={12}>
        <div style={{ fontSize: 64, fontWeight: 800, marginTop: 34 }}>
          ¿Listo para blindar su municipio?
        </div>
      </Rise>
      <Rise delay={26}>
        <div
          style={{
            display: 'flex',
            gap: 30,
            marginTop: 46,
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              background: `linear-gradient(135deg, ${PRIMARY}, ${VIOLET})`,
              color: '#0b0d16',
              borderRadius: 20,
              padding: '22px 44px',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}
          >
            <PhoneIcon color="#0b0d16" size={36} />
            0257-251.12.82
          </div>
          <div
            style={{
              border: `2px solid ${PRIMARY}66`,
              borderRadius: 20,
              padding: '22px 44px',
              color: INK,
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}
          >
            <MailIcon color={PRIMARY} size={36} />
            correo@electroshopve.com
          </div>
        </div>
      </Rise>
      <Rise delay={40}>
        <div style={{ fontSize: 22, fontWeight: 600, color: '#8b8fa3', marginTop: 44, letterSpacing: 2 }}>
          ELECTRO SHOP MORANDIN C.A. · 14 AÑOS DE EXPERIENCIA EN SEGURIDAD ELECTRÓNICA
        </div>
      </Rise>
    </Fill>
  );
};

/* ─────────── COMPOSICIÓN PRINCIPAL ─────────── */
export const Promo = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      <Sequence durationInFrames={S1}>
        <Intro />
      </Sequence>
      <Sequence from={S1} durationInFrames={S2}>
        <Problema />
      </Sequence>
      <Sequence from={S1 + S2} durationInFrames={S3}>
        <Solucion />
      </Sequence>
      <Sequence from={S1 + S2 + S3} durationInFrames={S4}>
        <MapaVivo />
      </Sequence>
      <Sequence from={S1 + S2 + S3 + S4} durationInFrames={S5}>
        <Inversion />
      </Sequence>
      <Sequence from={S1 + S2 + S3 + S4 + S5} durationInFrames={S6}>
        <CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
