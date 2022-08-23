export const headerTable = [
  'Contractor',
  'client',
  'Month',
  ' total hours',
  'P/Hour',
  'total payment',
  'status',
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

export const clients = ['Multilaser', 'Big', 'Apple', 'Amazon', 'Google']
export const contractors = ['John', 'Paul', 'George', 'Ringo']

function formatDate(date: Date): string {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
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
    if (options?.days?.includes(weekDayName)) {
      acc[dateFormatted] = { weekDay: weekDayName, workedHours: options?.hours }
    } else {
      acc[dateFormatted] = { weekDay: weekDayName, workedHours: '' }
    }
    return acc
  }, {})
  return objectDays
}

export const jobs = [
  {
    id: 11,
    contractor: 'bruno fay',
    month: 'January',
    year: 2022,
    client: 'amazon',
    hours: '0',
    pHour: '20',
  },
  {
    id: 12,
    contractor: 'james brown',
    month: 'February',
    year: 2022,
    client: 'amazon',
    hours: '0',
    pHour: '20',
  },
  {
    id: 13,
    contractor: 'angela borges ',
    month: 'January',
    year: 2022,
    client: 'amazon',
    hours: '0',
    pHour: '20',
  },
  {
    id: 14,
    contractor: 'john doe ',
    month: 'January',
    year: 2022,
    client: 'amazon',
    hours: '0',
    pHour: '20',
  },
  {
    id: 15,
    contractor: 'bruno fay',
    month: 'February',
    year: 2022,
    client: 'amazon',
    hours: '0',
    pHour: '20',
  },
]
export const bodyTable = jobs.map((job) => ({
  ...job,
  workedDaysInfos: createObjectDaysByMonth(job.month, job.year),
}))
