export type Payment = {
  id: number
  contractor: {
    name: string
    id?: number
  }
  status: string
  month: string
  year: number
  payments: {
    type: string
    identifier: string
    quarter: number
    value: string
  }[]
}
