import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Circle } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { axiosUpdatePayments } from '../../../api/payments'
import useFormate from '../../../hooks/useFormate'

export default function PaymentsInfos(payInfos: any) {
  const { formatMoney } = useFormate()

  const paymentContractorInfos = useForm<any>({
    defaultValues: {
      contractorId: payInfos.fk_id_contractor,
      month: payInfos.month,
      year: payInfos.year,
      payments: [
        {
          method: payInfos.payments[0].method ?? '',
          identifier: payInfos.payments[0].identifier,
          value: payInfos.payments[0].value,
          quarter: payInfos.payments[0].quarter,
        },
        {
          method: payInfos.payments[1].method ?? '',
          identifier: payInfos.payments[1].identifier,
          value: payInfos.payments[1].value,
          quarter: payInfos.payments[1].quarter,
        },
      ],
    },
  })
  const queryClient = useQueryClient()
  const { register, handleSubmit } = paymentContractorInfos
  const { data, mutateAsync } = useMutation(axiosUpdatePayments, {
    onSuccess() {
      console.log(data)
      queryClient.invalidateQueries(['payments'])
    },
    onError(error: { response: any }) {
      console.log(error.response)
    },
  })
  function handleUpdatePayment(data: any) {
    console.log(data)
    mutateAsync(data)
  }

  return (
    <tr className="bg-white border-b">
      <th scope="row" className="tableBodyTh">
        <Circle
          weight="fill"
          size={15}
          color={payInfos.status === 'ACTIVE' ? 'green' : 'gray'}
        />
      </th>
      <td className="tableLine min-w-[9rem]">
        <Link to={`/contractors/${payInfos.fk_id_contractor}`}>
          {payInfos.name}
        </Link>
      </td>
      {payInfos.payments.map((payment: any, i: number) => (
        <>
          <td className="tableLine min-w-[7rem]" key={payment.identifier}>
            {formatMoney(Number(payment.value))}
          </td>
          <td className="tableLine">
            <select
              className="rounded bg-white border w-[4.9rem] outline-none text-xs py-1"
              {...register(`payments[${i}].method`)}
            >
              <option className="w-20" value="Transfer">
                Bank Transfer
              </option>
              <option value="Deposit">Check</option>
              <option value="Others">Venmo</option>
            </select>
          </td>
          <td className=" tableLine">
            <input
              {...register(`payments[${i}].identifier`)}
              title="identificação do pagamento"
              type="text"
              className={`
              border rounded focus:ml-0 focus:w-[7rem] w-[4rem] px-2 py-1 outline-brand`}
            />
          </td>
        </>
      ))}
      <td className="w-[7rem]  px-2">
        {formatMoney(
          payInfos.payments.reduce(
            (acc: any, curr: any) => acc + Number(curr.value),
            0,
          ),
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
          to={`/jobs/${payInfos.fk_id_contractor}`}
          className="buttonStyle2 text-xs py-[0.09rem] px-2  "
        >
          Edit
        </Link>
      </td>
    </tr>
  )
}
