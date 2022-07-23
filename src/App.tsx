import { Route, Routes } from "react-router-dom"
import Companies from "./pages/company/Companies"
import Contractor from "./pages/contractor/Contractor"
import Login from "./pages/login/Login"
import MainPage from "./pages/mainPage/MainPage"
import Register from "./pages/register/Register"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/contractor"  >
        <Route path=":id" element={<Contractor />} />
      </Route>

    </Routes>
  )
}

export default App
