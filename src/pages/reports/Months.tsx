import Header from '../../components/header/Header'
import SelectFilter from '../../components/listboxes/SelectFilter'
import { monthsListBox, yearsListBox } from '../../helpers/constants'
import { headerTableMonthsReports } from '../../helpers/headersTables'
import { useDateFilter } from '../../hooks/useDateFIlter'

export default function Months() {
  const {
    setMonthName,
    monthName,
    setYearName,
    yearName,
    handleFilters,
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
        <div className=" items-center flex flex-col overflow-auto ">
          <div className="flex justify-between  w-full px-4">
            <div>
              <span className="relative h-10 flex gap-2 my-1 items-center font-extrabold text-xl self-center">
                Balance past month: $ 595,148.23
              </span>
              <span className="relative h-10 flex gap-2 my-1 items-center font-extrabold text-xl self-center">
                Balance: $ 595,148.23
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
                Total Contractors: $ 595,148.23
              </span>
            </div>
          </div>
          <table className="table !w-[90vw]">
            <thead className="tableHead">
              <tr className=" ">
                {headerTableMonthsReports.map((item, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="tableLine xl:max-xl:max-w-[55px]  "
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
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">janeiro</td>
                <td className="tableLine">
                  <button className="bg-red-500 px-2 rounded">save</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
