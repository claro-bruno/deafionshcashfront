import { Api } from '..'
import { UserLogin } from '../../pages/login/Login'

export async function axiosLogin(payload: UserLogin) {
  return await Api.post('account/contractor', JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
