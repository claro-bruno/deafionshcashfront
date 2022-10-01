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
export type Contractor = {
  acceptTerms: boolean
  address: {}[]
  created_at: Date
  dob: Date
  ein: string
  email: string
  first_name: string
  fk_id_account: number
  id: number
  identification: string
  last_name: string
  middle_name: null
  status: string
  telephone: string
  urlDocumentProof: string
  urlPrimaryResidencyProof: string
  urlProfile: string
  urlSecondaryResidencyProof: string
}

export type EditContractor = {
  id: string
  email: string
  telephone: string
  identification: string
}

export type InputsFiles = {
  profile: File | {}
  documentProof: File | {}
  residenceProof: File | {}
}
