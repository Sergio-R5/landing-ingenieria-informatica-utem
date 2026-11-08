import { defineCollection, reference } from 'astro:content';
import { z } from 'astro:schema';
// Importamos 'glob', la nueva herramienta de Astro para leer archivos en carpetas
import { glob } from 'astro/loaders';

const referencias = defineCollection({
  // El loader le dice a Astro: "busca todos los archivos .json en esta carpeta"
  loader: glob({ pattern: "**/*.json", base: "./src/content/referencias" }),
  schema: z.object({
    autor: z.string(),
    titulo: z.string(),
    url: z.string().url(),
    fechaConsulta: z.string(),
    tipo: z.enum(['primaria', 'secundaria']),
  })
});

const campoLaboral = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/campo-laboral" }),
  schema: z.object({
    empleabilidad: z.number().min(0).max(100),
    ingresoPromedio: z.number().positive(),
    anioDato: z.number().int().min(2000),
    fuente: reference('referencias')
  })
});

const malla = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/malla" }),
  schema: z.object({
    semestre: z.number().int().positive(),
    asignaturas: z.array(z.object({
      nombre: z.string(),
      sct: z.number().int().positive(),
    })),
    fuente: reference('referencias')
  })
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/faq" }),
  schema: z.object({
    pregunta: z.string(),
    respuesta: z.string(),
    tipoInformacion: z.enum(['dato_institucional', 'interpretacion_equipo', 'testimonio']),
    fuente: reference('referencias').optional(),
  })
});

export const collections = {
  referencias,
  'campo-laboral': campoLaboral,
  malla,
  faq
};