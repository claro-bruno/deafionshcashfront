import { Circle, PlusCircle } from 'phosphor-react'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { bodyTable, headerTable } from './constants'

export default function Companies() {
  const [filterCompanies, setFilterCompanies] = useState('')
  return (
    <div className='flex flex-col'>
      <Header >
        <input
          placeholder='Ex: Amazon'
          onChange={(e) => setFilterCompanies(e.target.value)}
          className='inpuntsDefault self-center relative left-40  '
          value={filterCompanies}
          type="text"
        />
      </Header>
      <table className=" text-sm mx-8  text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headerTable.map((item, index) => (
              <th
                scope="col"
                key={index}
                className="py-3 px-6">{item}</th>
            ))}
            <th
              scope="col"
              className="py-3 px-6">
              <button
                className='text-brand'
                title='Add companie'
                type='button'>
                <PlusCircle size={25} />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {bodyTable.map((item) => {
            if (item.name.toUpperCase().includes(filterCompanies.toUpperCase())) {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Circle
                      weight="fill"
                      size={15}
                      color={item.status === "Active" ? "green" : "gray"} />
                  </th>
                  <td className="py-4 px-6">
                    {item.name}
                  </td>
                  <td className="py-4 px-6">
                    {
                      `${item.weekdays[0]} - ${item.weekdays[item.weekdays.length - 1]}`

                    }
                  </td>
                  <td className="py-4 px-6">
                    {
                      `${item.workingHours.start}h - ${item.workingHours.end}h`
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
  )
}
