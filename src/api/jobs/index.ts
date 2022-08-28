import axios from 'axios'

export async function axiosGetAllJobs(payload) {
  return await axios.get('rota', payload)
}
export async function axiosCreateNewJob(payload) {
  return await axios.post('rota', payload)
}
export async function axiosUpdateNewJob(payload) {
  return await axios.put('rota', payload)
}
