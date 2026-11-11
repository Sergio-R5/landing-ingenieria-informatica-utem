# Informe del proyecto: landing page de Ingeniería en Informática UTEM

Asignatura: EFE685, Electivo de Computación Móvil. Departamento de Informática y Computación, Universidad Tecnológica Metropolitana (UTEM).
Académico: Sebastián Salazar Molina. Fecha de entrega: 13 de noviembre de 2026.

## Integrantes

| Nombre completo | Usuario de GitHub | Issues a cargo |
|---|---|---|
| Sergio Rubio Gutiérrez | Sergio-R5 | Configuración del repositorio, fuentes y audiencia (Fases A y B), arquitectura (Fase C), base del proyecto, secciones del sitio, accesibilidad, rendimiento y documentación |
| Fabián Vargas Vilos | Fabianvv2123 | Guía de estilo (Fase D), componentes de cita, redacción y carga del contenido de todas las secciones y referencias |
| Diego Román | Venurior | Wireframes (Fase C), esquemas de las colecciones de contenido y layout base con SEO |

El historial de issues y commits de cada integrante está en el [repositorio](https://github.com/Sergio-R5/landing-ingenieria-informatica-utem). Diego Román participó hasta el 10 de noviembre de 2026; desde entonces, Sergio y Fabián se repartieron sus tareas pendientes.

## 1. Resumen

Construimos una página web que responde las preguntas reales de quienes quieren estudiar Ingeniería en Informática en la UTEM. Cada cifra muestra su año y enlaza a su fuente oficial.

- **Sitio publicado:** https://sergio-r5.github.io/landing-ingenieria-informatica-utem/
- **Repositorio:** https://github.com/Sergio-R5/landing-ingenieria-informatica-utem

**Decisiones que lo definen:**

1. **Partir por las dudas del público, no por la institución.** Encuestamos a 5 personas y ordenamos las secciones según lo que más preguntaron: cuánto dura y si hay trabajo.
2. **Títulos con forma de pregunta.** Cada sección se titula con la duda que responde, por ejemplo "¿Hay trabajo al titularse?".
3. **Honestidad con los datos.** Mostramos la duración real (12,9 semestres) junto a la formal (8), y declaramos los datos que no encontramos.
4. **Separar el contenido del código.** Todos los textos y cifras están en archivos de datos. Para actualizarlos no hay que tocar el código.

## 2. Fuentes del contenido (Fase A)

Reunimos 13 fuentes y evaluamos cada una con 5 criterios: autoridad, vigencia, trazabilidad, objetividad y pertinencia. La matriz completa está en [docs/fase-a-fuentes.md](docs/fase-a-fuentes.md) y los datos, en [docs/fase-a-datos.md](docs/fase-a-datos.md).

| Tipo de fuente | Ejemplos | Qué datos aportan |
|---|---|---|
| Página oficial de la carrera (F01) | utem.cl | Título, grado, duración, perfil de egreso, certificación, ponderaciones, vacantes y costos |
| Resolución del plan de estudios (F02) | Resolución Exenta N° 03838 de 2022 | Las 44 asignaturas con sus créditos |
| Ministerio de Educación (F05, F06, F07, F09) | Mi Futuro y Mineduc | Empleabilidad, ingresos, duración real y fechas de la PAES |
| Admisión UTEM (F10, F11) | utem.cl/admision | Vías de ingreso, cupos PACE y fechas de postulación y matrícula |

**Decisiones:**

- Usamos **11 fuentes en el sitio, 10 de ellas primarias**: las emite quien produce el dato. La única secundaria es la noticia de la acreditación de la UTEM (F08), porque no encontramos la resolución de la Comisión Nacional de Acreditación (CNA).
- Descartamos el folleto 2026 (F04): da cifras de empleabilidad distintas a las de Mi Futuro y no indica su año. Mi Futuro sí declara su período y su método.
- Descartamos una resolución anterior del plan de estudios (F03), porque fue reemplazada por F02.

## 3. Audiencia (Fase B)

Encuestamos a 5 personas del público principal: 4 estudiantes de 3.° y 4.° medio y 1 familiar. Cada una dio su consentimiento. Las respuestas originales y los consentimientos están guardados fuera del repositorio, porque es público. El instrumento está en el [Anexo A](#anexo-a-instrumento-aplicado) y el análisis, en [docs/fase-b-audiencia.md](docs/fase-b-audiencia.md).

**Qué aprendimos:**

- Las preguntas más repetidas fueron **cuánto dura la carrera** y **si hay trabajo al titularse** (3 de 5 cada una).
- Las 5 personas asocian la carrera con computadores o programar, pero **ninguna supo explicar qué hace un ingeniero en informática**.
- También preguntaron si es difícil, si hay que saber de computación antes y qué se aprende (2 de 5 cada una).

**Cómo cambió el sitio:**

- La portada muestra la duración de inmediato, con una franja de datos clave.
- Campo laboral subió al tercer lugar, antes del perfil de egreso.
- "Sobre la carrera" explica en palabras simples qué hace un ingeniero en informática.
- Las preguntas frecuentes son las 8 más repetidas en la encuesta.

**Limitación:** ninguna persona encuestada era del público secundario (personas de 20 años o más o que cambian de carrera). Para ese público, el sitio informa que la UTEM no tiene una vía especial y que pueden postular por PAES.

## 4. Arquitectura de información (Fase C)

Detalle y wireframes en [docs/fase-c-arquitectura.md](docs/fase-c-arquitectura.md).

| Orden | Sección | Por qué va aquí |
|---|---|---|
| 1 | Portada | Responde la duración, la pregunta más repetida |
| 2 | Sobre la carrera | Nadie sabía qué hace un ingeniero en informática: hay que explicarlo antes de dar más datos |
| 3 | Campo laboral | Empata como pregunta más repetida |
| 4 | Perfil de egreso | Une los trabajos con lo que se aprende |
| 5 | Plan de estudios | Responde qué se aprende y si es difícil |
| 6 | Respaldo | Da confianza antes de postular |
| 7 | Admisión | Es la acción final |
| 8 | Preguntas frecuentes | Reúne las dudas que no cupieron en otra sección |
| 9 | Referencias | Al final, como exige la pauta; cada cita del sitio enlaza aquí |

**Identidad visual.** Colores sobrios (fondo claro, texto casi negro y un azul de acento) y dos tipografías con licencia abierta: Plus Jakarta Sans para los títulos e Inter para el texto. Todos los contrastes cumplen el mínimo de WCAG 2.2, la norma internacional de accesibilidad web. No usamos fotos de terceros porque no conseguimos imágenes con permiso comprobable.

## 5. Redacción (Fase D)

La guía de estilo está en [docs/fase-d-guia-estilo.md](docs/fase-d-guia-estilo.md). Sus reglas principales:

- Oraciones de menos de 25 palabras y en voz activa.
- Cada sigla con su nombre completo la primera vez, por ejemplo "Prueba de Acceso a la Educación Superior (PAES)".
- Cada cifra con su año y una cita enlazada a Referencias.
- Sin frases publicitarias como "la mejor carrera" ni promesas como "empleo asegurado".

**Tipos de información.** Cada bloque del sitio lleva una etiqueta visible: "Dato institucional" cuando viene de una fuente oficial, o "Interpretación del equipo" cuando es nuestra lectura, como la comparación con otras carreras. La etiqueta es texto, no solo un color, para que también la lea un lector de pantalla.

**Revisión del contenido.** Al revisar los textos encontramos y corregimos datos sin fuente, como vías de ingreso inexistentes, un grado académico mal escrito y una malla que sumaba 236 créditos en vez de 240. El detalle está en los pull requests #47 a #53.

## 6. Decisiones de implementación

| Decisión | Por qué |
|---|---|
| **Astro** para construir el sitio | Entrega páginas ya armadas, sin JavaScript innecesario, lo que las hace rápidas en celulares |
| **TypeScript estricto** | Detecta errores de tipo antes de publicar; el proyecto no usa `any` |
| **Colecciones de contenido** con esquemas | Los datos viven en archivos JSON y Markdown dentro de `src/content/`. Cada archivo se valida al compilar: un porcentaje sobre 100, una fecha mal escrita o un semestre que no suma 30 créditos detienen la publicación |
| **Citas calculadas** | El número de cada cita se calcula según el orden de Referencias, y si una cita apunta a una fuente inexistente, el sitio no se publica |
| **Tailwind CSS** | Define los colores y tamaños de la identidad visual en un solo lugar (`src/styles/global.css`) |
| **GitHub Pages con GitHub Actions** | Cada cambio en `main` se revisa y se publica solo. Si el build falla, sigue en línea la versión anterior |

**Separación de contenido, presentación y configuración:**

- **Contenido:** `src/content/`. Una persona sin conocimientos de programación puede actualizarlo siguiendo el [README](README.md).
- **Presentación:** `src/components/`, un componente por sección, sin textos ni cifras escritos a mano.
- **Configuración:** `astro.config.mjs`, `tsconfig.json`, `package.json` y `src/content.config.ts`. Los archivos JSON, que no admiten comentarios, se explican línea a línea en [docs/codigo-configuracion.md](docs/codigo-configuracion.md).

### Isla interactiva

**Qué hace.** El plan de estudios tiene 44 asignaturas en 8 semestres. Un filtro con un botón por semestre permite ver uno a la vez (`src/components/FiltroMalla.astro`).

**Por qué existe.** En la Fase B, 2 de 5 personas preguntaron qué se aprende en la carrera. En un celular, la malla completa es una lista muy larga. El filtro ayuda a revisarla por partes, sin salir de la página.

**Cuánto JavaScript agrega.** Es un script pequeño de Astro, sin bibliotecas ni frameworks, y es el único del sitio. Sin JavaScript, el filtro no aparece y se ve la malla completa, así que nadie pierde información.

**Accesibilidad.** Los botones son nativos: funcionan con el teclado e indican cuál está activo (`aria-pressed`). El resultado se anuncia al lector de pantalla con una zona de estado (`role="status"`).

## 7. Calidad: accesibilidad y rendimiento

Medimos el sitio publicado el 11 de noviembre de 2026. Los enlaces a cada informe y las capturas están en [docs/evidencias/](docs/evidencias/README.md).

| Herramienta | Resultado | Mínimo exigido |
|---|---|---|
| PageSpeed Insights, celular | 100 en Rendimiento, Accesibilidad, Recomendaciones y SEO | 90 en cada una |
| CompliaScan | 100/100, sin problemas (antes: 92/100) | 90/100 |

**Por qué el sitio es rápido.** No tiene fotos, aloja sus propias fuentes y Astro entrega HTML ya armado. El único JavaScript es el filtro de la malla. La página muestra su contenido principal en 0,9 segundos en un celular simulado.

**Qué corregimos.** CompliaScan encontró 2 problemas en el enlace "Saltar al contenido principal", que sirve a quienes navegan con teclado. Estaba oculto de una forma que lo dejaba de 1×1 px, y su destino no era reconocible. Lo arreglamos y el puntaje subió a 100.

**Pruebas manuales.** Recorrimos la página solo con el teclado: el enlace para saltar aparece al primer Tab, las preguntas frecuentes se abren con Enter y el filtro funciona con la barra espaciadora. Sergio también la recorrió con el Narrador de Windows, el lector de pantalla del sistema, y todo se leyó correctamente.

## 8. Validación (Fase E)

Registro completo en [docs/fase-e-validacion.md](docs/fase-e-validacion.md).

**Revisión cruzada.** Listamos las 38 cifras y afirmaciones del sitio y abrimos sus fuentes. Las de la página de la carrera, de Admisión UTEM y del Mineduc coinciden. Encontramos que el texto del Cupo PACE no aclaraba que el 25 % superior se mide dentro del liceo, y lo corregimos. Las cifras de Mi Futuro las revisamos en el navegador, porque esa página carga sus datos con JavaScript, y también coinciden.

**Prueba con usuarios.** Pendiente: la hacen al menos 3 personas reales del público objetivo, con consentimiento, siguiendo el guion de 5 tareas del registro de validación.

**Hallazgos.**

| Hallazgo | Estado |
|---|---|
| Enlace para saltar al contenido que no reconocía la auditoría | Corregido |
| Requisito del Cupo PACE impreciso | Corregido |
| Cifras de Mi Futuro: se abrieron en el navegador y coinciden | Corregido |
| Requisitos "Nivel 5, 6 y 7 aprobado": el sitio aclara que son nuestra lectura | Corregido |

## 9. Conclusiones

- **Partir por la audiencia cambió el sitio.** Sin la encuesta, Campo laboral habría quedado al final y no habríamos explicado qué hace un ingeniero en informática.
- **Verificar costó más que programar.** La mayoría de los errores que corregimos eran datos sin fuente o mal copiados, no fallas de código. Las reglas de los esquemas ayudaron: detuvieron la publicación cada vez que un dato no cumplía.
- **Un sitio simple puede ser rápido y accesible.** Sin fotos y con un solo script, el sitio obtuvo 100 en las cuatro categorías de PageSpeed Insights y 100/100 en CompliaScan.
- **El trabajo no quedó parejo.** Con un integrante menos desde el 10 de noviembre, la carga se concentró en dos personas. Lo registramos en la coevaluación.

## Anexos

### Anexo A: instrumento aplicado

El cuestionario y el consentimiento están en [docs/fase-b-instrumento.md](docs/fase-b-instrumento.md). Las respuestas anonimizadas están en [docs/fase-b-audiencia.md](docs/fase-b-audiencia.md).

### Anexo B: declaración de uso de IA

El registro completo, con fecha, integrante, herramienta, tarea, instrucción y qué se modificó, está en [docs/registro-uso-ia.md](docs/registro-uso-ia.md). Resumen:

| Herramienta | Quién la usó | Para qué |
|---|---|---|
| Claude Code (Claude Opus 5.5) | Sergio Rubio Gutiérrez | Crear las issues y la guía de trabajo; buscar y ordenar las fuentes; ordenar las respuestas de la encuesta sin agregar ninguna; generar el código de la base del proyecto y de las secciones; revisar y corregir los pull requests del equipo; medir la accesibilidad y el rendimiento; redactar la documentación |
| Gemini | Diego Román | Generar el código del layout base y de los esquemas de las colecciones |
| Gemini | Fabián Vargas Vilos | Redactar la guía de estilo y generar los componentes de cita |

**Reglas que seguimos:**

- **Ningún dato tiene como fuente una herramienta de IA.** Cada cifra se tomó de una fuente oficial, y la IA nunca se cita como fuente.
- **La IA no inventó personas.** Las respuestas de la encuesta, la prueba con lector de pantalla y la prueba con usuarios son de personas reales.
- **El código generado está documentado línea a línea** con comentarios que explican qué hace y por qué.
- **Lo que hizo la IA, lo revisó una persona.** Sergio Rubio Gutiérrez revisó cada fila del registro el 11 de noviembre de 2026.

### Anexo C: anexos técnicos

| Documento | Contenido |
|---|---|
| [README.md](README.md) | Cómo ejecutar el proyecto y cómo actualizar cada dato |
| [docs/codigo-configuracion.md](docs/codigo-configuracion.md) | Explicación línea a línea de los archivos de configuración y de datos |
| [docs/evidencias/README.md](docs/evidencias/README.md) | Capturas en 360, 768 y 1280 px, y mediciones de PageSpeed Insights y CompliaScan |
| [docs/fase-c-arquitectura.md](docs/fase-c-arquitectura.md) | Wireframes e identidad visual |
| [AGENTS.md](AGENTS.md) | Cómo trabajó el equipo: issues, ramas, pull requests y revisiones |
