import { Api } from '..'

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

  return Api.post('contractor', objToAPI, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export async function axiosUpdateNewContractor(payload) {
  return await Api.put('rota', payload)
}
export async function axiosGetAllContractors() {
  return await Api.get('rota')
}
export async function axiosGetContractorsById(payload) {
  return await Api.get('rota', payload)
}
export async function axiosUpdateContractorStatus(payload) {
  return await Api.post('rota', payload)
}
export async function axiosUpdateContractorPassword(payload) {
  return await Api.put('rota', payload)
}
