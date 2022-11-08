import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useContext } from 'use-context-selector'
import { axiosUpdatePayments } from '../../../api/payments'
import LoadingSpinner from '../../../components/LoadingSpinner'
import { alertContext } from '../../../context/AlertProvider/AlertContextProvider'
import useFormate from '../../../hooks/useFormate'

export default function PaymentsLine(payInfos: any) {
  const { formatMoney } = useFormate()
  const { changeAlertModalState, getAlertMessage } = useContext(alertContext)

  const paymentContractorInfos = useForm<any>({
    defaultValues: {
      contractor_id: payInfos.fk_id_contractor,
      month: payInfos.month,
      year: payInfos.year,
      payments: [
        {
          method: payInfos.payments[0].method ?? '',
          taxes: payInfos.payments[0].taxes,
          identifier: payInfos.payments[0].identifier,
          value: payInfos.payments[0].value,
          quarter: payInfos.payments[0].quarter,
        },
        {
          method: payInfos.payments[1].method ?? '',
          taxes: payInfos.payments[1].taxes,
          identifier: payInfos.payments[1].identifier,
          value: payInfos.payments[1].value,
          quarter: payInfos.payments[1].quarter,
        },
      ],
    },
  })
  const queryClient = useQueryClient()
  const { register, handleSubmit } = paymentContractorInfos
  const { mutateAsync, isLoading } = useMutation(axiosUpdatePayments, {
    onSuccess() {
      queryClient.invalidateQueries(['payments'])
    },
    onError: (error: { response: any }) => {
      console.log(error.response?.data)
      getAlertMessage({
        message: error.response?.data,
      })
      changeAlertModalState()
    },
  })
  function handleUpdatePayment(payload: any) {
    console.log(payload)
    mutateAsync(payload)
  }
  function setStatusPayment() {
    const paymentQuarter1 = payInfos.payments[0].identifier
    const paymentQuarter2 = payInfos.payments[1].identifier
    if (paymentQuarter1 && paymentQuarter2) {
      return 'bg-green-200'
    } else if (paymentQuarter1 || paymentQuarter2) {
      return 'bg-yellow-200'
    } else {
      return 'bg-white'
    }
  }
  return (
    <tr className={`${setStatusPayment()} text-center  border-b`}>
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
          <td>
            <input
              {...register(`payments[${i}].taxes`)}
              title="taxes"
              type="number"
              className={`
              border rounded ml-1 w-[4rem] px-2 py-1 outline-brand`}
            />
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
              border rounded  w-[7rem] px-2 py-1 outline-brand`}
            />
          </td>
        </>
      ))}
      <td className="w-[7rem]  px-2">{formatMoney(payInfos.taxes)}</td>
      <td className="w-[7rem]  px-2">{formatMoney(payInfos.shirts)}</td>
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
          disabled={isLoading}
        >
          {isLoading ? <LoadingSpinner /> : 'Save'}
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
