import {
  Article,
  Bank,
  Buildings,
  CurrencyDollar,
  SuitcaseSimple,
  Ticket,
  UserList
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import Header from '../../components/header/Header'
import { AuthContext } from '../../context/AuthProvider'
import useModal from '../../hooks/useModal'
import ChangeModalPassword from './components/ChangeModalPassword'
import './home.css'

export default function Home() {
  const access = useContextSelector(AuthContext, (context) => context.access)
  const { isModalOpen, switchModalView } = useModal()
  return (
    <div className="flex  flex-col">
      <Header />
      <main className="min-h-screen flex justify-center items-center ">
        <nav className="flex flex-col gap-6 items-center justify-center relative bottom-14 ">
          {access === 'ADMIN' && (
            <>
              <div className="flex gap-8">
                <NavLink to={'/contractors'} className="home-cards group ">
                  <span className="card-hover">
                    {' '}
                    <UserList size={65} />
                  </span>
                  <h2 className="card-hover">Contractors</h2>
                </NavLink>
                <NavLink to={'/clients'} className="home-cards group ">
                  <span className="card-hover">
                    <Buildings size={65} />
                  </span>
                  <h2 className="card-hover">Clients</h2>
                </NavLink>
                <NavLink to={'/jobs'} className="home-cards group ">
                  <span className="card-hover">
                    <SuitcaseSimple size={65} />
                  </span>
                  <h2 className="card-hover">Jobs</h2>
                </NavLink>
              </div>
              <div className="flex gap-8">
                <NavLink to={'/tickets'} className="home-cards group ">
                  <span className="card-hover">
                    {' '}
                    <Ticket size={65} />
                  </span>
                  <h2 className="card-hover">Tickets</h2>
                </NavLink>
                <NavLink to={'/payments'} className="home-cards group ">
                  <span className="card-hover">
                    <CurrencyDollar size={65} />
                  </span>
                  <h2 className="card-hover">Payments</h2>
                </NavLink>
                <NavLink to={'/reports'} className="home-cards group ">
                  <span className="card-hover">
                    {' '}
                    <Bank size={65} />
                  </span>
                  <h2 className="card-hover">Financial Reports</h2>
                </NavLink>
              </div>
            </>
          )}
          {access === 'CONTRACTOR' && (
            <div className="flex gap-8">
              <NavLink to={'/clients'} className="home-cards group ">
                <span className="card-hover">
                  <Buildings size={65} />
                </span>
                <h2 className="card-hover">Clients</h2>
              </NavLink>
              <NavLink to={'/contractors/1'} className="home-cards group ">
                <span className="card-hover">
                  <CurrencyDollar size={65} />
                </span>
                <h2 className="card-hover">Balance</h2>
              </NavLink>
              <NavLink to={'/register/terms'} className="home-cards group ">
                <span className="card-hover">
                  <Article size={65} />
                </span>
                <h2 className="card-hover">Terms and Conditions</h2>
              </NavLink>
            </div>
          )}
        </nav>
      </main>
      <ChangeModalPassword
        isModalOpen={false}
        switchModalView={switchModalView}
      />
    </div>
  )
}
