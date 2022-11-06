import React from 'react'

export default function YearReportTableLine({ report }: any) {
  return (
    <tr key={report.id} className="border-b text-center tableLineHover">
      <td className="py-4">{report.month}</td>
      <td className="py-4">$ {report.in}</td>
      <td className="py-4">$ {report.labourPayroll}</td>
      <td className="py-4">$ {report.vanFuelAndOil}</td>
      <td className="py-4">$ {report.fuelAndOil}</td>
      <td className="py-4">$ {report.equipment}</td>
      <td className="py-4">$ {report.uniform}</td>
      <td className="py-4">$ {report.repairsAndMaintenance}</td>
      <td className="py-4">$ {report.advertisement}</td>
      <td className="py-4">$ {report.contractorsWorkers}</td>
      <td className="py-4">$ {report.global}</td>
      <td className="py-4">$ {report.insuranceAndTax}</td>
      <td className="py-4">$ {report.meals}</td>
      <td className="py-4">$ {report.chemicalAndConsumables}</td>
      <td className="py-4">$ {report.officeExpenses}</td>
      <td className="py-4">$ {report.extras}</td>
      <td className="py-4">$ {report.totalMonthly}</td>
    </tr>
  )
}
