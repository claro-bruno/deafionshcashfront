import { GearSix } from 'phosphor-react'
import { useState } from 'react'
import Header from '../../components/header/Header'
import MonthFilter from '../../components/listboxes/MonthFilter'
import YearFilter from '../../components/listboxes/YearFilter'
import DayInputsTableLine from './components/DayInputsTableLine'
import { bodyTable, headerTable, months } from './constants'

export interface DaysObj {
  dayNum: number
  weakDayName: string
}

export default function Registration() {
  const [monthName, setMonthName] = useState('January')
  const [yearName, setYearName] = useState('2022')
  const [filterContractor, setFilterContractor] = useState('')

  function tableFilters(item: { name: string; month: string }) {
    const filterByContractor = item.name
      .toLowerCase()
      .includes(filterContractor.toLowerCase())
    const filterByDate = item.month
      .toLowerCase()
      .includes(monthName.toLowerCase())
    return filterByContractor && filterByDate
  }

  function getDaysOfMonth() {
    const getMonthNumberByName = months.indexOf(monthName) + 1
    const date = new Date()
    const days = new Date(date.getFullYear(), getMonthNumberByName, 0).getDate()

    return [...Array(days).keys()].map((i) => i + 1)
  }

  function addWeakDayName() {
    const days = getDaysOfMonth()
    const weakDaysNamed = days.map((day) => {
      const date = new Date(`${yearName}-${monthName}-${day}`)
      return {
        dayNum: day,
        weakDayName: date.toLocaleString('en-us', { weekday: 'narrow' }),
      }
    })
    return weakDaysNamed
  }
  const [fortnightDays, setFortnightDays] = useState<DaysObj[]>(
    addWeakDayName().splice(0, 14),
  )
  function formatFortnightDays(period: string) {
    const fortnight =
      period === '1'
        ? addWeakDayName().splice(0, 14)
        : addWeakDayName().splice(14)

    setFortnightDays(fortnight)
  }

  return (
    <div>
      <Header>
        <div className="relative z-10 left-20 mx-auto flex items-center gap-2">
          <YearFilter setYearName={setYearName} />
          <MonthFilter setMonthName={setMonthName} />
          <input
            onChange={(e) => setFilterContractor(e.target.value)}
            className="inputsDefault mt-[0.2rem] "
            value={filterContractor}
            type="text"
          />
        </div>
      </Header>
      <div>
        <div className="tableContainer flex flex-col overflow-auto mt-4 ml-3">
          <span className="relative flex flex-col gap-1 bottom-1 items-center font-extrabold text-2xl self-center">
            {' '}
            {`${yearName} ${monthName}`}
            <select
              onChange={(e) => formatFortnightDays(e.target.value)}
              className="rounded text-lg"
            >
              <option value="1">Forthnight 1</option>
              <option value="2">Forthnight 2</option>
            </select>
          </span>
          <table className="table">
            <thead className="tableHead ">
              <tr>
                {headerTable.map((item, index) => {
                  if (item === 'Month') {
                    return (
                      <th key={index} className="flex gap-1 justify-center">
                        {fortnightDays.map((day, index) => (
                          <th
                            key={day.dayNum}
                            className=" w-[1.529rem] py-4 flex flex-col items-center "
                          >
                            <span>{day.dayNum}</span>
                            <span className="text-xs">{day.weakDayName}</span>
                          </th>
                        ))}
                      </th>
                    )
                  }
                  return (
                    <th scope="col" key={index} className=" relative  ">
                      {item}
                    </th>
                  )
                })}
                <th>
                  <GearSix className="relative left-3" size={24} />
                </th>
              </tr>
            </thead>
            <tbody>
              {bodyTable.map((contractor) => {
                if (tableFilters(contractor)) {
                  return (
                    <tr className="bg-white border-b ">
                      <td className="tableLine relative flex flex-wrap max-w-[9rem]">
                        {contractor.name}
                      </td>
                      <td className="">{contractor.client}</td>
                      <DayInputsTableLine
                        contractor={contractor}
                        fortnightDays={fortnightDays}
                      />
                      <td className="tableLine">{contractor.hours}</td>
                      <td className="tableLine">{contractor.pHour}</td>
                      <td className="tableLine">
                        {Number(contractor.pHour) * Number(contractor.hours)}
                      </td>
                      <td className=" tableLine">{''} </td>
                    </tr>
                  )
                } else {
                  return []
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
