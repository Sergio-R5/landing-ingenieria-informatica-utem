// Genera /sitemap.xml, el archivo con el nombre exacto que pide la pauta en
// SEO básico. Le dice a los buscadores qué páginas tiene el sitio. La
// integración @astrojs/sitemap ya crea sitemap-index.xml; este archivo
// asegura que también exista sitemap.xml.

// Tipo de una ruta que entrega un archivo en vez de una página.
import type { APIRoute } from 'astro';

// Se ejecuta al compilar: Astro guarda el resultado como dist/sitemap.xml.
export const GET: APIRoute = ({ site }) => {
  // site viene de astro.config.mjs. Si faltara, no se podría armar la
  // dirección absoluta que exige el formato, así que se detiene el build.
  if (site === undefined) {
    throw new Error('Falta "site" en astro.config.mjs para generar sitemap.xml');
  }

  // Dirección pública de la página única, con la ruta base de GitHub Pages.
  const pagina: string = new URL(import.meta.env.BASE_URL, site).href;

  // Formato estándar de sitemaps (sitemaps.org): una entrada <url> por página.
  const xml: string = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `  <url><loc>${pagina}</loc></url>`,
    '</urlset>',
    '',
  ].join('\n');

  // Se entrega como XML, con codificación UTF-8.
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
