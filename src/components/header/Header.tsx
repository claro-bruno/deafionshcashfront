import React, { PropsWithChildren, useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import './header.css'
export default function Header(props: PropsWithChildren) {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)
  function handleLogout() {
    logout()
    navigate('/')
  }
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
          <nav className="flex self-center relative right-3 gap-4 ">
            <NavLink to="/payments" className="headerLink">
              Payments
            </NavLink>
            <NavLink to="/clients" className="headerLink">
              Clients
            </NavLink>
            <NavLink to="/contractors" className="headerLink">
              Contractors
            </NavLink>
            <NavLink to="/jobs" className="headerLink">
              Jobs
            </NavLink>
          </nav>
          <button onClick={handleLogout} className="loginLink">
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
