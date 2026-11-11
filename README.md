# Landing page de Ingeniería en Informática UTEM

Página web que presenta la carrera de Ingeniería en Informática de la Universidad Tecnológica Metropolitana (UTEM) a quienes quieren postular. Cada dato tiene su fuente oficial. La hicimos para la asignatura EFE685, Electivo de Computación Móvil.

**Sitio publicado:** https://sergio-r5.github.io/landing-ingenieria-informatica-utem/

- Informe del proyecto: [INFORME.md](INFORME.md)
- Cómo trabaja el equipo: [AGENTS.md](AGENTS.md)

## Qué hay en esta carpeta

| Carpeta o archivo | Qué contiene |
|---|---|
| `src/content/` | **Los datos y textos del sitio.** Es lo único que se edita para actualizar la información |
| `src/components/` | Las piezas que muestran cada sección. No tienen textos ni cifras escritos a mano |
| `src/content.config.ts` | Las reglas que deben cumplir los datos (por ejemplo, que un porcentaje no pase de 100) |
| `docs/` | Los productos de las fases A a E y las evidencias |
| `public/` | El ícono y la imagen para redes sociales |

## Cómo ver el sitio en tu computador

Solo hace falta si quieres ver un cambio antes de publicarlo. Para editar un dato no es necesario: ver [Cómo cambiar un dato](#cómo-cambiar-un-dato).

**Necesitas:**

- **Node.js 24 o superior.** Es el programa que ejecuta las herramientas del sitio. Se descarga en https://nodejs.org (elige la versión LTS).
- **Git.** Es el programa que guarda el historial de cambios. Se descarga en https://git-scm.com.

**Pasos.** Abre una terminal (en Windows, la aplicación "Terminal" o "PowerShell") y escribe un comando a la vez:

1. Descarga el proyecto:

   ```bash
   git clone https://github.com/Sergio-R5/landing-ingenieria-informatica-utem.git
   ```

2. Entra a la carpeta:

   ```bash
   cd landing-ingenieria-informatica-utem
   ```

3. Instala las herramientas. Tarda uno o dos minutos la primera vez:

   ```bash
   npm ci
   ```

4. Abre el sitio en modo de edición:

   ```bash
   npm run dev
   ```

   La terminal muestra una dirección como `http://localhost:4321/landing-ingenieria-informatica-utem/`. Ábrela en el navegador. Cada vez que guardes un archivo, la página se actualiza sola. Para detenerlo, presiona Ctrl + C en la terminal.

5. Antes de publicar, comprueba que todo esté bien:

   ```bash
   npm run build
   ```

   Si termina sin errores, el cambio se puede publicar.

## Cómo cambiar un dato

Todos los datos están en archivos de texto dentro de `src/content/`. Puedes editarlos directamente en GitHub, sin instalar nada:

1. Entra al [repositorio](https://github.com/Sergio-R5/landing-ingenieria-informatica-utem) y abre el archivo de la tabla de abajo.
2. Presiona el ícono del lápiz (Edit this file).
3. Cambia solo el valor, sin borrar las comillas, las comas ni los nombres de los campos.
4. Presiona **Commit changes** y escribe qué cambiaste, por ejemplo "Actualiza las vacantes de Admisión 2028".

| Si quieres cambiar… | Edita este archivo |
|---|---|
| Vacantes, puntaje mínimo, ponderaciones, fechas o costos de admisión | `src/content/admision/admision-2027.json` |
| Empleabilidad, ingresos, retención o duración real | `src/content/campo-laboral/empleabilidad.json` |
| Asignaturas de un semestre | `src/content/malla/semestre-1.json` a `semestre-8.json` |
| Nombre, título, grado, duración, jornada o el botón de la portada | `src/content/carrera/ingenieria-en-informatica.json` |
| Perfil de egreso | `src/content/perfil-egreso/ingenieria-en-informatica.json` |
| Dónde trabajan los titulados | `src/content/areas-desempeno/ingenieria-en-informatica.json` |
| Certificación y acreditación | `src/content/respaldo/ingenieria-en-informatica.json` |
| Preguntas frecuentes | `src/content/faq/` (un archivo por pregunta) |
| Título y pregunta de cada sección | `src/content/secciones/` (un archivo por sección) |
| Fuentes de la lista de Referencias | `src/content/referencias/` (un archivo por fuente, por ejemplo `F05.json`) |
| Aviso del pie de página | `src/content/sitio/sitio.json` |

**Ejemplo.** Para el próximo proceso, en `admision-2027.json` se cambia `"vacantes": 150` por el nuevo número, y `"proceso": "Admisión 2027"` por `"Admisión 2028"`. Las fechas se escriben como año-mes-día: `"2028-01-04"`.

**Cada dato nuevo necesita su fuente.** Si cambias una cifra, actualiza también la fuente en `src/content/referencias/` y en [docs/fase-a-fuentes.md](docs/fase-a-fuentes.md).

## Qué pasa si el cambio tiene un error

Cada vez que se sube un cambio, GitHub revisa los datos con las reglas de `src/content.config.ts` y arma el sitio. Si algo no cumple las reglas, **el sitio no se publica** y sigue en línea la versión anterior. Así un error nunca llega al público.

Para ver el error:

1. Entra a la pestaña [Actions](https://github.com/Sergio-R5/landing-ingenieria-informatica-utem/actions) del repositorio.
2. Abre la ejecución marcada con una X roja.
3. Busca el mensaje en rojo. Por ejemplo, `InvalidContentEntryDataError` indica qué archivo y qué campo están mal.

Errores frecuentes:

| Mensaje | Qué significa | Cómo arreglarlo |
|---|---|---|
| `Too big: expected number to be <=100` | Un porcentaje pasa de 100 | Revisa la cifra en la fuente |
| `Las asignaturas del semestre deben sumar 30 SCT` | Los créditos de un semestre no suman 30 | Revisa los créditos de ese semestre |
| `Usa el formato AAAA-MM-DD` | Una fecha está mal escrita | Escríbela como `2027-01-04` |
| `La cita apunta a la fuente "F99"` | Un dato cita una fuente que no existe | Usa un ID de `src/content/referencias/` |
| Un error que menciona `JSON` | Falta o sobra una coma o unas comillas | Compara con la versión anterior del archivo |

## Cómo se publica

No hay que hacer nada a mano. Cada cambio que llega a la rama `main` se publica solo en GitHub Pages, el servicio gratuito de alojamiento de GitHub, en uno o dos minutos. El proceso está en `.github/workflows/publicar.yml`.

## Herramientas

| Herramienta | Para qué |
|---|---|
| [Astro](https://astro.build) | Arma el sitio a partir de los datos y entrega páginas rápidas |
| TypeScript | Revisa que el código use bien los datos antes de publicar |
| [Tailwind CSS](https://tailwindcss.com) | Define los colores, tamaños y espacios |
| GitHub Pages | Publica el sitio |
