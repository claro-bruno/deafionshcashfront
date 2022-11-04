import { Dialog, Transition } from '@headlessui/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useContext, useContextSelector } from 'use-context-selector'
import { axiosGetAllClients } from '../../../api/client'
import { axiosGetAllContractors } from '../../../api/contractor'
import { axiosCreateNewJob, axiosUpdateCreatedJob } from '../../../api/jobs'
import '../../../components/modals/modal.css'
import { alertContext } from '../../../context/AlertProvider/AlertContextProvider'
import { jobsContext } from '../../../context/JobProvider/JobContextProvider'
import { WEEKDAYS } from '../../../helpers/constants'
import { Clients } from '../../../types/client'
import { Contractor } from '../../../types/contractor'

export default function NewJob() {
  const { jobToEdit, handleSwitchModalView, isModalOpen, editJob } =
    useContextSelector(jobsContext, (context) => context)
  const contractorName =
    jobToEdit?.contractor &&
    `${jobToEdit.contractor.first_name} ${jobToEdit.contractor.last_name}`
  const clientName = jobToEdit?.client && jobToEdit.client.name

  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      contractor: '',
      client: '',
      value_hour: '',
      hours: '',
      taxes: '',
      shirts: '',
    },
  })
  const contractorInput = watch('contractor')
  const clientInput = watch('client')
  const [daysWorked, setDaysWorked] = useState<string[]>([])
  const { changeAlertModalState, getAlertMessage } = useContext(alertContext)
  const { data: clients } = useQuery(['clients'], axiosGetAllClients)
  const { data: contractors } = useQuery(
    [`contractors`],
    axiosGetAllContractors,
  )
  const [contractorsList, setContractorsList] = useState<Contractor[]>([])
  const [clientsList, setClientsList] = useState<Clients>([])
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation(axiosCreateNewJob, {
    onSuccess() {
      queryClient.invalidateQueries(['jobs'])
      reset()
      setDaysWorked([])
      handleCloseModal()
    },
    onError: (error: { response: any }) => {
      console.log(error.response?.data)
      getAlertMessage({
        message: error.response?.data,
      })
      changeAlertModalState()
    },
  })

  const { mutateAsync: mutateAsyncEdit } = useMutation(axiosUpdateCreatedJob, {
    onSuccess() {
      queryClient.invalidateQueries(['jobs'])
      reset()
      setDaysWorked([])
      handleCloseModal()
    },
    onError: (error: { response: any }) => {
      console.log(error.response?.data)
      getAlertMessage({
        message: error.response?.data,
      })
      changeAlertModalState()
    },
  })

  useEffect(() => {
    if (clients) {
      setClientsList(clients.data)
    }
    if (contractors) {
      setContractorsList(contractors.data)
    }
  }, [clients, contractors])

  function handleCloseModal() {
    editJob({})
    handleSwitchModalView()
    reset()
  }

  function handleCreateNewJob(data: any) {
    const formattedNewJob = {
      id_contractor: Number(data.contractor.replace(/[^0-9]+/g, '')),
      id_client: Number(data.client.replace(/[^0-9]+/g, '')),
      value_hour: Number(data.value_hour),
      hours: Number(data.hours),
      taxes: Number(data.taxes),
      shirts: Number(data.shirts),
      monday: daysWorked.some((day) => day.toLowerCase() === 'monday'),
      tuesday: daysWorked.some((day) => day.toLowerCase() === 'tuesday'),
      wednesday: daysWorked.some((day) => day.toLowerCase() === 'wednesday'),
      thursday: daysWorked.some((day) => day.toLowerCase() === 'thursday'),
      friday: daysWorked.some((day) => day.toLowerCase() === 'friday'),
      saturday: daysWorked.some((day) => day.toLowerCase() === 'saturday'),
      sunday: daysWorked.some((day) => day.toLowerCase() === 'sunday'),
    }
    console.log(formattedNewJob)
    mutateAsync(formattedNewJob)
  }

  function handleEditJob(data: any) {
    const formattedEditedJob = {
      id: jobToEdit.id,
      id_contractor: Number(data.contractor.replace(/[^0-9]+/g, '')),
      id_client: Number(data.client.replace(/[^0-9]+/g, '')),
    }
    console.log(formattedEditedJob)

    mutateAsyncEdit(formattedEditedJob)
  }

  function handleCheckboxAddNewWorkedDay(e: any) {
    const isChecked = e.target.checked
    const day = e.target.value
    if (isChecked) {
      setDaysWorked((state) => [...state, day])
    } else {
      setDaysWorked((state) => state.filter((d) => d !== day))
    }
  }

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-1"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-1"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="modal">
                  <div
                    tabIndex={0}
                    className="flex items-center focus:outline-none justify-center"
                  ></div>
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center py-4 font-medium leading-6 text-gray-900"
                  >
                    {jobToEdit.contractor ? 'Edit Job' : ' New Job'}
                  </Dialog.Title>
                  <form className=" flex flex-col gap-4 items-center justify-center">
                    <label className="flex flex-col gap-4 items-center"></label>
                    <label className="labelsDefault">
                      Contractor:
                      <input
                        className="inputsDefault"
                        list="contractors"
                        type="text"
                        placeholder={contractorName}
                        {...register('contractor')}
                        required
                      />
                    </label>
                    <datalist id="contractors">
                      {contractorsList.map((contractor) => (
                        <option key={contractor.id}>
                          {`${contractor.id} - ${contractor.first_name} ${contractor.last_name}`}
                        </option>
                      ))}
                    </datalist>
                    <label className="labelsDefault">
                      Client:
                      <input
                        list="clients"
                        className="inputsDefault"
                        type="text"
                        placeholder={clientName}
                        {...register('client')}
                        required
                      />
                    </label>
                    <datalist id="clients" className="text-sm">
                      {clientsList.map((client) => (
                        <option
                          value={`${client.id} - ${client.name}`}
                          key={client.id}
                        />
                      ))}
                    </datalist>

                    {!jobToEdit.contractor && (
                      <>
                        <label className="labelsDefault">
                          P/Hour:
                          <input
                            {...register('value_hour')}
                            className="inputsDefault"
                            type="number"
                            required
                          />
                        </label>
                        <label className="labelsDefault">
                          Hours:
                          <input
                            {...register('hours')}
                            className="inputsDefault"
                            type="number"
                            required
                          />
                        </label>
                        <label className=" w-[16rem] ml-6 self-center gap-1 flex flex-col labelsDefault">
                          Working Days:
                          <div className="flex flex-wrap gap-2">
                            {WEEKDAYS.map((day, index) => (
                              <label
                                key={index}
                                className="flex  gap-1 text-sm items-center"
                              >
                                <input
                                  value={day}
                                  onChange={(e) =>
                                    handleCheckboxAddNewWorkedDay(e)
                                  }
                                  type="checkbox"
                                />
                                <span className="first-letter:uppercase">
                                  {day}
                                </span>
                              </label>
                            ))}
                          </div>
                        </label>
                      </>
                    )}
                    <div className="pt-7 text-sm flex flex-col items-center gap-5">
                      {jobToEdit.id ? (
                        <button
                          type="submit"
                          className="buttonStyle2 px-3"
                          onClick={handleSubmit(handleEditJob)}
                          disabled={!contractorInput || !clientInput}
                        >
                          Edit
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="buttonStyle1 px-3"
                          onClick={handleSubmit(handleCreateNewJob)}
                          disabled={!contractorInput || !clientInput}
                        >
                          Create
                        </button>
                      )}
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
