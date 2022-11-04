import { Api } from '..'
import { DateParams } from '../../types/helpers'
import { NewJob } from '../../types/job'

export async function axiosGetAllJobs({ year, month }: DateParams) {
  return await Api.get('job', { params: { month, year } })
}
export async function axiosGetAllJobsById(
  id: number,
  { year, month }: DateParams,
) {
  return await Api.get(`job/contractor/${id}`, { params: { month, year } })
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
export async function axiosUpdateCreatedJob(payload: any) {
  return await Api.patch(`job/${payload.id}`, JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
