# Informe del proyecto: landing page de Ingeniería en Informática UTEM

Asignatura: EFE685, Electivo de Computación Móvil. Departamento de Informática y Computación, Universidad Tecnológica Metropolitana (UTEM).
Académico: Sebastián Salazar Molina. Fecha de entrega: 13 de noviembre de 2026.

## Integrantes

| Nombre completo | Usuario de GitHub |
|---|---|
| Sergio Rubio Gutiérrez | Sergio-R5 |
| Fabián Vargas Vilos | Fabianvv2123 |
| Diego Román | Venurior |

## 1. Resumen

Qué construimos, para quién, dónde está publicado y qué decisiones lo definen.

- **Sitio publicado:** https://sergio-r5.github.io/landing-ingenieria-informatica-utem/
- **Repositorio:** https://github.com/Sergio-R5/landing-ingenieria-informatica-utem

## 2. Fuentes del contenido (Fase A)

Cómo elegimos y evaluamos las fuentes. La matriz completa está en [docs/fase-a-fuentes.md](docs/fase-a-fuentes.md).

## 3. Audiencia (Fase B)

Qué aprendimos del público y cómo cambió el sitio. Detalle en [docs/fase-b-audiencia.md](docs/fase-b-audiencia.md).

## 4. Arquitectura de información (Fase C)

Por qué las secciones van en este orden. Detalle y wireframes en [docs/fase-c-arquitectura.md](docs/fase-c-arquitectura.md).

## 5. Redacción (Fase D)

Cómo escribimos para un público no especializado. Guía en [docs/fase-d-guia-estilo.md](docs/fase-d-guia-estilo.md).

## 6. Decisiones de implementación

Por qué elegimos cada herramienta y cómo separamos contenido, presentación y configuración.

### Isla interactiva

**Qué hace.** El plan de estudios tiene 44 asignaturas en 8 semestres. Un filtro con un botón por semestre permite ver uno a la vez (`src/components/FiltroMalla.astro`).

**Por qué existe.** En la Fase B, 2 de 5 personas preguntaron qué se aprende en la carrera. En un celular, la malla completa es una lista muy larga. El filtro ayuda a revisarla por partes, sin salir de la página.

**Cuánto JavaScript agrega.** Es un script pequeño de Astro, sin bibliotecas ni frameworks, y es el único del sitio. Sin JavaScript, el filtro no aparece y se ve la malla completa, así que nadie pierde información.

**Accesibilidad.** Los botones son nativos: funcionan con el teclado e indican cuál está activo (`aria-pressed`). El resultado se anuncia al lector de pantalla con una zona de estado (`role="status"`).

## 7. Calidad: accesibilidad y rendimiento

Resultados de PageSpeed Insights y CompliaScan, con su evidencia.

## 8. Validación (Fase E)

Qué revisamos, qué encontraron los usuarios y qué corregimos. Registro en [docs/fase-e-validacion.md](docs/fase-e-validacion.md).

## 9. Conclusiones

## Anexos

### Anexo A: instrumento aplicado

Ver [docs/fase-b-instrumento.md](docs/fase-b-instrumento.md).

### Anexo B: declaración de uso de IA

Ver [docs/registro-uso-ia.md](docs/registro-uso-ia.md). Debe indicar la herramienta, la tarea, la instrucción y lo que se modificó del resultado.

### Anexo C: anexos técnicos
