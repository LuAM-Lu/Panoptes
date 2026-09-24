import { AudioScene } from './ai-scenes.js';
import { $, $$, onVisible } from './util.js';

// Consola de la central de mando (demostración). Estilo claro: tinta, un acento azul y rojo solo para alertas.
const NODES = {
  dsip04: { x: 58, y: 52, icon: 'traffic', label: 'Poste DSIP-04, avenida principal' },
  dsip07: { x: 18, y: 28, icon: 'traffic', label: 'Poste DSIP-07, redoma' },
  cam08: { x: 80, y: 25, icon: 'videocam', label: 'Cámara 08, entrada' },
  cam03: { x: 38, y: 40, icon: 'videocam', label: 'Cámara 03, avenida Bolívar' },
  licoreria: { x: 25, y: 56, icon: 'liquor', label: 'Licorería afiliada' },
  farmacia: { x: 74, y: 44, icon: 'local_pharmacy', label: 'Farmacia afiliada' },
  hospital: { x: 55, y: 30, icon: 'local_hospital', label: 'Hospital' },
  parada: { x: 67, y: 68, icon: 'directions_bus', label: 'Parada de la avenida principal' },
  plaza: { x: 43, y: 74, icon: 'church', label: 'Plaza Bolívar' },
};

const TONE_TEXT = { ok: 'text-ink-800', warn: 'text-ink-900', alert: 'text-alert', info: 'text-brand-600', dim: 'text-ink-500' };
const TONE_ICON = { ok: 'check_circle', warn: 'schedule', alert: 'notifications_active', info: 'info', dim: 'visibility' };

const TABS = [
  { id: 'normal', label: 'Día normal', icon: 'verified', tone: 'ok', status: 'Todo en orden: 10 postes en línea' },
  { id: 'apagon', label: 'Apagón', icon: 'power_off', tone: 'warn', focus: 'dsip04', status: 'Se fue la luz: el poste DSIP-04 funciona con batería' },
  { id: 'caida', label: 'Persona caída', icon: 'personal_injury', tone: 'alert', focus: 'parada', ai: true, status: 'Persona inmóvil en la parada' },
  { id: 'placa', label: 'Placa solicitada', icon: 'directions_car', tone: 'alert', focus: 'cam08', status: 'Vehículo solicitado detectado' },
  { id: 'multitud', label: 'Plaza llena', icon: 'groups', tone: 'warn', focus: 'plaza', ai: true, status: 'La plaza superó su aforo' },
  { id: 'rostro', label: 'Búsqueda con orden', icon: 'face_6', tone: 'info', focus: 'cam03', status: 'Búsqueda autorizada por un juez: requiere verificación' },
  { id: 'audio', label: 'Grito o disparo', icon: 'graphic_eq', tone: 'alert', focus: 'licoreria', ai: true, status: 'Grito de auxilio cerca de la licorería' },
  { id: 'sabotaje', label: 'Robo en el poste', icon: 'shield_lock', tone: 'alert', focus: 'dsip07', ai: true, status: 'Abrieron la caja del poste DSIP-07' },
];

const LOGS = {
  normal: [['ok', 'Poste DSIP-04 en línea, semáforo en verde'], ['ok', 'Poste DSIP-07 en línea, ciclo normal'], ['info', 'Inteligencia artificial activa en 10 de 10 postes'], ['ok', 'Farmacia afiliada: 2 cámaras exteriores en orden'], ['ok', 'Hospital: 3 cámaras del perímetro en orden']],
  apagon: [['warn', 'Corte eléctrico detectado en el sector 2'], ['warn', 'Poste DSIP-04 pasa a batería'], ['ok', 'Semáforo y cámaras siguen funcionando'], ['info', 'Pantalla apagada y IA en modo ahorro'], ['warn', 'Aviso preventivo a la policía de tránsito']],
  caida: [['warn', 'Posible caída en la parada de la avenida principal'], ['warn', 'Esperando 45 segundos de inmovilidad'], ['alert', 'Persona inmóvil: la cámara que gira la enfoca'], ['info', 'Prioridad alta, sin avisos repetidos']],
  placa: [['alert', 'Cámara 08 leyó la placa GHE-456X en 0,6 segundos'], ['alert', 'Coincide con un vehículo solicitado (base sujeta a convenio)'], ['warn', '5 cámaras siguen la ruta del vehículo'], ['info', 'Patrulla 07 asignada, llega en 2 minutos']],
  multitud: [['info', 'Conteo sin identificar: 820 personas en la plaza'], ['warn', 'Acceso norte muy apretado'], ['alert', 'Aforo superado: 1.240 de 1.000 personas'], ['info', 'Las pantallas muestran rutas de salida']],
  rostro: [['info', 'Orden de búsqueda registrada (ejemplo)'], ['warn', 'Cámara 03: parecido del 91 %, falta verificar'], ['info', 'El operador verifica con el video en vivo'], ['info', 'Consulta guardada en la bitácora']],
  audio: [['ok', 'Cohetón reconocido y descartado'], ['alert', 'Grito de auxilio cerca de la licorería afiliada'], ['info', 'La cámara gira y se abren las cámaras del comercio'], ['info', 'Audio guardado: ninguno']],
  sabotaje: [['warn', 'Poste DSIP-07: puerta de la caja abierta'], ['warn', 'Poste DSIP-07: golpes en la estructura'], ['alert', 'Cámara tapada'], ['alert', 'Batería desconectada: posible robo']],
};

