import { useQuery } from '@tanstack/react-query'
import { GearSix } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { axiosGetAllJobs } from '../../api/jobs'
import Header from '../../components/header/Header'
import SelectFilter from '../../components/listboxes/SelectFilter'
import LoadingSpinner from '../../components/LoadingSpinner'
import { jobsContext } from '../../context/JobProvider/JobContextProvider'
import {
  fortnightListBox,
  MONTHS,
  monthsListBox,
  yearsListBox,
} from '../../helpers/constants'
import { headerTableJobs } from '../../helpers/headersTables'
import { useDateFilter } from '../../hooks/useDateFIlter'
import useFormate from '../../hooks/useFormate'
import JobTableLine from './components/JobTableLine'
import NewJob from './components/NewJob'

export interface DaysObj {
  dayNum: number
  weakDayName: string
}

export default function Jobs() {
  const {
    setMonthName,
    monthName,
    setYearName,
    yearName,
    handleFilters,
    setFilterContractor,
    filterContractor,
  } = useDateFilter()
  const [fortnightDays, setFortnightDays] = useState<DaysObj[]>([])
  const { handleSwitchModalView, jobs, handleSetJobs } = useContextSelector(
    jobsContext,
    (context) => context,
  )
  const { formatDate } = useFormate()
  const { id } = useParams()
  /* console.log(id) */

  const { data, isRefetching, isLoading } = useQuery<any>(['jobs'], () =>
    axiosGetAllJobs({ month: monthName, year: yearName }),
  )
  function formatFortnightDays(quarter: string) {
    const fortnight =
      quarter === 'Quinzena 1'
        ? addWeakDayName().splice(0, 15)
        : addWeakDayName().splice(15)

    setFortnightDays(fortnight)
  }
  useEffect(() => {
    if (data) {
      const jobFormatted = data.data.map((job: any) => ({
        ...job,
        quarter: job.quarter.map((quarter: any) => ({
          ...quarter,
          appointment: quarter.appointment.map((appointment: any) => ({
            ...appointment,
            date: formatDate(appointment.date),
          })),
        })),
      }))
      handleSetJobs(jobFormatted)
    }
    if (isRefetching) {
      handleSetJobs([])
    }
  }, [data, formatDate, handleSetJobs, isRefetching])

  useEffect(() => {
    if (id) {
      const jobsFilteredByUserId = jobs.filter(
        (user) => user.contractor.id === Number(id),
      )
      handleSetJobs(jobsFilteredByUserId)
    }
    formatFortnightDays('Quinzena 1')
  }, [monthName])

  function getDaysOfMonth() {
    const getMonthNumberByName = MONTHS.indexOf(monthName) + 1
    const date = new Date()
    const days = new Date(date.getFullYear(), getMonthNumberByName, 0).getDate()
    return [...Array(days).keys()].map((i) => i + 1)
  }

  function addWeakDayName() {
    const days = getDaysOfMonth()
    const weakDaysNamed = days.map((day) => {
      const date = new Date(`${yearName}-${monthName}-${day}`)
      return {
        dayNum: day,
        weakDayName: date.toLocaleString('en-us', { weekday: 'narrow' }),
      }
    })
    return weakDaysNamed
  }

  return (
    <div>
      <Header>
        <div className="relative z-10 left-24 mx-auto flex items-center gap-2">
          <SelectFilter setFilter={setYearName} selectOptions={yearsListBox} />
          <SelectFilter
            setFilter={setMonthName}
            selectOptions={monthsListBox}
            listCSS="w-[8rem]"
          />
          <input
            placeholder="Ex: John"
            onChange={(e) => setFilterContractor(e.target.value)}
            className="inputsDefault mt-[0.2rem] "
            value={filterContractor}
            type="text"
          />
        </div>
      </Header>
      <div className="2xl:flex 2xl:items-center 2xl:justify-center">
        <div className="tableContainer 2xl:w-[80vw] items-center flex flex-col overflow-auto ">
          <span className="relative h-10 flex gap-2 my-1 items-center font-extrabold text-xl self-center">
            {`${yearName} ${monthName}`}

            <SelectFilter
              setFilter={formatFortnightDays}
              selectOptions={fortnightListBox}
              listCSS=" w-[8rem]"
            />
          </span>
          <button
            type="button"
            onClick={handleSwitchModalView}
            className="w-28 text-xs absolute left-[90%] mt-2  flex justify-center break-words buttonStyle1"
          >
            Add new Contractor/work
          </button>
          <table className="table">
            <thead className="tableHead  ">
              <tr className="">
                {headerTableJobs.map((item, index) => {
                  if (item === 'Month') {
                    return (
                      <th key={index} className="flex gap-1 justify-center">
                        {fortnightDays.map((day) => (
                          <p
                            key={day.dayNum}
                            className=" w-[1.529rem] py-4 flex flex-col items-center "
                          >
                            <span>{day.dayNum}</span>
                            <span className="text-xs">{day.weakDayName}</span>
                          </p>
                        ))}
                      </th>
                    )
                  }
                  return (
                    <th
                      scope="col"
                      key={index}
                      className=" first:pl-6 last:text-pink-500 "
                    >
                      {item}
                    </th>
                  )
                })}
                <th className="tableLine">
                  <GearSix size={24} />
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr className="tableLoading">
                  <LoadingSpinner css="w-10 h-10" />
                </tr>
              ) : (
                jobs.map((job: any) => {
                  if (handleFilters(job)) {
                    return (
                      <JobTableLine
                        key={job.id}
                        job={job}
                        fortnightDays={fortnightDays}
                      />
                    )
                  } else {
                    return []
                  }
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
      <NewJob />
    </div>
  )
}
