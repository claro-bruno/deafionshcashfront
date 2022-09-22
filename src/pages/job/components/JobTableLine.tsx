import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosUpdateNewJob } from '../../../api/jobs'
import { jobsContext } from '../../../context/JobContextProvider'
import { TJob } from '../../../types/job'
import { DaysObj } from '../Jobs'

export default function JobTableLine({
  fortnightDays,
  job,
}: {
  fortnightDays: DaysObj[]
  job: TJob
}) {
  const [contractorWorkedInfos, setContractorWorkedInfos] = useState<TJob>(job)
  const {
    handleCurrentInputJobValue,
    currentInputJobValue,
    handleEditJob,
    handleSwitchModalView,
  } = useContext(jobsContext)
  const { invalidateQueries } = useQueryClient()
  const { mutateAsync, data } = useMutation(axiosUpdateNewJob, {
    onSuccess() {
      invalidateQueries(['jobs'])
      console.log(data)
    },
    onError(error) {
      console.log(error)
    },
  })
  console.log(job)
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
    if (currentContractor) {
      const dayName = currentContractor[1].day
      return dayName
    }
  }
  function handleUpdateJob(jobInfos: TJob) {
    const fistDayOfQuarter = fortnightDays[0].dayNum
    const lastDayOfQuarter = fortnightDays[fortnightDays.length - 1].dayNum
    const isQuarterOne = fistDayOfQuarter === 1
    const jobToUpdateFormatted = {
      id: jobInfos.id,
      month: jobInfos.month,
      value_hour: jobInfos.value_hour,
      status: jobInfos.status,
      year: jobInfos.year,
      quarter: isQuarterOne ? 1 : 2,
      workedDaysInfos: isQuarterOne
        ? jobInfos.workedDaysInfos.slice(0, lastDayOfQuarter)
        : jobInfos.workedDaysInfos.slice(15, lastDayOfQuarter),
    }

    console.log(jobToUpdateFormatted)
    mutateAsync(jobToUpdateFormatted)
  }

  function handleEditContractor() {
    handleEditJob(contractorWorkedInfos)
    console.log(contractorWorkedInfos)
    handleSwitchModalView()
  }
  return (
    <tr className=" bg-white border-b ">
      <td className="pl-4 ">
        <select
          onChange={(e) => handleChange(e, 'editStatus')}
          className="rounded bg-white border outline-none p-1"
          name="status"
          defaultValue={job.status.toString()}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </td>
      <td className="max-w-[9rem]">
        <Link to={`/contractors/${job.contractor.id}`}>
          {job.contractor.name}
        </Link>
      </td>
      <td>{job.client.name}</td>
      <td className="flex items-center justify-center">
        <p className="flex justify-center py-2 gap-1">
          {fortnightDays.map((day: DaysObj) => (
            <input
              key={getWorkedDayName(day.dayNum)}
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
          name="value_hour"
          className="w-[2.1rem] border ml-1 p-1"
          value={contractorWorkedInfos.value_hour}
        />
      </td>
      <td>
        ${' '}
        {Number(contractorWorkedInfos.value_hour) *
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
