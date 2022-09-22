import { createObjectDaysByMonth } from '../../helpers/functions'

export const mockClients = [
  { name: 'Multilaser', id: 2 },
  { name: 'Big', id: 41 },
  { name: 'Apple', id: 133 },
  { name: 'Amazon', id: 1454 },
  { name: 'Google', id: 99398 },
]
export const mockContractors = [
  { name: 'John', id: 12 },
  { name: 'Paul', id: 13 },
  { name: 'George', id: 14 },
  { name: 'Ringo', id: 15 },
]

export const jobs = [
  {
    id: 5,
    contractor: { name: 'bruno fay', id: 12 },
    month: 'January',
    status: 'Inactive',
    year: '2022',
    client: { name: 'amazon', id: 1 },
    hours: '0',
    value_hour: '20',
  },
  {
    id: 51,
    contractor: { name: 'bruno fay', id: 12 },
    status: 'Active',
    month: 'january',
    year: '2022',
    client: { name: 'Big' },
    hours: '0',
    value_hour: '15',
  },
  {
    id: 12,
    contractor: { name: 'james brown', id: 16 },
    month: 'February',
    status: 'Active',
    year: '2022',
    client: { name: 'amazon' },
    hours: '0',
    value_hour: '20',
  },
  {
    id: 13,
    contractor: { name: 'angela borges ', id: 15 },
    status: 'Active',
    month: 'January',
    year: '2022',
    client: { name: 'amazon' },
    hours: '0',
    value_hour: '20',
  },
  {
    id: 14,
    contractor: { name: 'john doe ', id: 14 },
    status: 'Active',
    month: 'January',
    year: '2022',
    client: { name: 'amazon' },
    hours: '0',
    value_hour: '20',
  },
  {
    id: 15,
    contractor: { name: 'bruno fay', id: 12 },
    status: 'Active',
    month: 'February',
    year: '2022',
    client: { name: 'amazon' },
    hours: '0',
    value_hour: '20',
  },
]
export const bodyTable = jobs.map((job) => ({
  ...job,
  workedDaysInfos: createObjectDaysByMonth(job.month, Number(job.year)),
}))
