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
export const jobsATT = [
  {
    id: 2,
    clients: { name: 'Amazon', id: 33 },
    status: 'ACTIVE',
    contractors: { name: 'bruno fay', id: 233 },
    quarters: [
      {
        month: 'January',
        year: 2022,
        value_hour: 20,
        appointments: [
          { data: '01/01/2022', value: 0 },
          { data: '02/01/2022', value: 0 },
          { data: '03/01/2022', value: 0 },
          { data: '04/01/2022', value: 0 },
          { data: '05/01/2022', value: 0 },
          { data: '06/01/2022', value: 0 },
          { data: '07/01/2022', value: 0 },
          { data: '08/01/2022', value: 0 },
          { data: '09/01/2022', value: 0 },
          { data: '10/01/2022', value: 0 },
          { data: '11/01/2022', value: 0 },
          { data: '12/01/2022', value: 0 },
          { data: '13/01/2022', value: 0 },
          { data: '14/01/2022', value: 0 },
          { data: '15/01/2022', value: 0 },
        ],
      },
      {
        month: 'January',
        year: 2022,
        value_hour: 17,
        appointments: [
          { data: '16/01/2022', value: 0 },
          { data: '17/01/2022', value: 0 },
          { data: '18/01/2022', value: 0 },
          { data: '19/01/2022', value: 0 },
          { data: '20/01/2022', value: 0 },
          { data: '21/01/2022', value: 0 },
          { data: '22/01/2022', value: 0 },
          { data: '23/01/2022', value: 0 },
          { data: '24/01/2022', value: 0 },
          { data: '25/01/2022', value: 0 },
          { data: '26/01/2022', value: 0 },
          { data: '27/01/2022', value: 0 },
          { data: '28/01/2022', value: 0 },
          { data: '29/01/2022', value: 0 },
          { data: '30/01/2022', value: 0 },
          { data: '31/01/2022', value: 0 },
        ],
      },
    ],
  },
  {
    id: 44,
    clients: { name: 'Big', id: 22 },
    status: 'ACTIVE',
    contractors: { name: 'james gobel', id: 144 },
    quarters: [
      {
        month: 'January',
        year: 2022,
        value_hour: 20,
        appointments: [
          { data: '01/01/2022', value: 0 },
          { data: '02/01/2022', value: 0 },
          { data: '03/01/2022', value: 0 },
          { data: '04/01/2022', value: 0 },
          { data: '05/01/2022', value: 0 },
          { data: '06/01/2022', value: 0 },
          { data: '07/01/2022', value: 0 },
          { data: '08/01/2022', value: 0 },
          { data: '09/01/2022', value: 0 },
          { data: '10/01/2022', value: 0 },
          { data: '11/01/2022', value: 0 },
          { data: '12/01/2022', value: 0 },
          { data: '13/01/2022', value: 0 },
          { data: '14/01/2022', value: 0 },
          { data: '15/01/2022', value: 0 },
        ],
      },
      {
        month: 'January',
        year: 2022,
        value_hour: 17,
        appointments: [
          { data: '16/01/2022', value: 0 },
          { data: '17/01/2022', value: 0 },
          { data: '18/01/2022', value: 0 },
          { data: '19/01/2022', value: 0 },
          { data: '20/01/2022', value: 0 },
          { data: '21/01/2022', value: 0 },
          { data: '22/01/2022', value: 0 },
          { data: '23/01/2022', value: 0 },
          { data: '24/01/2022', value: 0 },
          { data: '25/01/2022', value: 0 },
          { data: '26/01/2022', value: 0 },
          { data: '27/01/2022', value: 0 },
          { data: '28/01/2022', value: 0 },
          { data: '29/01/2022', value: 0 },
          { data: '30/01/2022', value: 0 },
          { data: '31/01/2022', value: 0 },
        ],
      },
    ],
  },
]
export const bodyTable = jobs.map((job) => ({
  ...job,
  workedDaysInfos: createObjectDaysByMonth(job.month, Number(job.year)),
}))
