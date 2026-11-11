// Esquemas de las colecciones de contenido. Definen qué campos y tipos debe
// tener cada archivo de datos: si un archivo no cumple, el build falla.

// defineCollection crea una colección; reference valida que una cita apunte a
// una referencia que exista.
import { defineCollection, reference } from 'astro:content';
// z (Zod) describe las reglas de cada campo. Se importa de astro/zod, la ruta
// que recomienda Astro; astro:schema está obsoleta.
import { z } from 'astro/zod';
// glob lee todos los archivos de una carpeta que calzan con un patrón.
import { glob } from 'astro/loaders';

// Fecha en formato AAAA-MM-DD, como en la matriz de fuentes.
const fecha = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Usa el formato AAAA-MM-DD');

// Referencias: una fuente por archivo. El nombre del archivo es su ID de la
// matriz de fuentes, por ejemplo F05.json, y así se cita desde otros datos.
const referencias = defineCollection({
  // Lee cada archivo .json de src/content/referencias.
  // generateId conserva el nombre del archivo tal cual ("F05"). Sin esto,
  // Astro lo pasa a minúsculas ("f05") y las citas a "F05" no encuentran su
  // fuente.
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/referencias',
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: z.object({
    // Referencia completa en formato APA 7, tal como está en la matriz.
    apa: z.string().min(1),
    // Dirección que un tercero puede abrir para comprobar el dato.
    url: z.url(),
    // Primaria (emitida por quien produce el dato) o secundaria.
    tipo: z.enum(['primaria', 'secundaria']),
    // Fecha de consulta de la fuente.
    fechaConsulta: fecha,
  }),
});

// Carrera afín con la que se compara, con sus datos oficiales.
const carreraAfin = z.object({
  nombre: z.string().min(1),
  duracionSemestres: z.number().int().positive(),
  gradoAcademico: z.string().min(1),
  // Foco declarado en su perfil de egreso, resumido sin cambiar su sentido.
  foco: z.string().min(1),
  // Página oficial de esa carrera.
  fuente: reference('referencias'),
});

// Carrera: datos de la Portada y de Sobre la carrera (#22).
const carrera = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/carrera' }),
  schema: z.object({
    // Datos que exige la pauta para la Portada. Son datos institucionales.
    nombreOficial: z.string().min(1),
    // Universidad que imparte la carrera, con su sigla.
    institucion: z.string().min(1),
    tituloProfesional: z.string().min(1),
    gradoAcademico: z.string().min(1),
    duracionSemestres: z.number().int().positive(),
    jornada: z.string().min(1),
    sede: z.string().min(1),
    // Fuente de los datos de la Portada.
    fuente: reference('referencias'),
    // Llamado a la acción de la Portada: un texto y la sección a la que lleva.
    llamadoAccion: z.object({
      texto: z.string().min(1),
      // Debe ser un ancla de esta misma página, por ejemplo "#admision".
      destino: z.string().regex(/^#[a-z-]+$/, 'Usa un ancla como "#admision"'),
    }),
    // Propósito formativo, resumido del perfil de egreso oficial. Es un dato
    // institucional, así que lleva su fuente.
    proposito: z.object({
      texto: z.string().min(1),
      fuente: reference('referencias'),
    }),
    // Explicación en palabras simples. Es interpretación del equipo: la Fase B
    // mostró que nadie sabía qué hace un ingeniero en informática.
    explicacionSimple: z.string().min(1),
    // La pauta pide comparar con al menos 2 carreras afines.
    afines: z.array(carreraAfin).min(2),
    // Lectura del equipo sobre las diferencias. Se muestra como interpretación.
    comparacion: z.array(z.string().min(1)).min(1),
  }),
});

// Perfil de egreso: el texto oficial y su versión en lenguaje claro (#23).
const perfilEgreso = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/perfil-egreso' }),
  schema: z.object({
    // Texto literal del perfil oficial. Se conserva para que cualquiera pueda
    // comparar la versión en lenguaje claro con el original.
    original: z.string().min(1),
    // Capacidades del perfil, reescritas sin cambiar su sentido. Cada una
    // tiene un nombre corto y su explicación.
    capacidades: z
      .array(
        z.object({
          titulo: z.string().min(1),
          descripcion: z.string().min(1),
        }),
      )
      .min(1),
    // Página oficial de donde sale el perfil.
    fuente: reference('referencias'),
  }),
});

