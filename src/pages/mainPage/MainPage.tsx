import { Circle } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import YearFilter from '../../components/listboxes/YearFilter'
import MonthFilter from '../../components/listboxes/MonthFilter'

import { bodyTable, headerTable } from './constants'

export default function MainPage() {
  const [monthName, setMonthName] = useState('')
  const [yearName, setYearName] = useState('')
  const [filterContractor, setFilterContractor] = useState('')
  const [globalRevenue, setGlobalRevenue] = useState({ quinzena1: '', quinzena2: '', total: '' })

  function setRevenue() {
    const revenue: { type: string, period: string, value: string }[] = bodyTable
      .filter(item => item.month === monthName.toLowerCase())
      .map(item => item.payments)
      .flat()

    const quinzena1 = Number(revenue
      .filter(item => item.period === 'quinzena1')
      .reduce((acc, curr) => acc + Number(curr.value), 0))

    const quinzena2 = Number(revenue
      .filter(item => item.period === 'quinzena2')
      .reduce((acc, curr) => acc + Number(curr.value), 0))

    const total = (quinzena1 + quinzena2).toFixed(2)

    setGlobalRevenue({
      quinzena1: quinzena1.toFixed(2),
      quinzena2: quinzena2.toFixed(2),
      total
    })
  }
  useEffect(() => {
    setRevenue()
  }, [monthName])
  return (
    <div className='flex flex-col'>
      <Header>
        <div className='relative left-20 ml-6 flex items-center gap-2'>
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
      <div className='mx-auto flex gap-2 items-center font-extrabold text-2xl'>
       <div> {yearName}</div>
       <div> {monthName}</div>
      </div>
      <main className='min-h-screen flex  bg-gray-100 '>
        <div className='w-[80%]'>
          <div className="overflow-x-auto mt-7 ml-3">
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
                  if (item.month === monthName.toLowerCase() && item.name.includes(filterContractor)) {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <Circle
                            weight="fill"
                            size={15}
                            color={item.status === "active" ? "green" : "gray"} />
                        </th>
                        <td className="py-4 px-6">
                          {item.name}
                        </td>
                        {item.payments.map((payment) => (
                          <>
                            <td className="py-4 px-6">
                              {payment.value}
                            </td>
                            <td className="py-4 px-6">
                              {payment.type}
                            </td>
                          </>
                        ))}
                        <td className="py-4 px-6">
                          {item.payments
                            .reduce((acc, curr) => acc + Number(curr.value), 0)
                            .toFixed(2)
                          }
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
        <div className='flex flex-col items-center '>
          <h1 className='text-2xl w-[20vw] text-center  font-bold text-zinc-700'>Revenue</h1>
          <div className='flex flex-col gap-8 fixed right-2 mt-8'>
            <div className='bg-gray-50 shadow-md flex items-center gap-2 flex-col rounded h-20 w-[18vw] py-2'>
              Quinzena 1
              <strong className=''>
                $ {globalRevenue.quinzena1}
              </strong>
            </div>
            <div className='bg-gray-50 shadow-md flex items-center gap-2 flex-col rounded h-20 w-[18vw] py-2'>
              Quinzena 2
              <strong className=''>
                $ {globalRevenue.quinzena2}
              </strong>
            </div>
            <div className='bg-gray-50 shadow-md flex items-center gap-2 flex-col rounded h-20 w-[18vw] py-2'>
              Total month
              <strong className=''>
                $ {globalRevenue.total}
              </strong>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
