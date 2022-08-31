import { Api } from '..'

export async function axiosGetAllJobs(payload) {
  return await Api.get('rota', payload)
}
export async function axiosCreateNewJob(payload) {
  return await Api.post('rota', payload)
}
export async function axiosUpdateNewJob(payload) {
  return await Api.put('rota', payload)
}
