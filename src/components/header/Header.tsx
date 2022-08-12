import React, { PropsWithChildren } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './header.css'
export default function Header(props: PropsWithChildren) {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <header className=" p-2 flex justify-between bg-brand">
      <div className="">
        <img
          className="h-16"
          src="https://www.globaljanitorialservices.com/assets/images/resources/logo-3.png"
          alt="global janitorial services logo"
        />
      </div>
      {props.children}
      {!location.pathname.includes('/register') ? (
        <>
          <div className="flex self-center relative right-3 gap-4 ">
            <div className="flex gap-4 ">
              <NavLink to="/main" className="headerLink">
                Home
              </NavLink>
              <NavLink to="/clients" className="headerLink">
                Clients
              </NavLink>
              <NavLink to="/registration" className="headerLink">
                Registration
              </NavLink>
            </div>
          </div>
          <button onClick={() => navigate('/')} className="loginLink">
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => navigate('/')} className="loginLink">
          Login
        </button>
      )}
    </header>
  )
}
