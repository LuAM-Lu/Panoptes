import { FallScene, NoveltyScene, AudioScene, CrowdScene } from './ai-scenes.js';
import { $, $$, onVisible, reduceMotion } from './util.js';

const NODES = {
  dsip04: { x: 58, y: 52, icon: 'traffic', label: 'DSIP-04 · Av. principal' },
  dsip07: { x: 18, y: 28, icon: 'traffic', label: 'DSIP-07 · Redoma' },
  cam08: { x: 80, y: 25, icon: 'videocam', label: 'CAM-08 · Entrada' },
  cam03: { x: 38, y: 40, icon: 'videocam', label: 'CAM-03 · Av. Bolívar' },
  licoreria: { x: 25, y: 56, icon: 'liquor', label: 'Licorería afiliada' },
  farmacia: { x: 74, y: 44, icon: 'local_pharmacy', label: 'Farmacia afiliada' },
  hospital: { x: 55, y: 30, icon: 'local_hospital', label: 'Hospital' },
  parada: { x: 67, y: 68, icon: 'directions_bus', label: 'Parada Av. principal' },
  plaza: { x: 43, y: 74, icon: 'church', label: 'Plaza Bolívar' },
};

const TONES = {
  ok: { dot: 'bg-emerald-400', text: 'text-emerald-300', btn: 'border-emerald-400 text-emerald-300', node: '#34d399' },
  warn: { dot: 'bg-amber-400', text: 'text-amber-300', btn: 'border-amber-400 text-amber-300', node: '#fbbf24' },
  alert: { dot: 'bg-rose-500', text: 'text-rose-300', btn: 'border-rose-400 text-rose-300', node: '#f43f5e' },
  info: { dot: 'bg-indigo-400', text: 'text-indigo-300', btn: 'border-indigo-400 text-indigo-300', node: '#818cf8' },
};

const TABS = [
  { id: 'normal', label: 'Estado normal', icon: 'verified', tone: 'ok', status: 'Consola: estado normal · municipio vigilado' },
  { id: 'apagon', label: 'Apagón', icon: 'electric_bolt', tone: 'warn', focus: 'dsip04', status: 'Falla eléctrica · DSIP-04 en batería' },
  { id: 'caida', label: 'Persona caída', icon: 'personal_injury', tone: 'alert', focus: 'parada', ai: true, status: 'IA-01 · persona inmóvil en la parada' },
  { id: 'placa', label: 'Placa ANPR', icon: 'directions_car', tone: 'alert', focus: 'cam08', status: 'ANPR · vehículo solicitado detectado' },
  { id: 'multitud', label: 'Aglomeración', icon: 'groups', tone: 'warn', focus: 'plaza', ai: true, status: 'IA-06 · aforo excedido en la plaza' },
  { id: 'rostro', label: 'Biometría con orden', icon: 'face_6', tone: 'info', focus: 'cam03', status: 'Búsqueda biométrica autorizada · verificación humana' },
  { id: 'audio', label: 'Grito / disparo', icon: 'graphic_eq', tone: 'alert', focus: 'licoreria', ai: true, status: 'IA-05 · evento acústico cerca de la licorería' },
  { id: 'sabotaje', label: 'Sabotaje', icon: 'shield_lock', tone: 'alert', focus: 'dsip07', ai: true, status: 'IA-04 · gabinete abierto en DSIP-07' },
];

