import axios from 'axios'
import { getUserFromLocalStorage } from '../context/AuthProvider/utils'

export const Api = axios.create({
  baseURL: 'http://localhost:3001/',
})

Api.interceptors.response.use((config) => {
  const user = getUserFromLocalStorage()
  config.headers.Authorization = user?.token
  return config
})
