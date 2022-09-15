export interface TJob {
  id?: number
  contractor: { name: string; id?: number }
  client: { name: string; id?: number }
  pHour: string
  hours: string
  status: boolean
  year: string
  month: string
  workedDaysInfos: any[]
}
