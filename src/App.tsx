import { Route, Routes } from 'react-router-dom'
import ProtectedLayout from './components/auth/Protectedlayout'
import JobContextProvider from './context/JobProvider/JobContextProvider'
import Client from './pages/client/Client'
import Contractor from './pages/contractor/Contractor'
import Contractors from './pages/contractor/Contractors'
import Home from './pages/home/Home'
import Job from './pages/job/Jobs'
import Login from './pages/login/Login'
import Payments from './pages/payments/Payments'
import Register from './pages/register/Register'
import Terms from './pages/register/Terms'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedLayout>
            <Home />
          </ProtectedLayout>
        }
      />
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
            <ProtectedLayout>
              <JobContextProvider>
                <Job />
              </JobContextProvider>
            </ProtectedLayout>
          }
        />
        <Route
          path=":id"
          element={
            <ProtectedLayout>
              <JobContextProvider>
                <Job />
              </JobContextProvider>
            </ProtectedLayout>
          }
        />
      </Route>
      <Route
        path="/clients"
        element={
          <ProtectedLayout>
            <Client />
          </ProtectedLayout>
        }
      >
        <Route path=":name" element={<Client />} />
      </Route>
      <Route path="/contractors">
        <Route
          index
          element={
            <ProtectedLayout>
              <Contractors />
            </ProtectedLayout>
          }
        />
        <Route
          path=":id"
          element={
            <ProtectedLayout>
              <Contractor />
            </ProtectedLayout>
          }
        />
      </Route>
      <Route path="/reports">
        <Route
          index
          element={
            <ProtectedLayout>
              <Contractors />
            </ProtectedLayout>
          }
        />
        <Route
          path="invoices"
          element={
            <ProtectedLayout>
              <Contractor />
            </ProtectedLayout>
          }
        />
        <Route
          path="months"
          element={
            <ProtectedLayout>
              <Contractor />
            </ProtectedLayout>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
