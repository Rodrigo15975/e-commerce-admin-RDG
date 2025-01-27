import dayjs from 'dayjs'

/**
 * Convierte una fecha en un formato válido para un input de tipo "date".
 * @param date - La fecha que quieres convertir (puede ser una cadena, objeto Date, o similar).
 * @returns La fecha en formato "YYYY-MM-DD", o una cadena vacía si la fecha no es válida.
 */
export const convertToInputDateFormat = (
  date: string | Date | null | undefined
): string => {
  if (!date) return '' 
  const validDate = dayjs(date)
  return validDate.isValid() ? validDate.format('YYYY-MM-DD') : ''
}
