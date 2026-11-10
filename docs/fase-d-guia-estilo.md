# Fase D: guía de estilo de redacción

Reglas comunes para que los textos del sitio se lean como una sola voz (#16). Cada regla tiene un ejemplo correcto y otro incorrecto.

**Los ejemplos usan datos reales de [fase-a-datos.md](fase-a-datos.md).** Así se pueden copiar sin riesgo de publicar una cifra falsa.

## Reglas que exige la pauta

| Regla | Ejemplo correcto | Ejemplo incorrecto |
|---|---|---|
| **Oraciones de menos de 25 palabras** | La carrera dura 8 semestres. Forma profesionales que diseñan y desarrollan software y sistemas de información. | La carrera, que dura 8 semestres en jornada diurna en el Campus Macul, forma profesionales que diseñan, desarrollan e integran soluciones de software y sistemas de información para organizaciones públicas y privadas. |
| **Voz activa** | La UTEM aprobó el plan de estudios vigente en 2022. | El plan de estudios vigente fue aprobado por la UTEM en 2022. |
| **Jerga explicada** | En Computación en la Nube se aprende a usar servidores de otras empresas a través de internet. | En Computación en la Nube se ven despliegues IaaS y PaaS. |
| **Siglas con nombre completo la primera vez** | La Universidad Tecnológica Metropolitana (UTEM) imparte la carrera en el Campus Macul. | La UTEM imparte la carrera en el Campus Macul. |
| **Cifras con año y cita enlazada** | El 87,1 % de los titulados de 2021 a 2023 tenía ingresos al primer año [5]. | El 87,1 % de los titulados encuentra trabajo. |
| **Dato, interpretación y testimonio diferenciados** | *Dato institucional:* la carrera dura 8 semestres [1]. *Interpretación del equipo:* es la más corta de las tres carreras de computación de la UTEM que comparamos. | La carrera dura 8 semestres, así que es la mejor opción para entrar rápido al mundo laboral. |
| **Texto alternativo descriptivo en cada imagen** | `alt="Malla de Ingeniería en Informática con las asignaturas de los 8 semestres"` | `alt="malla"` o `alt="imagen1.png"` |

## Formatos

| Elemento | Formato | Ejemplo |
|---|---|---|
| Porcentajes | Coma decimal y espacio antes del signo | 87,1 % |
| Montos | Signo peso y punto de miles; se indica si es bruto y mensual | $2.200.000 brutos mensuales |
| Fechas en el texto | Día, mes en minúscula y año | 18 de enero de 2027 |
| Año del dato | Junto a la cifra, nombrando el período que mide | titulados de 2021 a 2023 |
| Siglas | Nombre completo y sigla entre paréntesis la primera vez; después, solo la sigla | Prueba de Acceso a la Educación Superior (PAES) |
| Cita breve | Número entre corchetes después de la cifra. Enlaza a su fuente en Referencias. No se escribe a mano: el componente `Cita` lo calcula según el orden de Referencias | [5] |
| Duración real | Siempre junto a la formal y con su contexto | 8 semestres formales; los titulados de 2024 tardaron 12,9 en promedio [5] |

## Cómo marcar cada tipo de información

En el sitio, cada bloque lleva una etiqueta de texto visible (componente `TipoInformacion`). No se distingue solo por el color.

- **Dato institucional:** información oficial de la UTEM o del Ministerio de Educación. Se redacta de forma neutra y siempre lleva su cita. Ejemplo: "La carrera dura 8 semestres [1]."
- **Interpretación del equipo:** lectura o comparación hecha por nosotros a partir de los datos. Se escribe en primera persona plural, por ejemplo "según nuestra comparación". Nunca se presenta como dato oficial.
- **Testimonio:** palabras de una persona real que dio su consentimiento. Va entre comillas, con su primer nombre o su código y su relación con la carrera. Ejemplo: "...", P3, estudiante de segundo año.

## Frases prohibidas

No se usan frases publicitarias ni promesas sin respaldo:

| No escribir | Por qué | Alternativa |
|---|---|---|
| "La mejor carrera", "líder del mercado" | No hay una fuente que lo mida | Dar el dato concreto, con su cita |
| "Empleo asegurado" | Ningún dato asegura trabajo | "El 87,1 % de los titulados de 2021 a 2023 tenía ingresos al primer año [5]" |
| "Excelencia académica", "los mejores laboratorios" | Son juicios, no datos | Nombrar la certificación y su vigencia, con su cita |
| "Nuestra carrera", "te esperamos" | El sitio lo hace el equipo, no la UTEM | "La carrera", "puedes postular" |

## Revisión del equipo

| Integrante | Revisó la guía |
|---|---|
| Fabián Vargas Vilos | Sí, la redactó (#16) |
| Sergio Rubio Gutiérrez | Sí, 2026-11-10 |
| Diego Román | Pendiente |
