import React from 'react'

export default function MonthReportTableLine({ report }: any) {
  return (
    <tr className="bg-white tableLineHover xl:text-sm text-xs text-center border-b ">
      <td className="">{report.id}</td>
      <td className="">{report.date}</td>
      <td className="">{report.payedFor}</td>
      <td className="">{report.paymentType}</td>
      <td className="">{report.paymentIdentification}</td>
      <td className="">$ {report.in}</td>
      <td className="">$ {report.labourPayroll}</td>
      <td className="">$ {report.vanFuelAndOil}</td>
      <td className="">$ {report.fuelAndOil}</td>
      <td className="">$ {report.equipment}</td>
      <td className="">$ {report.uniform}</td>
      <td className="">$ {report.repairsAndMaintenance}</td>
      <td className="">$ {report.advertisement}</td>
      <td className="">$ {report.contractorsWorkers}</td>
      <td className="">$ {report.global}</td>
      <td className="">$ {report.insuranceAndTax}</td>
      <td className="">$ {report.meals}</td>
      <td className="">$ {report.chemicalAndConsumables}</td>
      <td className="">$ {report.officeExpenses}</td>
      <td className="">$ {report.extras}</td>
      <td className="tableLine flex gap-1">
        <button className="buttonStyle1 text-xs py-[0.09rem] px-2">Save</button>
        <button className="buttonStyle2 text-xs py-[0.09rem] px-2 ">
          Edit
        </button>
      </td>
    </tr>
  )
}
