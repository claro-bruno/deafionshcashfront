import React, { PropsWithChildren } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './header.css'
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
      {!location.pathname.includes('/register') ? (
        <>
          <div className='flex self-center relative right-3 gap-4 '>
            <div className='flex gap-4 '>
              <Link to='/main' className='headerLink'>
                Home
              </Link>
              <Link to='/companies' className='headerLink'>
                Companies
              </Link>
              <Link to='/registration' className='headerLink'>
                Registration
              </Link>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className='loginLink'
          >
            Logout
          </button>
        </>) : (
        <button
          onClick={() => navigate('/')}
          className='loginLink'
        >
          Login
        </button>
      )}
    </header>
  )
}
