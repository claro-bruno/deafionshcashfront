import { GearSix } from 'phosphor-react'
import { useState } from 'react'
import Header from '../../components/header/Header'
import {
  monthsListbox,
  yearsListBox,
} from '../../components/listboxes/constants'
import SelectFilter from '../../components/listboxes/SelectFilter'
import useFormate from '../../hooks/useFormate'
import { ContractorPaymentInfos } from '../../types/contractor'
import PaymentsInfos from './components/PaymentsInfos'
import { bodyTable, getLastDayOfMonth, headerTable } from './constants'

export default function Payments() {
  const [monthName, setMonthName] = useState('January')
  const [yearName, setYearName] = useState('2022')
  const [filterContractor, setFilterContractor] = useState('')
  const { formatMoney } = useFormate()

  const outlay: { type: string; period: string; value: string }[] = bodyTable
    .filter((item) => item.month === monthName.toLowerCase())
    .map((item) => item.payments)
    .flat()

  function forthnight(period: string) {
    return Number(
      outlay
        .filter((item) => item.period === period)
        .reduce((acc, curr) => acc + Number(curr.value), 0),
    )
  }

  const fortnight1Formated = formatMoney(forthnight('forthnight1'))
  const fortnight2Formated = formatMoney(forthnight('forthnight2'))
  const total = forthnight('forthnight1') + forthnight('forthnight2')
  const totalFormatted = formatMoney(total)

  function tableFilters(item: ContractorPaymentInfos) {
    const filterByContractor = item.contractor.name
      .toLowerCase()
      .includes(filterContractor.toLowerCase())
    const filterByDate = item.month.includes(monthName.toLowerCase())
    return filterByContractor && filterByDate
  }

  return (
    <div className="flex flex-col">
      <Header>
        <div className="relative left-24 mx-auto flex items-center gap-2">
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

      <main className="min-h-screen flex bg-gray-100 ">
        <div className=" absolute text-zinc-700 left-[45%] right-full flex gap-2 font-extrabold text-xl">
          <h2>{yearName}</h2>
          <h2>{monthName}</h2>
        </div>
        <div className="w-full ml-2">
          <div className="tableContainer overflow-auto mt-8">
            <table className="table ">
              <thead className="tableHead">
                <tr>
                  {headerTable.map((item, index) => {
                    if (item === 'quinzena 2') {
                      return (
                        <th scope="col" key={index} className="tableLine">
                          {`16 - ${getLastDayOfMonth(monthName)}`}
                        </th>
                      )
                    }
                    return (
                      <th scope="col" key={index} className="tableLine">
                        {item}
                      </th>
                    )
                  })}
                  <th scope="col" className="tableLine">
                    <GearSix className="relative left-3" size={24} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {bodyTable.map((payments: ContractorPaymentInfos) => {
                  if (tableFilters(payments)) {
                    return <PaymentsInfos {...payments} />
                  } else {
                    return []
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col items-center  ">
          <h1 className="text-2xl w-[10vw] relative right-4 text-center  font-bold text-zinc-700">
            Outlay
          </h1>
          <article className="flex flex-col gap-8 fixed right-4 mt-8">
            <div className="bg-gray-50 shadow-md flex items-center gap-2 flex-col rounded h-20 w-[10vw] py-2">
              Forthnight 1<strong className="">$ {fortnight1Formated}</strong>
            </div>
            <div className="bg-gray-50 shadow-md flex items-center gap-2 flex-col rounded h-20 w-[10vw] py-2">
              Forthnight 2<strong className="">$ {fortnight2Formated}</strong>
            </div>
            <div className="bg-gray-50 shadow-md flex items-center gap-2 flex-col rounded h-20 w-[10vw] py-2">
              Total month
              <strong className="">$ {totalFormatted}</strong>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
