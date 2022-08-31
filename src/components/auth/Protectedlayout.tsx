import { ReactNode, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const { token, role } = useContext(AuthContext)
  const navigate = useNavigate()
  if (!token || !role) {
    return navigate('/login')
  }
  return children
}
