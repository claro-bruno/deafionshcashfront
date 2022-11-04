import { useQuery } from '@tanstack/react-query'
import { GearSix } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { axiosGetAllPayments } from '../../api/payments'
import Header from '../../components/header/Header'
import SelectFilter from '../../components/listboxes/SelectFilter'
import { monthsListBox, yearsListBox } from '../../helpers/constants'
import { getLastDayOfMonth } from '../../helpers/functions'
import { headerTablePayments } from '../../helpers/headersTables'
import { useDateFilter } from '../../hooks/useDateFIlter'
import useFormate from '../../hooks/useFormate'
import { Payment } from '../../types/payments'
import PaymentsInfos from './components/PaymentsInfos'

export default function Payments() {
  const { formatMoney } = useFormate()
  const {
    handleFilters,
    monthName,
    yearName,
    filterContractor,
    setYearName,
    setMonthName,
    setFilterContractor,
  } = useDateFilter()
  const { data } = useQuery(['payments'], () =>
    axiosGetAllPayments({ month: monthName, year: yearName }),
  )
  const [payments, setPayments] = useState<Payment[]>([])
  const [total, setTotal] = useState<any>([])

  useEffect(() => {
    if (data) {
      setPayments(data.data.payments)
      setTotal(data.data.total)
    }
  }, [data])

  return (
    <div className="flex flex-col">
      <Header>
        <div className="relative left-24 mx-auto flex items-center gap-2">
          <SelectFilter setFilter={setYearName} selectOptions={yearsListBox} />
          <SelectFilter
            setFilter={setMonthName}
            selectOptions={monthsListBox}
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

      <main className="flex bg-gray-100 min-h-[88vh]">
        <div className=" absolute text-zinc-700 left-[45%] right-full flex gap-2 font-extrabold text-xl">
          <h2>{yearName}</h2>
          <h2>{monthName}</h2>
        </div>
        <div className="w-full my-2">
          <div className="tableContainer overflow-auto mt-8">
            <table className="table ">
              <thead className="tableHead">
                <tr>
                  {headerTablePayments.map((item, index) => {
                    if (item === 'quinzena 2') {
                      return (
                        <th scope="col" key={index} className="tableLine ">
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
                    <GearSix className="relative left-8" size={24} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment: any, i) => {
                  if (handleFilters(payment)) {
                    return <PaymentsInfos key={i} {...payment} />
                  } else {
                    return []
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col  items-center  ">
          <h1 className="text-2xl w-[10vw] relative right-4 text-center  font-bold text-zinc-700">
            Outlay
          </h1>
          <article className="flex flex-col gap-8 relative bottom-6 right-4 mt-8">
            <div className="bg-gray-50 shadow-md flex items-center gap-2 flex-col rounded h-20 w-[10vw] py-2">
              Forthnight 1
              <strong className="">
                {' '}
                {formatMoney(total[1]?.total_1quarter)}
              </strong>
            </div>
            <div className="bg-gray-50 shadow-md flex items-center gap-2 flex-col rounded h-20 w-[10vw] py-2">
              Forthnight 2
              <strong className="">
                {' '}
                {formatMoney(total[2]?.total_2quarter)}
              </strong>
            </div>
            <div className="bg-gray-50 shadow-md flex items-center gap-2 flex-col rounded h-20 w-[10vw] py-2">
              Total month
              <strong className=""> {formatMoney(total[0]?.total)}</strong>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
