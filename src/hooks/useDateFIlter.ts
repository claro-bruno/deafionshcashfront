import { useState } from 'react'

type HandleFiltersParams = {
  month?: string
  year?: number
  contractor: { last_name: string; first_name: string }
  quarter: { month: string; year: number }[]
}
export function useDateFilter() {
  const [filterContractor, setFilterContractor] = useState('')
  const [monthName, setMonthName] = useState('October')
  const [yearName, setYearName] = useState('2022')

  function handleFilters(obj: HandleFiltersParams) {
    const filterByContractor =
      `${obj.contractor.first_name} ${obj.contractor.last_name}`
        .toLowerCase()
        .includes(filterContractor.toLowerCase())
    const filterByMonth =
      obj.month?.toLowerCase().includes(monthName.toLowerCase()) ||
      obj.quarter[0].month.toLowerCase().includes(monthName.toLowerCase())
    const filterByYear =
      obj.year ??
      obj.quarter[0].year.toString().includes(yearName.toLowerCase())
    return filterByContractor && filterByMonth && filterByYear
  }

  return {
    handleFilters,
    setFilterContractor,
    setMonthName,
    setYearName,
    monthName,
    yearName,
    filterContractor,
  }
}
