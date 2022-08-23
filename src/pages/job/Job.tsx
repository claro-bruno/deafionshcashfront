import { GearSix, Plus } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import {
  fortnightListBox,
  monthsListbox,
  yearsListBox,
} from '../../components/listboxes/constants'
import SelectFilter from '../../components/listboxes/SelectFilter'
import NewJob from './components/NewJob'
import { jobsContext } from '../../context/JobContextProvider'
import { headerTable, months } from './constants'
import { useParams } from 'react-router-dom'
import JobTableLine from './components/JobTableLine'

export interface DaysObj {
  dayNum: number
  weakDayName: string
}

export default function Job() {
  const [monthName, setMonthName] = useState('January')
  const [yearName, setYearName] = useState('2022')
  const [filterContractor, setFilterContractor] = useState('')
  const [fortnightDays, setFortnightDays] = useState<DaysObj[]>(
    addWeakDayName().splice(0, 15),
  )
  const { handleCloseModal, users, handleSetUsers } = useContext(jobsContext)
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    if (id) {
      const userFilteredById = users.filter((user) => user.id === Number(id))
      handleSetUsers(userFilteredById)
    }
  }, [])

  function tableFilters(item: { contractor: string; month: string }) {
    const filterByContractor = item.contractor
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

  function formatFortnightDays(period: string) {
    const fortnight =
      period === 'Quinzena 1'
        ? addWeakDayName().splice(0, 15)
        : addWeakDayName().splice(15)

    setFortnightDays(fortnight)
  }
  console.log('mudei')

  return (
    <div>
      <Header>
        <div className="relative z-10 left-24 mx-auto flex items-center gap-2">
          <SelectFilter setFilter={setYearName} selectOptions={yearsListBox} />
          <SelectFilter
            setFilter={setMonthName}
            selectOptions={monthsListbox}
            listCSS="w-[8rem]"
          />
          <input
            placeholder="Ex: John"
            onChange={(e) => setFilterContractor(e.target.value)}
            className="inputsDefault mt-[0.2rem] "
            value={filterContractor}
            type="text"
          />
        </div>
      </Header>
      <div>
        <div className="tableContainer items-center flex flex-col overflow-auto ">
          <span className="relative h-10 flex gap-2 my-1 items-center font-extrabold text-xl self-center">
            {`${yearName} ${monthName}`}

            <SelectFilter
              setFilter={formatFortnightDays}
              selectOptions={fortnightListBox}
              listCSS=" w-[8rem]"
            />
          </span>
          <button
            type="button"
            onClick={handleCloseModal}
            className="w-10 absolute left-[93%] mt-2  flex justify-center  px-2 buttonStyle1"
          >
            <Plus size={20} color={'white'} />
          </button>
          <table className="table">
            <thead className="tableHead  ">
              <tr className="">
                {headerTable.map((item, index) => {
                  if (item === 'Month') {
                    return (
                      <th key={index} className="flex gap-1 justify-center">
                        {fortnightDays.map((day) => (
                          <p
                            key={day.dayNum}
                            className=" w-[1.529rem] py-4 flex flex-col items-center "
                          >
                            <span>{day.dayNum}</span>
                            <span className="text-xs">{day.weakDayName}</span>
                          </p>
                        ))}
                      </th>
                    )
                  }
                  return (
                    <th
                      scope="col"
                      key={index}
                      className=" first:pl-6 last:text-pink-500 "
                    >
                      {item}
                    </th>
                  )
                })}
                <th>
                  <GearSix size={24} />
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((contractor) => {
                if (tableFilters(contractor)) {
                  return (
                    <JobTableLine
                      contractor={contractor}
                      fortnightDays={fortnightDays}
                    />
                  )
                } else {
                  return []
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
      <NewJob tableDate={{ monthName, yearName }} />
    </div>
  )
}
