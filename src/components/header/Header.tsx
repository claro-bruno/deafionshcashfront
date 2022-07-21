import React, { PropsWithChildren } from 'react'

export default function Header(props: PropsWithChildren) {
  return (
    <header className=' p-2 flex justify-between bg-brand'>
      <div className=''>
        <img
          className='h-16'
          src="https://www.globaljanitorialservices.com/assets/images/resources/logo-3.png"
          alt="global janitorial services logo" />
      </div>
      {props.children}
      <div className='flex  gap-4 '>
        <div className='flex gap-4 absolute right-[7rem] top-[1.9rem]'>
            <button className=' text-white text-sm font-bold'>
              Companies
            </button>
            <button className=' text-white text-sm font-bold'>
              Registration
            </button>
        </div>
          <button className=' text-white text-sm font-bold'>
            Logout
          </button>
       </div>
    </header>
  )
}
