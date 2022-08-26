import axios from 'axios'

export async function axiosLogin(payload) {
  return await axios.post('rota', payload)
}
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
export async function axiosGetAllPayments(payload) {
  return await axios.get('rota', payload)
}
export async function axiosUpdatePayments(payload) {
  return await axios.put('rota', payload)
}
export async function axiosUpdateContractorStatus(payload) {
  return await axios.post('rota', payload)
}
export async function axiosUpdateContractorPassword(payload) {
  return await axios.put('rota', payload)
}
export async function axiosGetAllClients(payload) {
  return await axios.get('rota', payload)
}
export async function axiosGetClientById(payload) {
  return await axios.get('rota', payload)
}
export async function axiosCreateClient(payload) {
  return await axios.post('rota', payload)
}
export async function axiosUpdateClient(payload) {
  return await axios.put('rota', payload)
}
export async function axiosGetAllJobs(payload) {
  return await axios.get('rota', payload)
}
export async function axiosCreateNewJob(payload) {
  return await axios.post('rota', payload)
}
export async function axiosUpdateNewJob(payload) {
  return await axios.put('rota', payload)
}
