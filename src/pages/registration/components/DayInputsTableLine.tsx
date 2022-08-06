import React, { useState } from 'react'
import { INITIAL_STATE_31_DAYS_OBJ } from '../constants'
import { DaysObj } from '../Registration'

export default function DayInputsTableLine({
  fortnightDays,
  contractor,
}: {
  fortnightDays: DaysObj[]
  contractor: any
}) {
  const [contractorWorkedInfos, setContractorWorkedInfos] = useState({
    ...contractor,
  })
  function handleChange(e: any) {
    const { name, value } = e.target
    /*   contractor.workedDays[name] = value */
    /* como alterar com mutabilidade */
    setContractorWorkedInfos((state) => ({
      ...state,
      workedDays: { ...state.workedDays, [name]: value },
    }))
  }

  return (
    <td className="flex items-center justify-center">
      <p className="flex justify-center relative top-1 gap-1">
        {fortnightDays.map((day: any) => (
          <input
            key={day.dayNum}
            name={day.dayNum.toString()}
            value={contractorWorkedInfos.workedDays[day.dayNum]}
            onChange={(e) => handleChange(e)}
            type="number"
            max={3}
            className={`${
              day.weakDayName === 'S' && 'bg-zinc-500 text-white'
            } w-[1.529rem] outline-none ring-1 ring-transparent focus:ring-brand text-center h-10 border text-[0.7rem] `}
          />
        ))}
      </p>
      <button
        onClick={() => console.log(contractorWorkedInfos)}
        className="border bg-brand3 text-white rounded-lg py-1 px-4 absolute right-[3.7%] "
        type="button"
      >
        Save
      </button>
    </td>
  )
}
