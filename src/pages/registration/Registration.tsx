import { GearSix } from 'phosphor-react'
import { useState } from 'react'
import Header from '../../components/header/Header'
import MonthFilter from '../../components/listboxes/MonthFilter'
import YearFilter from '../../components/listboxes/YearFilter'
import { bodyTable, headerTable, months } from './constants'

interface DaysObj {
  dayNum: number
  weakDayName: string
}

export default function Registration() {
  const [monthName, setMonthName] = useState('January')
  const [yearName, setYearName] = useState('2022')
  const [filterContractor, setFilterContractor] = useState('')
  const [boardValue, setBoardValue] = useState('0')

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
            <thead className="tableHead">
              <tr>
                {headerTable.map((item, index) => {
                  if (item === 'Month') {
                    return (
                      <div
                        key={index}
                        className="flex relative left-[20%] self-center"
                      >
                        {fortnightDays.map((day, index) => (
                          <th
                            key={day.dayNum}
                            className=" tableLineDay py-4 flex flex-col items-center justify-center"
                          >
                            <span>{day.dayNum}</span>
                            <span className="text-xs">{day.weakDayName}</span>
                          </th>
                        ))}
                      </div>
                    )
                  }
                  return (
                    <th scope="col" key={index} className="tableLine ">
                      {item}
                    </th>
                  )
                })}
                <th>
                  <GearSix className="relative left-5" size={32} />
                </th>
              </tr>
            </thead>
            <tbody>
              {bodyTable.map((item) => {
                if (tableFilters(item)) {
                  return (
                    <tr className="bg-white border-b ">
                      <td className="tableLine flex flex-wrap max-w-[9rem]">
                        {item.name}
                      </td>
                      <td className="tableLine">{item.client}</td>
                      <td className="flex justify-center relative top-2 left-3 gap-1">
                        {fortnightDays.map((day) => (
                          <input
                            key={day.dayNum}
                            onChange={(e) => setBoardValue(e.target.value)}
                            type="text"
                            maxLength={3}
                            className={`${
                              day.weakDayName === 'S' &&
                              'bg-zinc-500 text-white'
                            } w-[1.529rem] outline-none ring-1 ring-transparent focus:ring-brand text-center h-10 border text-xs `}
                            value={boardValue}
                          />
                        ))}
                      </td>
                      <td className="tableLine">{item.hours}</td>
                      <td className="tableLine">{item.pHour}</td>
                      <td className="tableLine">
                        {Number(item.pHour) * Number(item.hours)}
                      </td>
                      <td className=" flex flex-col justify-around">
                        <button className="border" type="button">
                          Save
                        </button>
                        <button className="border" type="button">
                          Edit
                        </button>
                      </td>
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
