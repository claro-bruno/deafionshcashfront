import React from 'react'

export default function YearReportTableLine({ report }: any) {
  return (
    <tr
      key={report.id}
      className="border-b text-center tableLineHover transition-all"
    >
      <td className="tableLine">{report.month}</td>
      <td className="tableLine">$ {report.in}</td>
      <td className="tableLine">$ {report.labourPayroll}</td>
      <td className="tableLine">$ {report.vanFuelAndOil}</td>
      <td className="tableLine">$ {report.fuelAndOil}</td>
      <td className="tableLine">$ {report.equipment}</td>
      <td className="tableLine">$ {report.uniform}</td>
      <td className="tableLine">$ {report.repairsAndMaintenance}</td>
      <td className="tableLine">$ {report.advertisement}</td>
      <td className="tableLine">$ {report.contractorsWorkers}</td>
      <td className="tableLine">$ {report.global}</td>
      <td className="tableLine">$ {report.insuranceAndTax}</td>
      <td className="tableLine">$ {report.meals}</td>
      <td className="tableLine">$ {report.chemicalAndConsumables}</td>
      <td className="tableLine">$ {report.officeExpenses}</td>
      <td className="tableLine">$ {report.extras}</td>
      <td className="tableLine">$ {report.totalMonthly}</td>
    </tr>
  )
}
