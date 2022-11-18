import React from 'react'
import Header from '../../components/header/Header'
import SelectFilter from '../../components/listboxes/SelectFilter'
import { monthsListBox, yearsListBox } from '../../helpers/constants'
import { headerTableInvoices } from '../../helpers/headersTables'
import { useDateFilter } from '../../hooks/useDateFIlter'
import useModal from '../../hooks/useModal'
import NewMonthInvoice from './components/NewMonthInvoice'

export default function Invoices() {
  const {
    setMonthName,
    monthName,
    setYearName,
    yearName,
    setFilterContractor,
    filterContractor,
  } = useDateFilter()
  const { isModalOpen, switchModalView } = useModal()
  return (
    <div>
      <Header>
        <div className="relative z-10 left-24 mx-auto flex items-center gap-2">
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
      <div className="2xl:flex 2xl:items-center 2xl:justify-center">
        <div className="tableContainer 2xl:w-[80vw] items-center flex flex-col overflow-auto ">
          <div className="flex  justify-center  w-full px-4">
            <span className="reportInfos flex-1 flex justify-center">{`${yearName} ${monthName}`}</span>
            <div className="flex items-center pl-auto">
              <button
                onClick={switchModalView}
                className="buttonStyle1 px-4 text-sm"
              >
                Add new Invoice
              </button>
            </div>
          </div>
          <table className="table">
            <thead className="tableHead">
              <tr className="">
                {headerTableInvoices.map((item, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="tableLine break-words "
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b tableLineHover">
                <td className="tableLine">11/18/2022</td>
                <td className="tableLine">1</td>
                <td className="tableLine">Amazon</td>
                <td className="tableLine">222331</td>
                <td className="tableLine">Deep Cleaning</td>
                <td className="tableLine">US$ 2,550.22</td>
              </tr>
              <tr className="border-b tableLineHover">
                <td className="tableLine">11/18/2022</td>
                <td className="tableLine">2</td>
                <td className="tableLine">Netflix</td>
                <td className="tableLine">233134</td>
                <td className="tableLine">Deep Cleaning </td>
                <td className="tableLine">US$ 4,150.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <NewMonthInvoice
          switchModalView={switchModalView}
          isModalOpen={isModalOpen}
        />
      </div>
    </div>
  )
}
