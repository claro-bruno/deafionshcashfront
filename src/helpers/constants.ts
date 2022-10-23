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
export const MONTHS = [
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
export const articleInfos = ['Payment', ' Worked Hours']

export const monthsListBox = [
  { name: 'January', number: 1 },
  { name: 'February', number: 2 },
  { name: 'March', number: 3 },
  { name: 'April', number: 4 },
  { name: 'May', number: 5 },
  { name: 'June', number: 6 },
  { name: 'July', number: 7 },
  { name: 'August', number: 8 },
  { name: 'September', number: 9 },
  { name: 'October', number: 10 },
  { name: 'November', number: 11 },
  { name: 'December', number: 12 },
]

export const yearsListBox = [
  { name: '2022' },
  { name: '2023' },
  { name: '2024' },
  { name: '2025' },
  { name: '2026' },
]
export const fortnightListBox = [{ name: 'Quinzena 1' }, { name: 'Quinzena 2' }]
export const PAYMENT_TYPES = [
  { name: 'Transference' },
  { name: 'Deposit' },
  { name: 'Application' },
]

export const reportsYearBody = [
  {
    id: 1,
    month: 'January',
    in: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000),
    labourPayroll: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    vanFuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    fuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    equipment: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    uniform: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    repairsAndMaintenance: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    advertisement: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    contractorsWorkers: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    global: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    insuranceAndTax: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    meals: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    chemicalAndConsumables: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    officeExpenses: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    extras: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    totalMonthly: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
  },
  {
    id: 2,
    month: 'February',
    in: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    labourPayroll: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    vanFuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    fuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    equipment: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    uniform: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    repairsAndMaintenance: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    advertisement: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    contractorsWorkers: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    global: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    insuranceAndTax: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    meals: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    chemicalAndConsumables: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    officeExpenses: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    extras: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    totalMonthly: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
  },
  {
    id: 3,
    month: 'March',
    in: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    labourPayroll: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    vanFuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    fuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    equipment: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    uniform: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    repairsAndMaintenance: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    advertisement: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    contractorsWorkers: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    global: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    insuranceAndTax: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    meals: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    chemicalAndConsumables: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    officeExpenses: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    extras: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    totalMonthly: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
  },
  {
    id: 4,
    month: 'April',
    in: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    labourPayroll: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    vanFuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    fuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    equipment: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    uniform: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    repairsAndMaintenance: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    advertisement: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    contractorsWorkers: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    global: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    insuranceAndTax: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    meals: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    chemicalAndConsumables: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    officeExpenses: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    extras: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    totalMonthly: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
  },
  {
    id: 5,
    month: 'May',
    in: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    labourPayroll: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    vanFuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    fuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    equipment: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    uniform: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    repairsAndMaintenance: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    advertisement: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    contractorsWorkers: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    global: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    insuranceAndTax: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    meals: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    chemicalAndConsumables: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    officeExpenses: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    extras: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    totalMonthly: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
  },
  {
    id: 6,
    month: 'June',
    in: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    labourPayroll: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    vanFuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    fuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    equipment: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    uniform: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    repairsAndMaintenance: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    advertisement: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    contractorsWorkers: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    global: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    insuranceAndTax: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    meals: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    chemicalAndConsumables: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    officeExpenses: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    extras: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    totalMonthly: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
  },
  {
    id: 7,
    month: 'July',
    in: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    labourPayroll: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    vanFuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    fuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    equipment: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    uniform: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    repairsAndMaintenance: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    advertisement: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    contractorsWorkers: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    global: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    insuranceAndTax: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    meals: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    chemicalAndConsumables: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    officeExpenses: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    extras: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    totalMonthly: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
  },
  {
    id: 8,
    month: 'August',
    in: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    labourPayroll: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    vanFuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    fuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    equipment: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    uniform: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    repairsAndMaintenance: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    advertisement: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    contractorsWorkers: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    global: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    insuranceAndTax: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    meals: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    chemicalAndConsumables: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    officeExpenses: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    extras: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    totalMonthly: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
  },
  {
    id: 9,
    month: 'September',
    in: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    labourPayroll: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    vanFuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    fuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    equipment: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    uniform: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    repairsAndMaintenance: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    advertisement: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    contractorsWorkers: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    global: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    insuranceAndTax: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    meals: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    chemicalAndConsumables: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    officeExpenses: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    extras: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    totalMonthly: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
  },
  {
    id: 10,
    month: 'October',
    in: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    labourPayroll: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    vanFuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    fuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    equipment: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    uniform: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    repairsAndMaintenance: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    advertisement: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    contractorsWorkers: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    global: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    insuranceAndTax: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    meals: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    chemicalAndConsumables: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    officeExpenses: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    extras: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    totalMonthly: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
  },
  {
    id: 11,
    month: 'November',
    in: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    labourPayroll: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    vanFuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    fuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    equipment: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    uniform: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    repairsAndMaintenance: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    advertisement: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    contractorsWorkers: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    global: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    insuranceAndTax: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    meals: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    chemicalAndConsumables: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    officeExpenses: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    extras: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    totalMonthly: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
  },
  {
    id: 12,
    month: 'December',
    in: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    labourPayroll: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    vanFuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    fuelAndOil: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    equipment: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    uniform: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    repairsAndMaintenance: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    advertisement: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
    contractorsWorkers: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    global: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    insuranceAndTax: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    meals: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    chemicalAndConsumables: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    officeExpenses: Math.floor(
      Math.random() * (4000 - 1000 + 1) + 1000,
    ).toFixed(2),
    extras: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(2),
    totalMonthly: Math.floor(Math.random() * (4000 - 1000 + 1) + 1000).toFixed(
      2,
    ),
  },
]
export const totalReportsYearBody = {
  id: 1,
  in: '40,000.00',
  labourPayroll: '40,000.00',
  vanFuelAndOil: '40,000.00',
  fuelAndOil: '40,000.00',
  equipment: '40,000.00',
  uniform: '40,000.00',
  repairsAndMaintenance: '40,000.00',
  advertisement: '40,000.00',
  contractorsWorkers: '40,000.00',
  global: '40,000.00',
  insuranceAndTax: '40,000.00',
  meals: '40,000.00',
  chemicalAndConsumables: '40,000.00',
  officeExpenses: '40,000.00',
  extras: '40,000.00',
  totalMonthly: '40,000.00',
}
