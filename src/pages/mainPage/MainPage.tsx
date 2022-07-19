import { Circle } from 'phosphor-react'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import MonthFilter from '../../components/MonthFilter/MonthFilter'
import { bodyTable, headerTable } from './constants'

export default function MainPage() {
  const [monthName, setMonthName] = useState('')

  return (
    <div className='flex flex-col'>
      <Header>
        <div className='flex items-center gap-4'>
          <MonthFilter setMonthName={setMonthName} />
          <input
            className='inpuntsDefault mt-[0.2rem] '
            type="text"
          />
        </div>
        <button>
          Logout
        </button>
      </Header>
      <div className='mx-auto font-extrabold text-2xl'>
        {monthName}
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
                {bodyTable.map((item) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='flex flex-col  items-center '>
          <h1 className='text-2xl font-bold text-zinc-700'>Revenue</h1>
          <div className='bg-red-500 flex justify-between rounded h-20 w-[20vw] px-2 py-2'>
            <strong className='text-sm '>Quinzena 1
              { }
            </strong>
            <strong className='text-sm'>Quinzena 2
              { }
            </strong>
            <strong className='text-sm'> Total month
              { }
            </strong>
          </div>
        </div>
      </main>
    </div>
  )
}
