import { Dialog, Transition } from '@headlessui/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useContext } from 'use-context-selector'
import { axiosGetAllClients } from '../../../api/client'
import { axiosGetAllContractors } from '../../../api/contractor'
import { axiosCreateNewJob, axiosUpdateCreatedJob } from '../../../api/jobs'
import '../../../components/modals/modal.css'
import { alertContext } from '../../../context/AlertProvider/AlertContextProvider'
import { Clients } from '../../../types/client'
import { Contractor } from '../../../types/contractor'

export default function NewReportMonth({ isModalOpen, switchModalView }: any) {
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
    switchModalView()
    reset()
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
                    New Report
                  </Dialog.Title>
                  <form className=" flex flex-col gap-4 items-center justify-center">
                    <label className="flex flex-col gap-4 items-center"></label>
                    <label className="labelsDefault">
                      Payed for:
                      <input
                        className="inputsDefault"
                        list="contractors"
                        type="text"
                        {...register('contractor')}
                        required
                      />
                    </label>
                    <label className="labelsDefault">
                      Date
                      <input
                        {...register('birthDate')}
                        min="1940-12-31"
                        max="2022-12-31"
                        className="inputsDefault"
                        type="date"
                        required
                      />
                    </label>
                    <label className="labelsDefault">
                      Payment Type
                      <select>
                        <option value="">Check</option>
                        <option value="">App</option>
                        <option value="">Receipt</option>
                      </select>
                    </label>
                    <label className="labelsDefault">
                      Payment Identifier:
                      <input
                        list="clients"
                        className="inputsDefault"
                        type="number"
                        {...register('client')}
                        required
                      />
                    </label>

                    <div className="pt-7 text-sm flex flex-col items-center gap-5">
                      {1 + 1 === 3 ? (
                        <button type="submit" className="buttonStyle2 px-3">
                          Edit
                        </button>
                      ) : (
                        <button type="submit" className="buttonStyle1 px-3">
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