const LOGS = {
  normal: [['ok', 'DSIP-04 · Av. principal · en línea · semáforo en verde'], ['ok', 'DSIP-07 · Redoma · en línea · ciclo ordinario'], ['info', 'IA en el poste activa en 10/10 nodos · 0 anomalías'], ['ok', 'Farmacia afiliada · 2 cámaras exteriores OK'], ['ok', 'Hospital · perímetro monitoreado · 3 cámaras OK']],
  apagon: [['warn', 'CORPOELEC · corte detectado en el sector 2'], ['warn', 'DSIP-04 · conmutando a batería LiFePO4'], ['ok', 'DSIP-04 · semáforo y cámaras operativos en batería'], ['info', 'Valla LED apagada · IA en modo ahorro (3 fps)'], ['warn', 'Aviso a Policía municipal · tránsito preventivo']],
  caida: [['warn', 'IA-01 · posible caída · parada Av. principal'], ['warn', 'IA-01 · contando inmovilidad (umbral 45 s)'], ['alert', 'IA-01 · persona inmóvil 45 s · PTZ orientado'], ['info', 'Motor de prioridad · severidad ALTA · sin duplicados']],
  placa: [['alert', 'ANPR · CAM-08 · placa GHE-456X leída en 623 ms'], ['alert', 'Coincidencia con reporte de vehículo solicitado (base sujeta a convenio)'], ['warn', 'Cerco vehicular · 5 cámaras en seguimiento'], ['info', 'Patrulla 07 asignada · llegada estimada 2 min']],
  multitud: [['info', 'IA-06 · conteo anónimo en la plaza · 820 personas'], ['warn', 'IA-06 · densidad pico 2,4 p/m² en el acceso norte'], ['alert', 'IA-06 · aforo excedido · 1.240 / 1.000'], ['info', 'Vallas LED · mensaje de rutas alternas activado']],
  rostro: [['info', 'Orden de búsqueda registrada · expediente simulado'], ['warn', 'CAM-03 · similitud 91 % · requiere verificación humana'], ['info', 'Operador verificando con el video en vivo'], ['info', 'Consulta registrada en la bitácora inmutable']],
  audio: [['ok', 'IA-05 · pirotecnia (0,91) · descartado'], ['alert', 'IA-05 · grito de auxilio (0,87) · licorería afiliada'], ['info', 'PTZ orientado · cámaras del comercio abiertas'], ['info', 'Audio almacenado: 0 bytes']],
  sabotaje: [['warn', 'DSIP-07 · sensor de puerta: ABIERTA'], ['warn', 'DSIP-07 · vibración del poste 2,8 g'], ['alert', 'IA-04 · cámara obstruida 78 %'], ['alert', 'DSIP-07 · batería desconectada · posible robo']],
};

const CINEMA = [
  ['normal', 'Monitoreo', '06:45 — Amanece. 10 nodos DSIP y las cámaras afiliadas reportan estado óptimo al C3I.'],
  ['apagon', 'Apagón', '09:12 — Corpoelec corta el sector 2. DSIP-04 pasa a batería sin apagar el semáforo; la valla se apaga para ahorrar.'],
  ['caida', 'Persona caída', '11:20 — IA-01 detecta a una persona inmóvil en la parada. El PTZ la enfoca; el operador confirma y despacha ambulancia.'],
  ['placa', 'ANPR', '14:38 — CAM-08 lee la placa de un vehículo solicitado. Patrulla asignada en un clic.'],
  ['multitud', 'Aglomeración', '16:10 — Feria en la plaza: el aforo supera 1.000 personas. Protección Civil abre salidas y las vallas muestran rutas alternas.'],
  ['rostro', 'Biometría', '17:05 — Con orden de la autoridad, una similitud del 91 % se verifica con el video antes de actuar.'],
  ['audio', 'Grito', '19:40 — IA-05 descarta un cohetón y minutos después confirma un grito de auxilio. Sin grabar audio.'],
  ['sabotaje', 'Sabotaje', '02:15 — Abren el gabinete del DSIP-07 y tapan la cámara: alerta por robo de batería y patrulla en camino.'],
  ['normal', 'Parte IA', '06:00 — El copiloto IA redacta el parte de novedades del turno; el supervisor lo revisa y lo firma.'],
];
const SCENE_MS = 6000;

const REPORT = `PARTE DE NOVEDADES · TURNO 18:00–06:00 (borrador IA-07)
• 19:40 Grito de auxilio en licorería afiliada (IA-05). Verificado; Patrulla 03 atendió. Sin lesionados.
• 21:05 Pirotecnia descartada ×4 (temporada festiva).
• 02:15 Sabotaje en DSIP-07: gabinete abierto y cámara tapada. Patrulla 07 en sitio 02:21. Batería recuperada.
• Disponibilidad de nodos: 99,6 %. Falsas alarmas: 3 (reentrenamiento programado).
Pendiente: firma del supervisor de guardia.`;

