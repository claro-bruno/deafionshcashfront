import { useState } from 'react'
import Header from '../../components/header/Header'
import AlertRegisterModal from '../../components/modal/AlertRegisterModal'

export default function Register() {
  const [isModalOpen,setIsModalOpen] =useState(true)
  /*   const getdaysofcurrentmonth = () => {
      const date = new Date()
      const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
      return days
    } */

  return (
    <div className='flex flex-col  min-w-screen min-h-screen'>
      <Header />
      <main className='flex-1 flex flex-col p-4 my-auto gap-2 w-[100%]  min-h-full  items-center  '>
        <form className='flex flex-col items-center justify-center gap-4 px-4  w-auto'>
          <div className='flex flex-col gap-4 bg-zinc-100 mt-8 p-8 rounded-md'>
            <div className='inputsAndLabelsContainer'>
              <div className='flex flex-col gap-2'>
                <label className='labelsDefault'>
                  Name
                  <input
                    className='inpuntsDefault'
                    type='text' />
                </label>
                <label className='labelsDefault'>
                  Email
                  <input
                    className='inpuntsDefault'
                    type='email' />
                </label>
                <label className='labelsDefault'>
                  Itin/Social Id
                  <input
                    className='inpuntsDefault'
                    type='text' />
                </label>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='labelsDefault'>
                  Phone
                  <input
                    className='inpuntsDefault'
                    type='text'
                    name='phone'
                    inputMode='numeric'
                    pattern='[0-9]{3}-[0-9]{4}-[0-9]{4}'
                    maxLength={11}
                  />
                </label>
                <label className='labelsDefault'>
                  Birthday
                  <input
                    min='1940-12-31'
                    max='2022-12-31'
                    className='inpuntsDefault'
                    type='date' />
                </label>
                <label className='labelsDefault '>
                  Document Photo
                  <input type='file' className='fileInput' />
                </label>
              </div>
            </div>
            <hr className='h-8' />
            <div className='inputsAndLabelsContainer'>
              <div className='flex flex-col gap-2'>
                <label className='labelsDefault'>
                  Address N°
                  <input
                    inputMode='numeric'
                    name='addressNum'
                    className='inpuntsDefault'
                    type='text' />
                </label>
                <label className='labelsDefault'>
                  Street
                  <input
                    name='street'
                    className='inpuntsDefault'
                    type='text' />
                </label>
                <label className='labelsDefault'>
                  City
                  <input
                    name='city'
                    className='inpuntsDefault'
                    type='text' />
                </label>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='labelsDefault'>
                  State
                  <input
                    name='state'
                    className='inpuntsDefault'
                    type='text'
                  />
                </label>
                <label className='labelsDefault'>
                  Zip-code
                  <input
                    name='zipCode'
                    inputMode='numeric'
                    pattern='^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$'
                    className='inpuntsDefault'
                    type='text' />
                </label>
                <label className='labelsDefault '>
                  Residency proof
                  <input
                    name='residencyProof'
                    type='file'
                    className='fileInput'
                  />
                </label>
              </div>
            </div>
          </div>
          <button
            className='hover:bg-brand mt-3 px-3 py-1 ring-2 ring-brand hover:ring-transparent text-brand rounded transition-colors hover:text-white font-bold'
            type='submit'>
            Register
          </button>
        </form>
        <AlertRegisterModal
        isModalOpen={isModalOpen}
        closeModal={()=>setIsModalOpen(false)}
        />
      </main>
    </div>
  )
}