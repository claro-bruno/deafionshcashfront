import axios from 'axios'
import { Client, NewClient } from '../../types/client'

export async function axiosGetAllClients() {
  return await axios.get('rota')
}
export async function axiosGetClientById(id: Client) {
  return await axios.get('rota', id)
}
export async function axiosCreateClient(payload: NewClient) {
  return await axios.post('rota', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export async function axiosUpdateClient(payload: Partial<NewClient>) {
  return await axios.put('rota', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
