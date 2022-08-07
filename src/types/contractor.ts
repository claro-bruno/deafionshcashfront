export type ContractorWorkedInfo = {
  id: number
  date: Date
  workedHours: string
  client: string
  hourlyPay: string
}

export type newContractor = {
  id?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  birthDate: Date
  ssn_itin: string
  ein?: string
  address: {
    address: string
    city: string
    state: string
    street: string
    zip: string
  }
}
