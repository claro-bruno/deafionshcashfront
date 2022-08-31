import { Api } from '..'

export async function axiosGetAllPayments(payload) {
  return await Api.get('rota', payload)
}
export async function axiosUpdatePayments(payload) {
  return await Api.put('rota', payload)
}
