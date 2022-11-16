import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { axiosGetContractorsById } from '../../api/contractor'
import { axiosGetAllJobsById } from '../../api/jobs'
import Header from '../../components/header/Header'
import SelectFilter from '../../components/listboxes/SelectFilter'
import { AuthContext } from '../../context/AuthProvider'
import { monthsListBox, yearsListBox } from '../../helpers/constants'
import { headerTableContractor } from '../../helpers/headersTables'
import { useDateFilter } from '../../hooks/useDateFIlter'
import useFormate from '../../hooks/useFormate'
import useModal from '../../hooks/useModal'
import {
  Contractor as ContractorType,
  ContractorJob,
} from '../../types/contractor'
import CardContractor from './components/cardContractor/CardContractor'
import ContractorAsideInfos from './components/contractorAsideInfos/ContractorAsideInfos'
import EditContractorModal from './components/editContractorModal/EditContractorModal'
import './contractor.css'

export interface VisibilityWorkedInfos {
  quinzena1: boolean
  quinzena2: boolean
  total: boolean
}

export default function Contractor() {
  const { contractor_id: id, access } = useContextSelector(
    AuthContext,
    (context) => context,
  )
  const { id: urlId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (id !== urlId && access === 'CONTRACTOR') {
      navigate(`/contractors/${id}`)
    }
  }, [urlId, id])

  const { switchModalView, isModalOpen } = useModal()
  const { formatDate, formatMoney } = useFormate()
  const [filterCompany, setFilterCompany] = useState('')
  const [contractorJobs, setContractorJobs] = useState<ContractorJob[]>([])
  const [totalsJobsInfos, setTotalsJobsInfos] = useState([])

  const [contractor, setContractor] = useState<ContractorType>(
    {} as ContractorType,
  )
  const { monthName, setMonthName, setYearName, yearName } = useDateFilter()

  const { data } = useQuery(['contractor', urlId], () =>
    axiosGetContractorsById(Number(urlId)),
  )
  const { data: jobs } = useQuery(['contractorJobs', urlId], () =>
    axiosGetAllJobsById(Number(urlId), { month: monthName, year: yearName }),
  )

  useEffect(() => {
    if (data) {
      setContractor(data.data)
    }
    if (jobs) {
      setContractorJobs(jobs.data.contractor_jobs)
      setTotalsJobsInfos(jobs.data.totals)
    }
  }, [data, jobs])

  function tableFilters(item: ContractorJob) {
    const filterByClient = item.name
      .toLowerCase()
      .includes(filterCompany.toLowerCase())
    const filterByDate = item.month
      .toLowerCase()
      .includes(monthName.toLowerCase())
    return filterByClient && filterByDate
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header>
        <div className="relative left-20 mx-auto flex items-center gap-2">
          <SelectFilter setFilter={setYearName} selectOptions={yearsListBox} />
          <SelectFilter
            setFilter={setMonthName}
            selectOptions={monthsListBox}
            listCSS="w-[8rem]"
          />
          <input
            placeholder="Ex:amazon"
            onChange={(e) => setFilterCompany(e.target.value)}
            className="inputsDefault mt-[0.2rem] "
            value={filterCompany}
            type="text"
          />
        </div>
      </Header>
      <main className="flex flex-col">
        <CardContractor
          contractor={contractor}
          setIsModalOpen={() => switchModalView()}
        />

        <div className="tableContainer relative left-2 flex gap-4 w-[75%] max-h-[70vh] overflow-auto">
          <table className="table">
            <thead className="tableHead">
              <tr>
                {headerTableContractor.map((item, index) => (
                  <th scope="col" key={index} className="tableLine">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <>
                {contractorJobs.map((job, index) => {
                  if (tableFilters(job)) {
                    if (job.value > 0) {
                      return (
                        <tr key={index} className="bg-white border-b ">
                          <td scope="row" className="tableLine">
                            {new Intl.DateTimeFormat('en-US').format(
                              new Date(job.date),
                            )}
                          </td>
                          <td className="tableLine flex flex-wrap max-w-[9rem]">
                            <Link to={`/clients/${job.id}`}>{job.name}</Link>
                          </td>
                          <td className="tableLine ">{job.value} h</td>
                          <td className="tableLine">
                            {formatMoney(job.value_hour)}
                          </td>
                        </tr>
                      )
                    }
                  } else {
                    return []
                  }
                })}
              </>
            </tbody>
          </table>
          {<ContractorAsideInfos totals={totalsJobsInfos} />}
        </div>
      </main>
      <EditContractorModal
        modalInfos={contractor}
        isModalOpen={isModalOpen}
        switchModalView={() => switchModalView()}
      />
    </div>
  )
}
