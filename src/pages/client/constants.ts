export const headerTable = ['Status', 'Name', 'Working Days', 'Working Hours']
export const bodyTable = [
  {
    id: 1,
    name: 'apple',
    status: 'Active',
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    workingHours: { start: '08:00', end: '17:00' },
  },
  {
    id: 11,
    name: 'Big',
    status: 'Active',
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    workingHours: { start: '10:00', end: '17:00' },
  },
  {
    id: 12,
    name: 'amazon',
    status: 'Active',
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu'],
    workingHours: { start: '08:00', end: '17:00' },
  },
  {
    id: 14,
    name: 'multilaser',
    status: 'Inactive',
    weekdays: ['Tue', 'Wed', 'Thu', 'Fri'],
    workingHours: { start: '08:00', end: '17:00' },
  },
]

export type Weekdays = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]
export const WEEKDAYS: Weekdays = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]
