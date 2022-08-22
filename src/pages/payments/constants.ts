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
    name: 'bruno fay',
    status: 'active',
    month: 'january',
    payments: [
      {
        type: 'ch 101',
        identifier: '12345',
        period: 'fortnight1',
        value: '1520.30',
      },
      {
        type: 'ch 102',
        identifier: '12345',
        period: 'fortnight2',
        value: '4520.30',
      },
    ],
  },
  {
    id: 2,
    name: 'renata',
    status: 'active',
    month: 'january',
    payments: [
      {
        type: 'ch 101',
        identifier: '12345',
        period: 'fortnight1',
        value: '150.30',
      },
      {
        type: 'ch 102',
        identifier: '12345',
        period: 'fortnight2',
        value: '4520.30',
      },
    ],
  },
  {
    id: 3,
    name: 'bruno fay',
    status: 'active',
    month: 'april',
    payments: [
      {
        type: 'ch 101',
        identifier: '12345',
        period: 'fortnight1',
        value: '2520.30',
      },
      {
        type: 'ch 102',
        identifier: '12345',
        period: 'fortnight2',
        value: '2000',
      },
    ],
  },
  {
    id: 4,
    name: 'bruno fay',
    status: 'active',
    month: 'may',
    payments: [
      {
        type: 'ch 101',
        identifier: '12345',
        period: 'fortnight1',
        value: '3120.50',
      },
      {
        type: 'ch 102',
        identifier: '12345',
        period: 'fortnight2',
        value: '1520.30',
      },
    ],
  },
  {
    id: 5,
    name: 'james',
    status: 'inative',
    month: 'january',
    payments: [
      {
        type: 'ch 101',
        identifier: '12345',
        period: 'fortnight1',
        value: '520.30',
      },
      {
        type: 'ch 102',
        identifier: '12345',
        period: 'fortnight2',
        value: '120.30',
      },
    ],
  },
  {
    id: 6,
    name: 'maria',
    status: 'inative',
    month: 'january',
    payments: [
      {
        type: 'ch 101',
        identifier: '12345',
        period: 'fortnight1',
        value: '5020.70',
      },
      {
        type: 'ch 102',
        identifier: '12345',
        period: 'fortnight2',
        value: '1220.10',
      },
    ],
  },
  {
    id: 7,
    name: 'james',
    status: 'inative',
    month: 'april',
    payments: [
      {
        type: 'ch 101',
        identifier: '12345',
        period: 'fortnight1',
        value: '520.30',
      },
      {
        type: 'ch 102',
        identifier: '12345',
        period: 'fortnight2',
        value: '120.30',
      },
    ],
  },
  {
    id: 8,
    name: 'bruno augusto',
    status: 'active',
    month: 'january',
    payments: [
      {
        type: 'ch 101',
        identifier: '12345',
        period: 'fortnight1',
        value: '2520.30',
      },
      {
        type: 'ch 102',
        identifier: '12345',
        period: 'fortnight2',
        value: '2220.30',
      },
    ],
  },
  {
    id: 9,
    name: 'bruno augusto silva pereira',
    status: 'active',
    month: 'april',
    payments: [
      {
        type: 'ch 101',
        identifier: '12345',
        period: 'fortnight1',
        value: '2520.30',
      },
      {
        type: 'ch 102',
        identifier: '12345',
        period: 'fortnight2',
        value: '2220.30',
      },
    ],
  },
  {
    id: 10,
    name: 'bruno augusto',
    status: 'inative',
    month: 'february',
    payments: [
      {
        type: 'ch 101',
        identifier: '12345',
        period: 'fortnight1',
        value: '1520.30',
      },
      {
        type: 'ch 102',
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
export const PAYMENT_TYPES = ['Transference', 'Deposit', 'Application']
