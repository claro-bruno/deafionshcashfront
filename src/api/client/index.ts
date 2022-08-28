import axios from 'axios'

export async function axiosGetAllClients(payload) {
  return await axios.get('rota', payload)
}
export async function axiosGetClientById(payload) {
  return await axios.get('rota', payload)
}
export async function axiosCreateClient(payload) {
  return await axios.post('rota', payload)
}
export async function axiosUpdateClient(payload) {
  return await axios.put('rota', payload)
}
