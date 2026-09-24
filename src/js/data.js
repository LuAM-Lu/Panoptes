// Partes del poste Panoptes que muestran el visor 3D y su lista (etiqueta corta, texto sencillo).
// El resto del contenido técnico vive como HTML estático en anexo.html.

export const DSIP_PARTS = [
  { id: 'poste', n: 1, label: 'Poste en L', offset: [90, -10], icon: 'architecture', title: 'Poste en L de acero galvanizado',
    text: 'Sostiene la pantalla, el semáforo y las cámaras. Resiste vientos fuertes y protege el cableado por dentro.' },
  { id: 'pantalla', n: 2, label: 'Pantalla publicitaria', offset: [0, 90], icon: 'featured_video', title: 'Pantalla publicitaria',
    text: 'Los comercios compran espacios con un código QR. Ese ingreso paga el mantenimiento del poste.' },
  { id: 'semaforo', n: 3, label: 'Semáforo LED', offset: [-60, 90], icon: 'traffic', title: 'Semáforo LED',
    text: 'Gasta 80 % menos electricidad que un semáforo viejo y sigue funcionando durante los apagones.' },
  { id: 'ptz', n: 4, label: 'Cámara que gira', offset: [-130, 30], icon: 'videocam', title: 'Cámara que gira y acerca',
    text: 'Gira y se acerca sola hacia cualquier emergencia para que el operador la vea con claridad.' },
  { id: 'bala', n: 5, label: 'Cámaras fijas', offset: [70, -30], icon: 'photo_camera', title: 'Cámaras fijas',
    text: 'Vigilan los accesos de la intersección y leen las placas de los vehículos.' },
  { id: 'caja', n: 6, label: 'Caja de control y batería', offset: [120, 20], icon: 'developer_board', title: 'Caja de control',
    text: 'Aquí está la inteligencia artificial y la batería. Todo se analiza en el poste, sin depender de internet.' },
  { id: 'micro', n: 7, label: 'Micrófono', offset: [-120, 20], icon: 'mic', title: 'Micrófono de alarmas',
    text: 'Reconoce disparos, gritos de auxilio y choques. No graba conversaciones: solo avisa cuando oye un sonido de alarma.' },
  { id: 'nube', n: 8, label: 'Conexión a la central', offset: [40, -70], icon: 'cloud_sync', title: 'Conexión con la central',
    text: 'El poste envía solo los avisos a la central de mando por un enlace cifrado.' },
];
