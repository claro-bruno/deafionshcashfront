import { Circle, PlusCircle } from 'phosphor-react'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import NewCompanyModal from '../../components/modal/NewCompanyModal'
import { bodyTable, headerTable } from './constants'

export default function Companies() {
  const [filterCompanies, setFilterCompanies] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  function tableFilters(item: { name: string }) {
    return item.name.toUpperCase().includes(filterCompanies.toUpperCase())
  }
  return (
    <div className="flex flex-col  bg-gray-100 min-h-screen">
      <Header>
        <input
          placeholder="Ex: Amazon"
          onChange={(e) => setFilterCompanies(e.target.value)}
          className="inpuntsDefault mx-auto self-center relative left-40  "
          value={filterCompanies}
          type="text"
        />
      </Header>
      <div className="mx-8 mt-7 tableContainer overflow-auto ">
        <table className="table">
          <thead className="tableHead">
            <tr>
              {headerTable.map((item, index) => (
                <th scope="col" key={index} className="tableLine">
                  {item}
                </th>
              ))}
              <th scope="col" className="tableLine">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-brand relative left-10"
                  title="Add company"
                  type="button"
                >
                  <PlusCircle size={25} />
                </button>
              </th>
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
                        color={item.status === 'Active' ? 'green' : 'gray'}
                      />
                    </th>
                    <td className="tableLine">{item.name}</td>
                    <td className="tableLine">
                      {`${item.weekdays[0]} - ${
                        item.weekdays[item.weekdays.length - 1]
                      }`}
                    </td>
                    <td className="tableLine">
                      {`${item.workingHours.start}h - ${item.workingHours.end}h`}
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
      <NewCompanyModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  )
}
