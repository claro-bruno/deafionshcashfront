import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

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
      <div className='flex self-center gap-4 '>
        <div className='flex gap-4 '>
            <Link to='/companies' className=' text-white text-sm font-bold'>
              Companies
            </Link>
            <Link to='/registration' className=' text-white text-sm font-bold'>
              Registration
            </Link>
        </div>
       </div>
          <button className='  text-white text-sm font-bold'>
            Logout
          </button>
    </header>
  )
}
