import { useState } from 'react'
import { DaysObj } from '../Registration'

export default function DayInputsTableLine({
  fortnightDays,
  contractor,
  currentInputValue,
  setCurrentInputValue,
}: {
  fortnightDays: DaysObj[]
  contractor: any
  currentInputValue: string
  setCurrentInputValue: (value: string) => void
}) {
  const [contractorWorkedInfos, setContractorWorkedInfos] = useState({
    ...contractor,
  })

  function handleChange(e: any) {
    const { name, value } = e.target
    /*   contractor.workedDays[name] = value */
    /* como alterar com mutabilidade */
    setCurrentInputValue(value)

    setContractorWorkedInfos((state: any) => ({
      ...state,
      workedDays: { ...state.workedDays, [name]: value },
    }))
  }
  function handleKeyPress(e: any) {
    const { name } = e.target

    const isKeyTab = e.key === 'Tab'
    if (isKeyTab) {
      setContractorWorkedInfos((state: any) => ({
        ...state,
        workedDays: { ...state.workedDays, [name]: currentInputValue },
      }))
    }
  }

  return (
    <td className="flex items-center justify-center">
      <p className="flex justify-center gap-1">
        {fortnightDays.map((day: any) => (
          <input
            key={day.dayNum}
            name={day.dayNum.toString()}
            value={contractorWorkedInfos.workedDays[day.dayNum]}
            onChange={(e) => handleChange(e)}
            onKeyUp={handleKeyPress}
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
        className="buttonStyle1 text-xs py-[0.09rem] px-2 absolute  right-[5.7%] "
        type="button"
      >
        Save
      </button>
      <button
        onClick={() => console.log(contractorWorkedInfos)}
        className="buttonStyle2 text-xs py-[0.09rem] px-2 absolute right-[2.5%] "
        type="button"
      >
        Edit
      </button>
    </td>
  )
}
