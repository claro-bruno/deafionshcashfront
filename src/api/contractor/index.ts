import axios from 'axios'

import { InputsFiles, NewContractor } from '../../types/contractor'

export function axiosCreateNewContractor(
  payload: NewContractor,
  inputsFiles: InputsFiles,
) {
  const jsonToString = JSON.stringify(payload)
  let objToAPI: any = { body: jsonToString }

  if (inputsFiles.documentProof instanceof File) {
    objToAPI = { ...objToAPI, documentProof: inputsFiles.documentProof }
  }
  if (inputsFiles.residenceProof instanceof File) {
    objToAPI = {
      ...objToAPI,
      primaryResidencyProof: inputsFiles.residenceProof,
    }
  }
  if (inputsFiles.profile instanceof File) {
    objToAPI = { ...objToAPI, profile: inputsFiles.profile }
  }
  console.log(objToAPI)

  return axios.post('http://localhost:3001/contractor', objToAPI, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export async function axiosUpdateNewContractor(payload) {
  return await axios.put('rota', payload)
}
export async function axiosGetAllContractors() {
  return await axios.get('rota')
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