// Campo laboral: indicadores de Mi Futuro, cada uno con el período que mide.
// La pauta exige que toda cifra muestre su año.
const indicador = z.object({
  // Valor en porcentaje, de 0 a 100.
  porcentaje: z.number().min(0).max(100),
  // Qué titulados o estudiantes y qué años mide.
  periodo: z.string().min(1),
});

const campoLaboral = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/campo-laboral' }),
  schema: z
    .object({
      // Titulados con ingresos iguales o superiores al sueldo mínimo.
      empleabilidadPrimerAnio: indicador,
      empleabilidadSegundoAnio: indicador,
      // Mi Futuro informa el ingreso como tramo, no como un número exacto.
      ingresoCuartoAnio: z.object({
        desde: z.number().int().positive(),
        hasta: z.number().int().positive(),
        periodo: z.string().min(1),
      }),
      // Estudiantes de 1.er año que siguen en la carrera al año siguiente.
      retencionPrimerAnio: indicador,
      // Semestres que tardaron en promedio los titulados.
      duracionReal: z.object({
        semestres: z.number().positive(),
        periodo: z.string().min(1),
      }),
      // ID de la referencia de donde salen los datos; debe existir.
      fuente: reference('referencias'),
      // Metodología que define cómo se mide cada indicador.
      metodologia: reference('referencias'),
    })
    // El tramo de ingreso debe ir de menor a mayor.
    .refine((dato) => dato.ingresoCuartoAnio.desde <= dato.ingresoCuartoAnio.hasta, {
      message: 'El ingreso "desde" no puede ser mayor que "hasta"',
    }),
});

// Áreas de desempeño: dónde y en qué trabajan los titulados, según la UTEM (#24).
const areasDesempeno = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/areas-desempeno' }),
  schema: z.object({
    // Tipos de organizaciones donde puede trabajar.
    lugares: z.string().min(1),
    // Funciones que la UTEM declara, resumidas sin cambiar su sentido.
    funciones: z.array(z.string().min(1)).min(1),
    fuente: reference('referencias'),
  }),
});

// Respaldo institucional: certificación de la carrera, acreditación de la
// universidad y los datos que no encontramos (#24).
const respaldo = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/respaldo' }),
  schema: z.object({
    // La carrera está certificada por agencias; no es acreditación de CNA.
    certificacionCarrera: z.object({
      anios: z.number().int().positive(),
      desde: fecha,
      hasta: fecha,
      agencias: z.array(z.string().min(1)).min(1),
      fuente: reference('referencias'),
    }),
    // La acreditación de la CNA es de toda la universidad, no de la carrera.
    acreditacionInstitucional: z.object({
      anios: z.number().int().positive(),
      nivel: z.string().min(1),
      // La fuente solo informa mes y año, por ejemplo "octubre de 2031".
      vigencia: z.string().min(1),
      fuente: reference('referencias'),
    }),
    // Datos que la pauta pide y que no aparecen en las fuentes. Se declaran
    // en el sitio en vez de inventarlos.
    noDisponible: z.array(z.string().min(1)),
  }),
});

// Malla: un archivo por semestre, con sus asignaturas oficiales.
const malla = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/malla' }),
  schema: z
    .object({
      // La carrera dura 8 semestres.
      semestre: z.number().int().min(1).max(8),
      asignaturas: z
        .array(
          z.object({
            // Número de la asignatura en la malla oficial, por ejemplo 11.
            numero: z.number().int().positive(),
            nombre: z.string().min(1),
            // Créditos del Sistema de Créditos Transferibles.
            sct: z.number().int().positive(),
            // Requisito tal como aparece en la malla: "Ingreso", "Sin requisito" o un número.
            requisito: z.string().min(1),
          }),
        )
        .min(1),
      fuente: reference('referencias'),
    })
    // Según la resolución oficial, cada semestre suma 30 créditos SCT.
    .refine((dato) => dato.asignaturas.reduce((total, a) => total + a.sct, 0) === 30, {
      message: 'Las asignaturas del semestre deben sumar 30 SCT',
    }),
});

