import { NewContractor } from '../../types/contractor'

export const INITIAL_NEW_CONTRACTOR_STATE: NewContractor = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  ein: '',
  birthDate: '',
  phone: '',
  ssnOrItin: '',
  acceptTerms: true,
  address: {
    address: '',
    city: '',
    state: '',
    zip: '',
  },
  secondaryAddress: {
    address: '',
    city: '',
    state: '',
    zip: '',
  },
}
