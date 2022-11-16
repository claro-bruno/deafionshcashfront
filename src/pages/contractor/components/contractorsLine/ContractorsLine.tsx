import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'use-context-selector'
import { axiosUpdateContractorStatus } from '../../../../api/contractor'
import { alertContext } from '../../../../context/AlertProvider/AlertContextProvider'
import useFormate from '../../../../hooks/useFormate'
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
  const { changeAlertModalState, getAlertMessage } = useContext(alertContext)
  const { mutateAsync } = useMutation(axiosUpdateContractorStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries(['contractors'])
    },
    onError: (error: { response: any }) => {
      console.log(error.response?.data)
      getAlertMessage({
        message: error.response?.data,
      })
      changeAlertModalState()
    },
  })
  const { formatPhone } = useFormate()
  function handleUpdateContractor(payload: any) {
    const contractorObj = { id: payload.id, status: contractorStatus }
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
      <td className="tableLine">
        {' '}
        <Link to={`/contractors/${contractor.id}`}>
          {`${contractor.first_name} ${contractor.last_name}`}
        </Link>
      </td>
      <td className="px-2 my-2  h-16 flex items-center gap-2 justify-center flex-col">
        <span>{contractor.identification}</span>
        <button
          onClick={() =>
            handleModalInfos(
              contractor.identification,
              contractor.urlDocumentProof,
            )
          }
          className="buttonStyle1 text-xs py-[0.09rem] px-2"
        >
          Document img
        </button>
      </td>
      <td className="tableLine">{formatPhone(contractor.telephone)}</td>
      <td className="tableLine">
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
      <td className="tableLine">
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
