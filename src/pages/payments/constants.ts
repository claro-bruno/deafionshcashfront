import { months } from '../job/constants'

export const headerTable = [
  'status',
  'Contractor',
  '1 - 15',
  'Payment Type',
  'Payment Identifier',
  'quinzena 2',
  'Payment Type',
  'Payment Identifier',
  'Total Month',
]
export const bodyTable = [
  {
    id: 1,
    contractor: {
      name: 'bruno fay',
      id: 5,
    },
    status: 'active',
    month: 'january',
    year: '2022',
    payments: [
      {
        type: 'Transfer',
        identifier: '12345',
        period: 'fortnight1',
        value: '1520.30',
      },
      {
        type: 'Deposit',
        identifier: '12345',
        period: 'fortnight2',
        value: '4520.30',
      },
    ],
  },
  {
    id: 2,
    contractor: {
      name: 'renata',
      id: 51,
    },
    status: 'active',
    month: 'january',
    year: '2022',
    payments: [
      {
        type: 'Transfer',
        identifier: '12345',
        period: 'fortnight1',
        value: '150.30',
      },
      {
        type: 'Deposit',
        identifier: '12345',
        period: 'fortnight2',
        value: '4520.30',
      },
    ],
  },
  {
    id: 3,
    contractor: {
      name: 'bruno fay',
      id: 52,
    },
    status: 'active',
    month: 'april',
    year: '2022',
    payments: [
      {
        type: 'Transfer',
        identifier: '12345',
        period: 'fortnight1',
        value: '2520.30',
      },
      {
        type: 'Deposit',
        identifier: '12345',
        period: 'fortnight2',
        value: '2000',
      },
    ],
  },
  {
    id: 4,
    contractor: {
      name: 'bruno fay',
      id: 53,
    },
    status: 'active',
    month: 'may',
    year: '2022',
    payments: [
      {
        type: 'Transfer',
        identifier: '12345',
        period: 'fortnight1',
        value: '3120.50',
      },
      {
        type: 'Deposit',
        identifier: '12345',
        period: 'fortnight2',
        value: '1520.30',
      },
    ],
  },
  {
    id: 5,
    contractor: {
      name: 'james',
      id: 54,
    },
    status: 'inative',
    month: 'january',
    year: '2022',
    payments: [
      {
        type: 'Transfer',
        identifier: '12345',
        period: 'fortnight1',
        value: '520.30',
      },
      {
        type: 'Deposit',
        identifier: '12345',
        period: 'fortnight2',
        value: '120.30',
      },
    ],
  },
  {
    id: 6,
    contractor: {
      name: 'maria',
      id: 55,
    },
    status: 'inative',
    month: 'january',
    year: '2022',
    payments: [
      {
        type: 'Transfer',
        identifier: '12345',
        period: 'fortnight1',
        value: '5020.70',
      },
      {
        type: 'Deposit',
        identifier: '12345',
        period: 'fortnight2',
        value: '1220.10',
      },
    ],
  },
  {
    id: 7,
    contractor: {
      name: 'james',
      id: 56,
    },
    status: 'inative',
    month: 'april',
    year: '2022',
    payments: [
      {
        type: 'Transfer',
        identifier: '12345',
        period: 'fortnight1',
        value: '520.30',
      },
      {
        type: 'Deposit',
        identifier: '12345',
        period: 'fortnight2',
        value: '120.30',
      },
    ],
  },
  {
    id: 8,
    contractor: {
      name: 'bruno augusto',
      id: 57,
    },
    status: 'active',
    month: 'january',
    year: '2022',
    payments: [
      {
        type: 'Transfer',
        identifier: '12345',
        period: 'fortnight1',
        value: '2520.30',
      },
      {
        type: 'Deposit',
        identifier: '12345',
        period: 'fortnight2',
        value: '2220.30',
      },
    ],
  },
  {
    id: 9,
    contractor: {
      name: 'bruno augusto silva pereira',
      id: 58,
    },
    status: 'active',
    month: 'april',
    year: '2022',
    payments: [
      {
        type: 'Transfer',
        identifier: '12345',
        period: 'fortnight1',
        value: '2520.30',
      },
      {
        type: 'Deposit',
        identifier: '12345',
        period: 'fortnight2',
        value: '2220.30',
      },
    ],
  },
  {
    id: 10,
    contractor: {
      name: 'bruno augusto',
      id: 599,
    },
    status: 'inative',
    month: 'february',
    year: '2022',
    payments: [
      {
        type: 'Transfer',
        identifier: '12345',
        period: 'fortnight1',
        value: '1520.30',
      },
      {
        type: 'Depositosit',
        identifier: '12345',
        period: 'fortnight2',
        value: '4300',
      },
    ],
  },
]

export function getLastDayOfMonth(month: string) {
  const findMonthIndex = months.findIndex((item) => item === month)
  const lastDayOfMonth = new Date(2020, findMonthIndex + 1, 0).getDate()
  return lastDayOfMonth
}
