import { useQuery } from '@tanstack/react-query'
import Header from '../../components/header/Header'
import SelectFilter from '../../components/listboxes/SelectFilter'
import { reportsYearBody, yearsListBox } from '../../helpers/constants'
import { headerTableReports } from '../../helpers/headersTables'
import { useDateFilter } from '../../hooks/useDateFIlter'

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
              <span className="relative h-10 flex gap-2 my-1 items-center font-extrabold text-xl self-center">
                Total Labour Payroll: $ 595,148.23
              </span>
              <span className="relative h-10 flex gap-2 my-1 items-center font-extrabold text-xl self-center">
                Total Contractors: $ 595,148.23
              </span>
            </div>
            <span className="relative my-1 font-extrabold text-xl self-center">
              {yearName}
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
                <tr
                  key={month.id}
                  className="border-b text-center hover:bg-brand2 hover:font-semibold hover:text-white transition-all"
                >
                  <td className="tableLine">{month.month}</td>
                  <td className="tableLine">{month.in}</td>
                  <td className="tableLine">{month.labourPayroll}</td>
                  <td className="tableLine">{month.vanFuelAndOil}</td>
                  <td className="tableLine">{month.fuelAndOil}</td>
                  <td className="tableLine">{month.equipment}</td>
                  <td className="tableLine">{month.uniform}</td>
                  <td className="tableLine">{month.repairsAndMaintenance}</td>
                  <td className="tableLine">{month.advertisement}</td>
                  <td className="tableLine">{month.contractorsWorkers}</td>
                  <td className="tableLine">{month.global}</td>
                  <td className="tableLine">{month.insuranceAndTax}</td>
                  <td className="tableLine">{month.meals}</td>
                  <td className="tableLine">{month.chemicalAndConsumables}</td>
                  <td className="tableLine">{month.officeExpenses}</td>
                  <td className="tableLine">{month.extras}</td>
                  <td className="tableLine">{month.totalMonthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
