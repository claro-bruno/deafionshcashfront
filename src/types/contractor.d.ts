export type ContractorJob = {
  id: number
  quarter: {
    appointment: { date: string; value: number }[]
    month: string
    total: number
    total_hours: number
    value_hour: number
    year: number
  }[]
  client: { name: string; id: number }
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
  middle_name: string
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
  status: string
  ein: string
  first_name: string
  last_name: string
  middle_name: string
  address: string
  city: string
  state: string
  zipcode: string
}

export type InputsFiles = {
  profile: File | {}
  documentProof: File | {}
  residenceProof: File | {}
}
