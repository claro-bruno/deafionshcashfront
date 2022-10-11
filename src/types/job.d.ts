export interface TJob {
  id?: number
  contractor: { last_name: string; first_name: string; id?: number }
  client: { name: string; id?: number }
  status: string
  quarter: [
    {
      total: number
      total_hours: number
      month: string
      status: string
      year: number
      taxes: number
      shirts: number
      value_hour: number
      appointment: { date: string; value: number }[]
    },
    {
      total: number
      total_hours: number
      month: string
      status: string
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