const CINEMA = [
  ['normal', 'Monitoreo', '6:45 a. m. Amanece. Los 10 postes y las cámaras afiliadas reportan que todo está en orden.'],
  ['apagon', 'Apagón', '9:12 a. m. Se va la luz en el sector 2. El poste DSIP-04 sigue con batería y el semáforo no se apaga.'],
  ['caida', 'Persona caída', '11:20 a. m. Una persona cae en la parada. La cámara la enfoca y el operador envía una ambulancia.'],
  ['placa', 'Placa', '2:38 p. m. La cámara 08 lee la placa de un vehículo solicitado. Se asigna una patrulla.'],
  ['multitud', 'Plaza llena', '4:10 p. m. Feria en la plaza: se supera el aforo. Protección Civil abre salidas.'],
  ['rostro', 'Búsqueda con orden', '5:05 p. m. Con orden de un juez, un parecido del 91 % se verifica con el video antes de actuar.'],
  ['audio', 'Grito', '7:40 p. m. Se descarta un cohetón y luego se confirma un grito de auxilio. No se graba audio.'],
  ['sabotaje', 'Robo en el poste', '2:15 a. m. Abren la caja del poste DSIP-07 y tapan la cámara. Una patrulla va en camino.'],
  ['normal', 'Parte del turno', '6:00 a. m. El asistente redacta el parte del turno. El supervisor lo revisa y lo firma.'],
];
const SCENE_MS = 6500;

const REPORT = `PARTE DE NOVEDADES, TURNO DE 6:00 P. M. A 6:00 A. M. (BORRADOR)
7:40 p. m. Grito de auxilio en la licorería afiliada. Verificado. La patrulla 03 atendió. Sin heridos.
9:05 p. m. Cuatro cohetones descartados (temporada de fiestas).
2:15 a. m. Robo en el poste DSIP-07: caja abierta y cámara tapada. Patrulla 07 en el sitio a las 2:21 a. m. Batería recuperada.
Postes en línea: 99,6 % del tiempo. Falsas alarmas: 3.
Pendiente: firma del supervisor de guardia.`;

