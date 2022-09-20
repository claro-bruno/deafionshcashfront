export interface TJob {
  id?: number
  contractor: { name: string; id?: number }
  client: { name: string; id?: number }
  value_hour: number
  hours: string
  status: string
  year: string
  month: string
  workedDaysInfos: any[]
}

export interface NewJob {
  id_contractor: number
  id_client: number
  value_hour: number
  hours: number
  monday: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
  sunday: boolean
}
