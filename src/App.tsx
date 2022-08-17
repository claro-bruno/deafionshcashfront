import { Route, Routes } from 'react-router-dom'
import Client from './pages/client/Client'
import Contractor from './pages/contractor/Contractor'
import Login from './pages/login/Login'
import MainPage from './pages/mainPage/MainPage'
import Register from './pages/register/Register'
import Terms from './pages/register/Terms'
import Job from './pages/job/Job'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register">
        <Route index element={<Register />} />
        <Route path="terms" element={<Terms />} />
      </Route>
      <Route path="/main" element={<MainPage />} />
      <Route path="/jobs" element={<Job />} />
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
