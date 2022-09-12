import { Api } from '..'
import { TJob } from '../../types/job'

export async function axiosGetAllJobs() {
  return await Api.get('job')
}
export async function axiosGetAllJobsById(id: number) {
  return await Api.get(`job/contractor/${id}`)
}
export async function axiosCreateNewJob(payload: TJob) {
  return await Api.post('job', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export async function axiosUpdateNewJob(payload: Partial<TJob>) {
  return await Api.put(`job/${payload.id}`, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
