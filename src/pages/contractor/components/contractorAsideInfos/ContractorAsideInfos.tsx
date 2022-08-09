import React from 'react'
import useFormate from '../../../../hooks/useFormate'
import { articleInfos } from '../../constants'
import { VisibilityWorkedInfos } from '../../Contractor'

interface ContractorAsideInfosProps {
  workedHours: string
  payment: string
  handleVisibilityWorkedInfos: (s: Partial<VisibilityWorkedInfos>) => void
  visibilityWorkedInfos: VisibilityWorkedInfos
}

export default function ContractorAsideInfos({
  workedHours,
  payment,
  handleVisibilityWorkedInfos,
  visibilityWorkedInfos,
}: ContractorAsideInfosProps) {
  const { formatMoney } = useFormate()
  function contractorPayment(payment: string, multiplier: number = 1) {
    return formatMoney(Number(payment) * multiplier)
  }

  function contractorWorkedHours(hours: string, multiplier: number = 1) {
    return (Number(hours) * multiplier).toFixed(2)
  }

  return (
    <article className="w-[24%] mx-2 flex flex-col fixed right-0 gap-8 items-center">
      <div className="flex w-[95%] relative left-7 justify-between">
        <button
          onClick={() =>
            handleVisibilityWorkedInfos({
              quinzena1: !visibilityWorkedInfos.quinzena1,
            })
          }
          className="px-2 contractorBtns hover:ring-brand3 bg-brand3"
        >
          fortnight 1{' '}
        </button>
        <button
          onClick={() =>
            handleVisibilityWorkedInfos({
              quinzena2: !visibilityWorkedInfos.quinzena2,
            })
          }
          className="px-2 contractorBtns hover:ring-brand3 bg-brand3"
        >
          fortnight 2
        </button>
        <button
          disabled={!visibilityWorkedInfos.quinzena2}
          onClick={() =>
            handleVisibilityWorkedInfos({ total: !visibilityWorkedInfos.total })
          }
          className="px-2 contractorBtns disabled:opacity-50 disabled:hover:ring-transparent disabled:hover:border-transparent disabled:cursor-not-allowed hover:ring-brand3 bg-brand3"
        >
          Total month
        </button>
      </div>
      {articleInfos.map((section) => (
        <div
          key={section}
          className="shadow-md py-4 relative bottom-4 bg-gray-50 flex flex-col gap-3  w-full text-center rounded"
        >
          <strong className="text-gray-700">{section}</strong>
          <div className="flex justify-around">
            {visibilityWorkedInfos.quinzena1 && (
              <div className="flex flex-col gap-1">
                <span className="text-sm">Fortnight 1</span>
                {section === 'Payment'
                  ? ` $ ${contractorPayment(payment, 0.7)}`
                  : `${contractorWorkedHours(workedHours, 0.7)} h`}
              </div>
            )}
            {visibilityWorkedInfos.quinzena2 && (
              <div className="flex flex-col gap-1">
                <span className="text-sm">Fortnight 2</span>
                {section === 'Payment'
                  ? ` $ ${contractorPayment(payment, 0.3)}`
                  : `${contractorWorkedHours(workedHours, 0.3)} h`}
              </div>
            )}
            {visibilityWorkedInfos.total && (
              <div className="flex flex-col gap-1">
                <span className="text-sm">Total</span>
                {section === 'Payment'
                  ? ` $ ${contractorPayment(payment)}`
                  : `${contractorWorkedHours(workedHours)} h`}
              </div>
            )}
          </div>
        </div>
      ))}
    </article>
  )
}
