import { formatISO } from 'date-fns'

export const initialValues: CreateDiscountCategory = {
  discount: '0',
  end_date: '',
  categoryId: '',
  start_date: formatISO(new Date()), // Fecha actual en formato ISO 8601
  is_active: true,
}
