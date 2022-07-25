import React from 'react'
type AdressProps = {
  address: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  residencyProof: string,
}
export default function AdressComponent({ address, street, city, state, zip, residencyProof }: AdressProps) {
  return (
    <div className='inputsAndLabelsContainer items-center'>
      <div className='flex flex-col gap-2'>
        <label className='labelsDefault'>
          Address
          <input
            inputMode='numeric'
            name='adress'
            value={address}
            className='inpuntsDefault'
            type='text' />
        </label>
        <label className='labelsDefault'>
          Street
          <input
            name='street'
            value={street}
            className='inpuntsDefault'
            type='text' />
        </label>
        <label className='labelsDefault'>
          City
          <input
            name='city'
            value={city}
            className='inpuntsDefault'
            type='text' />
        </label>
      </div>
      <div className='flex flex-col gap-2'>
        <label className='labelsDefault'>
          State
          <input
            name='state'
            value={state}
            className='inpuntsDefault'
            type='text'
          />
        </label>
        <label className='labelsDefault'>
          Zip-code
          <input
            name='zipCode'
            value={zip}
            inputMode='numeric'
            pattern='^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$'
            className='inpuntsDefault'
            type='text' />
        </label>
        <label className='labelsDefault '>
          Residency proof
          <input
            name='residencyProof'
            value={residencyProof}
            type='file'
            className='fileInput'
          />
        </label>
      </div>
    </div>)
}
