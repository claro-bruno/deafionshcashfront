import { useQuery } from '@tanstack/react-query'
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { axiosGetAllJobs } from '../api/jobs'
import useModal from '../hooks/useModal'
import { jobsATT } from '../pages/job/constants'
import { TJob } from '../types/job'

interface JobContext {
  jobToEdit: TJob
  handleEditJob: (job: TJob) => void
  currentInputJobValue: string
  handleCurrentInputJobValue: (value: string) => void
  handleSwitchModalView: () => void
  isModalOpen: boolean
  jobs: TJob[]
  handleSetJobs: (jobs: TJob[]) => void
}

export const jobsContext = createContext({} as JobContext)
export default function JobContextProvider(props: PropsWithChildren) {
  const [jobToEdit, setJobToEdit] = useState<TJob>({} as TJob)
  const [currentInputJobValue, setCurrentInputJobValue] = useState('0')
  const [jobs, setJobs] = useState<TJob[]>(jobsATT as TJob[])
  const { switchModalView, isModalOpen } = useModal()
  const { data } = useQuery<any>(['jobs'], axiosGetAllJobs)

  useEffect(() => {
    if (data) {
      console.log(data)
      /* setar o que vem da api
      setJobs(data.data) */
    }
  }, [data])

  function handleEditJob(job: TJob) {
    setJobToEdit(job)
  }
  function handleSetJobs(data: TJob[]) {
    setJobs(data)
  }
  function handleCurrentInputJobValue(value: string) {
    setCurrentInputJobValue(value)
  }
  function handleSwitchModalView() {
    if (isModalOpen && jobToEdit) {
      setJobToEdit({} as TJob)
    }
    switchModalView()
  }
  const valueToProvide = useMemo(
    () => ({
      jobToEdit,
      handleEditJob,
      currentInputJobValue,
      handleCurrentInputJobValue,
      handleSwitchModalView,
      isModalOpen,
      handleSetJobs,
      jobs,
    }),
    [jobToEdit, currentInputJobValue, isModalOpen, jobs],
  )

  return (
    <jobsContext.Provider value={valueToProvide}>
      {props.children}
    </jobsContext.Provider>
  )
}
