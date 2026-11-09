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
| `campo-laboral/empleabilidad.json` | Empleabilidad e ingresos de Mi Futuro, con su período, tal como están en `docs/fase-a-datos.md` |
