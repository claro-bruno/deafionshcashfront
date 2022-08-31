import { ReactNode } from 'react'

export type User = {
  role?: string
  token?: string
}

export interface IAuthContext extends User {
  authenticate: (username: string, password: string) => Promise<void>
  logout: () => void
}

export type AuthProviderType = { children: ReactNode }
