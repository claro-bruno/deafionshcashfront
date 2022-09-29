import { Api } from '..'
import { NewJob, TJob } from '../../types/job'

export async function axiosGetAllJobs() {
  return await Api.get('job')
}
export async function axiosGetAllJobsById(id: number) {
  return await Api.get(`job/contractor/${id}`)
}
export async function axiosCreateNewJob(payload: NewJob) {
  return await Api.post('job', JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export async function axiosUpdateNewJob(payload: Partial<TJob>) {
  return await Api.put(`job/${payload.id}`, JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
