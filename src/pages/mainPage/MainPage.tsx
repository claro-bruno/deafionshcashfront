import { Circle } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import MonthFilter from '../../components/listboxes/MonthFilter'
import YearFilter from '../../components/listboxes/YearFilter'
import useFormate from '../../hooks/useFormate'
import { bodyTable, headerTable } from './constants'

export default function MainPage() {
  const [monthName, setMonthName] = useState('')
  const [yearName, setYearName] = useState('')
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
  function tableFilters(item: { name: string; month: string }) {
    const filterByContractor = item.name
      .toLowerCase()
      .includes(filterContractor.toLowerCase())
    const filterByDate = item.month.includes(monthName.toLowerCase())
    return filterByContractor && filterByDate
  }

  return (
    <div className="flex flex-col">
      <Header>
        <div className="relative left-20 mx-auto flex items-center gap-2">
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
      <div className="mx-auto flex gap-2 py-1 items-center font-extrabold text-2xl">
        <div> {yearName}</div>
        <div> {monthName}</div>
      </div>
      <main className="min-h-screen flex  bg-gray-100 ">
        <div className="w-[80%]">
          <div className="tableContainer overflow-auto mt-8 ml-3">
            <table className="table">
              <thead className="tableHead">
                <tr>
                  {headerTable.map((item, index) => (
                    <th scope="col" key={index} className="tableLine">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyTable.map((item) => {
                  if (tableFilters(item)) {
                    return (
                      <tr className="bg-white border-b ">
                        <th scope="row" className="tableBodyTh">
                          <Circle
                            weight="fill"
                            size={15}
                            color={item.status === 'active' ? 'green' : 'gray'}
                          />
                        </th>
                        <td className="tableLine flex flex-wrap max-w-[9rem]">
                          <Link to={`/contractor/${item.id}`}>{item.name}</Link>
                        </td>
                        {item.payments.map((payment) => (
                          <>
                            <td className="tableLine">
                              $ {formatMoney(Number(payment.value))}
                            </td>
                            <td className="tableLine">{payment.type}</td>
                          </>
                        ))}
                        <td className="tableLine">
                          ${' '}
                          {formatMoney(
                            item.payments.reduce(
                              (acc, curr) => acc + Number(curr.value),
                              0,
                            ),
                          )}
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
        <div className="flex flex-col items-center ">
          <h1 className="text-2xl w-[20vw] text-center  font-bold text-zinc-700">
            Outlay
          </h1>
          <article className="flex flex-col gap-8 fixed right-2 mt-8">
            <div className="bg-gray-50 shadow-md flex items-center gap-2 flex-col rounded h-20 w-[18vw] py-2">
              Forthnight 1<strong className="">$ {fortnight1Formated}</strong>
            </div>
            <div className="bg-gray-50 shadow-md flex items-center gap-2 flex-col rounded h-20 w-[18vw] py-2">
              Forthnight 2<strong className="">$ {fortnight2Formated}</strong>
            </div>
            <div className="bg-gray-50 shadow-md flex items-center gap-2 flex-col rounded h-20 w-[18vw] py-2">
              Total month
              <strong className="">$ {totalFormatted}</strong>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
