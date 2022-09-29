export type NewClient = {
  id?: number
  name: string
  start: string
  end: string
  monday: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
  sunday: boolean
}

export type Client = {
  id?: number
  name: string
  start: string
  end: string
  monday: boolean
  status: string
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
  sunday: boolean
}

export type Clients = Client[]
