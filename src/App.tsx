import { Route, Routes } from 'react-router-dom'
import ProtectedLayout from './components/auth/Protectedlayout'
import JobContextProvider from './context/JobContextProvider'
import Client from './pages/client/Client'
import Contractor from './pages/contractor/Contractor'
import Contractors from './pages/contractor/Contractors'
import Job from './pages/job/Job'
import Login from './pages/login/Login'
import Payments from './pages/payments/Payments'
import Register from './pages/register/Register'
import Terms from './pages/register/Terms'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register">
        <Route index element={<Register />} />
        <Route path="terms" element={<Terms />} />
      </Route>
      <Route
        path="/payments"
        element={
          <ProtectedLayout>
            <Payments />
          </ProtectedLayout>
        }
      />
      <Route path="/jobs">
        <Route
          index
          element={
            <JobContextProvider>
              <Job />
            </JobContextProvider>
          }
        />
        <Route
          path=":id"
          element={
            <JobContextProvider>
              <Job />
            </JobContextProvider>
          }
        />
      </Route>
      <Route path="/clients" element={<Client />}>
        <Route path=":name" element={<Client />} />
      </Route>
      <Route path="/contractors">
        <Route index element={<Contractors />} />
        <Route path=":id" element={<Contractor />} />
      </Route>
    </Routes>
  )
}

export default App
