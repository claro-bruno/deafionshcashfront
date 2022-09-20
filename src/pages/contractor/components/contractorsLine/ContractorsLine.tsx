import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { axiosUpdateContractorStatus } from '../../../../api/contractor'
import useFormate from '../../../../hooks/useFormate'

type ContractorsLineProps = {
  contractor: any
  handleModalInfos: (info: any) => void
}
export default function ContractorsLine({
  contractor,
  handleModalInfos,
}: ContractorsLineProps) {
  const { formatPhone, formatSsnOrItin } = useFormate()
  const { invalidateQueries } = useQueryClient()
  const [contractorStatus, setContractorStatus] = useState(contractor.status)
  const { mutateAsync } = useMutation(axiosUpdateContractorStatus, {
    onSuccess: (response) => {
      console.log(response)
      invalidateQueries(['contractors'])
    },
    onError: (error: { response: any }) => {
      console.log(error.response)
    },
  })
  function handleUpdateContractor(payload: any) {
    const contractorObj = { contractorId: payload.id, status: contractorStatus }
    console.log(contractorObj)
    mutateAsync(contractorObj)
  }
  return (
    <tr key={contractor.id} className=" bg-white  border-b  ">
      <td>
        <select
          name="status"
          className="rounded bg-white  border ml-3 outline-none p-1"
          value={contractorStatus}
          defaultValue={contractor.status}
          onChange={(e) => setContractorStatus(e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>
      </td>
      <td className="px-4">
        {' '}
        {`${contractor.firstname} ${contractor.lastname}`}
      </td>
      <td className="px-2 my-2  h-16 flex items-start gap-2 justify-center flex-col">
        <span className="relative left-4">
          {formatSsnOrItin(contractor['itin/ssn/ein'].value)}
        </span>
        <button
          onClick={() => handleModalInfos(contractor['itin/ssn/ein'])}
          className="buttonStyle1 relative left-2 text-xs py-[0.09rem] px-2"
        >
          Document img
        </button>
      </td>
      <td className="px-4">{formatPhone(contractor.phone)}</td>
      <td className="px-4">
        <button
          onClick={() => handleModalInfos(contractor.address)}
          className="buttonStyle1 text-xs py-[0.09rem] px-2"
        >
          Address infos
        </button>
      </td>
      <td className="px-4">
        <button
          onClick={() => handleUpdateContractor(contractor)}
          className="buttonStyle1 text-xs py-[0.09rem] px-2"
          type="button"
        >
          Save
        </button>
      </td>
    </tr>
  )
}
