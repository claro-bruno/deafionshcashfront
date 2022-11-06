import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { axiosCreateNewContractor } from '../../../api/contractor'
import useFormate from '../../../hooks/useFormate'
import useHandleChange from '../../../hooks/useHandleChange'
import useModal from '../../../hooks/useModal'
import { InputsFiles, NewContractor } from '../../../types/contractor'
import AddressComponent from './AddressComponent'
import AlertModal from './AlertModal'

export default function NewContractorForm() {
  const [addressNum, setAddressNum] = useState('1')
  const { formatEIN, formatPhone, formatSsnOrItin, removeEmptyValuesFromObj } =
    useFormate()
  const { register, handleSubmit, watch, reset } = useFormContext()
  const { inputsFiles, handleInputsFiles } = useHandleChange({
    profile: {},
    documentProof: {},
    residenceProof: {},
  })
  const [response, setResponse] = useState<any>({})
  const { isModalOpen, switchModalView } = useModal()

  const { mutateAsync } = useMutation(
    (payload: [NewContractor, InputsFiles]) =>
      axiosCreateNewContractor(payload[0], payload[1]),
    {
      onSuccess: (response) => {
        setResponse({ isContractorCreated: true, ...response?.data })
        switchModalView()
        reset()
      },
      onError: (error: { response: any }) => {
        setResponse({
          isContractorCreated: false,
          message: error.response.data.message,
        })
        switchModalView()
      },
    },
  )

  function setNumberOfAddresses(addressNum: string) {
    return Number(addressNum) === 1 ? (
      <AddressComponent
        sendProof={handleInputsFiles}
        secondaryAddress={false}
      />
    ) : (
      <>
        <AddressComponent
          sendProof={handleInputsFiles}
          secondaryAddress={false}
        />
        <AddressComponent secondaryAddress={true} />
      </>
    )
  }

  function handleSubmitNewContractor(contractorInfos: any) {
    removeEmptyValuesFromObj(contractorInfos)
    mutateAsync([contractorInfos, inputsFiles])
  }

  const ssnOrItin = watch('ssnOrItin')
  const phone = watch('phone')
  const zip = watch('primaryAddress.zipcode')
  const ein = watch('ein')

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSubmitNewContractor)}
        className="flex flex-col items-center justify-center gap-4 px-4  w-auto"
      >
        <div className="flex flex-col  bg-gray-200 mt-8 p-8 rounded-md">
          <div className="inputsAndLabelsContainer h-[18rem] border-b-2">
            <div className="flex flex-col gap-2">
              <label className="labelsDefault">
                First name *
                <input
                  placeholder="Ex: John  "
                  className="inputsDefault"
                  type="text"
                  {...register('firstName')}
                  required
                />
              </label>
              <label className="labelsDefault">
                Email *
                <input
                  placeholder=" example@exemple.com  "
                  className="inputsDefault"
                  type="email"
                  {...register('email')}
                  required
                />
              </label>
              <label className="labelsDefault">
                ITIN/SSN *
                <input
                  placeholder="000-00-0000"
                  maxLength={9}
                  className="inputsDefault"
                  type="text"
                  title="Insert a valid individual Taxpayer Identification Number (ITIN) or Social Security Number (SSN)"
                  value={formatSsnOrItin(ssnOrItin)}
                  {...register('ssnOrItin')}
                  required
                />
              </label>
              <label className="labelsDefault ">
                <div className="flex items-start">Profile Image</div>

                <input
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleInputsFiles(e, 'profile')}
                  className=" file:py-[0.35rem]  fileInput"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="labelsDefault">
                <div className="flex items-start">Middle name</div>

                <input
                  {...register('middleName')}
                  placeholder="Ex: Doe  "
                  className="inputsDefault"
                  type="text"
                />
              </label>
              <label className="labelsDefault">
                Phone *
                <input
                  {...register('phone')}
                  placeholder="(001) 000-0000"
                  className="inputsDefault"
                  type="tel"
                  inputMode="numeric"
                  maxLength={11}
                  value={formatPhone(phone)}
                />
              </label>
              <label className="labelsDefault">
                <div className="flex items-start">EIN</div>
                <input
                  {...register('ein')}
                  title="Employer Identification Number (EIN)"
                  placeholder="00-0000000"
                  maxLength={9}
                  className="inputsDefault"
                  type="text"
                  inputMode="numeric"
                  value={formatEIN(ein)}
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="labelsDefault">
                Last name *
                <input
                  {...register('lastName')}
                  type="text"
                  placeholder="Ex: Smith  "
                  className="inputsDefault"
                  required
                />
              </label>
              <label className="labelsDefault">
                Birthday *
                <input
                  {...register('birthDate')}
                  min="1940-12-31"
                  max="2022-12-31"
                  className="inputsDefault"
                  type="date"
                  required
                />
              </label>

              <label className="labelsDefault ">
                <div className="flex items-start">Document Photo</div>
                <input
                  accept="image/*"
                  onChange={(e) => handleInputsFiles(e, 'documentProof')}
                  type="file"
                  className=" file:py-[0.35rem]  fileInput"
                />
              </label>
            </div>
          </div>
          <div className="flex w-full py-4 border-t-2 border-gray-400 justify-center">
            <label className="flex items-center gap-2">
              Address
              <select
                className="w-fit  py-1 px-2 outline-brand  ring-1 rounded border-b-2"
                value={addressNum}
                onChange={(e) => setAddressNum(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2 </option>
              </select>
            </label>
          </div>
          {setNumberOfAddresses(addressNum)}
        </div>
        <button
          className="bg-brand mt-3 px-3 py-1 ring ring-transparent border border-transparent hover:ring-brand hover:border-gray-50 rounded relative bottom-3 transition-colors text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-transparent disabled:hover:ring-transparent"
          type="submit"
          disabled={!zip || !phone}
        >
          Register
        </button>
      </form>
      <AlertModal
        isModalOpen={isModalOpen}
        switchModalView={switchModalView}
        modalInfos={response}
      />
    </>
  )
}