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
  fortnightDays: any
  job: any
}) {
  const [contractorWorkedInfos, setContractorWorkedInfos] = useState<any>(job)
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
  const pHourValue =
    fortnightDays[0]?.dayNum === 1
      ? contractorWorkedInfos.quarters[0].value_hour
      : contractorWorkedInfos.quarters[1].value_hour
  const daysInputs =
    fortnightDays[0]?.dayNum === 1
      ? contractorWorkedInfos.quarters[0].appointments
      : contractorWorkedInfos.quarters[1].appointments

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    options?: string,
  ) {
    const { name, value } = e.target
    const quarter1 = contractorWorkedInfos.quarters[0]
    const quarter2 = contractorWorkedInfos.quarters[1]
    const lastQuarterDay = daysInputs.length - 1
    handleCurrentInputJobValue(value)
    console.log(name, value)
    if (options) {
      setContractorWorkedInfos((state: any) => ({
        ...state,
        quarters: daysInputs[lastQuarterDay].date.includes('/15/')
          ? [{ ...quarter1, [name]: value }, quarter2]
          : [quarter1, { ...quarter2, [name]: value }],
      }))
      return
    }

    setContractorWorkedInfos((state: any) => {
      const handleJobArray = daysInputs.map((obj: any) => {
        if (obj.date === name) {
          return { ...obj, value }
        }
        return obj
      })
      return {
        ...state,
        quarters: daysInputs[lastQuarterDay].date.includes('/15/')
          ? [{ ...quarter1, appointments: handleJobArray }, quarter2]
          : [quarter1, { ...quarter2, appointments: handleJobArray }],
      }
    })
  }

  function handleKeyPress(
    e: KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) {
    const { name } = e.target
    const isKeyTab = e.key === 'Tab'
    const quarter1 = contractorWorkedInfos.quarters[0]
    const quarter2 = contractorWorkedInfos.quarters[1]
    const lastQuarterDay = daysInputs.length - 1
    if (isKeyTab) {
      setContractorWorkedInfos((state: any) => {
        const handleJobArray = daysInputs.map((obj: any) => {
          if (obj.date === name) {
            return { ...obj, value: currentInputJobValue }
          }
          return obj
        })
        return {
          ...state,
          quarters: daysInputs[lastQuarterDay].date.includes('/15/')
            ? [{ ...quarter1, appointments: handleJobArray }, quarter2]
            : [quarter1, { ...quarter2, appointments: handleJobArray }],
        }
      })
    }
  }
  function getDayByDate(date: string) {
    const day = new Date(date)
    const weekdayName = day.toLocaleString('en-us', { weekday: 'narrow' })

    return weekdayName
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
          defaultValue={job.status}
        >
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>
      </td>
      <td className="max-w-[9rem]">
        <Link to={`/contractors/${job.contractor.id}`}>
          {job.contractor.name}
        </Link>
      </td>
      <td>{job.client.name}</td>
      <td className="flex items-center justify-center">
        {
          <p className="flex justify-center py-2 gap-1">
            {daysInputs.map((day: any) => (
              <input
                key={day.date}
                name={day.date}
                value={day.value}
                onChange={handleChange}
                onKeyUp={handleKeyPress}
                type="number"
                max={3}
                className={`${
                  getDayByDate(day.date) === 'S' && 'bg-zinc-500 text-white'
                } w-[1.529rem] outline-none ring-1 ring-transparent focus:ring-brand text-center h-10 border text-[0.7rem] `}
              />
            ))}
          </p>
        }
      </td>
      <td>{contractorWorkedInfos.hours}</td>
      <td className="w-[5rem]">
        $
        <input
          onChange={(e) => handleChange(e, 'pHour')}
          name="value_hour"
          className="w-[2.1rem] border ml-1 p-1"
          value={pHourValue}
        />
      </td>
      <td>$ {pHourValue * Number(contractorWorkedInfos.hours)}</td>

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