export function initSimulator() {
  const root = $('#sim');
  let current = 'normal', visible = false, raf = 0, last = 0, mini = null, timers = [];
  let battery = null, cinema = { playing: false, idx: 0, t: 0, started: false }, driving = false;
  let alerts = 3;

  /* Reloj */
  const clock = () => { $('#sim-clock').textContent = new Date().toLocaleTimeString('es-VE', { hour12: false }); };
  clock(); setInterval(clock, 1000);

  /* Nodos del mapa */
  $('#sim-nodes').innerHTML = Object.entries(NODES).map(([id, n]) => `
    <button type="button" data-node="${id}" title="${n.label}" style="left:${n.x}%;top:${n.y}%"
      class="absolute grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-ink-950 bg-slate-200 text-ink-900 shadow-lg transition-all duration-500">
      <span class="ms text-base">${n.icon}</span>
    </button>`).join('') + '<div id="sim-focus" class="pointer-events-none absolute z-10 hidden -translate-x-1/2 rounded-md bg-ink-950/90 px-2 py-1 font-mono text-[11px] font-bold text-white"></div>';

  /* Pestañas */
  $('#sim-tabs').innerHTML = TABS.map((t) => `
    <button type="button" role="tab" data-tab="${t.id}" aria-selected="false"
      class="flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-300 transition hover:text-white">
      <span class="ms text-base">${t.icon}</span>${t.label}${t.ai ? '<span class="rounded bg-emerald-400/20 px-1 text-[10px] text-emerald-300">IA</span>' : ''}
    </button>`).join('');

  /* Línea de tiempo del modo guiado */
  $('#sim-timeline').innerHTML = CINEMA.map((c, i) => `<button type="button" data-scene="${i}" title="Escena ${i + 1} · ${c[1]}" class="relative h-full flex-1 overflow-hidden rounded-full bg-white/15 transition hover:scale-y-125"><span class="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-emerald-400 to-indigo-400"></span></button>`).join('');

  function log(type, msg) {
    const colors = { ok: 'bg-emerald-400', warn: 'bg-amber-400', alert: 'bg-rose-500', info: 'bg-indigo-400' };
    const el = document.createElement('div');
    el.className = 'log-line';
    el.innerHTML = `<span class="text-slate-500">${new Date().toLocaleTimeString('es-VE', { hour12: false })}</span><span class="dot mt-1 ${colors[type]}"></span><span>${msg}</span>`;
    const box = $('#sim-log'); box.appendChild(el);
    while (box.children.length > 9) box.firstChild.remove();
    box.scrollTop = box.scrollHeight;
  }

  function beep(f = 880) {
    if (reduceMotion) return;
    try {
      const ctx = beep.ctx || (beep.ctx = new (window.AudioContext || window.webkitAudioContext)());
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.frequency.setValueAtTime(f, ctx.currentTime); o.frequency.exponentialRampToValueAtTime(f / 2, ctx.currentTime + 0.3);
      g.gain.setValueAtTime(0.06, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime + 0.3);
    } catch (e) { /* audio no disponible */ }
  }

  function row(k, v, cls = 'text-slate-200') {
    return `<div class="flex justify-between gap-3 border-b border-white/5 pb-1.5"><span class="text-slate-500">${k}</span><span class="text-right font-bold ${cls}">${v}</span></div>`;
  }

  function header(t) {
    const tone = TONES[t.tone];
    return `<div class="flex items-center gap-2 border-b border-white/10 pb-3"><span class="ms ${tone.text}">${t.icon}</span><h3 class="text-sm font-extrabold ${tone.text}">${t.status}</h3></div>`;
  }

  function miniScene(Cls, scenario, onUpdate) {
    const canvas = $('#sim-mini');
    const s = new Cls(canvas, { mini: true, onUpdate });
    s.set(scenario);
    mini = s;
    return s;
  }

  function renderRows(st) {
    const box = $('#sim-rows'); if (!box) return;
    const tone = { ok: 'text-emerald-300', warn: 'text-amber-300', alert: 'text-rose-300', info: 'text-indigo-300', dim: 'text-slate-400' };
    box.innerHTML = st.readout.map(([k, v, t]) => row(k, v, tone[t])).join('');
    const v = $('#sim-verdict');
    if (v) { v.textContent = st.verdict[1]; v.className = `rounded-xl border p-3 text-xs font-bold ${st.verdict[0] === 'alert' ? 'border-rose-400/50 bg-rose-500/15 text-rose-100' : st.verdict[0] === 'ok' ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200' : 'border-white/10 bg-white/[.03] text-slate-300'}`; }
  }

  const PANELS = {
    normal() {
      return `${header(TABS[0])}
        <p class="text-sm leading-relaxed text-slate-400">El cerco del municipio opera con normalidad. Los 10 nodos reportan conectividad, ciclo semafórico y la IA en el poste sin anomalías.</p>
        <div class="space-y-1.5 font-mono text-xs">${row('Nodos DSIP', 'Activos 10/10', 'text-emerald-300')}${row('Cámaras afiliadas', '<span id="sim-cams-mode">Modo pasivo (8)</span>', 'text-indigo-300')}${row('Ancho de banda', '<span id="sim-bw">1,2 Mbps (solo eventos)</span>')}${row('Detección IA', 'Activa · sin anomalías', 'text-emerald-300')}</div>
        <div class="grid grid-cols-2 gap-2">
          <button type="button" data-act="sync" class="btn-ghost-dark btn-sm"><span class="ms text-lg">sync</span>Sincronizar nodos</button>
          <button type="button" data-act="patrol" class="btn-ghost-dark btn-sm"><span class="ms text-lg">visibility</span>Cámaras de patrullaje</button>
          <button type="button" data-act="report" class="btn-vital btn-sm col-span-2"><span class="ms text-lg">edit_note</span>Generar parte de novedades (IA-07)</button>
        </div>
        <pre id="sim-report" class="hidden whitespace-pre-wrap rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-3 font-mono text-[11px] leading-relaxed text-emerald-100"></pre>`;
    },
    apagon() {
      return `${header(TABS[1])}
        <div class="rounded-xl border-l-4 border-amber-400 bg-amber-400/10 p-3 text-xs font-bold text-amber-100">⚡ Corte de Corpoelec · sector 2 · DSIP-04 en batería LiFePO4. Semáforo, cámaras e IA siguen operando.</div>
        <div class="rounded-xl border border-white/10 p-4">
          <div class="flex justify-between text-xs font-bold"><span class="text-slate-300">Batería LiFePO4 (≈ 1,3 kWh)</span><span id="sim-batt" class="text-amber-300">100 %</span></div>
          <div class="mt-2 h-3 overflow-hidden rounded-full bg-white/10"><div id="sim-batt-bar" class="h-full rounded-full bg-amber-400 transition-all duration-300" style="width:100%"></div></div>
          <div class="mt-2 flex justify-between font-mono text-[11px] text-slate-400"><span>Carga crítica: 148 W</span><span id="sim-batt-time">Restante: 5 h 00 min</span></div>
        </div>
        <div class="space-y-1.5 font-mono text-xs">${row('Nodos en batería', '1/10 (DSIP-04)', 'text-amber-300')}${row('Valla LED', 'Apagada (ahorro)')}${row('IA en el poste', 'Modo ahorro · 3 fps')}${row('Aviso enviado a', 'Policía municipal + tránsito', 'text-indigo-300')}</div>`;
    },
    caida() {
      return `${header(TABS[2])}<canvas id="sim-mini" class="aspect-[16/10] w-full rounded-xl bg-ink-950"></canvas>
        <div id="sim-rows" class="space-y-1.5 font-mono text-xs"></div><p id="sim-verdict"></p>
        <button type="button" data-act="confirm" class="btn-vital btn-sm"><span class="ms text-lg">ambulance</span>Confirmar y despachar ambulancia</button>`;
    },
    placa() {
      return `${header(TABS[3])}
        <div class="relative aspect-video overflow-hidden rounded-xl border border-white/10">
          <video id="sim-video" muted loop playsinline preload="none" poster="images/busquedavideo-poster.webp" class="absolute inset-0 h-full w-full object-cover"><source src="images/busquedavideo.mp4" type="video/mp4"></video>
          <span class="absolute left-2 top-2 rounded bg-rose-500 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">EN VIVO · CAM-08</span>
        </div>
        <div class="space-y-1.5 font-mono text-xs">${row('Vehículo', 'Chevrolet Aveo azul 2012')}${row('Placa leída', 'GHE-456X', 'text-rose-300')}${row('Confianza de lectura', '96 %', 'text-indigo-300')}${row('Coincidencia', 'Vehículo solicitado*', 'text-rose-300')}${row('Tiempo de detección', '623 ms', 'text-emerald-300')}</div>
        <p class="text-[11px] text-slate-500">* Base de vehículos solicitados sujeta a convenio con el MPPRIJP.</p>
        <button type="button" data-act="dispatch" class="btn-ghost-dark btn-sm"><span class="ms text-lg">local_police</span>Despachar patrulla</button>`;
    },
    multitud() {
      return `${header(TABS[4])}<canvas id="sim-mini" class="aspect-[16/10] w-full rounded-xl bg-ink-950"></canvas>
        <div id="sim-rows" class="space-y-1.5 font-mono text-xs"></div><p id="sim-verdict"></p>
        <button type="button" data-act="confirm" class="btn-vital btn-sm"><span class="ms text-lg">campaign</span>Avisar a Protección Civil y activar vallas</button>`;
    },
    rostro() {
      return `${header(TABS[5])}
        <div class="relative aspect-video overflow-hidden rounded-xl border border-white/10">
          <video id="sim-video" muted loop playsinline preload="none" poster="images/busquedafacial-poster.webp" class="absolute inset-0 h-full w-full object-cover"><source src="images/busquedafacial.mp4" type="video/mp4"></video>
          <span class="absolute left-2 top-2 rounded bg-indigo-500 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">EN VIVO · CAM-03</span>
        </div>
        <div class="space-y-1.5 font-mono text-xs">${row('Autorización', 'Orden de autoridad competente (simulada)', 'text-emerald-300')}${row('Similitud', '91 % · requiere verificación', 'text-amber-300')}${row('Base consultada', 'Lista con orden judicial*')}${row('Tiempo de respuesta', '1,24 s', 'text-emerald-300')}</div>
        <p class="text-[11px] text-slate-500">* Sujeto a convenio. Nunca se usa en reuniones públicas ni en zonas escolares; cada consulta queda en la bitácora.</p>
        <button type="button" data-act="dispatch" class="btn-ghost-dark btn-sm"><span class="ms text-lg">how_to_reg</span>Verificar y alertar a la patrulla</button>`;
    },
    audio() {
      return `${header(TABS[6])}<canvas id="sim-mini" class="aspect-[16/10] w-full rounded-xl bg-ink-950"></canvas>
        <div id="sim-rows" class="space-y-1.5 font-mono text-xs"></div><p id="sim-verdict"></p>
        <button type="button" data-act="confirm" class="btn-vital btn-sm"><span class="ms text-lg">local_police</span>Verificar con PTZ y despachar</button>`;
    },
    sabotaje() {
      return `${header(TABS[7])}<canvas id="sim-mini" class="aspect-[16/10] w-full rounded-xl bg-ink-950"></canvas>
        <div id="sim-rows" class="space-y-1.5 font-mono text-xs"></div><p id="sim-verdict"></p>
        <button type="button" data-act="confirm" class="btn-vital btn-sm"><span class="ms text-lg">local_police</span>Despachar patrulla al DSIP-07</button>`;
    },
  };

  function clearTimers() { timers.forEach(clearTimeout); timers = []; if (battery) { clearInterval(battery); battery = null; } }

  function styleNodes(tab) {
    const tone = TONES[tab.tone];
    $$('#sim-nodes [data-node]').forEach((b) => {
      const focus = b.dataset.node === tab.focus;
      b.style.background = focus ? tone.node : '';
      b.style.opacity = tab.focus && !focus ? '0.45' : '1';
      b.style.boxShadow = focus ? `0 0 0 6px ${tone.node}40, 0 0 24px ${tone.node}` : '';
      b.style.transform = focus ? 'translate(-50%,-50%) scale(1.25)' : '';
    });
    const f = $('#sim-focus');
    if (tab.focus) {
      const n = NODES[tab.focus];
      f.textContent = n.label; f.style.left = n.x + '%'; f.style.top = `calc(${n.y}% + 22px)`; f.classList.remove('hidden');
    } else f.classList.add('hidden');
    $('#sim-map-dim').className = `pointer-events-none absolute inset-0 transition-colors duration-700 ${tab.id === 'apagon' || tab.id === 'sabotaje' ? 'bg-ink-950/60' : tab.focus ? 'bg-ink-950/40' : 'bg-ink-950/25'}`;
  }

  function show(id, user = false) {
    const tab = TABS.find((t) => t.id === id);
    if (user && cinema.playing && !driving) pauseCinema();
    current = id; clearTimers(); mini = null;
    $$('#sim-tabs [data-tab]').forEach((b) => {
      const on = b.dataset.tab === id;
      b.setAttribute('aria-selected', String(on));
      b.className = `flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-bold transition ${on ? TONES[tab.tone].btn + ' bg-white/10' : 'border-white/10 bg-white/5 text-slate-300 hover:text-white'}`;
    });
    $('#sim-dot').className = `dot ${TONES[tab.tone].dot} ${tab.tone !== 'ok' ? 'animate-pulse' : ''}`;
    $('#sim-status').textContent = tab.status;
    styleNodes(tab);
    $('#sim-panel').innerHTML = PANELS[id]();
    $('#sim-log').innerHTML = '';
    LOGS[id].forEach(([t, m], i) => timers.push(setTimeout(() => log(t, m), 250 + i * 700)));

    if (id === 'caida') miniScene(FallScene, 'caida', renderRows);
    if (id === 'multitud') miniScene(CrowdScene, 'aforo', renderRows);
    if (id === 'sabotaje') miniScene(NoveltyScene, 'sabotaje', renderRows);
    if (id === 'audio') {
      const s = miniScene(AudioScene, 'coheton', renderRows);
      timers.push(setTimeout(() => { if (mini === s) s.set('grito'); }, 3200));
    }
    if (id === 'apagon') {
      let pct = 100;
      battery = setInterval(() => {
        pct = Math.max(62, pct - 0.4);
        const mins = Math.round(pct / 100 * 300);
        const b = $('#sim-batt'); if (!b) return;
        b.textContent = Math.round(pct) + ' %';
        $('#sim-batt-bar').style.width = pct + '%';
        $('#sim-batt-time').textContent = `Restante: ${Math.floor(mins / 60)} h ${String(mins % 60).padStart(2, '0')} min`;
      }, 120);
    }
    const v = $('#sim-video'); if (v) { v.currentTime = 0; v.play().catch(() => {}); }
    if (tab.tone === 'alert' && user) { beep(); alerts++; $('#sim-alerts').textContent = 'Alertas hoy: ' + alerts; }
  }

  root.addEventListener('click', (e) => {
    const tab = e.target.closest('[data-tab]');
    if (tab) { show(tab.dataset.tab, true); return; }
    const node = e.target.closest('[data-node]');
    if (node) {
      const t = TABS.find((x) => x.focus === node.dataset.node);
      if (t) show(t.id, true);
      return;
    }
    const act = e.target.closest('[data-act]');
    if (act) {
      const a = act.dataset.act;
      if (a === 'sync') { act.disabled = true; log('info', 'Sincronizando 10 nodos…'); setTimeout(() => { act.disabled = false; log('ok', 'Sincronización exitosa · latencia media 12 ms'); }, 1200); }
      if (a === 'patrol') {
        const on = act.getAttribute('aria-pressed') !== 'true'; act.setAttribute('aria-pressed', String(on));
        $('#sim-cams-mode').textContent = on ? 'Modo activo (16)' : 'Modo pasivo (8)';
        $('#sim-cams').textContent = on ? '30 + 16 afiliadas' : '30 + 8 afiliadas';
        log(on ? 'ok' : 'info', on ? 'Patrullaje ampliado: +8 cámaras de hospital y liceos' : 'Volviendo a modo pasivo');
      }
      if (a === 'report') {
        const pre = $('#sim-report'); pre.classList.remove('hidden'); pre.textContent = '';
        let i = 0; const step = () => { pre.textContent = REPORT.slice(0, i); i += 6; if (i <= REPORT.length + 6) timers.push(setTimeout(step, 16)); };
        step(); log('info', 'IA-07 · borrador del parte de novedades generado localmente');
      }
      if (a === 'confirm') { if (mini && mini.decide) mini.decide('ok'); log('ok', 'Operador confirmó · unidad despachada · registrado en bitácora'); act.disabled = true; }
      if (a === 'dispatch') { log('ok', 'Operador verificó con el video · patrulla despachada'); act.disabled = true; }
      return;
    }
    const sc = e.target.closest('[data-scene]');
    if (sc) { cinemaGo(Number(sc.dataset.scene)); if (!cinema.playing) playCinema(); return; }
    if (e.target.closest('#sim-play')) { cinema.playing ? pauseCinema() : playCinema(); return; }
    if (e.target.closest('#sim-mapview')) {
      const img = $('#sim-map-img'), label = $('#sim-mapview span:last-child');
      const sat = img.style.backgroundImage.includes('piloto2');
      img.style.backgroundImage = `url('images/${sat ? 'mapa_municipio_piloto' : 'mapa_municipio_piloto2'}.webp')`;
      img.classList.toggle('[filter:invert(.92)_hue-rotate(185deg)_saturate(.55)_contrast(1.05)]', sat);
      label.textContent = sat ? 'SATELITAL' : 'CALLEJERO';
    }
  });

  /* Modo guiado */
  function setCaption(text) {
    const c = $('#sim-caption');
    if (text) { c.textContent = text; c.classList.remove('opacity-0', 'translate-y-2'); } else c.classList.add('opacity-0', 'translate-y-2');
  }
  function cinemaGo(i) {
    cinema.idx = i; cinema.t = 0; cinema.started = true;
    $$('#sim-timeline [data-scene] span').forEach((s, j) => { s.style.width = j < i ? '100%' : '0%'; });
    driving = true; show(CINEMA[i][0]); driving = false;
    if (i === CINEMA.length - 1) { const b = $('[data-act="report"]'); if (b) b.click(); }
    $('#sim-scene').textContent = `ESCENA ${i + 1}/${CINEMA.length} · ${CINEMA[i][1].toUpperCase()}`;
    setCaption(CINEMA[i][2]);
  }
  function playCinema() {
    if (!cinema.started) cinemaGo(0);
    cinema.playing = true; $('#sim-play-icon').textContent = 'pause';
    $('#sim-play').setAttribute('aria-label', 'Pausar demostración guiada');
  }
  function pauseCinema() {
    cinema.playing = false; $('#sim-play-icon').textContent = 'play_arrow';
    $('#sim-play').setAttribute('aria-label', 'Reproducir demostración guiada');
  }
  function cinemaTick(dt) {
    if (!cinema.playing) return;
    cinema.t += dt * 1000;
    const fill = $$('#sim-timeline [data-scene] span')[cinema.idx];
    if (fill) fill.style.width = Math.min(100, (cinema.t / SCENE_MS) * 100) + '%';
    if (cinema.t >= SCENE_MS) {
      if (cinema.idx < CINEMA.length - 1) cinemaGo(cinema.idx + 1);
      else { pauseCinema(); cinema.started = false; setCaption(''); $('#sim-scene').textContent = 'FIN · PULSE ▶ PARA REPETIR'; }
    }
  }

  function loop(now) {
    if (!visible) return;
    const dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now;
    if (mini) { mini.step(dt); mini.draw(); }
    cinemaTick(dt);
    raf = requestAnimationFrame(loop);
  }
  window.addEventListener('resize', () => mini && mini.resize());
  onVisible(root, (v) => {
    visible = v;
    if (v) { cancelAnimationFrame(raf); last = performance.now(); raf = requestAnimationFrame(loop); }
    else { const vid = $('#sim-video'); if (vid) vid.pause(); }
  });
  show('normal');
}
