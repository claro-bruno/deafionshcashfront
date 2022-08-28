import axios from 'axios'

export async function axiosGetAllPayments(payload) {
  return await axios.get('rota', payload)
}
export async function axiosUpdatePayments(payload) {
  return await axios.put('rota', payload)
}
