import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { AuthContext } from '../../context/AuthProvider'
import { getUserFromLocalStorage } from '../../context/AuthProvider/utils'

export default function ProtectedLayout({
  children,
}: {
  children: JSX.Element
}) {
  const { token, access, saveUser } = useContextSelector(
    AuthContext,
    (context) => context,
  )
  const navigate = useNavigate()
  const location = useLocation()
  const urlsProtected = ['/jobs', '/payments', '/contractors']
  useEffect(() => {
    const user = getUserFromLocalStorage()
    if (!user?.token || !user?.access) {
      navigate('/login')
      console.log('voce nao tem acesso')
    }
    if (user?.token && user?.access) {
      saveUser(user)
    }
  }, [navigate, saveUser])
  useEffect(() => {
    if (urlsProtected.includes(location.pathname) && access === 'CONTRACTOR') {
      navigate('/home')
      console.log('NAO TENHO ACESSO')
    }
  }, [location, access, navigate])

  if (!token || !access) {
    return null
  }
  return children
}
