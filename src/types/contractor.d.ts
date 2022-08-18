export type ContractorWorkedInfo = {
  id: number
  date: Date
  workedHours: string
  client: string
  hourlyPay: string
}

export type NewContractor = {
  id?: string
  firstName: string
  middleName: string
  lastName: string
  email: string
  birthDate: string
  phone: string
  ssnOrItin: string
  ein?: string
  acceptTerms: boolean
  dateCreated: Date
  address: {
    address: string
    city: string
    state: string
    street: string
    zip: string
  }
  secondaryAddress?: {
    address?: string
    city?: string
    state?: string
    street?: string
    zip?: string
  }
}
