import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react'
import { jobsContext } from '../../../context/JobContextProvider'
import { Job } from '../../../types/job'
import { DaysObj } from '../Job'

export default function DayInputsTableLine({
  fortnightDays,
  contractor,
}: {
  fortnightDays: DaysObj[]
  contractor: Job
}) {
  const [contractorWorkedInfos, setContractorWorkedInfos] =
    useState<Job>(contractor)
  const {
    handleCurrentInputJobValue,
    currentInputJobValue,
    handleEditJob,
    handleCloseModal,
  } = useContext(jobsContext)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    handleCurrentInputJobValue(value)

    setContractorWorkedInfos((state: any) => ({
      ...state,
      workedDaysInfos: {
        ...state.workedDaysInfos,
        [name]: { ...state.workedDaysInfos[name], workedHours: value },
      },
    }))
  }

  function handleKeyPress(
    e: KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) {
    const { name } = e.target
    const isKeyTab = e.key === 'Tab'
    if (isKeyTab) {
      setContractorWorkedInfos((state: any) => ({
        ...state,
        workedDaysInfos: {
          ...state.workedDaysInfos,
          [name]: {
            ...state.workedDaysInfos[name],
            workedHours: currentInputJobValue,
          },
        },
      }))
    }
  }

  function getWorkedDayValue(day: number) {
    const contractorArr = Object.entries(contractorWorkedInfos.workedDaysInfos)
    const currentContractor = contractorArr.find(
      (_, index) => index === day,
    ) as [string, { workedHours: string }]

    if (currentContractor) {
      return currentContractor[1].workedHours
    }
  }

  function getWorkedDayName(day: number) {
    const contractorArr = Object.entries(contractorWorkedInfos.workedDaysInfos)
    const currentContractor = contractorArr.find(
      (_, index) => index === day,
    ) as [string, { workedHours: string }]

    return currentContractor[0]
  }

  function handleEditContractor() {
    handleEditJob(contractorWorkedInfos)
    console.log(contractorWorkedInfos)
    handleCloseModal()
  }

  return (
    <td className="flex items-center justify-center">
      <p className="flex justify-center gap-1">
        {fortnightDays.map((day: DaysObj, index) => (
          <input
            key={day.dayNum}
            placeholder="0"
            name={getWorkedDayName(index)}
            value={getWorkedDayValue(index)}
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
        onClick={handleEditContractor}
        className="buttonStyle2 text-xs py-[0.09rem] px-2 absolute right-[2.5%] "
        type="button"
      >
        Edit
      </button>
    </td>
  )
}
