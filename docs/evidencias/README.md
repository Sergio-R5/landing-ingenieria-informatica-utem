# Evidencias del diseño responsivo (#33)

Capturas del sitio publicado, tomadas el 11 de noviembre de 2026 en tres anchos de pantalla.

| Archivo | Ancho | Qué muestra |
|---|---|---|
| `portada-360px.jpg` | 360 px (celular) | Menú en varias líneas y ficha de la carrera en una columna |
| `malla-filtro-768px.jpg` | 768 px (tableta) | Filtro de la malla con el semestre 3 elegido y el mensaje que anuncia el resultado |
| `portada-1280px.jpg` | 1280 px (escritorio) | Menú fijo arriba, ficha en tres columnas y franja de datos clave en cuatro columnas |

## Comprobaciones hechas en el navegador

En los tres anchos, el ancho de la página no superó el de la pantalla: no hay desplazamiento horizontal. Las tablas anchas se desplazan dentro de su propio recuadro.

| Comprobación | Resultado |
|---|---|
| Secciones en el orden de la Fase C | Las 9, de Portada a Referencias |
| Encabezados de nivel 1 | Uno solo, el nombre de la carrera |
| Enlaces internos sin destino | Ninguno: todos llevan a una sección o a una referencia |
| Citas que enlazan a Referencias | 46 |
| Filtro de la malla | Muestra un semestre a la vez y lo anuncia; sin JavaScript se ve la malla completa |

## Accesibilidad y rendimiento (#34 y #35)

Mediciones del sitio publicado, hechas el 11 de noviembre de 2026.

### PageSpeed Insights, celular (#35)

