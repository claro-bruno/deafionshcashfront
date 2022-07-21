import React from 'react'

export default function AdressComponent() {
  return (
    <div className='inputsAndLabelsContainer items-center'>
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
    </div>)
}
