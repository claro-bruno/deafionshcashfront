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

export const mockClients = ['Multilaser', 'Big', 'Apple', 'Amazon', 'Google']
export const mockContractors = ['John', 'Paul', 'George', 'Ringo']

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
    if (options?.days?.includes(weekDayName)) {
      acc = [
        ...acc,
        {
          day: dateFormatted,
          weekDay: weekDayName,
          workedHours: options?.hours,
        },
      ]
    } else {
      acc = [
        ...acc,
        {
          day: dateFormatted,
          weekDay: weekDayName,
          workedHours: '0',
        },
      ]
    }
    return acc
  }, [])
  return objectDays
}

export const jobs = [
  {
    id: 5,
    contractor: 'bruno fay',
    month: 'January',
    status: false,
    year: 2022,
    client: 'amazon',
    hours: '0',
    pHour: '20',
  },
  {
    id: 5,
    contractor: 'bruno fay',
    status: true,
    month: 'January',
    year: 2022,
    client: 'Big',
    hours: '0',
    pHour: '15',
  },
  {
    id: 12,
    contractor: 'james brown',
    month: 'February',
    status: true,
    year: 2022,
    client: 'amazon',
    hours: '0',
    pHour: '20',
  },
  {
    id: 13,
    contractor: 'angela borges ',
    status: true,
    month: 'January',
    year: 2022,
    client: 'amazon',
    hours: '0',
    pHour: '20',
  },
  {
    id: 14,
    contractor: 'john doe ',
    status: true,
    month: 'January',
    year: 2022,
    client: 'amazon',
    hours: '0',
    pHour: '20',
  },
  {
    id: 15,
    contractor: 'bruno fay',
    status: true,
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
