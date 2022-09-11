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
  return await Api.put('rota', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export async function axiosGetAllContractors() {
  return await Api.get('contractor')
}
export async function axiosGetContractorsById(id: number) {
  return await Api.get(`contractor/${id}`)
}
export async function axiosUpdateContractorStatus(payload: any) {
  return await Api.patch(`contractor/${payload.id}`, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export async function axiosUpdateContractorPassword(payload) {
  return await Api.put('rota', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
