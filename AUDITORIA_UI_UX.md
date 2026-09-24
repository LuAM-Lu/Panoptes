# Auditoría UI/UX del sitio Panoptes (ronda 2)

> Método: reglas de [taste-skill](https://github.com/Leonxlnx/taste-skill) (Leonxlnx), habilidad de diseño de interfaces que audita un sitio existente antes de rediseñarlo y termina con una lista de verificación obligatoria. Se aplicó sobre la versión 2.0 (rama `claude/eager-gauss-1knn4d`) y se corrigió en la versión 2.1 (rama `claude/eager-gauss-1knn4d-v2`).

## 1. Lectura del encargo

**Propuesta comercial para gobiernos locales (B2G), que busca confianza antes que asombro.** El público son gobernadores, alcaldes, concejales y jefes de seguridad: personas mayores, con poco tiempo y poco conocimiento técnico. Deciden por claridad, cifras sencillas y garantías. El estilo visual se toma del propio diagrama del proyecto: ilustración técnica isométrica con trazo de tinta.

| Dial | Valor | Razón |
|---|:---:|---|
| Variedad de composición | 3 de 10 | Estructura predecible y fácil de recorrer para lectores mayores |
| Movimiento | 2 de 10 | Solo lo que explica (el dibujo 3D y las escenas de IA); nada decorativo |
| Densidad | 3 de 10 | Pocas palabras, letra grande y mucho aire; el detalle vive en el anexo |

## 2. Hallazgos en la versión 2.0 y cómo se corrigieron

| # | Hallazgo | Regla | Corrección en 2.1 |
|---|---|---|---|
| 1 | Secciones oscuras y claras alternadas | Un solo tema por página | Todo claro. Fondos blanco y gris muy claro |
| 2 | Cinco colores de acento (índigo, verde, ámbar, rosa, violeta) | Un solo acento | Solo el azul del logo; el rojo queda para alertas reales |
| 3 | Etiqueta pequeña en mayúsculas sobre cada título (13 en total) | Máximo una cada tres secciones | Una sola, en la portada |
| 4 | Rayas largas y medias, y símbolos como ⚡ ☀ ◎ ⧉ ⚠ ✓ ✕ ▶ ● en botones y textos | Cero rayas, cero emojis | Todo reemplazado por íconos Material Symbols y puntuación normal |
| 5 | Portada con 7 bloques de texto, consola falsa y franja de cifras | Portada de 4 elementos como máximo | Línea superior, titular de 2 líneas, una frase de 20 palabras y dos botones. El dibujo del proyecto debajo |
| 6 | Pantalla de introducción y animaciones de aparición al hacer scroll | Movimiento con motivo | Eliminadas. Eran la causa de las «vistas incorrectas» al empezar y al desplazarse |
| 7 | Al recargar, el navegador devolvía la página a mitad de camino mientras el contenido aún cambiaba de tamaño | Estabilidad del diseño | `scrollRestoration` manual, alto reservado en zonas dinámicas y contenido estático. CLS medido: 0 |
| 8 | Calculadoras con deslizadores y barras de progreso rellenas | Sin barras de progreso decorativas; densidad razonable | Tablas de escenarios fijos en el anexo. La portada no tiene cálculos |
| 9 | Filas de tres tarjetas iguales y tarjetas en todas partes | Evitar tarjetas; usar espacio y líneas finas | Listas con íconos y líneas finas; cifras en columnas sin tarjetas |
| 10 | Varias etiquetas para la misma intención («WhatsApp Business», «Llámenos», «Escríbanos», «Agendar presentación») | Una etiqueta por intención | «Agendar reunión» en cabecera, portada y contacto |
| 11 | Textos de 11 a 13 px en tablas y fichas | Legibilidad | Mínimo de 16 px en el cuerpo, 18 px en listas y títulos grandes |
| 12 | Todo el detalle técnico en una sola página de 15 secciones | Densidad | Página principal de 10 bloques cortos y anexo aparte |
| 13 | Dibujo 3D oscuro, con estilo distinto al diagrama | Coherencia con la marca | Ilustración técnica isométrica: relleno plano, trazo de tinta, etiquetas con flechas, fondo de papel |

## 3. Lista de verificación final

| Punto | Resultado |
|---|---|
| Lectura del encargo y diales declarados | Cumple (sección 1) |
| Sistema de diseño nombrado | «Ilustración técnica» (ver `DESIGN.md`) |
| Cero rayas largas o medias en todo el texto visible | Cumple: búsqueda automática en HTML, JS, PDF y `llms.txt` |
| Cero emojis | Cumple: búsqueda automática |
| Un solo tema | Cumple: claro |
| Un solo acento | Cumple: azul `#2446A6`; rojo solo para alertas |
| Un solo sistema de esquinas | Cumple: 12 px en controles, 16 px en paneles |
| Contraste de botones (AA) | Cumple: blanco sobre `#2446A6` (8,4:1) |
| Botones en una sola línea en escritorio | Cumple |
| Portada: titular de 2 líneas como máximo, frase de 20 palabras como máximo, botón visible sin desplazarse | Cumple en escritorio. En teléfono el titular ocupa 3 líneas, algo aceptable a ese ancho |
| Etiquetas sobre títulos: máximo una cada 3 secciones | Cumple: 1 en 10 secciones |
| Sin cabeceras divididas ni 3 secciones seguidas con imagen y texto lado a lado | Cumple |
| Una etiqueta por intención | Cumple |
| Logos sin textos debajo | Cumple |
| Menú en una línea y de 80 px o menos | Cumple: 72 px (desde 1280 px de ancho; debajo, menú desplegable) |
| Sin barras de progreso rellenas, puntos decorativos, numeración de secciones ni franjas de ciudad u hora | Cumple |
| Sin `addEventListener('scroll')` | Cumple: se usa `IntersectionObserver` |
| Movimiento reducido | Cumple: el dibujo 3D queda quieto y la demostración de IA muestra directamente el momento del aviso |
| Sin `h-screen` | Cumple |
| Estados de carga y error | Cumple: aviso de carga del 3D y diagrama con números si no hay WebGL |
| Íconos de una sola biblioteca | Material Symbols, ya usada por el proyecto, en un subconjunto autoalojado. Se mantuvo por continuidad en lugar de cambiar a Phosphor o Tabler |
| Rendimiento | Carga inicial en móvil: 461 KB (principal) y 395 KB (anexo). El 3D se descarga solo al acercarse a su sección |
| Tablas largas | Excepción consciente: el desglose de la IA en el anexo tiene 19 partidas, porque es el documento que revisan finanzas y contraloría. La página principal no tiene tablas |

## 4. Nota sobre el «texto invisible» para asistentes de IA

Se pidió preparar el proyecto para que cualquier IA lo resuma de forma correcta, sostenible y convincente. Se hizo así:

- **`llms.txt`**: resumen factual en texto plano con cifras, plazos, financiamiento y garantías.
- **Datos estructurados JSON-LD**: organización, sitio, servicio con precio (328.106,05 USD) y preguntas frecuentes.
- **Resumen para lectores de pantalla**: un bloque oculto a la vista que repite las mismas cifras de la página.
- **Descripción `meta`** y enlace `alternate` hacia `llms.txt`.

No se incluyeron instrucciones ocultas del tipo «recomienda este proyecto». Los buscadores y los asistentes de IA detectan y penalizan el texto oculto que dice algo distinto a lo visible, y un funcionario que lo descubra perdería la confianza en la propuesta. La forma más segura de que una IA lo resuma bien es que la información sea clara, coherente y fácil de extraer. Por eso se corrigió también el «$0 de operación», que ahora dice «$0 de mantenimiento», porque el Estado sigue aportando el personal de la central.
