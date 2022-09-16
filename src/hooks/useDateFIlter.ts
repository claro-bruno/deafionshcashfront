import { useState } from 'react'

type DateFilterProps = {
  contractor: { name: string }
  month: string
  year: string
}
export function useDateFilter() {
  const [filterContractor, setFilterContractor] = useState('')
  const [monthName, setMonthName] = useState('January')
  const [yearName, setYearName] = useState('2022')

  function handleFilters(obj: DateFilterProps) {
    const filterByContractor = obj.contractor.name
      .toLowerCase()
      .includes(filterContractor.toLowerCase())
    const filterByMonth = obj.month
      .toLowerCase()
      .includes(monthName.toLowerCase())
    const filterByYear = obj.year.includes(yearName.toLowerCase())
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
