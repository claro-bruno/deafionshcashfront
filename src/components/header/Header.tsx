import React, { PropsWithChildren } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header(props: PropsWithChildren) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className=' p-2 flex justify-between bg-brand'>
      <div className=''>
        <img
          className='h-16'
          src="https://www.globaljanitorialservices.com/assets/images/resources/logo-3.png"
          alt="global janitorial services logo" />
      </div>
      {props.children}
      {location.pathname !== '/register' ? (
        <>
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
          <button
            onClick={() => navigate('/')}
            className='text-white relative px-2 py-1 outline-white h-min self-center right-1 text-sm font-bold'
          >
            Logout
          </button>
        </>) : (
        <button
          onClick={() => navigate('/')}
          className='text-white relative px-2 py-1 outline-white h-min self-center right-1 text-sm font-bold'
        >
          Login
        </button>
      )}
    </header>
  )
}
