export const headerTable = [
  'status',
  'Contractor',
  'client',
  'Month',
  ' total hours',
  'P/Hour',
  'total payment',
]
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

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

function formatDate(date: Date): string {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${year}-${month}-${day}`
}

export function createObjectDaysByMonth(
  month: string,
  year: number = new Date().getFullYear(),
  options?: { days?: string[]; hours?: string },
) {
  const getMonthNumberByName = months.indexOf(month)
  const getNumberOfDaysInMonth = new Date(
    year,
    getMonthNumberByName,
    0,
  ).getDate()

  const days = new Array(getNumberOfDaysInMonth).fill(0)

  const objectDays = days.reduce((acc, _, index) => {
    const day = index + 1
    const date = new Date(year, getMonthNumberByName, day)
    const weekDayName = new Date(
      year,
      getMonthNumberByName,
      day,
    ).toLocaleDateString('en-US', { weekday: 'long' })

    const dateFormatted = formatDate(date)
    /* console.log(options?.days, weekDayName) */
    return (acc = [
      ...acc,
      {
        day: dateFormatted,
        weekDay: weekDayName,
        workedHours: 0,
      },
    ])
  }, [])

  return objectDays
}

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
