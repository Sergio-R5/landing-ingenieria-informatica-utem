// Funciones para mostrar cifras y fechas como pide la guía de estilo
// (docs/fase-d-guia-estilo.md): coma decimal, punto de miles y fechas en texto.

// Formato numérico de Chile: 87,1 y 2.200.000.
const numeroChile: Intl.NumberFormat = new Intl.NumberFormat('es-CL');

// Convierte 87.1 en "87,1 %", con espacio antes del signo.
export function porcentaje(valor: number): string {
  return `${numeroChile.format(valor)} %`;
}

// Convierte 12.9 en "12,9".
export function numero(valor: number): string {
  return numeroChile.format(valor);
}

// Convierte 2200000 en "$2.200.000".
export function pesos(valor: number): string {
  return `$${numeroChile.format(valor)}`;
}

// Partes de una fecha "AAAA-MM-DD". Se usa UTC para que la fecha no cambie
// según la zona horaria de quien compila el sitio.
function partes(fecha: string): { dia: string; mes: string; anio: string } {
  const valor: Date = new Date(`${fecha}T00:00:00Z`);
  return {
    dia: String(valor.getUTCDate()),
    mes: new Intl.DateTimeFormat('es-CL', { month: 'long', timeZone: 'UTC' }).format(valor),
    anio: String(valor.getUTCFullYear()),
  };
}

// Convierte "2026-11-03" en "3 de noviembre de 2026".
export function fechaLegible(fecha: string): string {
  const { dia, mes, anio } = partes(fecha);
  return `${dia} de ${mes} de ${anio}`;
}

// Escribe un rango sin repetir el mes ni el año cuando coinciden:
// "Del 4 al 7 de enero de 2027" o "Del 30 de noviembre al 2 de diciembre de 2026".
// Sin fecha final, devuelve solo la fecha inicial.
export function rangoFechas(desde: string, hasta?: string): string {
  if (hasta === undefined || hasta === desde) {
    return fechaLegible(desde);
  }
  const inicio = partes(desde);
  const fin = partes(hasta);
  // Mismo mes y año: solo cambia el día.
  if (inicio.mes === fin.mes && inicio.anio === fin.anio) {
    return `Del ${inicio.dia} al ${fin.dia} de ${fin.mes} de ${fin.anio}`;
  }
  // Mismo año: se escribe el año una sola vez, al final.
  if (inicio.anio === fin.anio) {
    return `Del ${inicio.dia} de ${inicio.mes} al ${fin.dia} de ${fin.mes} de ${fin.anio}`;
  }
  // Años distintos: ambas fechas completas.
  return `Del ${fechaLegible(desde)} al ${fechaLegible(hasta)}`;
}
