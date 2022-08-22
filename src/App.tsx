import { Route, Routes } from 'react-router-dom'
import JobContextProvider from './context/JobContextProvider'
import Client from './pages/client/Client'
import Contractor from './pages/contractor/Contractor'
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
      <Route path="/payments" element={<Payments />} />
      <Route
        path="/jobs"
        element={
          <JobContextProvider>
            <Job />
          </JobContextProvider>
        }
      >
        <Route path=":id" element={<Payments />} />
      </Route>
      <Route path="/clients" element={<Client />}>
        <Route path=":name" element={<Client />} />
      </Route>
      <Route path="/contractor">
        <Route path=":id" element={<Contractor />} />
      </Route>
    </Routes>
  )
}

export default App
