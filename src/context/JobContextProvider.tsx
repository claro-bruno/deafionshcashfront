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
import { bodyTable } from '../pages/job/constants'
import { Job } from '../types/job'

interface JobContext {
  jobToEdit: Job
  handleEditJob: (job: Job) => void
  currentInputJobValue: string
  handleCurrentInputJobValue: (value: string) => void
  handleSwitchModalView: () => void
  isModalOpen: boolean
  jobs: Job[]
  handleSetJobs: (jobs: Job[]) => void
}
export const jobsContext = createContext({} as JobContext)
export default function JobContextProvider(props: PropsWithChildren) {
  const [jobToEdit, setJobToEdit] = useState<Job>({} as Job)
  const [currentInputJobValue, setCurrentInputJobValue] = useState('')
  const [jobs, setJobs] = useState<Job[]>(bodyTable)
  const { switchModalView, isModalOpen } = useModal()
  const { data } = useQuery<any>(['jobs'], axiosGetAllJobs)

  useEffect(() => {
    if (data) {
      setJobs(data.data)
    }
  }, [])

  function handleEditJob(job: any) {
    setJobToEdit(job)
  }
  function handleSetJobs(data: Job[]) {
    setJobs(data)
  }
  function handleCurrentInputJobValue(value: string) {
    setCurrentInputJobValue(value)
  }
  function handleSwitchModalView() {
    if (isModalOpen && jobToEdit) {
      setJobToEdit({} as Job)
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
