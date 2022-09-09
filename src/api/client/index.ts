import { Api } from '..'
import { Client, NewClient } from '../../types/client'

export async function axiosGetAllClients() {
  return await Api.get('client')
}
export async function axiosGetClientById(id: Client) {
  return await Api.get(`client/${id}`)
}
export async function axiosCreateClient(payload: NewClient) {
  return await Api.post('client', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export async function axiosUpdateClient(payload: Partial<NewClient>) {
  return await Api.put('rota', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
