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
    id: 5,
    contractor: 'bruno fay',
    month: 'January',
    year: 2022,
    client: 'amazon',
    hours: '0',
    pHour: '20',
  },
  {
    id: 5,
    contractor: 'bruno fay',
    month: 'January',
    year: 2022,
    client: 'Big',
    hours: '0',
    pHour: '15',
    workedDaysInfos: {
      '1/1/2022': {
        weekDay: 'Saturday',
        workedHours: '',
      },
      '2/1/2022': {
        weekDay: 'Sunday',
        workedHours: '8',
      },
      '3/1/2022': {
        weekDay: 'Monday',
        workedHours: '',
      },
      '4/1/2022': {
        weekDay: 'Tuesday',
        workedHours: '',
      },
      '5/1/2022': {
        weekDay: 'Wednesday',
        workedHours: '',
      },
      '6/1/2022': {
        weekDay: 'Thursday',
        workedHours: '',
      },
      '7/1/2022': {
        weekDay: 'Friday',
        workedHours: '',
      },
      '8/1/2022': {
        weekDay: 'Saturday',
        workedHours: '',
      },
      '9/1/2022': {
        weekDay: 'Sunday',
        workedHours: '',
      },
      '10/1/2022': {
        weekDay: 'Monday',
        workedHours: '',
      },
      '11/1/2022': {
        weekDay: 'Tuesday',
        workedHours: '10',
      },
      '12/1/2022': {
        weekDay: 'Wednesday',
        workedHours: '',
      },
      '13/1/2022': {
        weekDay: 'Thursday',
        workedHours: '',
      },
      '14/1/2022': {
        weekDay: 'Friday',
        workedHours: '',
      },
      '15/1/2022': {
        weekDay: 'Saturday',
        workedHours: '',
      },
      '16/1/2022': {
        weekDay: 'Sunday',
        workedHours: '',
      },
      '17/1/2022': {
        weekDay: 'Monday',
        workedHours: '',
      },
      '18/1/2022': {
        weekDay: 'Tuesday',
        workedHours: '2',
      },
      '19/1/2022': {
        weekDay: 'Wednesday',
        workedHours: '',
      },
      '20/1/2022': {
        weekDay: 'Thursday',
        workedHours: '',
      },
      '21/1/2022': {
        weekDay: 'Friday',
        workedHours: '',
      },
      '22/1/2022': {
        weekDay: 'Saturday',
        workedHours: '',
      },
      '23/1/2022': {
        weekDay: 'Sunday',
        workedHours: '',
      },
      '24/1/2022': {
        weekDay: 'Monday',
        workedHours: '',
      },
      '25/1/2022': {
        weekDay: 'Tuesday',
        workedHours: '',
      },
      '26/1/2022': {
        weekDay: 'Wednesday',
        workedHours: '',
      },
      '27/1/2022': {
        weekDay: 'Thursday',
        workedHours: '',
      },
      '28/1/2022': {
        weekDay: 'Friday',
        workedHours: '',
      },
      '29/1/2022': {
        weekDay: 'Saturday',
        workedHours: '',
      },
      '30/1/2022': {
        weekDay: 'Sunday',
        workedHours: '',
      },
      '31/1/2022': {
        weekDay: 'Monday',
        workedHours: '',
      },
    },
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
