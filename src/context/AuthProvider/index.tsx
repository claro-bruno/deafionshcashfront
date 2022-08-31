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
  useEffect(() => {
    const user = getUserFromLocalStorage()
    if (user) {
      setUser(user)
    }
  }, [])
  async function authenticate(username: string, password: string) {
    const response = (await axiosLogin({
      username,
      password,
    })) as unknown as User
    const payload = { token: response.token, role: response.role }
    setUser(payload)
    setUserToLocalStorage(payload)
  }
  function logout() {
    setUser(undefined)
    removeUserFromLocalStorage()
  }
  const valueToProvide = { ...user, authenticate, logout }
  return (
    <AuthContext.Provider value={valueToProvide}>
      {children}
    </AuthContext.Provider>
  )
}
