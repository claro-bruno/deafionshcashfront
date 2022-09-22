import { Api } from '..'

import {
  EditContractor,
  InputsFiles,
  NewContractor,
} from '../../types/contractor'

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

export function axiosUpdateContractor(
  payload: EditContractor,
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

  return Api.put(`account/contractor/access/${payload.id}`, objToAPI, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export async function axiosUpdateContractorPassword(payload: {
  password: string
  id: number
}) {
  return await Api.put(
    `account/contractor/password/${payload.id}`,
    JSON.stringify(payload.password),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

export async function axiosGetAllContractors() {
  return await Api.get('contractor')
}
export async function axiosGetContractorsById(id: number) {
  return await Api.get(`contractor/${id}`)
}
export async function axiosGetContractorJobsById(id: number) {
  return await Api.get(`contractor/${id}`)
}
export async function axiosUpdateContractorStatus(payload: any) {
  return await Api.patch(`contractor/${payload.id}`, JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
