import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import useFormate from '../../../hooks/useFormate'
import AddressComponent from './addressRegister/AddressComponent'

export default function NewContractorForm() {
  const [addressNum, setAddressNum] = useState('1')
  const { formatEIN, formatPhone, formatSsnOrItin } = useFormate()
  const { register, handleSubmit, watch } = useFormContext()

  function setNumberOfAddresses(addressNum: string) {
    return Number(addressNum) === 1 ? (
      <AddressComponent secondaryAddress={false} />
    ) : (
      <>
        <AddressComponent secondaryAddress={false} />
        <AddressComponent secondaryAddress />
      </>
    )
  }
  function handleSubmitNewContractor(data: any) {
    console.log(data)
  }
  const ssnOrItin = watch('ssnOrItin')
  const phone = watch('phone')
  const ein = watch('ein')

  return (
    <form
      onSubmit={handleSubmit(handleSubmitNewContractor)}
      className="flex flex-col items-center justify-center gap-4 px-4  w-auto"
    >
      <div className="flex flex-col  bg-gray-200 mt-8 p-8 rounded-md">
        <div className="inputsAndLabelsContainer h-[18rem] border-b-2">
          <div className="flex flex-col gap-2">
            <label className="labelsDefault">
              First name
              <input
                className="inputsDefault"
                type="text"
                {...register('firstName')}
              />
            </label>
            <label className="labelsDefault">
              Email
              <input
                className="inputsDefault"
                type="email"
                {...register('email')}
              />
            </label>
            <label className="labelsDefault">
              ITIN/SSN
              <input
                title="Individual Taxpayer Identification Number (ITIN) or Social Security Number (SSN)"
                placeholder="000-00-0000"
                maxLength={9}
                className="inputsDefault"
                type="text"
                inputMode="numeric"
                value={formatSsnOrItin(ssnOrItin)}
                {...register('ssnOrItin')}
              />
            </label>
            <label className="labelsDefault ">
              Photo
              <input
                accept="image/*"
                type="file"
                className=" file:py-[0.35rem]  fileInput"
              />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <label className="labelsDefault">
              Middle name
              <input
                {...register('middleName')}
                name="middleName"
                className="inputsDefault"
                type="text"
              />
            </label>
            <label className="labelsDefault">
              Phone
              <input
                {...register('phone')}
                placeholder="(001) 000-0000"
                className="inputsDefault"
                type="text"
                inputMode="numeric"
                maxLength={11}
                value={formatPhone(phone)}
              />
            </label>
            <label className="labelsDefault">
              EIN
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
              Last name
              <input
                {...register('lastName')}
                type="text"
                className="inputsDefault"
              />
            </label>
            <label className="labelsDefault">
              Birthday
              <input
                {...register('birthDate')}
                min="1940-12-31"
                max="2022-12-31"
                className="inputsDefault"
                type="date"
              />
            </label>

            <label className="labelsDefault ">
              Document Photo
              <input
                {...register('documentPhoto')}
                accept="image/*"
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
        className="bg-brand mt-3 px-3 py-1 ring ring-transparent border border-transparent hover:ring-brand hover:border-gray-50 rounded relative bottom-3 transition-colors text-white font-bold"
        type="submit"
      >
        Register
      </button>
    </form>
  )
}
