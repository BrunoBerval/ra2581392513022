export function calculateCurrentSemester(startDate: Date | string): number {
  const start = new Date(startDate);
  const today = new Date();

  // Diferença em anos e meses
  const yearsDiff = today.getFullYear() - start.getFullYear();
  const monthsDiff = today.getMonth() - start.getMonth();

  // Total de meses corridos
  const totalMonths = (yearsDiff * 12) + monthsDiff;

  // Cada semestre tem aprox 6 meses.
  // Adicionamos +1 porque se passaram 0 meses, já é o 1º semestre.
  const semester = Math.floor(totalMonths / 6) + 1;

  // Retorna no mínimo 1 (para evitar erros caso a data seja futura)
  return Math.max(1, semester);
}