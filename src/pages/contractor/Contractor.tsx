import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import MonthFilter from '../../components/listboxes/MonthFilter'
import NewContractorModal from '../../components/modal/NewContractorModal'
import { ContractorWorkedInfo } from '../../types/contractor'
import CardContractor from './components/cardContractor/CardContractor'
import ContractorAsideInfos from './components/contractorAsideInfos/ContractorAsideInfos'
import { bodyTable, headerTable } from './constants'
import './contractor.css'

interface TotalWorked {
  workedHours: string
  payment: string
}
export interface VisibilityWorkedInfos {
  quinzena1: boolean
  quinzena2: boolean
  total: boolean
}
const INITIAL_TOTAL_WORKED_INFOS = {
  workedHours: '',
  payment: '',
}
const INITIAL_VISIBILITY_WORKED_INFOS = {
  quinzena1: true,
  quinzena2: false,
  total: false,
}
export default function Contractor() {
  const { id } = useParams()
  console.log(id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filterCompany, setFilterCompany] = useState('')
  const [monthName, setMonthName] = useState('')
  const [totalWorkedInfos, setTotalWorkedInfos] = useState<TotalWorked>(
    INITIAL_TOTAL_WORKED_INFOS,
  )
  const [visibilityWorkedInfos, setVisibilityWorkedInfos] = useState(
    INITIAL_VISIBILITY_WORKED_INFOS,
  )

  function handleVisibilityWorkedInfos(period: Partial<VisibilityWorkedInfos>) {
    console.log(period)

    setVisibilityWorkedInfos((state) => ({ ...state, ...period }))
  }
  function tableFilters(item: ContractorWorkedInfo) {
    const filterByClient = item.client
      .toLowerCase()
      .includes(filterCompany.toLowerCase())
    const filterByDate = item.date
      .toLocaleString('default', { month: 'long' })
      .toLowerCase()
      .includes(monthName.toLowerCase())
    return filterByClient && filterByDate
  }

  function setContractorValues() {
    const paymentsArray = bodyTable.map((item) => {
      if (tableFilters(item)) {
        return (Number(item.hourlyPay) * Number(item.workedHours)).toFixed(2)
      }
      return '0'
    })
    const paymentSum = paymentsArray.reduce(
      (acc, curr) => acc + Number(curr),
      0,
    )
    const hoursArray = bodyTable.map((item) => {
      if (tableFilters(item)) {
        return item.workedHours
      }
      return '0'
    })
    const hoursSum = hoursArray.reduce((acc, curr) => acc + Number(curr), 0)
    setTotalWorkedInfos({
      payment: paymentSum.toFixed(2),
      workedHours: hoursSum.toString(),
    })
  }

  useMemo(() => {
    setContractorValues()
  }, [filterCompany, monthName])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header>
        <div className="relative left-20 mx-auto flex items-center gap-2">
          <MonthFilter setMonthName={setMonthName} />
          <input
            placeholder="Ex:amazon"
            onChange={(e) => setFilterCompany(e.target.value)}
            className="inputsDefault mt-[0.2rem] "
            value={filterCompany}
            type="text"
          />
        </div>
      </Header>
      <main className="flex flex-col">
        <CardContractor setIsModalOpen={() => setIsModalOpen(true)} />
        <div className="tableContainer flex gap-4 w-[75%] max-h-[80vh] overflow-auto">
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
                    <tr key={item.id} className="bg-white border-b ">
                      <th scope="row" className="tableBodyTh">
                        {item.date.toDateString()}
                      </th>
                      <td className="tableLine flex flex-wrap max-w-[9rem]">
                        <Link to={`/clients/${item.client}`}>
                          {item.client}
                        </Link>
                      </td>
                      <td className="tableLine ">{item.workedHours} h</td>
                      <td className="tableLine">${item.hourlyPay}</td>
                    </tr>
                  )
                } else {
                  return []
                }
              })}
            </tbody>
          </table>
          <ContractorAsideInfos
            handleVisibilityWorkedInfos={handleVisibilityWorkedInfos}
            visibilityWorkedInfos={visibilityWorkedInfos}
            totalWorkedInfos={totalWorkedInfos}
          />
        </div>
      </main>
      <NewContractorModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  )
}
