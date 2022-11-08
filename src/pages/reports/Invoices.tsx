import React from 'react'
import Header from '../../components/header/Header'
import SelectFilter from '../../components/listboxes/SelectFilter'
import { monthsListBox, yearsListBox } from '../../helpers/constants'
import { useDateFilter } from '../../hooks/useDateFIlter'

export default function Invoices() {
  const {
    setMonthName,
    monthName,
    setYearName,
    yearName,
    setFilterContractor,
    filterContractor,
  } = useDateFilter()
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
          <div className="flex justify-between  w-full px-4">
            <div>
              <span className="reportInfos">
                Total Labour Payroll:
                <span className="font-semibold reportInfosValue">
                  $ 595,148.23
                </span>
              </span>
              <span className="reportInfos">
                Total Contractors:
                <span className="font-semibold reportInfosValue">
                  $ 595,148.23
                </span>
              </span>
            </div>
            <span className="reportInfos">{`${yearName} ${monthName}`}</span>
            <div>
              <span className="reportInfos">
                Total Expenses:
                <span className="font-semibold reportInfosValue">
                  $ 595,148.23
                </span>
              </span>
              <span className="reportInfos">
                Total:
                <span className="font-semibold reportInfosValue">
                  $ 595,148.23
                </span>
              </span>
            </div>
          </div>
          <table className="table">
            <thead className="tableHead">
              <tr className="">
                {/*    {headerTableReports.map((item, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="tableLine break-words "
                  >
                    {item}
                  </th>
                ))} */}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black border-b text-white ">
                <td className="tableLine">xxxxxxxxxxxx</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
