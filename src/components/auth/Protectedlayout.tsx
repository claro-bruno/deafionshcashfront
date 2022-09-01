import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

export default function ProtectedLayout({
  children,
}: {
  children: JSX.Element
}) {
  const { token, access } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token || !access) {
      navigate('/login')
      console.log('voce nao tem acesso')
    }
  }, [])
  if (!token || !access) {
    return null
  }
  return children
}
