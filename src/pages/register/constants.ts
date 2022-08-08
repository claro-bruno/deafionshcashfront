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
  acceptTerms: false,
  address: {
    address: '',
    city: '',
    state: '',
    street: '',
    zip: '',
  },
}
