import { Api } from '..'

export async function axiosGetAllPayments() {
  return await Api.get('rota')
}
export async function axiosUpdatePayments(payload: any) {
  return await Api.put('rota', JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
