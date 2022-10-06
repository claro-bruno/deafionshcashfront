import { Api } from '..'
import { DateParams } from '../../types/helpers'

export async function axiosGetAllPayments({ year, month }: DateParams) {
  return await Api.get('payment', { params: { month, year } })
}
export async function axiosUpdatePayments(payload: any) {
  return await Api.put('payment', JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
