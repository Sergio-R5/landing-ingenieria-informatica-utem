# Archivos de configuración sin comentarios

Algunos archivos no admiten comentarios, como los JSON. Aquí se explica cada línea, como exige la pauta para el código generado.

## package.json

| Línea | Qué hace y por qué |
|---|---|
| `"name"` | Nombre interno del proyecto; coincide con el repositorio |
| `"type": "module"` | Usa la sintaxis moderna de JavaScript (`import` y `export`), que requiere Astro |
| `"version"` | Versión del proyecto; no se publica en ningún registro |
| `"private": true` | Impide publicar el proyecto por error en npm |
| `"engines"` → `"node": ">=24"` | Declara que se necesita Node.js 24 o superior, como pide la pauta |
| `"dev"` | Levanta el sitio en modo desarrollo para verlo en el navegador |
| `"build"` | Revisa los tipos con `astro check` y, solo si no hay errores, genera el sitio final en `dist/` |
| `"preview"` | Muestra el sitio ya compilado, igual a como quedará publicado |
| `"check"` | Revisa los tipos de TypeScript y de los archivos `.astro` sin compilar |
| `"astro"` | Permite ejecutar otros comandos de Astro con `npm run astro` |
| `astro` | Herramienta que genera el sitio estático |
| `tailwindcss` y `@tailwindcss/vite` | Tailwind CSS 4 y su conexión con Astro, para los estilos |
| `@astrojs/check` y `typescript` | Herramientas que revisan los tipos; solo se usan al desarrollar |

## package-lock.json

Lo genera npm. Fija la versión exacta de cada dependencia para que todos los integrantes, y GitHub, instalen lo mismo con `npm ci`. No se edita a mano.

## .nvmrc

Contiene solo `24`. Le indica a herramientas como nvm qué versión de Node.js usar.

## Archivos .gitkeep

Git no guarda carpetas vacías. Estos archivos vacíos mantienen en el repositorio las carpetas `src/components`, `src/layouts`, `src/content` y `public`, que se llenarán en las próximas issues.

## Dependencias de tipografías

| Paquete | Qué hace y por qué |
|---|---|
| `@fontsource-variable/inter` | Aloja la fuente Inter en el propio sitio, sin depender de Google Fonts. Licencia SIL Open Font License 1.1 |
| `@fontsource-variable/plus-jakarta-sans` | Aloja la fuente Plus Jakarta Sans, usada en los títulos. Licencia SIL Open Font License 1.1 |
| `@astrojs/sitemap` | Genera `sitemap-index.xml` al compilar, como exige el SEO básico de la pauta |

## Archivos de datos (src/content)

Son JSON, así que no admiten comentarios. Sus reglas están explicadas línea a línea en `src/content.config.ts`.

| Archivo | Contenido |
|---|---|
| `referencias/F05.json` | La fuente F05 de la matriz (Mi Futuro). El nombre del archivo es el ID que usan las citas |
| `referencias/F01.json` a `F13.json` | Las 11 fuentes que usa el sitio, con el mismo ID, texto APA, tipo y fecha de consulta de la matriz (#26). F03 y F04 no se cargan porque la matriz indica que no se usan |
| `campo-laboral/empleabilidad.json` | Empleabilidad e ingresos de Mi Futuro, con su período, tal como están en `docs/fase-a-datos.md` |
| `referencias/F01.json`, `F12.json` y `F13.json` | Páginas oficiales de la carrera y de las 2 carreras afines, que citan la Portada y Sobre la carrera |
| `carrera/ingenieria-en-informatica.json` | Datos de la Portada (nombre, título, grado, duración, jornada y sede), el llamado a la acción, el propósito formativo, las 2 carreras afines y la comparación del equipo (#22). Cada dato sale de la sección "Datos base" y "Carreras afines" de `docs/fase-a-datos.md` |
| `secciones/portada.md` y `secciones/sobre-la-carrera.md` | Nombre para el menú, pregunta que se usa como título y posición de cada sección |
| `malla/semestre-1.json` a `semestre-8.json` | Las 44 asignaturas oficiales, con su número, nombre, créditos SCT y requisito, copiadas de la malla de la Resolución Exenta 03838 (F02) que está en `docs/fase-a-datos.md`. El esquema comprueba que cada semestre sume 30 SCT, y en total suman 240 (#23) |
| `referencias/F02.json` | La resolución que aprueba el plan de estudios vigente |
| `perfil-egreso/ingenieria-en-informatica.json` | El perfil de egreso oficial, literal, y sus capacidades en lenguaje claro (#23) |
| `secciones/perfil-de-egreso.md` y `secciones/plan-de-estudios.md` | Pregunta de cada sección y la explicación de SCT y de los requisitos |
| `areas-desempeno/ingenieria-en-informatica.json` | Dónde trabajan los titulados y qué funciones cumplen, según el "Campo de Desarrollo Profesional" de F01 (#24) |
| `respaldo/ingenieria-en-informatica.json` | Certificación de la carrera (F01), acreditación institucional (F08) y los datos que no encontramos: cuerpo académico y laboratorios (#24) |
| `referencias/F06.json` y `F08.json` | Metodología de Mi Futuro y la noticia de la acreditación institucional |
| `secciones/campo-laboral.md` y `secciones/respaldo.md` | Pregunta de cada sección, qué mide la empleabilidad y la diferencia entre certificación y acreditación |

## Prueba de los esquemas (#19)

Para comprobar que un dato mal escrito detiene la publicación, el 9 de noviembre de 2026 se subió una rama de prueba con dos errores en `campo-laboral/empleabilidad.json`: una empleabilidad de 187,1 % (el máximo es 100) y una cita a la fuente `F99`, que no existe.

El build falló con el error `InvalidContentEntryDataError` de Astro: [ejecución en GitHub Actions](https://github.com/Sergio-R5/landing-ingenieria-informatica-utem/actions/runs/42645795700). La rama de prueba se borró después.

**Corrección del 10 de noviembre de 2026 (#21).** Esa falla la causó la empleabilidad de 187,1 %. Una cita a una fuente inexistente, como `F99`, solo genera un aviso en el registro: Astro no detiene el build. Al probar los componentes también vimos que Astro guardaba el ID de `F05.json` como `f05`, así que ninguna cita encontraba su fuente. Se corrigió de dos formas:

- `src/content.config.ts` conserva el nombre del archivo como ID (`generateId`).
- `src/components/Cita.astro` detiene el build si la fuente citada no existe. Como todos los datos se muestran con su cita, una fuente rota ya no puede publicarse.
