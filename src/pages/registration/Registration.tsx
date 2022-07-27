import React, { useState } from 'react'
import Header from '../../components/header/Header'
import MonthFilter from '../../components/listboxes/MonthFilter'
import YearFilter from '../../components/listboxes/YearFilter'
import { bodyTable, headerTable, months } from './constants'

export default function Registration() {
  const [monthName, setMonthName] = useState('')
  const [yearName, setYearName] = useState('')
  const [filterContractor, setFilterContractor] = useState('')
  const [boardValue, setBoardValue] = useState('0')

  function tableFilters(item: { name: string, month: string }) {
    const filterByContractor = item.name.toLowerCase().includes(filterContractor.toLowerCase())
    const filterByDate = item.month.toLowerCase().includes(monthName.toLowerCase())
    return filterByContractor && filterByDate
  }

  function getDaysOfMonth() {
    const getMonthNumberByName = months.indexOf(monthName) + 1
    const date = new Date()
    const days = new Date(date.getFullYear(), getMonthNumberByName, 0).getDate()

    return [...Array(days).keys()].map(i => i + 1);
  }
  function addWeakDayName() {
    const days = getDaysOfMonth()
    const weakDaysNamed = days.map(day => {
      const date = new Date(`${yearName}-${monthName}-${day}`)
      return {
        dayNum: day,
        weakDayName: date.toLocaleString('en-us', { weekday: 'narrow' })
      }
    })
    return weakDaysNamed
  }
  console.log(addWeakDayName());
  return (
    <div>
      <Header>
        <div className='relative z-10 left-20 mx-auto flex items-center gap-2'>
          <YearFilter setYearName={setYearName} />
          <MonthFilter setMonthName={setMonthName} />
          <input
            onChange={(e) => setFilterContractor(e.target.value)}
            className='inpuntsDefault mt-[0.2rem] '
            value={filterContractor}
            type="text"
          />
        </div>
      </Header>
      <div>
        <div className="tableContainer overflow-auto mt-7 ml-3">
          {`${yearName} ${monthName}`}
          <table className="table">
            <thead className="tableHead">
              <tr>
                {headerTable.map((item, index) => {
                  if (item === 'Month') {
                    return (
                      <div className='flex items-center relative top-4  flex-col'>
                        <th
                          className='flex gap-4'
                          key={index}
                        >
                          {addWeakDayName().map((day, index) => (
                            <div className='relative gap-1 left-2 flex flex-col items-center justify-center'>
                              <span
                                key={index}
                              >
                                {day.dayNum}
                              </span>
                              <span
                                className='text-xs'
                                key={index}
                              >
                                {day.weakDayName}
                              </span>
                            </div>
                          )
                          )}
                        </th>
                      </div>
                    )
                  }
                  return (
                    <th
                      scope="col"
                      key={index}
                      className="tableLine ">
                      {item}
                    </th>
                  )
                })}
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
                      <td className="tableLine">
                        {item.client
                        }
                      </td>
                      <td className="flex relative top-2 left-3 gap-1">
                        {getDaysOfMonth().map((day) => (
                          <input
                            onChange={(e) => setBoardValue(e.target.value)}
                            type="text"
                            maxLength={3}
                            className='w-[1.529rem] outline-none ring-1 ring-transparent focus:ring-brand text-center h-10 border text-xs '
                            value={boardValue}
                          />
                        ))
                        }
                      </td>
                      <td className="tableLine">
                        {item.hours
                        }
                      </td>
                      <td className="tableLine">
                        {item.pHour
                        }
                      </td>
                      <td className="tableLine">
                        {Number(item.pHour) * Number(item.hours)}
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
