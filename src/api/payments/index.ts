import { Api } from '..'
import { DateParams } from '../../types/helpers'

export async function axiosGetAllPayments({ year, month }: DateParams) {
  return await Api.get('rota', { params: { month, year } })
}
export async function axiosUpdatePayments(payload: any) {
  return await Api.put('rota', JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
