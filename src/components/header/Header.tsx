import { SignOut } from 'phosphor-react'
import { PropsWithChildren } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { AuthContext } from '../../context/AuthProvider'
import Logo from '../../assets/globalLogo.png'
import './header.css'
export default function Header(props: PropsWithChildren) {
  const navigate = useNavigate()
  const {
    logout,
    access,
    contractor_id: id,
  } = useContextSelector(AuthContext, (context) => context)
  const location = useLocation()

  function handleLogout() {
    logout()
    navigate('/')
  }
  return (
    <header className=" p-2 flex justify-between bg-brand">
      <div className="">
        <img
          className="h-16"
          src={Logo}
          alt="global janitorial services logo"
        />
      </div>
      {props.children}
      {access ? (
        <>
          <nav className="flex self-center relative right-3 gap-4 ">
            <NavLink to="/home" className="headerLink">
              Home
            </NavLink>
            {!location.pathname.includes('/reports') && (
              <NavLink to="/clients" className="headerLink">
                Clients
              </NavLink>
            )}
            {access === 'CONTRACTOR' ? (
              <NavLink to={`/contractors/${id}`} className="headerLink">
                Balance
              </NavLink>
            ) : access === 'ADMIN' && location.pathname.includes('/reports') ? (
              <>
                <NavLink to="/reports" className="headerLink">
                  Reports
                </NavLink>
                <NavLink to="/reports/months" className="headerLink">
                  Rep.Months
                </NavLink>
                <NavLink to="/reports/invoices" className="headerLink">
                  Invoices
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/contractors" className="headerLink">
                  Contractors
                </NavLink>
                <NavLink to="/payments" className="headerLink">
                  Payments
                </NavLink>
                <NavLink to="/jobs" className="headerLink">
                  Jobs
                </NavLink>
              </>
            )}
          </nav>
          <button title="Logout" onClick={handleLogout} className="loginLink">
            <SignOut size={22} />
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
