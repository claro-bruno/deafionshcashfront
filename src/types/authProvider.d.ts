import { ReactNode } from 'react'

export type User = {
  access?: string
  token?: string
  reset?: number
}

export interface IAuthContext extends User {
  authenticate: (username: string, password: string) => Promise<any>
  logout: () => void
  saveUser: (user: User) => void
  checkUserInLocalStorage: () => boolean
}

export type AuthProviderType = { children: ReactNode }
