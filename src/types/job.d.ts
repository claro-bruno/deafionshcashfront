export interface TJob {
  id?: number
  contractor: { name: string; id?: number }
  client: { name: string; id?: number }
  value_hours: string
  hours: string
  status: string
  year: string
  month: string
  workedDaysInfos: any[]
}
