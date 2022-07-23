import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import MonthFilter from '../../components/listboxes/MonthFilter'
import { bodyTable, headerTable } from './constants'

export default function Contractor() {
  const { id } = useParams()

  const [filterCompany, setFilterCompany] = useState('')
  const [monthName, setMonthName] = useState('')
  const [stateFiltred, setStateFiltred] = useState<any[]>([])

  const tableFilters = (item: {
    id: number;
    date: Date;
    workedHours: string;
    client: string;
    hourlyPay: string;
  }) => item.client
    .toLowerCase()
    .includes(filterCompany.toLowerCase()) &&
    item.date.toLocaleString('default', { month: 'long' })
      .toLowerCase()
      .includes(monthName.toLowerCase())

  useEffect(() => {
    const teste = bodyTable.map(item => {
      if (tableFilters(item)) {
        return (Number(item.hourlyPay) * Number(item.workedHours)).toFixed(2)
      }
      return 0
    })
    setStateFiltred(teste)
  }, [filterCompany, monthName])
  console.log(stateFiltred);

  return (
    <div className='flex flex-col'>
      <Header>
        <div className='relative left-20 ml-6 flex items-center gap-2'>
          <MonthFilter setMonthName={setMonthName} />
          <input
            onChange={(e) => setFilterCompany(e.target.value)}
            className='inpuntsDefault mt-[0.2rem] '
            value={filterCompany}
            type="text"
          />
        </div>
      </Header>
      <main className='flex flex-col'>
        <div>
          user infos
        </div>
        <div className='flex gap-4'>
          <table className=" text-sm w-full  text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {headerTable.map((item, index) => (
                  <th
                    scope="col"
                    key={index}
                    className="py-3 px-6">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyTable.map((item) => {
                if (tableFilters(item)) {
                  return (
                    <tr
                      key={item.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.date.toDateString()}
                      </th>
                      <td className="py-4 px-6">
                        {item.client}
                      </td>
                      <td className="py-4 px-6">
                        {item.workedHours}
                      </td>
                      <td className="py-4 px-6">
                        ${item.hourlyPay}
                      </td>
                    </tr>
                  )
                } else {
                  return []
                }
              })}
            </tbody>
          </table>
          <article className='w-[20%] flex flex-col gap-8 items-center'>
            <div className='bg-pink-400 w-full text-center rounded'>
              <strong>Payment</strong>
              <div className='flex justify-center gap-2'>
                <div>
                  <span></span>
                  $valor
                </div>
                <div>
                  <span></span>
                  $valor
                </div>
                <div>
                  <span></span>
                  $valor
                </div>
              </div>
            </div>
            <div className='bg-green-400 w-full text-center rounded'>
              <strong>Worked Hours</strong>
              <div className='flex justify-center gap-2'>
                <div>
                  <span></span>
                  hoursh
                </div>
                <div>
                  <span></span>
                  hoursh
                </div>
                <div>
                  <span></span>
                  hoursh
                </div>
              </div>
            </div>

          </article>
        </div>
      </main>
    </div>
  )
}
