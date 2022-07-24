import { Circle, Envelope, PencilSimpleLine, Phone } from 'phosphor-react'
import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import MonthFilter from '../../components/listboxes/MonthFilter'
import NewContractorModal from '../../components/modal/NewContractorModal'
import { articleInfos, bodyTable, headerTable } from './constants'
import './contractor.css'

interface BodyTable {
  id: number;
  date: Date;
  workedHours: string;
  client: string;
  hourlyPay: string;
}
interface ContractorWorkedInfos { workedHours: string, payment: string }

export default function Contractor() {
  const { id } = useParams()
  console.log(id);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filterCompany, setFilterCompany] = useState('')
  const [monthName, setMonthName] = useState('')
  const [
    contractorWorkedInfos,
    setContractorWorkedInfos
  ] = useState<ContractorWorkedInfos>({ workedHours: '', payment: '' })


  function tableFilters(item: BodyTable) {
    const filterByClient = item.client.toLowerCase().includes(filterCompany.toLowerCase())
    const filterByDate = item.date
      .toLocaleString('default', { month: 'long' })
      .toLowerCase()
      .includes(monthName.toLowerCase())
    return filterByClient && filterByDate
  }

  function setContractorValues() {
    const paymentsArray = bodyTable.map(item => {
      if (tableFilters(item)) {
        return (Number(item.hourlyPay) * Number(item.workedHours)).toFixed(2)
      }
      return '0'
    })
    const paymentSum = paymentsArray.reduce((acc, curr) => acc + Number(curr), 0)
    const hoursArray = bodyTable.map(item => {
      if (tableFilters(item)) {
        return item.workedHours
      }
      return '0'
    })
    const hoursSum = hoursArray.reduce((acc, curr) => acc + Number(curr), 0)
    setContractorWorkedInfos({
      payment: paymentSum.toFixed(2),
      workedHours: hoursSum.toString()
    })
  }


  useMemo(() => {
    setContractorValues()
  }, [filterCompany, monthName])

  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Header>
        <div className='relative left-20 ml-6 flex items-center gap-2'>
          <MonthFilter setMonthName={setMonthName} />
          <input
            placeholder='Ex:amazon'
            onChange={(e) => setFilterCompany(e.target.value)}
            className='inpuntsDefault mt-[0.2rem] '
            value={filterCompany}
            type='text'
          />
        </div>
      </Header>
      <main className='flex flex-col'>
        <div className='h-[20vh] flex items-center justify-between p-2' >
          <div className='flex gap-4 rounded w-[20rem] bg-zinc-50 shadow-lg py-2 px-4'>
            <img
              className='h-20 w-20 rounded-md'
              src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
              alt='profile '
            />
            <div className='flex flex-col text-sm'>
              <span className='flex items-center gap-1'>
                <Circle weight='fill' color='green'/>
                Active
              </span>
              <span className='flex items-center gap-1'>
                <PencilSimpleLine />
                Bruno alves
              </span>
              <span className='flex items-center gap-1'>
                <Envelope weight='fill' />
                brunofay1@hotmail.com
              </span>
              <span className='flex items-center gap-1'>
                <Phone weight='fill' />
                51985473129
              </span>

            </div>
          </div>
          <button
            type='button'
            onClick={() => setIsModalOpen(true)}
            className='px-4 py-1 rounded border border-transparent ring-2 ring-brand2 hover:border-white h-min relative right-5 font-bold  text-white bg-brand2 transition-colors'>
            Edit
          </button>
        </div>
        <div className='contractorBody flex gap-4 w-[75%] max-h-[80vh] overflow-auto'>
          <table className=' text-sm w-full text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                {headerTable.map((item, index) => (
                  <th
                    scope='col'
                    key={index}
                    className='py-3 px-6'>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyTable.map((item) => {
                if (tableFilters(item)) {
                  return (
                    <tr
                      key={item.id}
                      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                    >
                      <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        {item.date.toDateString()}
                      </th>
                      <td className='py-4 px-6'>
                        {item.client}
                      </td>
                      <td className='py-4 px-6'>
                        {item.workedHours}
                      </td>
                      <td className='py-4 px-6'>
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
          <article className='w-[24%] mx-2 flex flex-col fixed right-0 gap-8 items-center'>
            {articleInfos.map(section => (
              <div className='shadow-md py-4  bg-gray-50 flex flex-col gap-3  w-full text-center rounded'>
                <strong
                  className='text-gray-700'
                >
                  {section}
                </strong>
                <div className='flex justify-around'>
                  <div className='flex flex-col gap-1' >
                    <span className='text-sm'>Quinzena 1</span>
                    {
                      section === 'Payment' ? ` $ ${(Number(contractorWorkedInfos.payment) * 0.7).toFixed(2)}`
                        : `${Number(contractorWorkedInfos.workedHours) * 0.7} h`
                    }

                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-sm'>Quinzena 2</span>
                    {
                      section === 'Payment' ? ` $ ${Number(contractorWorkedInfos.payment) * 0.3}`
                        : `${Number(contractorWorkedInfos.workedHours) * 0.3} h`
                    }
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-sm'>Total</span>
                    {
                      section === 'Payment' ? ` $ ${contractorWorkedInfos.payment}`
                        : `${contractorWorkedInfos.workedHours} h`
                    }
                  </div>
                </div>
              </div>
            ))}
          </article>
        </div>
      </main>
      <NewContractorModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  )
}
