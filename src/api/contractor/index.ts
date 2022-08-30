import axios from 'axios'
import { NewContractor } from '../../types/contractor'

export function axiosCreateNewContractor(payload: NewContractor) {
  const jsonToString = JSON.stringify(payload)
  return axios.post(
    'http://localhost:3001/contractor',
    { body: jsonToString },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )
}

export async function axiosUpdateNewContractor(payload) {
  return await axios.put('rota', payload)
}
export async function axiosGetAllContractors(payload) {
  return await axios.get('rota', payload)
}
export async function axiosGetContractorsById(payload) {
  return await axios.get('rota', payload)
}
export async function axiosUpdateContractorStatus(payload) {
  return await axios.post('rota', payload)
}
export async function axiosUpdateContractorPassword(payload) {
  return await axios.put('rota', payload)
}
