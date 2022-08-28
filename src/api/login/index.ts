import axios from 'axios'

export async function axiosLogin(payload) {
  return await axios.post('rota', payload)
}
