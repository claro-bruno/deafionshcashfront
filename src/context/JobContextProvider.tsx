import React, { createContext, PropsWithChildren, useState } from 'react'
import useModal from '../hooks/useModal'
import { Job } from '../types/job'

interface JobContext {
  jobToEdit: Job | {}
  handleEditJob: (job: Job) => void
  currentInputJobValue: string
  handleCurrentInputJobValue: (value: string) => void
  closeModal: () => void
  isModalOpen: boolean
}

export const jobsContext = createContext({} as JobContext)

export default function JobContextProvider(props: PropsWithChildren) {
  const [jobToEdit, setJobToEdit] = useState<Job | {}>({})
  const [currentInputJobValue, setCurrentInputJobValue] = useState('')
  const { closeModal, isModalOpen } = useModal()
  function handleEditJob(job: any) {
    setJobToEdit(job)
  }
  function handleCurrentInputJobValue(value: string) {
    setCurrentInputJobValue(value)
  }
  const valueToProvide = {
    jobToEdit,
    handleEditJob,
    currentInputJobValue,
    handleCurrentInputJobValue,
    closeModal,
    isModalOpen,
  }
  return (
    <jobsContext.Provider value={valueToProvide}>
      {props.children}
    </jobsContext.Provider>
  )
}
