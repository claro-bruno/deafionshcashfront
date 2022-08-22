import { Circle } from 'phosphor-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useFormate from '../../../hooks/useFormate'
import { ContractorPaymentInfos } from '../../../types/contractor'
import { PAYMENT_TYPES } from '../constants'

export default function PaymentsInfos(payInfos: ContractorPaymentInfos) {
  const { formatMoney } = useFormate()
  const paymentContractorInfos = useForm<any>({
    defaultValues: {
      contractorId: payInfos.contractor.id,
      month: payInfos.month,
      year: payInfos.year,
      payments: [
        {
          type: payInfos.payments[0].type,
          identifier: payInfos.payments[0].identifier,
        },
        {
          type: payInfos.payments[1].type,
          identifier: payInfos.payments[1].identifier,
        },
      ],
    },
  })
  function handleUpdatePayment(data: any) {
    console.log(data)
  }
  const { register, handleSubmit } = paymentContractorInfos
  return (
    <tr className="bg-white border-b">
      <th scope="row" className="tableBodyTh">
        <Circle
          weight="fill"
          size={15}
          color={payInfos.status === 'active' ? 'green' : 'gray'}
        />
      </th>
      <td className="tableLine max-w-[9rem]">
        <Link to={`/contractor/${payInfos.id}`}>
          {payInfos.contractor.name}
        </Link>
      </td>
      {payInfos.payments.map((payment, i) => (
        <>
          <td className="w-[7rem]  px-5">
            $ {formatMoney(Number(payment.value))}
          </td>
          <td className="tableLine flex flex-col">
            {PAYMENT_TYPES.map((type: string, index: number) => (
              <label key={index} title={type} className="flex gap-1">
                <input
                  type="checkbox"
                  value={type}
                  {...register(`payments[${i}].type`)}
                />
                {type.slice(0, 4)}
              </label>
            ))}
          </td>
          <td className=" w-[7rem] px-0">
            <input
              {...register(`payments[${i}].identifier`)}
              title="identificação do pagamento"
              type="text"
              className="border rounded ml-5 focus:ml-0 focus:w-[7rem] w-[4rem] px-2 py-1 outline-brand"
            />
          </td>
        </>
      ))}
      <td className="w-[7rem]  px-5">
        ${' '}
        {formatMoney(
          payInfos.payments.reduce((acc, curr) => acc + Number(curr.value), 0),
        )}
      </td>
      <td className="tableLine flex relative top-3 gap-1">
        <button
          onClick={() => console.log('save')}
          className="buttonStyle1 text-xs py-[0.09rem] px-2  "
          type="button"
        >
          Save
        </button>
        <button
          onClick={handleSubmit(handleUpdatePayment)}
          className="buttonStyle2 text-xs py-[0.09rem] px-2  "
          type="button"
        >
          Edit
        </button>
      </td>
    </tr>
  )
}
