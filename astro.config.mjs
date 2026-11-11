// Configuración de Astro. Se lee antes que cualquier otro archivo del proyecto.

// Pide al editor que revise los tipos de este archivo JavaScript.
// @ts-check

// defineConfig solo aporta autocompletado y validación de tipos; no cambia
// el objeto de configuración al ejecutarse.
import { defineConfig } from 'astro/config';

// Plugin oficial de Tailwind CSS 4 para Vite, el empaquetador que usa Astro.
import tailwindcss from '@tailwindcss/vite';

// Integración oficial que genera sitemap-index.xml al compilar (SEO básico).
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Dirección pública del sitio. Astro la usa para generar enlaces absolutos,
  // como los de Open Graph y el sitemap (#20).
  site: 'https://sergio-r5.github.io',

  // GitHub Pages publica el sitio dentro de una carpeta con el nombre del
  // repositorio. Por eso toda ruta interna debe partir con esta base.
  base: '/landing-ingenieria-informatica-utem/',

  vite: {
    // Activa Tailwind CSS en la compilación.
    plugins: [tailwindcss()],
  },

  build: {
    // Pone el CSS dentro del HTML en vez de en un archivo aparte. Así el
    // navegador no espera una segunda descarga antes de dibujar la página,
    // que PageSpeed marcaba como "solicitud de bloqueo de renderización".
    // Conviene porque el sitio tiene una sola página.
    inlineStylesheets: 'always',
  },

  // Activa la generación del sitemap.
  integrations: [sitemap()],
});