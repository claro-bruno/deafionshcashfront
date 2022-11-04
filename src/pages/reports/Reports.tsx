import { useQuery } from '@tanstack/react-query'
import Header from '../../components/header/Header'
import SelectFilter from '../../components/listboxes/SelectFilter'
import { reportsYearBody, yearsListBox } from '../../helpers/constants'
import { headerTableReports } from '../../helpers/headersTables'
import { useDateFilter } from '../../hooks/useDateFIlter'
import YearReportTableLine from './components/YearReportTableLine'

export default function Reports() {
  const { monthName, setYearName, yearName } = useDateFilter()
  /* console.log(id) */

  const { data, isRefetching } = useQuery<any>(['jobs'], () =>
    axiosGetAllJobs({ month: monthName, year: yearName }),
  )

  return (
    <div>
      <Header>
        <div className="relative z-10 left-44 mx-auto flex items-center gap-2">
          <SelectFilter setFilter={setYearName} selectOptions={yearsListBox} />
        </div>
      </Header>
      <div className="2xl:flex 2xl:items-center 2xl:justify-center">
        <div className="  items-center flex flex-col overflow-auto ">
          <div className="flex justify-between  w-full px-4">
            <div>
              <span className="relative text-zinc-500  h-10 flex gap-2 my-1 items-center text-semibold text-lg self-center">
                Total Labour Payroll:
                <span className="font-semibold text-zinc-700">
                  $ 595,148.23
                </span>
              </span>
              <span className="relative text-zinc-500  h-10 flex gap-2 my-1 items-center text-semibold text-lg self-center">
                Total Contractors:
                <span className="font-semibold text-zinc-700">
                  $ 595,148.23
                </span>
              </span>
            </div>
            <h3 className="relative text-zinc-700  my-1 extrabold text-xl self-center">
              {yearName}
            </h3>
            <div>
              <span className="relative text-zinc-500  h-10 flex gap-2 my-1 items-center text-semibold text-lg self-center">
                Total Expenses:
                <span className="font-semibold text-zinc-700">
                  $ 595,148.23
                </span>
              </span>
              <span className="relative text-zinc-500  h-10 flex gap-2 my-1 items-center text-semibold text-lg self-center">
                Total:
                <span className="font-semibold text-zinc-700">
                  $ 595,148.23
                </span>
              </span>
            </div>
          </div>
          <table className="table !w-[90vw]">
            <thead className="tableHead">
              <tr className="">
                {headerTableReports.map((item, index) => (
                  <th
                    key={index}
                    scope="col"
                    className=" tableLine text-center  break-words "
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black border-b text-center font-semibold text-white ">
                <td className="tableLine">xxxxxxxxxxxx</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
                <td className="tableLine">40,000.00</td>
              </tr>
              {reportsYearBody.map((month) => (
                <YearReportTableLine key={month.id} report={month} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
