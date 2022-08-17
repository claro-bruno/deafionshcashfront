import { GearSix, Plus } from 'phosphor-react'
import { useState } from 'react'
import Header from '../../components/header/Header'
import MonthFilter from '../../components/listboxes/MonthFilter'
import YearFilter from '../../components/listboxes/YearFilter'
import NewJob from '../../components/modals/NewJob'
import useModal from '../../hooks/useModal'
import DayInputsTableLine from './components/DayInputsTableLine'
import { bodyTable, headerTable, months } from './constants'

export interface DaysObj {
  dayNum: number
  weakDayName: string
}

export default function Job() {
  const [monthName, setMonthName] = useState('January')
  const [yearName, setYearName] = useState('2022')
  const [filterContractor, setFilterContractor] = useState('')
  const { closeModal, isModalOpen } = useModal()
  const [currentInputValue, setCurrentInputValue] = useState('')

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
  const [fortnightDays, setFortnightDays] = useState<DaysObj[]>(
    addWeakDayName().splice(0, 15),
  )
  function formatFortnightDays(period: string) {
    const fortnight =
      period === '1'
        ? addWeakDayName().splice(0, 15)
        : addWeakDayName().splice(15)

    setFortnightDays(fortnight)
  }
  console.log('renderizei')

  return (
    <div>
      <Header>
        <div className="relative z-10 left-24 mx-auto flex items-center gap-2">
          <YearFilter setYearName={setYearName} />
          <MonthFilter setMonthName={setMonthName} />
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
            <select
              onChange={(e) => formatFortnightDays(e.target.value)}
              className="rounded py-1 bg-transparent px-2 outline-brand3 text-sm border border-brand3"
            >
              <option value="1">Forthnight 1</option>
              <option value="2">Forthnight 2</option>
            </select>
          </span>
          <button
            type="button"
            onClick={closeModal}
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
                    <th scope="col" key={index} className=" first:pl-6 ">
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
                    <tr key={contractor.id} className="bg-white border-b ">
                      <td className="tableLine relative flex flex-wrap max-w-[9rem]">
                        {contractor.contractor}
                      </td>
                      <td className="">{contractor.client}</td>

                      <DayInputsTableLine
                        currentInputValue={currentInputValue}
                        setCurrentInputValue={setCurrentInputValue}
                        contractor={contractor}
                        fortnightDays={fortnightDays}
                      />

                      <td className="tableLine">{contractor.hours}</td>
                      <td className="tableLine relative right-5">
                        $ {contractor.pHour}
                      </td>
                      <td className="tableLine relative right-4">
                        $ {Number(contractor.pHour) * Number(contractor.hours)}
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
      <NewJob
        tableDate={{ monthName, yearName }}
        users={bodyTable}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        setCurrentInputValue={setCurrentInputValue}
      />
    </div>
  )
}
