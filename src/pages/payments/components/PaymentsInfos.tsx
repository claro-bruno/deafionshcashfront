import { Circle } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
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
          type: payInfos.payments[0].type ?? '',
          identifier: payInfos.payments[0].identifier,
          value: payInfos.payments[0].value,
          quarter: payInfos.payments[0].quarter,
        },
        {
          type: payInfos.payments[1].type ?? '',
          identifier: payInfos.payments[1].identifier,
          value: payInfos.payments[1].value,
          quarter: payInfos.payments[1].quarter,
        },
      ],
    },
  })
  const { register, handleSubmit } = paymentContractorInfos
  function handleUpdatePayment(data: any) {
    console.log({ ...data })
  }

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
        <Link to={`/contractors/${payInfos.id}`}>
          {payInfos.contractor.name}
        </Link>
      </td>
      {payInfos.payments.map((payment, i) => (
        <>
          <td className="w-[7rem]  px-5">
            $ {formatMoney(Number(payment.value))}
          </td>
          <td className="tableLine flex flex-col items-center justify-center">
            <select
              className="rounded bg-white border w-[4.9rem] outline-none text-xs py-1"
              {...register(`payments[${i}].type`)}
            >
              <option className="w-20" value="Transfer">
                Bank Transfer
              </option>
              <option value="Deposit">Check</option>
              <option value="Others">Venmo</option>
            </select>
          </td>
          <td className=" w-[7rem] ">
            <input
              {...register(`payments[${i}].identifier`)}
              title="identificação do pagamento"
              type="text"
              className={`
              border rounded ml-5 focus:ml-0 focus:w-[7rem] w-[4rem] px-2 py-1 outline-brand`}
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
