import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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

  useEffect(() => {
    const user = getUserFromLocalStorage()
    if (!user?.token || !user?.access) {
      navigate('/login')
      console.log('voce nao tem acesso')
    }
    if (user?.token && user?.access) {
      saveUser(user)
    }
  }, [])
  if (!token || !access) {
    return null
  }
  return children
}
