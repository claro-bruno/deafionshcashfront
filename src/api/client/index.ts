import { Api } from '..'
import { Client, NewClient } from '../../types/client'

export async function axiosGetAllClients() {
  return await Api.get('client')
}
export async function axiosCreateClient(payload: NewClient) {
  return await Api.post('client', JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export async function axiosUpdateClient(payload: Partial<Client>) {
  const id = payload.id
  delete payload.id
  return await Api.put(`client/${id}`, JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
