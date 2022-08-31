import { Api } from '..'
import { UserLogin } from '../../pages/login/Login'

export async function axiosLogin(payload: UserLogin) {
  return await Api.post('rota', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
