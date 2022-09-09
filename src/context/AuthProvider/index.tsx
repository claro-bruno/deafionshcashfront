import React, { createContext, useEffect, useState } from 'react'
import { axiosLogin } from '../../api/login'
import { IAuthContext, AuthProviderType, User } from '../../types/authProvider'
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  setUserToLocalStorage,
} from './utils'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)
export function AuthProvider({ children }: AuthProviderType) {
  const [user, setUser] = useState<User | null>()

  function checkUserInLocalStorage() {
    const user = getUserFromLocalStorage()
    if (user) {
      setUser(user)
      return true
    }
    return false
  }
  useEffect(() => {
    checkUserInLocalStorage()
  }, [])

  function saveUser(user: User) {
    const payload = { token: user?.token, access: user?.access }
    setUser(payload)
    setUserToLocalStorage(payload)
  }

  async function authenticate(username: string, password: string) {
    return await axiosLogin({
      username,
      password,
    })
  }

  function logout() {
    setUser(null)
    removeUserFromLocalStorage()
  }
  const valueToProvide = {
    ...user,
    authenticate,
    logout,
    saveUser,
    checkUserInLocalStorage,
  }
  return (
    <AuthContext.Provider value={valueToProvide}>
      {children}
    </AuthContext.Provider>
  )
}
