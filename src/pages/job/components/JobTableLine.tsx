import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosUpdateNewJob } from '../../../api/jobs'
import { jobsContext } from '../../../context/JobContextProvider'
import useFormate from '../../../hooks/useFormate'
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
  const { formatDate, formatMoney } = useFormate()
  const queryClient = useQueryClient()
  const { mutateAsync, data } = useMutation(axiosUpdateNewJob, {
    onSuccess() {
      queryClient.invalidateQueries(['jobs'])
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
  const isFirstQuarter = formatDate(
    daysInputs[daysInputs.length - 1].date,
  ).includes('/15/')

  const hoursValue = isFirstQuarter
    ? contractorWorkedInfos.quarters[0].hours
    : contractorWorkedInfos.quarters[1].hours

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    options?: string,
  ) {
    const { name, value } = e.target
    const quarter1 = contractorWorkedInfos.quarters[0]
    const quarter2 = contractorWorkedInfos.quarters[1]
    handleCurrentInputJobValue(value)
    console.log(name, value)
    if (options) {
      setContractorWorkedInfos((state) => ({
        ...state,
        quarters: isFirstQuarter
          ? [{ ...quarter1, [name]: Number(value) }, quarter2]
          : [quarter1, { ...quarter2, [name]: Number(value) }],
      }))
      return
    }

    setContractorWorkedInfos((state) => {
      const handleJobArray = daysInputs.map((obj) => {
        if (obj.date === name) {
          return { ...obj, value: Number(value) }
        }
        return obj
      })
      return {
        ...state,
        quarters: isFirstQuarter
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
    if (isKeyTab) {
      setContractorWorkedInfos((state) => {
        const handleJobArray = daysInputs.map((obj) => {
          if (obj.date === name) {
            return { ...obj, value: Number(currentInputJobValue) }
          }
          return obj
        })
        return {
          ...state,
          quarters: isFirstQuarter
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
    const jobToUpdateFormatted = {
      id: jobInfos.id,
      month: jobInfos.quarters[0].month,
      value_hour: pHourValue,
      status: jobInfos.status,
      year: jobInfos.quarters[0].year,
      quarter: isFirstQuarter ? 1 : 2,
      workedDaysInfos: daysInputs,
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
            {daysInputs.map((day) => (
              <input
                key={formatDate(day.date)}
                name={formatDate(day.date)}
                value={day.value}
                onChange={handleChange}
                onKeyUp={handleKeyPress}
                type="number"
                title={day.value.toString()}
                className={`${
                  getDayByDate(day.date) === 'S' && 'bg-zinc-500 text-white'
                } w-[1.529rem] outline-none ring-1 ring-transparent focus:ring-brand text-center h-10 border text-[0.7rem] `}
              />
            ))}
          </p>
        }
      </td>
      <td>{hoursValue}</td>
      <td className="w-[5rem]">
        $
        <input
          onChange={(e) => handleChange(e, 'pHour')}
          name="value_hour"
          className="w-[2.1rem] border ml-1 p-1"
          value={pHourValue}
        />
      </td>
      <td>{formatMoney(pHourValue * hoursValue)}</td>

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