// Admisión: datos de un proceso de admisión, en un archivo por proceso (#25).
// El próximo año basta con crear o editar este archivo.
const admision = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/admision' }),
  schema: z.object({
    // Nombre del proceso, por ejemplo "Admisión 2027".
    proceso: z.string().min(1),
    vacantes: z.number().int().positive(),
    // Puntaje mínimo para postular y qué pruebas promedia.
    puntajeMinimo: z.object({
      valor: z.number().int().positive(),
      detalle: z.string().min(1),
    }),
    // Peso de cada componente en el puntaje de postulación, en porcentaje.
    ponderaciones: z
      .array(z.object({ componente: z.string().min(1), porcentaje: z.number().min(0).max(100) }))
      .min(1),
    // Aclaración de cómo se leen las ponderaciones.
    notaPonderaciones: z.string().min(1),
    // Fuente de vacantes, puntaje mínimo y ponderaciones.
    fuente: reference('referencias'),
    // Pasos para postular, en orden.
    pasos: z.array(z.string().min(1)).min(1),
    // Vías de ingreso, cada una con su fuente.
    vias: z
      .array(z.object({ nombre: z.string().min(1), paraQuien: z.string().min(1), fuente: reference('referencias') }))
      .min(1),
    // Fechas del proceso. "hasta" se omite cuando la etapa dura un día.
    fechas: z
      .array(
        z.object({
          etapa: z.string().min(1),
          desde: fecha,
          hasta: fecha.optional(),
          fuente: reference('referencias'),
        }),
      )
      .min(1),
    // Costos en pesos chilenos, con el año al que corresponden.
    costos: z
      .array(z.object({ concepto: z.string().min(1), monto: z.number().int().positive(), anio: z.string().min(1), fuente: reference('referencias') }))
      .min(1),
    // Información para personas de 20 años o más y para quienes cambian de carrera.
    publicoSecundario: z.object({ texto: z.string().min(1), fuente: reference('referencias') }),
  }),
});

// Preguntas frecuentes: preguntas reales de la Fase B con su respuesta.
const faq = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faq' }),
  schema: z
    .object({
      pregunta: z.string().min(1),
      respuesta: z.string().min(1),
      // La pauta exige distinguir dato institucional, interpretación y testimonio.
      tipoInformacion: z.enum(['dato_institucional', 'interpretacion_equipo', 'testimonio']),
      // Orden en que aparece, según la prioridad de la Fase B.
      orden: z.number().int().positive(),
      // Una respuesta puede usar varias fuentes, por ejemplo la duración formal
      // (F01) y la real (F05). Una interpretación puede no tener fuente.
      fuentes: z.array(reference('referencias')).default([]),
    })
    // Un dato institucional siempre debe citar al menos una fuente.
    .refine((dato) => dato.tipoInformacion !== 'dato_institucional' || dato.fuentes.length > 0, {
      message: 'Un dato institucional debe tener fuente',
    }),
});

// Textos de las secciones: un archivo Markdown por sección del mapa de contenidos.
const secciones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/secciones' }),
  schema: z.object({
    // Nombre corto de la sección, para el menú.
    titulo: z.string().min(1),
    // Pregunta que la sección responde; se usa como título visible (propuesta creativa).
    pregunta: z.string().min(1),
    // Posición en la página, del 1 al 9, según docs/fase-c-arquitectura.md.
    orden: z.number().int().min(1).max(9),
  }),
});

// Datos del sitio que no son de la carrera: el aviso de que el sitio no es
// oficial y el enlace al repositorio (#33).
const sitio = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/sitio' }),
  schema: z.object({
    // Aviso del pie de página. Evita que se confunda con un sitio de la UTEM.
    aviso: z.string().min(1),
    // Texto y dirección del enlace al código del sitio.
    repositorio: z.object({ texto: z.string().min(1), url: z.url() }),
  }),
});

// Colecciones disponibles para getCollection() en las páginas.
export const collections = {
  referencias,
  carrera,
  'perfil-egreso': perfilEgreso,
  'campo-laboral': campoLaboral,
  'areas-desempeno': areasDesempeno,
  respaldo,
  malla,
  admision,
  faq,
  secciones,
  sitio,
};
