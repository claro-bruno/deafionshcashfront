import { Circle } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { PAYMENT_TYPES } from '../../../components/listboxes/constants'
import SelectFilter from '../../../components/listboxes/SelectFilter'
import useFormate from '../../../hooks/useFormate'
import { ContractorPaymentInfos } from '../../../types/contractor'

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
          value: payInfos.payments[0].value,
          period: payInfos.payments[0].period,
        },
        {
          type: payInfos.payments[1].type,
          identifier: payInfos.payments[1].identifier,
          value: payInfos.payments[1].value,
          period: payInfos.payments[1].period,
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
          <td className="tableLine flex flex-col items-center justify-center">
            <SelectFilter
              selectedIcon={false}
              selectOptions={PAYMENT_TYPES}
              listCSS="w-[7rem] absolute mt-5"
              {...register(`payments[${i}].type`)}
            />
          </td>
          <td className=" w-[7rem] ">
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
      <td className="tableLine flex gap-1">
        <button
          onClick={handleSubmit(handleUpdatePayment)}
          className="buttonStyle1 text-xs py-[0.09rem] px-2  "
          type="button"
        >
          Save
        </button>
        <Link
          to={`/jobs/${payInfos.contractor.id}`}
          className="buttonStyle2 text-xs py-[0.09rem] px-2  "
        >
          Edit
        </Link>
      </td>
    </tr>
  )
}
