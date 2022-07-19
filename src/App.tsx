import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import MainPage from "./pages/mainPage/MainPage"
import Register from "./pages/register/Register"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main" element={<MainPage />} />

    </Routes>
  )
}

export default App
