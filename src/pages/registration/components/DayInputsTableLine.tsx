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
  let contractorRegistration: any = {}
  function handleChange(e: any) {
    const { name, value } = e.target
    setBoardValue((state) => ({ ...state, [name]: value }))
    contractorRegistration = {
      contractor,
      boardValue,
    }
  }
  console.log('renderizei')

  return (
    <div className="flex items-center justify-center">
      <td className="flex justify-center relative top-1 gap-1">
        {fortnightDays.map((day: any) => (
          <input
            key={day.dayNum}
            name={day.dayNum.toString()}
            value={contractor.workedDays[day.dayNum]}
            onChange={(e) => handleChange(e)}
            type="number"
            max={3}
            className={`${
              day.weakDayName === 'S' && 'bg-zinc-500 text-white'
            } w-[1.529rem] outline-none ring-1 ring-transparent focus:ring-brand text-center h-10 border text-[0.7rem] `}
          />
        ))}
      </td>
      <button
        onClick={() => console.log(contractorRegistration)}
        className="border px-4 absolute right-[0.7%] "
        type="button"
      >
        Save
      </button>
    </div>
  )
}
