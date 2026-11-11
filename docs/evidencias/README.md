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
