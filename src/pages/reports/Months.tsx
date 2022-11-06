import Header from '../../components/header/Header'
import SelectFilter from '../../components/listboxes/SelectFilter'
import {
  monthsListBox,
  reportsMonthBody,
  yearsListBox,
} from '../../helpers/constants'
import { headerTableMonthsReports } from '../../helpers/headersTables'
import { useDateFilter } from '../../hooks/useDateFIlter'
import useModal from '../../hooks/useModal'
import MonthReportTableLine from './components/MonthReportTableLine'
import NewReportMonth from './components/NewMonthReport'

export default function Months() {
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
        <div className="relative z-10 left-36 mx-auto flex items-center gap-2">
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
              <span className="flex text-zinc-500 gap-2 my-1 items-center font-semibold text-lg self-center">
                Balance past month:
                <span className="font-semibold text-zinc-700">
                  $ 595,148.23
                </span>
              </span>
              <span className="flex text-zinc-500 gap-2 my-1 items-center font-semibold text-lg self-center">
                Balance:
                <span className="font-semibold text-zinc-700">
                  $ 595,148.23
                </span>
              </span>
              <span className="flex text-zinc-500 gap-2 my-1 items-center font-semibold text-lg self-center">
                Total Expenses:
                <span className="font-semibold text-zinc-700">
                  $ 595,148.23
                </span>
              </span>
              <span className="flex text-zinc-500 gap-2 my-1 items-center font-semibold text-lg self-center">
                Total Contractors:
                <span className="font-semibold text-zinc-700">
                  $ 595,148.23
                </span>
              </span>
            </div>
            <h3 className="text-zinc-700  relative right-10 flex gap-2 my-1 items-center font-extrabold text-xl self-center">
              {`${yearName} ${monthName}`}
            </h3>
            <div className="flex items-center">
              <button
                onClick={switchModalView}
                className="buttonStyle1 px-4 text-sm"
              >
                Add new Report
              </button>
            </div>
          </div>
          <table className="table relative xl:left-0 left-10 max-w-[90vw]">
            <thead className="tableHead">
              <tr className=" ">
                {headerTableMonthsReports.map((item, index) => (
                  <th
                    key={index}
                    scope="col"
                    className=" tableLine text-center xl:max-xl:max-w-[55px]  "
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black text-center font-semibold border-b text-white ">
                <td className=" ">xxxx</td>
                <td className=" ">xxxx</td>
                <td className="">xxxx</td>
                <td className=" ">xxxx</td>
                <td className=" ">xxxx</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className="w-40 py-4">$99,999.99</td>
                <td className=" ">xxxx</td>
              </tr>
              {reportsMonthBody.map((report) => (
                <MonthReportTableLine key={report.id} report={report} />
              ))}
            </tbody>
          </table>
        </div>
        <NewReportMonth
          switchModalView={switchModalView}
          isModalOpen={isModalOpen}
        />
      </div>
    </div>
  )
}
