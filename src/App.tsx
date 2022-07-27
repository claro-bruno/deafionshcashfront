import { Route, Routes } from "react-router-dom"
import Companies from "./pages/company/Companies"
import Contractor from "./pages/contractor/Contractor"
import Login from "./pages/login/Login"
import MainPage from "./pages/mainPage/MainPage"
import Register from "./pages/register/Register"
import Terms from "./pages/register/Terms"
import Registration from "./pages/registration/Registration"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" >
        <Route index element={<Register />} />
        <Route path="terms" element={<Terms />} />
      </Route>
      <Route path="/main" element={<MainPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/contractor"  >
        <Route path=":id" element={<Contractor />} />
      </Route>

    </Routes>
  )
}

export default App
