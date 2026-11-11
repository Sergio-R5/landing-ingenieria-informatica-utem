# Fase C: arquitectura de información

**Producto C.** Orden de las secciones justificado, wireframes y relación de cada sección con sus fuentes. Vale 10 % de la nota.

## Orden de las secciones

El orden sigue las preguntas que más se repitieron en la Fase B ([fase-b-audiencia.md](fase-b-audiencia.md)). Cambia respecto de la lista de la pauta: **Campo laboral sube al tercer lugar**, porque la empleabilidad fue una de las dos preguntas más frecuentes.

| Orden | Sección | Pregunta que responde | Por qué va aquí (hallazgo de la Fase B) | Fuentes (IDs) |
|---|---|---|---|---|
| 1 | Portada | ¿Qué es la carrera y cuánto dura? | La duración es la primera pregunta más repetida (3 de 5). Debe verse sin bajar en la página | F01, F02 |
| 2 | Sobre la carrera | ¿En qué se diferencia? | Las 5 personas asocian la carrera con "computadores" o "programar", pero ninguna sabe qué hace un ingeniero en informática. Hay que explicarlo antes de dar más datos | F01, F12, F13 |
| 3 | Campo laboral | ¿Dónde trabajaré? | La empleabilidad empata como pregunta más frecuente (3 de 5), y una persona preguntó por los ingresos | F01, F05, F06 |
| 4 | Perfil de egreso | ¿Qué podré hacer? | Sigue a Campo laboral: conecta los trabajos con las capacidades que se forman. Responde "qué se aprende" (2 de 5) | F01 |
| 5 | Plan de estudios | ¿Qué aprenderé? | Responde qué se aprende (2 de 5), si es difícil (2 de 5) y si hay que saber de computación antes (2 de 5) | F02, F05 |
| 6 | Respaldo institucional | ¿Qué garantías hay? | Nadie preguntó por la acreditación, pero 2 de 5 quieren conocer experiencias, reseñas o el apoyo a estudiantes. Va antes de Admisión para dar confianza antes de postular | F01, F08 |
| 7 | Admisión | ¿Cómo postulo? | Es la acción final. Responde dudas sobre el costo (1 de 5) y qué pasa si no queda en su primera opción (1 de 5) | F01, F07, F09, F10, F11 |
| 8 | Preguntas frecuentes | Dudas de la Fase B | Reúne las preguntas reales que no cupieron en otra sección, como "¿necesito saber de computación?" (2 de 5) | Según cada respuesta: F01, F02, F05, F07, F11 |
| 9 | Referencias | ¿De dónde sale esto? | Va al final, como exige la pauta. Cada cita del sitio enlaza aquí | F01, F02, F05 a F13 (F03 y F04 no se usan) |

### Navegación

- Un menú con enlaces a cada sección, para saltar directo a lo que se busca.
- Un llamado a la acción en la Portada que lleva a Admisión.
- Cada cita del texto enlaza a su entrada en Referencias.

## Propuesta creativa

**Idea: una página que responde las preguntas reales de los postulantes.** Esta es una decisión del equipo, basada en la Fase B.

- **Títulos con forma de pregunta:** cada sección se titula con la pregunta que la responde, tomada de la encuesta. Por ejemplo, "¿Cuánto dura?" o "¿Hay trabajo al titularse?". Así el postulante reconoce sus propias dudas.
- **Datos clave a la vista:** bajo la portada, una franja con 3 o 4 cifras con año y cita: duración formal y real, empleabilidad al primer año y vacantes.
- **Lenguaje para quien no sabe de informática:** como ninguna persona supo explicar qué hace un ingeniero, "Sobre la carrera" usa ejemplos simples de problemas que resuelve, sin jerga.
- **Honestidad con los datos incómodos:** la duración real (12,9 semestres) se muestra junto a la formal (8 semestres), con contexto. Sin frases publicitarias.

**Por qué es nueva:** las páginas de carreras suelen partir por la institución. Esta parte por las dudas de quien postula, en el orden en que las preguntó.

## Wireframes

