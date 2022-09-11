import { Api } from '..'
import { Job } from '../../types/job'

export async function axiosGetAllJobs() {
  return await Api.get('job')
}
export async function axiosCreateNewJob(payload: Job) {
  return await Api.post('job', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export async function axiosUpdateNewJob(payload: Partial<Job>) {
  return await Api.put('rota', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
