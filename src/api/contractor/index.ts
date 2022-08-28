import axios from 'axios'

export async function axiosCreateNewContractor(payload) {
  return await axios.post('rota', payload)
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
