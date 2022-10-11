import { PropsWithChildren, useMemo, useState } from 'react'
import { createContext } from 'use-context-selector'
import useModal from '../../hooks/useModal'
import { TJob } from '../../types/job'

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
  const [jobs, setJobs] = useState<TJob[]>([])
  const { switchModalView, isModalOpen } = useModal()

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
      isModalOpen,
    }),
    [jobToEdit, currentInputJobValue, isModalOpen],
  )

  return (
    <jobsContext.Provider
      value={{ ...valueToProvide, handleSwitchModalView, jobs, handleSetJobs }}
    >
      {props.children}
    </jobsContext.Provider>
  )
}
