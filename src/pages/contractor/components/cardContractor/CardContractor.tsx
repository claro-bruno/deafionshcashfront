import { Circle, Envelope, PencilSimpleLine, Phone } from 'phosphor-react'
import React from 'react'

export default function CardContractor({
  setIsModalOpen,
}: {
  setIsModalOpen: () => void
}) {
  function formatCellNumber(cellNumber: string) {
    return cellNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 - $3')
  }

  return (
    <div className="h-[21vh] flex items-center justify-between p-2">
      <div className="flex gap-4 rounded w-[20rem] bg-zinc-50 shadow-lg py-4 px-4">
        <img
          className="h-20 w-20 rounded-md"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile "
        />
        <div className="flex flex-col text-sm">
          <span className="contractorCardInfos">
            <Circle weight="fill" color="green" />
            Active
          </span>
          <span className="contractorCardInfos">
            <PencilSimpleLine />
            Bruno alves
          </span>
          <span className="contractorCardInfos">
            <Envelope weight="fill" />
            brunofay1@hotmail.com
          </span>
          <span className="contractorCardInfos">
            <Phone weight="fill" />
            {formatCellNumber('5198547312')}
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={setIsModalOpen}
        className="px-4 contractorBtns  hover:ring-brand2 bg-brand2 transition-colors"
      >
        Edit
      </button>
    </div>
  )
}
