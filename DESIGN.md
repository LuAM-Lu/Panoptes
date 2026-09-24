# Ilustración técnica: sistema de diseño de Panoptes 2.1

## Idea rectora
El sitio se vende a autoridades y altos funcionarios: personas con poco tiempo y, muchas veces, poco conocimiento técnico. Por eso todo se ve como el diagrama del proyecto: un dibujo técnico claro, con trazo de tinta, etiquetas en mayúsculas con flechas y un solo color de acento.

- **Página principal (`index.html`)**: la historia en pocas palabras. Sin tablas ni calculadoras.
- **Anexo (`anexo.html`)**: el detalle para técnicos, finanzas y jurídico (presupuestos, evaluación, IA, simulador, hoja de ruta, fichas y marco legal).
- **Resumen en PDF (`dossier.html` y `Panoptes_Dossier_Ejecutivo.pdf`)**: dos páginas para imprimir o enviar por WhatsApp.

Reemplaza al sistema oscuro «Vigía» de la versión 2.0, que alternaba fondos oscuros y claros y usaba cinco colores de acento.

## Reglas
1. **Un solo tema claro.** Nada de secciones oscuras.
2. **Un solo acento**: el azul del logo. El rojo solo marca alertas reales.
3. **Texto corto.** Titular de pocas palabras, una frase de apoyo, listas de tres o cuatro puntos. Cuerpo de 18 px o más.
4. **Cero emojis y cero rayas largas o medias.** Los símbolos se dibujan con íconos Material Symbols.
5. **Sin animaciones de aparición al hacer scroll.** La única animación de entrada es la del logo (ver abajo).
6. **Una sola etiqueta por intención**: el botón de contacto siempre dice «Agendar reunión».

## Color
| Token | Valor | Uso |
|---|---|---|
| `ink-50` | `#F6F7F9` | Fondo de página |
| `white` | `#FFFFFF` | Secciones alternas, paneles |
| `ink-200` | `#DDE2E9` | Líneas finas y bordes |
| `ink-600` | `#46546A` | Texto de apoyo |
| `ink-900` | `#0F1A2B` | Titulares y trazo |
| `brand-500` / `brand-600` | `#2446A6` / `#1F3C92` | Acento: botones, enlaces, íconos |
| `alert` | `#D92D20` | Solo alertas (persona caída, robo, error de presupuesto) |

## Tipografía
- **Plus Jakarta Sans** (400 a 800) para todo el texto.
- **Barlow Condensed** (600 y 700) para cifras grandes, etiquetas del dibujo 3D y la línea superior de la portada, como en el diagrama.
- Ambas autoalojadas en `assets/fonts/`.
- Cifras en formato venezolano: `$24.639,65`.

## Componentes (en `src/css/app.css`)
- `btn-primary`, `btn-outline`: altura mínima de 52 px (44 px en `btn-sm`).
- `seg`: selector de situación del dibujo 3D (en móvil, tres columnas con el ícono arriba).
- `stat`: cifras grandes separadas por líneas finas, sin tarjetas.
- `step`: pasos numerados sobre una línea.
- `more-*`: invitación al anexo en la página principal (sección «¿Quiere verlo más de cerca?»): dos tarjetas con imagen (laboratorio de IA y videos de la central), tres enlaces con ícono y un botón grande. Reemplaza a la demostración de IA, porque el dibujo 3D ya muestra todas las situaciones.
- `rm-*`: hoja de ruta del anexo. Las ocho fases en una sola fila (dos columnas en móvil), trazo continuo para el plan piloto y punteado para lo opcional; al tocar una fase se abre su panel (pestañas accesibles con flechas del teclado).
- `qa` y `faq`: preguntas y respuestas.
- `callout`: etiqueta del dibujo 3D con flecha (en móvil se convierte en un número dentro de un círculo).
- `tbl` y `tbl-stack`: tablas en escritorio y filas apiladas en móvil (`tbl-text` para textos largos).

## Dibujo 3D (`src/js/dsip3d.js`)
- Cámara ortográfica con vista isométrica, como el diagrama de referencia.
- Relleno plano (`MeshToonMaterial` con 3 tonos), contorno de tinta (casco invertido para piezas curvas y aristas con `LineSegments2`).
- Bordes que se funden con el papel (máscara radial en el canvas).
- Etiquetas HTML con flechas SVG que se reacomodan para no encimarse.
- Ocho situaciones (botones en cuadrícula: 4 columnas en móvil, 8 en escritorio):
  - **Normal**: tránsito que respeta el semáforo y publicidad en la pantalla.
  - **Apagón**: la pantalla se apaga, la energía sale de la batería y un panel muestra el nivel de batería y las horas que quedan.
  - **Persona caída**: la cámara la enfoca y el aviso viaja en rojo a la central.
  - **Choque**: una moto golpea un auto, el conductor cae, los semáforos dan ola verde y llega la ambulancia.
  - **Multitud**: la gente llena la esquina, la mancha de densidad pasa a rojo, la pantalla indica otra ruta y la gente se dispersa.
  - **Humo**: se quema un contenedor en la calle del fondo, la cámara ve el humo, los semáforos dan ola verde y el camión de bomberos llega y lo apaga.
  - **Robo al poste**: alguien fuerza la caja de control, el sensor da la alarma (brillo rojo), la cámara lo sigue con un recuadro, la pantalla dice «Zona vigilada» y llega la policía.
  - **Disparos**: ondas de sonido salen del lugar, el micrófono del poste las reconoce, la gente se aleja corriendo, la cámara gira y llega la policía.
