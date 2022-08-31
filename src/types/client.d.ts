export type NewClient = {
  name: string
  start: string
  end: string
  Monday: boolean
  Tuesday: boolean
  Wednesday: boolean
  Thursday: boolean
  Friday: boolean
  Saturday: boolean
  Sunday: boolean
}

export type Client = {
  id: string
  status: string
  name: string
  start: string
  end: string
  daysWorked: string[]
}

export type Clients = Client[]
