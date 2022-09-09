import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useState,
} from 'react'
import useModal from '../hooks/useModal'
import { bodyTable } from '../pages/job/constants'
import { Job } from '../types/job'

interface JobContext {
  jobToEdit: Job
  handleEditJob: (job: Job) => void
  currentInputJobValue: string
  handleCurrentInputJobValue: (value: string) => void
  handleCloseModal: () => void
  isModalOpen: boolean
  users: Job[]
  handleSetUsers: (users: Job[]) => void
}

export const jobsContext = createContext({} as JobContext)

export default function JobContextProvider(props: PropsWithChildren) {
  const [jobToEdit, setJobToEdit] = useState<Job>({} as Job)
  const [currentInputJobValue, setCurrentInputJobValue] = useState('')
  const [users, setUsers] = useState<Job[]>(bodyTable)
  const { closeModal, isModalOpen } = useModal()
  function handleEditJob(job: any) {
    setJobToEdit(job)
  }
  function handleSetUsers(data: Job[]) {
    setUsers(data)
  }
  function handleCurrentInputJobValue(value: string) {
    setCurrentInputJobValue(value)
  }
  function handleCloseModal() {
    if (isModalOpen && jobToEdit) {
      setJobToEdit({} as Job)
    }
    closeModal()
  }
  const valueToProvide = useMemo(
    () => ({
      jobToEdit,
      handleEditJob,
      currentInputJobValue,
      handleCurrentInputJobValue,
      handleCloseModal,
      isModalOpen,
      handleSetUsers,
      users,
    }),
    [jobToEdit, currentInputJobValue, isModalOpen, users],
  )

  return (
    <jobsContext.Provider value={valueToProvide}>
      {props.children}
    </jobsContext.Provider>
  )
}
