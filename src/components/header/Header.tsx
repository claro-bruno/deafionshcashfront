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
    </header>
  )
}
