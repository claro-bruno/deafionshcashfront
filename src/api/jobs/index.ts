import { Api } from '..'
import { NewJob } from '../../types/job'

export async function axiosGetAllJobs({
  year,
  month,
}: {
  year: string
  month: string
}) {
  return await Api.get('job', { params: { month, year } })
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
export async function axiosUpdateNewJob(payload: any) {
  return await Api.put(`job/${payload.id}`, JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
