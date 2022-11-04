export type Payment = {
  fk_id_contractor: number
  name: string
  status: string
  month: string
  year: number
  taxes: number
  shirts: number
  payments: {
    method: string
    identifier: string
    quarter: number
    value: number
    taxes_job: number
    shirts_job: number
  }[]
}