Bocetos de baja fidelidad de la versión móvil y de escritorio, con el orden de las 9 secciones, el menú, la franja de datos clave, el botón para postular y el selector de semestres (#14).

![Boceto de wireframes de baja fidelidad con la versión móvil (vertical) y la de escritorio (horizontal). Muestra el menú de navegación, la portada con el botón para postular, la franja de datos clave y las 9 secciones en el orden del mapa de contenidos, incluido el selector de semestres del plan de estudios.](wireframes/Wireframe.jpg)

## Identidad visual

Colores, tipografías e imágenes, con su contraste y su licencia (#15). Los contrastes se calcularon con la fórmula de WCAG 2.2.

**Rediseño del 11 de noviembre de 2026.** La primera versión se veía muy simple. Se tomó como guía la skill pública `frontend-design` de Anthropic (licencia Apache 2.0, https://github.com/anthropics/skills): partir de lo característico del tema, que un solo elemento sea memorable y evitar el aspecto de plantilla. El elemento memorable es la portada: una franja azul profunda con las preguntas reales de la encuesta, cada una respondida con una cifra oficial. Se pasó a una sola tipografía. En una segunda etapa, a pedido del equipo, se dio un color a cada sección y se agregaron efectos hechos solo con CSS, todos desactivables si la persona pidió reducir el movimiento.

| Elemento | Decisión | Justificación | Contraste o licencia |
|---|---|---|---|
| Fondo | `#F8FAFC`, blanco pizarra | Fondo claro y sobrio, que no compite con los datos | Base de los contrastes de abajo |
| Texto principal | `#0F172A`, azul pizarra casi negro | Máxima legibilidad para un público que lee en celular y computador (Fase B: 4 de 5 en computador) | 17,06:1 sobre el fondo (mínimo 4,5:1) |
| Acento | `#2563EB`, azul | Destaca enlaces, citas y la franja de datos clave sin usar colores publicitarios | 4,94:1 sobre el fondo: sirve para texto normal |
| Azul profundo | `#102A5C`, con texto blanco encima | Fondo de la portada, de la cabecera de cada semestre y del pie. Da peso a la portada sin usar fotos | 13,93:1 con texto blanco |
| Amarillo de realce | `#FACC15`, solo sobre el azul profundo | Marca el botón para postular y las cifras de la portada: es lo primero que debe ver el postulante | 9,09:1 sobre el azul profundo |
| Azul claro | `#BFDBFE`, solo sobre el azul profundo | Texto secundario, preguntas y citas de la portada | 9,80:1 sobre el azul profundo |
| Colores de sección | Violeta `#6D28D9`, verde `#047857`, rosa `#BE185D`, azul `#2563EB`, cian `#0E7490` y naranja `#C2410C` | Cada sección tiene su color en la etiqueta, el borde de las tarjetas, sus cifras y un fondo teñido al 7 %. Hace la página más viva para un público joven y ayuda a ubicarse al bajar | Texto blanco encima: entre 5,17:1 y 7,10:1. El color sobre su fondo teñido: al menos 4,69:1 |
| Detalles de la portada | Lila `#A78BFA`, celeste `#67E8F9` y chicle `#F9A8D4`, solo sobre el azul profundo | Bordes de las tarjetas de preguntas y manchas de color del fondo | Entre 5,12:1 y 9,61:1 |
| Efectos | Manchas de color fijas en la portada (degradados, sin filtros), entrada de las preguntas y brillo de la barra al cargar, tarjetas que se elevan al pasar el cursor y que aparecen al hacer scroll. Ninguna animación se repite sin fin, para que la página quede quieta y PageSpeed no baje | Llaman la atención del público objetivo sin agregar JavaScript: todo es CSS. La aparición al hacer scroll usa `animation-timeline`; los navegadores que no la conocen muestran las tarjetas de inmediato | Todos se desactivan si la persona pide reducir el movimiento (WCAG 2.3.3) |
| Botones | Postular: fondo amarillo con texto azul profundo, 48 px de alto. Filtro de la malla: borde azul profundo; el elegido, relleno | Se distinguen del texto y se tocan con facilidad (al menos 24×24 px) | 9,09:1 y 13,31:1 |
| Tarjetas y bordes | `#E2E8F0`, gris claro, con texto `#0F172A` encima | Separa los datos sin recargar la página | 14,48:1 para el texto |
| Tipografía | Plus Jakarta Sans para títulos y texto | Geométrica y moderna; da carácter a los títulos con forma de pregunta y se lee bien en pantallas. Una sola familia da una voz más clara y descarga un archivo menos | SIL Open Font License 1.1; se aloja en el propio sitio |
| Imagen para redes sociales | `public/og-image.png`, 1200×630 px, con los colores de la identidad visual | Es lo que se ve al compartir el enlace (#20) | Creada por el equipo; sin fotos ni logos de terceros |
| Otras imágenes | Ninguna | En la #26 no encontramos imágenes con licencia abierta o permiso por escrito de la UTEM. Una foto o una captura de la malla sin permiso no se puede usar. Si el equipo consigue una autorización, se agrega con su crédito y texto alternativo | No aplica |

## Secciones sin fuente suficiente

Todas las secciones obligatorias tienen fuente para su contenido mínimo. Faltan fuentes para algunas preguntas de la Fase B:

| Sección | Qué falta | Qué haremos |
|---|---|---|
| Respaldo institucional | Cuerpo académico, laboratorios y apoyo a estudiantes (2 de 5 preguntaron por el apoyo) | Buscar en el sitio de la Escuela de Informática o de la UTEM. Si no hay fuente, se omite |
| Preguntas frecuentes | Fuente que confirme si se necesita saber de computación antes de entrar | Responder con la malla del primer semestre (F02) y marcar la conclusión como interpretación del equipo |
| Preguntas frecuentes | Oportunidades laborales para mujeres | Mostrar solo la matrícula por sexo (F07), sin conclusiones que no estén respaldadas |
| Admisión | Becas y beneficios | Buscar la página oficial de becas de la UTEM, o enlazar a ella sin dar cifras |
| Portada | Vivienda cerca del campus | Fuera del alcance del sitio: se omite |