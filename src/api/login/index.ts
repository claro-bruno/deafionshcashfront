import axios from 'axios'
import { UserLogin } from '../../pages/login/Login'

export async function axiosLogin(payload: UserLogin) {
  return await axios.post('rota', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
