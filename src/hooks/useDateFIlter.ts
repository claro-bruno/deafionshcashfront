import { useState } from 'react'

type DateFilterProps = {
  contractor: { name: string }
  quarters: { month: string; year: number }[]
}
export function useDateFilter() {
  const [filterContractor, setFilterContractor] = useState('')
  const [monthName, setMonthName] = useState('January')
  const [yearName, setYearName] = useState(2022)

  function handleFilters(obj: DateFilterProps) {
    const filterByContractor = obj.contractor.name
      .toLowerCase()
      .includes(filterContractor.toLowerCase())
    const filterByMonth = obj.quarters[0].month
      .toLowerCase()
      .includes(monthName.toLowerCase())
    const filterByYear = obj.quarters[0].year === yearName
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
