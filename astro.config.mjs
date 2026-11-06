// Configuración de Astro. Se lee antes que cualquier otro archivo del proyecto.

// Pide al editor que revise los tipos de este archivo JavaScript.
// @ts-check

// defineConfig solo aporta autocompletado y validación de tipos; no cambia
// el objeto de configuración al ejecutarse.
import { defineConfig } from 'astro/config';

// Plugin oficial de Tailwind CSS 4 para Vite, el empaquetador que usa Astro.
import tailwindcss from '@tailwindcss/vite';

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
});
