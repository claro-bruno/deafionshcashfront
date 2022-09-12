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
  primaryAddress: {
    address: string
    city: string
    state: string
    zipcode: string
  }
  secondaryAddress?: {
    address?: string
    city?: string
    state?: string
    zipcode?: string
  }
}
export type EditContractor = {
  id: string
  email: string
  phone: string
  ssnOrItin: string
}
export type ContractorPaymentInfos = {
  id: number
  contractor: { name: string; id: number }
  status: string
  month: string
  year: string
  payments: {
    type: string
    identifier: string
    quarter: number
    value: string
  }[]
}
export type InputsFiles = {
  profile: File | {}
  documentProof: File | {}
  residenceProof: File | {}
}
