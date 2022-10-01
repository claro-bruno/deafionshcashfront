import { Circle, Envelope, PencilSimpleLine, Phone } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { Contractor } from '../../../../types/contractor'

export default function CardContractor({
  setIsModalOpen,
  contractor,
}: {
  setIsModalOpen: () => void
  contractor: Contractor
}) {
  const [status, setStatus] = useState({ name: '', color: '' })
  function checkContractorStatus() {
    if (contractor?.status === 'ACTIVE') {
      setStatus({ name: 'Active', color: 'green' })
      return 'Active'
    } else if (contractor?.status === 'PENDING') {
      setStatus({ name: 'Pending', color: 'yellow' })
    } else {
      setStatus({ name: 'Inactive', color: 'red' })
    }
  }
  useEffect(() => {
    checkContractorStatus()
  }, [contractor])
  return (
    <div className="h-[21vh] flex items-center justify-between p-2">
      <div className="flex gap-4 rounded w-[20rem] bg-zinc-50 shadow-lg py-4 px-4">
        <img
          className="h-20 w-20 object-cover rounded-md"
          src={
            contractor.urlProfile ||
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          }
          alt="profile "
        />
        <div className="flex flex-col text-sm">
          <span className="contractorCardInfos">
            <Circle weight="fill" color={status.color} />
            {status.name}
          </span>
          <span className="contractorCardInfos">
            <PencilSimpleLine />
            {`${contractor.first_name} ${contractor.last_name}`}
          </span>
          <span className="contractorCardInfos">
            <Envelope weight="fill" />${contractor.email}
          </span>
          <span className="contractorCardInfos">
            <Phone weight="fill" />
            {contractor.telephone}
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={setIsModalOpen}
        className="px-4 contractorBtns  buttonStyle2"
      >
        Edit
      </button>
    </div>
  )
}
