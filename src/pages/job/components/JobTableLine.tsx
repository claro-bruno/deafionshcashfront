import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react'
import { jobsContext } from '../../../context/JobContextProvider'
import { Job } from '../../../types/job'
import { DaysObj } from '../Job'

export default function JobTableLine({
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
    handleswitchModalView,
  } = useContext(jobsContext)
  console.log(contractor)
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    options?: string,
  ) {
    const { name, value } = e.target
    handleCurrentInputJobValue(value)
    if (options) {
      setContractorWorkedInfos({
        ...contractorWorkedInfos,
        [name]: value,
      })
      return
    }

    setContractorWorkedInfos((state: any) => {
      const handleJobArray = state.workedDaysInfos.map((e: any) => {
        if (e.day === name) {
          return { ...e, workedHours: value }
        }
        return e
      })
      return {
        ...state,
        workedDaysInfos: handleJobArray,
      }
    })
  }

  function handleKeyPress(
    e: KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) {
    const { name } = e.target
    const isKeyTab = e.key === 'Tab'
    if (isKeyTab) {
      setContractorWorkedInfos((state: any) => {
        const handleJobArray = state.workedDaysInfos.map((e: any) => {
          if (e.day === name) {
            return { ...e, workedHours: currentInputJobValue }
          }
          return e
        })
        return {
          ...state,
          workedDaysInfos: handleJobArray,
        }
      })
    }
  }

  function getWorkedDayValue(day: number) {
    const contractorArr = Object.entries(contractorWorkedInfos.workedDaysInfos)
    const currentContractor = contractorArr.find(
      (_, index) => index + 1 === day,
    ) as [string, { day: string; weekday: string; workedHours: string }]

    if (currentContractor) {
      const value = currentContractor[1].workedHours
      return value
    }
  }

  function getWorkedDayName(day: number) {
    const contractorArr = Object.entries(contractorWorkedInfos.workedDaysInfos)
    const currentContractor = contractorArr.find(
      (_, index) => index + 1 === day,
    ) as [string, { day: string; weekday: string; workedHours: string }]
    const dayName = currentContractor[1].day
    return dayName
  }
  function handleUpdateJob(jobInfos: Job) {
    const fistDayOfQuarter = fortnightDays[0].dayNum
    const lastDayOfQuarter = fortnightDays[fortnightDays.length - 1].dayNum
    const isQuarterOne = fistDayOfQuarter === 1
    const jobToUpdateFormatted = {
      id: jobInfos.id,
      month: jobInfos.month,
      pHour: jobInfos.pHour,
      year: jobInfos.year,
      quarter: isQuarterOne ? 1 : 2,
      workedDaysInfos: isQuarterOne
        ? jobInfos.workedDaysInfos.slice(0, lastDayOfQuarter)
        : jobInfos.workedDaysInfos.slice(15, lastDayOfQuarter),
    }

    console.log(jobToUpdateFormatted)
  }
  function handleEditContractor() {
    handleEditJob(contractorWorkedInfos)
    console.log(contractorWorkedInfos)
    handleswitchModalView()
  }

  return (
    <tr key={contractor.id} className=" bg-white border-b ">
      <td className="pl-4 ">
        <select
          onChange={handleChange}
          className="rounded bg-white border outline-none p-1"
          name="jobStatus"
        >
          <option value="active">active</option>
          <option value="inactive">inactive</option>
        </select>
      </td>
      <td className="max-w-[9rem]">{contractor.contractor}</td>
      <td>{contractor.client}</td>
      <td className="flex items-center justify-center">
        <p className="flex justify-center py-2 gap-1">
          {fortnightDays.map((day: DaysObj) => (
            <input
              key={getWorkedDayName(day.dayNum)}
              placeholder="0"
              name={getWorkedDayName(day.dayNum)}
              value={getWorkedDayValue(day.dayNum)}
              onChange={handleChange}
              onKeyUp={handleKeyPress}
              type="number"
              max={3}
              className={`${
                day.weakDayName === 'S' && 'bg-zinc-500 text-white'
              } w-[1.529rem] outline-none ring-1 ring-transparent focus:ring-brand text-center h-10 border text-[0.7rem] `}
            />
          ))}
        </p>
      </td>
      <td>{contractorWorkedInfos.hours}</td>
      <td className="w-[5rem]">
        $
        <input
          onChange={(e) => handleChange(e, 'pHour')}
          name="pHour"
          className="w-[2.1rem] border ml-1 p-1"
          value={contractorWorkedInfos.pHour}
        />
      </td>
      <td>
        ${' '}
        {Number(contractorWorkedInfos.pHour) *
          Number(contractorWorkedInfos.hours)}
      </td>

      <td className=" flex gap-1">
        <button
          onClick={() => handleUpdateJob(contractorWorkedInfos)}
          className="buttonStyle1 text-xs py-[0.09rem] px-2  "
          type="button"
        >
          Save
        </button>
        <button
          onClick={() => console.log(handleEditContractor())}
          className="buttonStyle2 text-xs py-[0.09rem] px-2  "
          type="button"
        >
          Edit
        </button>
      </td>
    </tr>
  )
}
