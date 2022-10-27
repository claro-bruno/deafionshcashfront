import React from 'react'

export default function MonthReportTableLine({ report }: any) {
  return (
    <tr className="bg-white tableLineHover text-center border-b text-zinc-900 ">
      <td className="tableLine">{report.id}</td>
      <td className="">{report.date}</td>
      <td className="w-52">{report.payedFor}</td>
      <td className="tableLine ">{report.paymentForm}</td>
      <td className="tableLine ">{report.paymentIdentification}</td>
      <td className="tableLine ">{report.in}</td>
      <td className="tableLine ">{report.labourPayroll}</td>
      <td className="tableLine ">{report.vanFuelAndOil}</td>
      <td className="tableLine ">{report.fuelAndOil}</td>
      <td className="tableLine ">{report.equipment}</td>
      <td className="tableLine ">{report.uniform}</td>
      <td className="tableLine ">{report.repairsAndMaintenance}</td>
      <td className="tableLine ">{report.advertisement}</td>
      <td className="tableLine ">{report.contractorsWorkers}</td>
      <td className="tableLine ">{report.global}</td>
      <td className="tableLine ">{report.insuranceAndTax}</td>
      <td className="tableLine ">{report.meals}</td>
      <td className="tableLine ">{report.chemicalAndConsumables}</td>
      <td className="tableLine ">{report.officeExpenses}</td>
      <td className="tableLine ">{report.extras}</td>
      <td className="tableLine flex gap-1">
        <button className="buttonStyle1 text-xs py-[0.09rem] px-2">Save</button>
        <button className="buttonStyle2 text-xs py-[0.09rem] px-2 ">
          Edit
        </button>
      </td>
    </tr>
  )
}
