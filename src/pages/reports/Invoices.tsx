import React from 'react'

export default function Invoices() {
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
              <span className="relative h-10 flex gap-2 my-1 items-center font-extrabold text-xl self-center">
                Total Labour Payroll: $ 595,148.23
              </span>
              <span className="relative h-10 flex gap-2 my-1 items-center font-extrabold text-xl self-center">
                Total Contractors: $ 595,148.23
              </span>
            </div>
            <span className="relative h-10 flex gap-2 my-1 items-center font-extrabold text-xl self-center">
              {`${yearName} ${monthName}`}
            </span>
            <div>
              <span className="relative h-10 flex gap-2 my-1 items-center font-extrabold text-xl self-center">
                Total Expenses: $ 595,148.23
              </span>
              <span className="relative h-10 flex gap-2 my-1 items-center font-extrabold text-xl self-center">
                Total: $ 595,148.23
              </span>
            </div>
          </div>
          <table className="table">
            <thead className="tableHead">
              <tr className="">
                {headerTableReports.map((item, index) => (
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
