export interface TJob {
  id?: number
  contractor: {
    last_name: string
    first_name: string
    middle_name?: string
    id?: number
  }
  client: { name: string; id?: number }
  status: string
  total: number
  total_hours: number
  quarter: [
    {
      month: string
      status: string
      total: number
      total_hours: number
      year: number
      taxes: number
      shirts: number
      value_hour: number
      appointment: { date: string; value: number }[]
    },
    {
      month: string
      status: string
      total: number
      total_hours: number
      year: number
      taxes: number
      shirts: number
      value_hour: number
      appointment: { date: string; value: number }[]
    },
  ]
}

export interface NewJob {
  id_contractor: number
  id_client: number
  value_hour: number
  taxes: number
  shirts: number
  hours: number
  monday: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
  sunday: boolean
}