- **Día y noche**: botón aparte que se combina con cualquier situación. De noche la luz es azulada, los autos encienden los faros, la pantalla ilumina la calle y se ven los conos de visión de las cámaras.
- **Resaltado**: al tocar una pieza (en el dibujo, en su etiqueta o en la lista) su contorno se vuelve azul y aparece un halo con dos pulsos suaves.
- Una sola nube de datos con el sello de Panoptes, unida a la caja de control por una flecha de doble sentido.
- Micrófono de alarmas en el poste (pieza 7). Su etiqueta solo aparece en «Disparos» o al elegirlo en la lista.
- Personas con brazos y piernas que caminan, caen o van sentadas en la moto, con el mismo trazo de tinta.
- Autos en tonos neutros que entran y salen fuera del cuadro; lámparas apagadas en gris neutro.
- Solo se anima mientras está visible. Con «reducir movimiento» cada situación muestra directamente su momento clave. Si el equipo no tiene WebGL, se muestra el diagrama con números.

## Entrada con el logo (`index.html`)
- Estilo Netflix, 3 segundos: el logo aparece desenfocado, un brillo lo cruza, un halo se expande, se escribe «PANOPTES» y la cámara entra en el logo mientras se descubre la página.
- Solo la primera vez por visita (`sessionStorage`). Se salta con un toque, la rueda del ratón o cualquier tecla.
- Para verla de nuevo (por ejemplo, al presentar): abrir `index.html?intro`.
- No se muestra con «reducir movimiento», sin JavaScript ni al llegar por un enlace a una sección.
- El logo va como imagen de fondo (`images/logo-intro.webp`, 54 KB): si la entrada no se muestra, no se descarga.
- Mientras dura, la página no se desplaza y reserva el espacio de la barra de desplazamiento: al terminar no hay saltos.

## Desplazamiento
- `history.scrollRestoration = 'manual'`: al recargar, la página empieza arriba.
- Desplazamiento suave solo al tocar un enlace del menú; `scroll-padding-top` deja el título a la vista bajo la cabecera.
- Todas las zonas dinámicas tienen alto reservado (proporción fija o alto mínimo): no hay saltos de diseño (CLS 0 medido).

## Resumen legible por máquinas
- `llms.txt`, datos estructurados JSON-LD (`Organization`, `WebSite`, `Service` con precio, `FAQPage`) y un resumen para lectores de pantalla.
- Todo repite las mismas cifras y garantías que se leen en la página. No hay instrucciones ocultas para asistentes de IA: si el resumen oculto dijera algo distinto a lo visible, sería engañoso y los buscadores lo penalizan.

## Íconos
Material Symbols Outlined en un **subconjunto** con solo los íconos usados (unos 80 KB). Si agrega un ícono nuevo, regenere el subconjunto.

## Cómo compilar
```bash
npm install
python3 scripts/build_icons.py   # solo si cambió algún ícono (requiere internet)
npm run build                    # CSS (Tailwind), JS (esbuild, dos entradas: main y anexo) y versión ?v= en las páginas
CHROME_PATH=/ruta/a/chrome npm run dossier   # regenera el PDF desde dossier.html
```
Los archivos compilados (`assets/css`, `assets/js`, `assets/fonts`) se publican tal cual en GitHub Pages. `scripts/stamp.mjs` agrega `?v=<huella>` a la hoja de estilos y a los scripts de entrada, para que tras cada publicación el navegador no mezcle un HTML nuevo con archivos viejos en caché.

## Estructura
```
index.html          Propuesta (historia corta)
anexo.html          Detalle técnico y presupuesto
dossier.html        Fuente del PDF de dos páginas
llms.txt            Resumen factual para asistentes de IA
src/css/app.css     Estilos (Tailwind)
src/js/site.js      Cabecera, menú y desplazamiento (común)
src/js/main.js      Página principal: dibujo 3D
src/js/anexo.js     Anexo: laboratorio de IA y simulador
src/js/dsip3d.js    Dibujo 3D del poste
src/js/ai-scenes.js Escenas 2D del laboratorio de IA del anexo (persona caída, choques, audio, multitudes)
```
