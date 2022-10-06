import { useState } from 'react'
import { articleInfos } from '../../../../helpers/constants'
import useFormate from '../../../../hooks/useFormate'
import { VisibilityWorkedInfos } from '../../Contractor'

interface ContractorAsideInfosProps {
  totals: any
}
const INITIAL_VISIBILITY_WORKED_INFOS = {
  quinzena1: true,
  quinzena2: false,
  total: false,
}
export default function ContractorAsideInfos({
  totals,
}: ContractorAsideInfosProps) {
  const { formatMoney } = useFormate()
  const [visibilityWorkedInfos, setVisibilityWorkedInfos] = useState(
    INITIAL_VISIBILITY_WORKED_INFOS,
  )
  function handleVisibilityWorkedInfos(period: Partial<VisibilityWorkedInfos>) {
    setVisibilityWorkedInfos((state) => ({ ...state, ...period }))
  }
  function contractorPayment(payment: string) {
    return formatMoney(Number(payment))
  }

  function contractorWorkedHours(hours: string) {
    return Number(hours).toFixed(1)
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
          className="px-2 contractorBtns buttonStyle1"
        >
          fortnight 1{' '}
        </button>
        <button
          onClick={() =>
            handleVisibilityWorkedInfos({
              quinzena2: !visibilityWorkedInfos.quinzena2,
            })
          }
          className="px-2 contractorBtns buttonStyle1"
        >
          fortnight 2
        </button>
        <button
          disabled={!visibilityWorkedInfos.quinzena2}
          onClick={() =>
            handleVisibilityWorkedInfos({
              total: !visibilityWorkedInfos.total,
            })
          }
          className="px-2 contractorBtns buttonStyle1"
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
                  ? ` ${contractorPayment(totals[1]?.total_1quarter)}`
                  : `${contractorWorkedHours(totals[1]?.total_1hours)} h`}
              </div>
            )}
            {visibilityWorkedInfos.quinzena2 && (
              <div className="flex flex-col gap-1">
                <span className="text-sm">Fortnight 2</span>
                {section === 'Payment'
                  ? ` ${contractorPayment(totals[2]?.total_2quarter)}`
                  : `${contractorWorkedHours(totals[2]?.total_2hours)} h`}
              </div>
            )}
            {visibilityWorkedInfos.total && (
              <div className="flex flex-col gap-1">
                <span className="text-sm">Total</span>
                {section === 'Payment'
                  ? `  ${contractorPayment(totals[0]?.total)}`
                  : `${contractorWorkedHours(totals[0]?.total_hours)} h`}
              </div>
            )}
          </div>
        </div>
      ))}
    </article>
  )
}
