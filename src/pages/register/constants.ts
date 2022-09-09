import { NewContractor } from '../../types/contractor'

export const INITIAL_NEW_CONTRACTOR_STATE: NewContractor = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  ein: '',
  acceptTerms: true,
  birthDate: '',
  phone: '',
  ssnOrItin: '',
  primaryAddress: {
    address: '',
    city: '',
    state: '',
    zipcode: '',
  },
  secondaryAddress: {
    address: '',
    city: '',
    state: '',
    zipcode: '',
  },
}