| Medición | Rendimiento | Accesibilidad | Recomendaciones | SEO | Enlace |
|---|---|---|---|---|---|
| Antes, 14:51 | 100 | 100 | 100 | 100 | [informe](https://pagespeed.web.dev/analysis/https-sergio-r5-github-io-landing-ingenieria-informatica-utem/ncsp6kjjc0?form_factor=mobile) |
| Después, 14:58 | 100 | 100 | 100 | 100 | [informe](https://pagespeed.web.dev/analysis/https-sergio-r5-github-io-landing-ingenieria-informatica-utem/pwjsrvbe0u?form_factor=mobile) |

Métricas en ambas mediciones: First Contentful Paint 0,9 s, Largest Contentful Paint 0,9 s, Total Blocking Time 0 ms, Cumulative Layout Shift 0,02 y Speed Index 0,9 s.

No hubo que optimizar: el sitio no tiene fotos, aloja sus fuentes, genera HTML estático y solo carga un script pequeño (el filtro de la malla). No se quitó información para lograr el puntaje. Capturas: `pagespeed-movil-antes.jpg` y `pagespeed-movil-despues.jpg`.

### CompliaScan (#34)

| Medición | Puntaje | Problemas | Enlace |
|---|---|---|---|
| Antes, 14:53 | 92/100 | 1 serio: no detecta el enlace para saltar la navegación (WCAG 2.4.1). 1 moderado: zona táctil de 1×1 px (WCAG 2.5.8) | [informe](https://compliascan.com/scan/371d5209-e43f-4c50-983f-cf575dad745e) |
| Tras la primera corrección, 14:55 | 95/100 | 1 serio: sigue sin detectar el enlace para saltar | [informe](https://compliascan.com/scan/c82ee015-1bfc-4726-b1bf-e0abe8d11d22) |
| Después, 14:57 | 100/100 | Ninguno | [informe](https://compliascan.com/scan/3f28ee23-0679-4b40-8e3f-3e9f0cead3ce) |

Los dos problemas venían del enlace "Saltar al contenido principal":

1. Se ocultaba con `sr-only`, que lo reduce a 1×1 px. Ahora conserva su tamaño y se esconde sobre el borde superior hasta recibir el foco.
2. Apuntaba a `#contenido-principal`. CompliaScan no lo reconocía como enlace para saltar; con `#main` sí.

Las dos últimas mediciones agregan `?v=2` y `?v=3` a la dirección, porque CompliaScan devolvía el informe guardado sin volver a analizar. Es la misma página. No se entregó ningún correo a CompliaScan. Capturas: `compliascan-antes-92.jpg` y `compliascan-despues-100.jpg`.

### Pruebas manuales (#34)

Hechas en Chrome sobre el sitio publicado, usando solo el teclado.

| Prueba | Resultado |
|---|---|
| Primer Tab | Aparece "Saltar al contenido principal" con contorno visible (`teclado-saltar-contenido.jpg`) |
| Enter sobre ese enlace | El foco pasa al contenido principal (`main`) |
| Preguntas frecuentes | Se abren con Enter, sin JavaScript |
| Filtro de la malla | La barra espaciadora elige el semestre 5, se ocultan los otros y se anuncia "Mostrando solo el semestre 5." |
| Zonas táctiles | Ningún control fuera del texto mide menos de 24 px de alto |
| Movimiento | No hay animaciones; nada depende de `prefers-reduced-motion` |

El resultado de la prueba con lector de pantalla está en la sección siguiente.

### Prueba con lector de pantalla (#34)

Hecha por Sergio Rubio Gutiérrez el 11 de noviembre de 2026, con el Narrador de Windows en Chrome, sobre el sitio publicado. Resultado: **todo funcionó**.

| Prueba | Resultado |
|---|---|
| Primer Tab | Lee "Saltar al contenido principal, vínculo" |
| Menú | Lee el nombre de cada sección |
| Títulos | Lee el h1 con el nombre de la carrera y las preguntas de cada sección como encabezados |
| Citas | Lee "Fuente N en Referencias" |
| Bloques de datos | Lee "Dato institucional" o "Interpretación del equipo" antes del texto |
| Filtro de la malla | Lee el botón como presionado y anuncia "Mostrando solo el semestre 5." |
| Preguntas frecuentes | Indica si están contraídas o expandidas y lee la respuesta |

### Medición final (#42)

Sobre la versión final, el 11 de noviembre de 2026 a las 15:19.

| Herramienta | Resultado | Enlace |
|---|---|---|
| PageSpeed Insights, celular | 100 en Rendimiento, Accesibilidad, Recomendaciones y SEO | [informe](https://pagespeed.web.dev/analysis/https-sergio-r5-github-io-landing-ingenieria-informatica-utem/fq2ns9naz9?form_factor=mobile) |
| CompliaScan | 100/100, sin problemas | [informe](https://compliascan.com/scan/af799077-3ec6-4054-ad03-a1bb58416517) |

### Mi Futuro (#36)

`mifuturo-utem-informatica.jpg`: búsqueda en Mi Futuro de la Universidad Tecnológica Metropolitana y la carrera genérica "Ingeniería en Computación e Informática", hecha el 11 de noviembre de 2026. Muestra los valores que usa el sitio: retención 90,1 %, duración real 12,9 semestres, empleabilidad 87,1 % y 96,5 %, e ingreso al 4.° año de $2.200.000 a $2.300.000.

## Rediseño de la interfaz (11 de noviembre de 2026)

`rediseno-portada-1280px.jpg`: la portada nueva, con las preguntas de la encuesta y sus respuestas en cifras.

Mediciones después del rediseño, a las 16:27:

| Herramienta | Resultado | Enlace |
|---|---|---|
| PageSpeed Insights, celular | 100 en Rendimiento, Accesibilidad, Recomendaciones y SEO. Largest Contentful Paint 0,9 s y Cumulative Layout Shift 0,001 | [informe](https://pagespeed.web.dev/analysis/https-sergio-r5-github-io-landing-ingenieria-informatica-utem/2o2o2uimvg?form_factor=mobile) |
| CompliaScan | 100/100, sin problemas | [informe](https://compliascan.com/scan/fb229c4b-51b0-4fbf-a4e7-bf80c98cbfc4) |

En el navegador, a 360 px: sin desplazamiento horizontal, un solo h1 y ningún enlace interno roto.

## Colores por sección y efectos (11 de noviembre de 2026)

Mediciones a las 17:12, con los colores por sección y los efectos ya publicados:

| Herramienta | Resultado | Enlace o detalle |
|---|---|---|
| PageSpeed Insights, celular | 100 en Rendimiento, Accesibilidad, Recomendaciones y SEO. Largest Contentful Paint 1,0 s y Cumulative Layout Shift 0,007 | [informe](https://pagespeed.web.dev/analysis/https-sergio-r5-github-io-landing-ingenieria-informatica-utem/6ijdxgn3dv?form_factor=mobile) |
| axe-core 4.10.2, el motor que usa CompliaScan | 0 violaciones y 50 reglas aprobadas (WCAG 2.0, 2.1 y 2.2 A y AA, y buenas prácticas) | Ejecutado en el navegador sobre el sitio publicado |

**Por qué axe y no CompliaScan.** CompliaScan alcanzó su límite de análisis gratuitos sin cuenta. Su último resultado, de 100/100, es del rediseño anterior a los colores por sección.

**Contrastes que axe no puede calcular solo.** axe marcó 36 textos "por revisar": están sobre degradados (las cabeceras de los semestres) o sobre las manchas de color de la portada. Los calculamos a mano en el peor caso, con el fondo más claro posible bajo cada texto:

| Texto | Peor fondo posible | Contraste |
|---|---|---|
| Blanco en la portada | Azul profundo con 40 % de cian y la tarjeta translúcida | 7,71:1 |
| Azul claro (`#BFDBFE`) en la portada | El mismo | 5,43:1 |
| Amarillo (`#FACC15`) en la portada | El mismo | 5,04:1 |
| Blanco en la cabecera de un semestre | Violeta `#6D28D9`, el extremo más claro del degradado | 7,10:1 |
| Azul claro en la cabecera de un semestre | El mismo | 5,00:1 |

Todos superan el mínimo de 4,5:1. A 360 px, la página mide exactamente 360 px de ancho: no hay desplazamiento horizontal.

## Estabilización del rendimiento (11 de noviembre de 2026)

Una medición de PageSpeed Insights en celular hecha por Sergio dio **89** en Rendimiento (las otras tres categorías, 100). Las mediciones de Lighthouse varían entre ejecuciones, y la página tenía dos puntos débiles:

- Las manchas de color de la portada eran filtros de desenfoque animados sin fin, y la barra de colores también se animaba sin parar. La página nunca quedaba quieta, lo que empeora el índice de velocidad.
- El CSS se descargaba en un archivo aparte que bloqueaba el primer dibujo.

Correcciones: las manchas pasaron a ser degradados fijos, la barra brilla una sola vez y el CSS va dentro del HTML (`inlineStylesheets: 'always'` en `astro.config.mjs`).

| Medición | Rendimiento | Accesibilidad | Recomendaciones | SEO | Speed Index | Enlace |
|---|---|---|---|---|---|---|
| Antes (Sergio) | 89 | 100 | 100 | 100 | No registrado | Captura enviada por Sergio |
| Después, 19:08 | 100 | 100 | 100 | 100 | 0,9 s | [informe](https://pagespeed.web.dev/analysis/https-sergio-r5-github-io-landing-ingenieria-informatica-utem/k5weostlma?form_factor=mobile) |

Quedan dos avisos informativos que no restan puntaje: "Usa tiempos de almacenamiento en caché eficientes", que depende de GitHub Pages (fija 10 minutos y no se puede cambiar), y "Reprocesamiento forzado", que es mínimo y viene del filtro de la malla.

### Causa real del 89: el salto de la tipografía

Sergio volvió a medir 89. Su captura mostraba la sección Admisión, señal de que la dirección analizada terminaba en `#admision`. Repetimos la medición con esa dirección y dio **80**, con un **Cumulative Layout Shift de 0,475** (el máximo aceptable es 0,1).

**Causa.** La fuente se cargaba con `font-display: swap`: la página se dibujaba primero con la fuente del sistema y después cambiaba a Plus Jakarta Sans. Como tienen otro ancho, los textos de arriba cambiaban de altura y todo lo visible saltaba.

**Corrección.**

- La fuente se declara en `global.css` con `font-display: optional`: si no llega en los primeros instantes, se queda la del sistema y nada se mueve.
- `BaseLayout.astro` precarga el archivo de la fuente, así que casi siempre llega a tiempo. En el navegador se comprobó que la página sí la usa.
- Solo se carga el subconjunto latino, que incluye tildes, ñ y ü.
- Las animaciones de aparición ya no parten invisibles, solo se desplazan.

| Dirección analizada | Rendimiento | Accesibilidad | Recomendaciones | SEO | CLS | Enlace |
|---|---|---|---|---|---|---|
| `#admision`, antes | 80 | 100 | 100 | 100 | 0,475 | [informe](https://pagespeed.web.dev/analysis/https-sergio-r5-github-io-landing-ingenieria-informatica-utem/8zf6h12aat?form_factor=mobile) |
| `#admision`, después | 100 | 100 | 100 | 100 | 0 | [informe](https://pagespeed.web.dev/analysis/https-sergio-r5-github-io-landing-ingenieria-informatica-utem/c5bl3gjakf?form_factor=mobile) |
| Portada, después | 100 | 100 | 100 | 100 | 0 | [informe](https://pagespeed.web.dev/analysis/https-sergio-r5-github-io-landing-ingenieria-informatica-utem/t5yf46pdhw?form_factor=mobile) |
| `#plan-de-estudios`, después | 100 | 100 | 100 | 100 | 0 | [informe](https://pagespeed.web.dev/analysis/https-sergio-r5-github-io-landing-ingenieria-informatica-utem/1h6jdigdt9?form_factor=mobile) |
