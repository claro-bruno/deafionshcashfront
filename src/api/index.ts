import axios from 'axios'
import { getUserFromLocalStorage } from '../context/AuthProvider/utils'

export const Api = axios.create({
  baseURL: 'http://localhost:3001/',
})

Api.interceptors.request.use((config: any) => {
  const user = getUserFromLocalStorage()
  if (user) {
    config.headers.Authorization = user?.token
    return config
  }
})
