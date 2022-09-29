import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { axiosUpdateContractorStatus } from '../../../../api/contractor'
import { Contractor } from '../../../../types/contractor'

type ContractorsLineProps = {
  contractor: Contractor
  handleModalInfos: (info: any, src: string) => void
}
export default function ContractorsLine({
  contractor,
  handleModalInfos,
}: ContractorsLineProps) {
  const queryClient = useQueryClient()
  const [contractorStatus, setContractorStatus] = useState(contractor.status)
  const { mutateAsync } = useMutation(axiosUpdateContractorStatus, {
    onSuccess: (response) => {
      console.log(response)
      queryClient.invalidateQueries(['contractors'])
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
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
          <option value="PENDING">Pending</option>
        </select>
      </td>
      <td className="px-4">
        {' '}
        {`${contractor.first_name} ${contractor.last_name}`}
      </td>
      <td className="px-2 my-2  h-16 flex items-start gap-2 justify-center flex-col">
        <span className="relative left-4">{contractor.identification}</span>
        <button
          onClick={() =>
            handleModalInfos(
              contractor.identification,
              contractor.urlDocumentProof,
            )
          }
          className="buttonStyle1 relative left-2 text-xs py-[0.09rem] px-2"
        >
          Document img
        </button>
      </td>
      <td className="px-4">{contractor.telephone}</td>
      <td className="px-4">
        <button
          onClick={() =>
            handleModalInfos(
              contractor.address[0],
              contractor.urlPrimaryResidencyProof,
            )
          }
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