export function initSimulator() {
  const root = $('#sim');
  let visible = false, raf = 0, last = 0, mini = null, timers = [];
  let battery = null, cinema = { playing: false, idx: 0, t: 0, started: false }, driving = false;

  /* Nodos del mapa */
  $('#sim-nodes').innerHTML = Object.entries(NODES).map(([id, n]) => `
    <button type="button" data-node="${id}" aria-label="${n.label}" title="${n.label}" style="left:${n.x}%;top:${n.y}%"
      class="sim-node absolute grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-ink-900 bg-white text-ink-900 transition-all duration-500">
      <span class="ms text-xl">${n.icon}</span>
    </button>`).join('') + '<div id="sim-focus" class="pointer-events-none absolute z-10 hidden -translate-x-1/2 rounded-lg border-2 border-ink-900 bg-white px-2 py-1 font-label text-base font-bold uppercase text-ink-900"></div>';

  /* Pestañas */
  $('#sim-tabs').innerHTML = TABS.map((t) => `
    <button type="button" role="tab" data-tab="${t.id}" aria-selected="false" class="lab-tab">
      <span class="ms">${t.icon}</span><span>${t.label}</span>
    </button>`).join('');

  /* Escenas del recorrido guiado (numeradas, sin barras de progreso) */
  $('#sim-timeline').innerHTML = CINEMA.map((c, i) => `<button type="button" data-scene="${i}" aria-pressed="false" title="Escena ${i + 1}: ${c[1]}" class="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-ink-300 bg-white font-label text-base font-bold sm:h-9 sm:w-9 text-ink-500 transition hover:border-brand-500 aria-pressed:border-brand-500 aria-pressed:bg-brand-500 aria-pressed:text-white">${i + 1}</button>`).join('');

  function log(type, msg) {
    const el = document.createElement('div');
    el.className = 'log-line';
    el.innerHTML = `<span class="ms text-lg ${TONE_TEXT[type]}">${TONE_ICON[type]}</span><span class="${type === 'alert' ? 'font-bold text-alert' : ''}">${msg}</span>`;
    const box = $('#sim-log'); box.appendChild(el);
    while (box.children.length > 5) box.firstChild.remove();
  }

  function row(k, v, tone = 'ok') {
    return `<div class="flex justify-between gap-4 py-2"><dt class="text-ink-500">${k}</dt><dd class="text-right font-bold ${TONE_TEXT[tone]}">${v}</dd></div>`;
  }

  function header(t) {
    return `<h3 class="flex items-start gap-3 text-xl font-extrabold ${t.tone === 'alert' ? 'text-alert' : 'text-ink-900'}"><span class="ms">${t.icon}</span>${t.status}</h3>`;
  }

  // Video de la cámara (recreaciones hechas con inteligencia artificial)
  const videoBox = (name) => `<div class="relative aspect-video overflow-hidden rounded-xl border border-ink-200 bg-ink-100">
          <video id="sim-video" muted loop playsinline preload="none" poster="images/${name}-poster.webp" class="absolute inset-0 h-full w-full object-cover"><source src="images/${name}.mp4" type="video/mp4"></video>
        </div>`;
  const sceneBox = '<canvas id="sim-mini" class="aspect-[16/10] w-full rounded-xl border border-ink-200 bg-white"></canvas><dl id="sim-rows" class="divide-y divide-ink-100 text-base"></dl><p id="sim-verdict" class="min-h-[3rem]"></p>';

  function miniScene(Cls, scenario, onUpdate) {
    const s = new Cls($('#sim-mini'), { mini: true, simple: true, onUpdate });
    s.set(scenario);
    mini = s;
    return s;
  }

  function renderRows(st) {
    const box = $('#sim-rows'); if (!box) return;
    box.innerHTML = st.readout.map(([k, v, t]) => row(k, v, t)).join('');
    const v = $('#sim-verdict');
    if (v) {
      const [tone, text] = st.verdict;
      v.className = `flex min-h-[3rem] items-start gap-2 text-base font-bold ${TONE_TEXT[tone]}`;
      v.innerHTML = `<span class="ms text-xl">${TONE_ICON[tone]}</span><span>${text}</span>`;
    }
  }

  const PANELS = {
    normal() {
      return `${header(TABS[0])}
        <dl class="divide-y divide-ink-100 text-base">${row('Postes', '10 de 10 en línea')}${row('Cámaras de comercios', '<span id="sim-cams-mode">8 conectadas en reposo</span>', 'info')}${row('Datos enviados', 'Solo avisos, no video continuo')}${row('Inteligencia artificial', 'Activa, sin novedades')}</dl>
        <div class="flex flex-wrap gap-2">
          <button type="button" data-act="patrol" aria-pressed="false" class="btn-outline btn-sm"><span class="ms text-xl">visibility</span>Ver más cámaras</button>
          <button type="button" data-act="report" class="btn-primary btn-sm"><span class="ms text-xl">edit_note</span>Redactar el parte del turno</button>
        </div>
        <pre id="sim-report" class="hidden whitespace-pre-wrap rounded-xl border border-ink-200 bg-ink-50 p-4 font-sans text-sm leading-relaxed text-ink-800"></pre>`;
    },
    apagon() {
      return `${header(TABS[1])}
        <dl class="divide-y divide-ink-100 text-base">${row('Batería', '<span id="sim-batt">100 %</span>')}${row('Tiempo restante', '<span id="sim-batt-time">5 h 00 min</span>')}${row('Consumo', '148 vatios')}${row('Pantalla publicitaria', 'Apagada para ahorrar')}${row('Aviso enviado a', 'Policía de tránsito', 'info')}</dl>
        <p class="text-base text-ink-600">El semáforo, las cámaras y la inteligencia artificial siguen funcionando.</p>`;
    },
    caida() {
      return `${header(TABS[2])}${videoBox('persona-caida')}
        <dl class="divide-y divide-ink-100 text-base">${row('Tiempo inmóvil', '45 segundos', 'alert')}${row('Cámara que gira', 'Enfocando a la persona')}${row('Aviso', 'Ambulancia notificada', 'info')}</dl>
        <button type="button" data-act="confirm" class="btn-primary btn-sm"><span class="ms text-xl">ambulance</span>Confirmar y enviar ambulancia</button>`;
    },
    placa() {
      return `${header(TABS[3])}
        <div class="relative aspect-video overflow-hidden rounded-xl border border-ink-200 bg-ink-100">
          <video id="sim-video" muted loop playsinline preload="none" poster="images/busquedavideo-poster.webp" class="absolute inset-0 h-full w-full object-cover"><source src="images/busquedavideo.mp4" type="video/mp4"></video>
        </div>
        <dl class="divide-y divide-ink-100 text-base">${row('Vehículo', 'Chevrolet Aveo azul, 2012')}${row('Placa', 'GHE-456X', 'alert')}${row('Lectura', '96 % de confianza')}${row('Coincidencia', 'Vehículo solicitado*', 'alert')}</dl>
        <p class="text-sm text-ink-500">* Base de vehículos solicitados sujeta a convenio con el ministerio competente.</p>
        <button type="button" data-act="dispatch" class="btn-primary btn-sm"><span class="ms text-xl">local_police</span>Enviar patrulla</button>`;
    },
    multitud() {
      return `${header(TABS[4])}${videoBox('plaza-llena')}
        <dl class="divide-y divide-ink-100 text-base">${row('Personas', '1.240', 'alert')}${row('Aforo de la plaza', '1.000')}${row('Identificación', 'Ninguna: solo se cuentan', 'info')}</dl>
        <button type="button" data-act="confirm" class="btn-primary btn-sm"><span class="ms text-xl">campaign</span>Avisar a Protección Civil</button>`;
    },
    rostro() {
      return `${header(TABS[5])}
        <div class="relative aspect-video overflow-hidden rounded-xl border border-ink-200 bg-ink-100">
          <video id="sim-video" muted loop playsinline preload="none" poster="images/busquedafacial-poster.webp" class="absolute inset-0 h-full w-full object-cover"><source src="images/busquedafacial.mp4" type="video/mp4"></video>
        </div>
        <dl class="divide-y divide-ink-100 text-base">${row('Autorización', 'Orden de un juez (ejemplo)', 'info')}${row('Parecido', '91 %, falta verificar')}${row('Tiempo de respuesta', '1,2 segundos')}</dl>
        <p class="text-sm text-ink-500">Sujeto a convenio. Nunca se usa en reuniones públicas ni cerca de escuelas. Cada consulta queda registrada.</p>
        <button type="button" data-act="dispatch" class="btn-primary btn-sm"><span class="ms text-xl">how_to_reg</span>Verificar y avisar a la patrulla</button>`;
    },
    audio() {
      return `${header(TABS[6])}${sceneBox}
        <button type="button" data-act="confirm" class="btn-primary btn-sm"><span class="ms text-xl">local_police</span>Revisar con la cámara y enviar patrulla</button>`;
    },
    sabotaje() {
      return `${header(TABS[7])}${videoBox('robo-poste')}
        <dl class="divide-y divide-ink-100 text-base">${row('Puerta de la caja', 'Abierta', 'alert')}${row('Batería', 'Desconectada', 'alert')}${row('Cámara que lo vio', 'DSIP-06, redoma')}</dl>
        <button type="button" data-act="confirm" class="btn-primary btn-sm"><span class="ms text-xl">local_police</span>Enviar patrulla al poste DSIP-07</button>`;
    },
  };

  function clearTimers() { timers.forEach(clearTimeout); timers = []; if (battery) { clearInterval(battery); battery = null; } }

  function styleNodes(tab) {
    const color = tab.tone === 'alert' ? '#d92d20' : '#2446a6';
    $$('#sim-nodes [data-node]').forEach((b) => {
      const focus = b.dataset.node === tab.focus;
      b.style.background = focus ? color : '';
      b.style.borderColor = focus ? color : '';
      b.style.color = focus ? '#ffffff' : '';
      b.style.opacity = tab.focus && !focus ? '0.5' : '1';
      b.style.transform = focus ? 'translate(-50%,-50%) scale(1.2)' : '';
    });
    const f = $('#sim-focus');
    if (tab.focus) {
      const n = NODES[tab.focus];
      f.textContent = n.label; f.style.left = n.x + '%'; f.style.top = `calc(${n.y}% + 28px)`; f.classList.remove('hidden');
    } else f.classList.add('hidden');
    $('#sim-map').classList.toggle('is-dark', tab.id === 'apagon');
  }

  function show(id, user = false) {
    const tab = TABS.find((t) => t.id === id);
    if (user && cinema.playing && !driving) pauseCinema();
    clearTimers(); mini = null;
    $$('#sim-tabs [data-tab]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.tab === id)));
    styleNodes(tab);
    $('#sim-panel').innerHTML = PANELS[id]();
    $('#sim-log').innerHTML = '';
    LOGS[id].forEach(([t, m], i) => timers.push(setTimeout(() => log(t, m), 250 + i * 700)));

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
        $('#sim-batt-time').textContent = `${Math.floor(mins / 60)} h ${String(mins % 60).padStart(2, '0')} min`;
      }, 150);
    }
    const v = $('#sim-video'); if (v) { v.currentTime = 0; v.play().catch(() => {}); }
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
      if (a === 'patrol') {
        const on = act.getAttribute('aria-pressed') !== 'true'; act.setAttribute('aria-pressed', String(on));
        $('#sim-cams-mode').textContent = on ? '16 conectadas y visibles' : '8 conectadas en reposo';
        log(on ? 'ok' : 'info', on ? 'Se suman 8 cámaras del hospital y los liceos' : 'Cámaras de comercios en reposo');
      }
      if (a === 'report') {
        const pre = $('#sim-report'); pre.classList.remove('hidden'); pre.textContent = '';
        let i = 0; const step = () => { pre.textContent = REPORT.slice(0, i); i += 6; if (i <= REPORT.length + 6) timers.push(setTimeout(step, 16)); };
        step(); log('info', 'Borrador del parte redactado dentro de la central, sin internet');
      }
      if (a === 'confirm') { if (mini && mini.decide) mini.decide('ok'); log('ok', 'El operador confirmó y envió la unidad'); act.disabled = true; }
      if (a === 'dispatch') { log('ok', 'El operador verificó con el video y envió la patrulla'); act.disabled = true; }
      return;
    }
    const sc = e.target.closest('[data-scene]');
    if (sc) { cinemaGo(Number(sc.dataset.scene)); if (!cinema.playing) playCinema(); return; }
    if (e.target.closest('#sim-play')) { if (cinema.playing) pauseCinema(); else playCinema(); }
  });

  /* Recorrido guiado */
  function cinemaGo(i) {
    cinema.idx = i; cinema.t = 0; cinema.started = true;
    $$('#sim-timeline [data-scene]').forEach((b, j) => b.setAttribute('aria-pressed', String(j === i)));
    driving = true; show(CINEMA[i][0]); driving = false;
    if (i === CINEMA.length - 1) { const b = $('[data-act="report"]'); if (b) b.click(); }
    $('#sim-caption').textContent = CINEMA[i][2];
  }
  function playCinema() {
    if (!cinema.started) cinemaGo(0);
    cinema.playing = true;
    $('#sim-play').innerHTML = '<span class="ms">pause</span>Pausar recorrido';
  }
  function pauseCinema() {
    cinema.playing = false;
    $('#sim-play').innerHTML = '<span class="ms">play_arrow</span>Ver recorrido de un día';
  }
  function cinemaTick(dt) {
    if (!cinema.playing) return;
    cinema.t += dt * 1000;
    if (cinema.t >= SCENE_MS) {
      if (cinema.idx < CINEMA.length - 1) cinemaGo(cinema.idx + 1);
      else { pauseCinema(); cinema.started = false; }
    }
  }

  function loop(now) {
    if (!visible) return;
    const dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now;
    if (mini) { mini.step(dt); mini.draw(); }
    cinemaTick(dt);
    raf = requestAnimationFrame(loop);
  }
  window.addEventListener('resize', () => { if (mini) { mini.resize(); mini.draw(); } });
  onVisible(root, (v) => {
    visible = v;
    if (v) { cancelAnimationFrame(raf); last = performance.now(); raf = requestAnimationFrame(loop); }
    else { const vid = $('#sim-video'); if (vid) vid.pause(); }
  });
  show('normal');
}
