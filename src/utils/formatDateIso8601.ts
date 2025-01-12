import { parseISO, format, formatDistanceToNow, isBefore } from 'date-fns'
import dayjs from 'dayjs'

export function convertedDateISO(date: string): string {
  const parsedStartDate = parseISO(date).toISOString()
  return parsedStartDate
}

export const convertedYearMonthDay = (date: string): string => {
  // const parsedDate = parseISO(date) // Convierte el string a un objeto Date
  // return format(parsedDate, 'YYYY-MM-DD') // Formatea la fecha como 'año-mes-día'
  // Convierte el string a un objeto Day.js y formatea la fecha
  return dayjs(date).format('YYYY-MM-DD')
}

export const convertedDayMonthYear = (date: string): string => {
  const parsedDate = parseISO(date) // Convierte el string a un objeto Date
  return format(parsedDate, 'dd-MM-yyyy') // Formatea la fecha como 'día-mes-año'
}

export const convertedDayRest = (expirationDate: string): string => {
  const parsedDate = parseISO(expirationDate)

  if (isBefore(parsedDate, new Date())) return 'Expired'

  const timeRemaining = formatDistanceToNow(parsedDate, {
    addSuffix: true,
    includeSeconds: true,
  })

  return timeRemaining
}
