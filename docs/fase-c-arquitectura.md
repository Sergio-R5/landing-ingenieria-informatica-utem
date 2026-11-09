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

| Elemento | Decisión | Justificación | Contraste o licencia |
|---|---|---|---|
| Fondo | `#F8FAFC`, blanco pizarra | Fondo claro y sobrio, que no compite con los datos | Base de los contrastes de abajo |
| Texto principal | `#0F172A`, azul pizarra casi negro | Máxima legibilidad para un público que lee en celular y computador (Fase B: 4 de 5 en computador) | 17,06:1 sobre el fondo (mínimo 4,5:1) |
| Acento | `#2563EB`, azul | Destaca enlaces, citas y la franja de datos clave sin usar colores publicitarios | 4,94:1 sobre el fondo: sirve para texto normal |
| Acento sobre fondo oscuro | `#2563EB` sobre `#0F172A` | Solo para íconos o texto grande | 3,45:1: **no sirve para texto normal** (mínimo 4,5:1) |
| Botones | Fondo `#2563EB`, texto blanco, esquinas redondeadas, al menos 24×24 px | El llamado a postular debe verse claro en la portada | 5,17:1 |
| Tarjetas y bordes | `#E2E8F0`, gris claro, con texto `#0F172A` encima | Separa los datos sin recargar la página | 14,48:1 para el texto |
| Títulos | Plus Jakarta Sans | Geométrica y moderna; da carácter a los títulos con forma de pregunta | SIL Open Font License 1.1; se aloja en el propio sitio |
| Texto | Inter | Diseñada para pantallas; se lee bien en tamaños pequeños | SIL Open Font License 1.1; se aloja en el propio sitio |
| Imagen para redes sociales | `public/og-image.png`, 1200×630 px, con los colores de la identidad visual | Es lo que se ve al compartir el enlace (#20) | Creada por el equipo; sin fotos ni logos de terceros |
| Otras imágenes | Por ahora, ninguna | Las imágenes autorizadas se eligen en la #26 | Cada imagen deberá indicar autor y licencia o permiso |

## Secciones sin fuente suficiente

Todas las secciones obligatorias tienen fuente para su contenido mínimo. Faltan fuentes para algunas preguntas de la Fase B:

| Sección | Qué falta | Qué haremos |
|---|---|---|
| Respaldo institucional | Cuerpo académico, laboratorios y apoyo a estudiantes (2 de 5 preguntaron por el apoyo) | Buscar en el sitio de la Escuela de Informática o de la UTEM. Si no hay fuente, se omite |
| Preguntas frecuentes | Fuente que confirme si se necesita saber de computación antes de entrar | Responder con la malla del primer semestre (F02) y marcar la conclusión como interpretación del equipo |
| Preguntas frecuentes | Oportunidades laborales para mujeres | Mostrar solo la matrícula por sexo (F07), sin conclusiones que no estén respaldadas |
| Admisión | Becas y beneficios | Buscar la página oficial de becas de la UTEM, o enlazar a ella sin dar cifras |
| Portada | Vivienda cerca del campus | Fuera del alcance del sitio: se omite |