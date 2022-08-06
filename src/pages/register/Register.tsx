import { useState } from 'react'
import AddressComponent from './components/addressRegister/AddressComponent'
import Header from '../../components/header/Header'

export default function Register() {
  const [addressNum, setAddressNum] = useState('1')
  /*   const getdaysofcurrentmonth = () => {
      const date = new Date()
      const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
      return days
    } */

  function setNumberOfAddresses(addressNum: string) {
    console.log(addressNum)

    return Number(addressNum) === 1 ? (
      <AddressComponent />
    ) : (
      <>
        <AddressComponent />
        <AddressComponent />
      </>
    )
  }

  return (
    <div className="flex flex-col  min-w-screen min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col p-4 my-auto gap-2 w-[100%]  min-h-full  items-center  ">
        <form className="flex flex-col items-center justify-center gap-4 px-4  w-auto">
          <div className="flex flex-col gap-4 bg-zinc-100 mt-8 p-8 rounded-md">
            <div className="inputsAndLabelsContainer border-b-2">
              <div className="flex flex-col gap-2">
                <label className="labelsDefault">
                  First name
                  <input className="inputsDefault" type="text" />
                </label>
                <label className="labelsDefault">
                  Email
                  <input className="inputsDefault" type="email" />
                </label>
                <label className="labelsDefault">
                  Itin/SSN
                  <input
                    placeholder="000-00-0000"
                    className="inputsDefault"
                    type="text"
                  />
                </label>
                <label className="labelsDefault">
                  employer
                  <input
                    placeholder="00-0000000"
                    className="inputsDefault"
                    type="text"
                  />
                </label>
                <label className="labelsDefault">
                  Birthday
                  <input
                    min="1940-12-31"
                    max="2022-12-31"
                    className="inputsDefault"
                    type="date"
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <label className="labelsDefault">
                  Last name
                  <input
                    className="inputsDefault"
                    type="text"
                    name="phone"
                    inputMode="numeric"
                    pattern="^\(?([0-9]{0,3})\)?[-. ]?([0-9]{0,3})[-. ]?([0-9]{0,4})$"
                    maxLength={11}
                  />
                </label>
                <label className="labelsDefault">
                  Phone
                  <input
                    placeholder="(001) 000-0000"
                    className="inputsDefault"
                    type="text"
                    name="phone"
                    inputMode="numeric"
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                    maxLength={11}
                  />
                </label>
                <label className="labelsDefault ">
                  Document Photo
                  <input
                    accept="image/*"
                    type="file"
                    className=" file:py-[0.35rem]  fileInput"
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
            </div>
            <label className="flex self-center items-center gap-2">
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
            {setNumberOfAddresses(addressNum)}
          </div>
          <button
            className="bg-brand mt-3 px-3 py-1 ring ring-transparent border border-transparent hover:ring-brand hover:border-gray-50 rounded transition-colors text-white font-bold"
            type="submit"
          >
            Register
          </button>
        </form>
      </main>
    </div>
  )
}
