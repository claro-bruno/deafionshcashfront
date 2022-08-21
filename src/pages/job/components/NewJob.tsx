import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { jobsContext } from '../../../context/JobContextProvider'
import { clients, contractors, createObjectDaysByMonth } from '../constants'
import '../../../components/modals/modal.css'

const WEEKDAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

type NewJobProps = {
  tableDate: { monthName: string; yearName: string }
}

export default function NewJob({ tableDate }: NewJobProps) {
  const { jobToEdit, users, handleSetUsers } = useContext(jobsContext)
  const newJob = useForm({
    defaultValues: {
      contractor: '',
      client: '',
      pHour: '',
      hours: '0',
      year: tableDate.yearName,
      month: tableDate.monthName,
      workedDaysInfos: {},
    },
  })

  const { register, handleSubmit, reset } = newJob
  const [hoursWorked, setHoursWorked] = useState('0')
  const [daysWorked, setDaysWorked] = useState<string[]>([])
  const { handleCurrentInputJobValue, handleCloseModal, isModalOpen } =
    useContext(jobsContext)

  function handleCreateNewJob(data: any) {
    const formattedNewJob = {
      ...data,
      month: tableDate.monthName,
      year: Number(tableDate.yearName),
      workedDaysInfos: createObjectDaysByMonth(data.month, data.year, {
        hours: hoursWorked,
        days: daysWorked,
      }),
    }
    handleCurrentInputJobValue(hoursWorked)
    console.log(formattedNewJob)
    handleSetUsers([...users, formattedNewJob])
    reset()
    setDaysWorked([])
    handleCloseModal()
  }
  function handleEditJob(data: any) {
    const formattedEditedJob = {
      id: jobToEdit.id,
      ...data,
    }
    handleCurrentInputJobValue(hoursWorked)
    const usersFiltered = users.filter((user) => user.id !== jobToEdit.id)
    const newUsers = [...usersFiltered, formattedEditedJob]
    handleSetUsers(newUsers)
    reset()
    setDaysWorked([])
    handleCloseModal()
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
                  <div className=" flex flex-col gap-4 items-center justify-center">
                    <label className="flex flex-col gap-4 items-center"></label>
                    <label className="labelsDefault">
                      Contractor:
                      <input
                        className="inputsDefault"
                        list="contractors"
                        type="text"
                        {...register('contractor')}
                      />
                    </label>
                    <datalist id="contractors">
                      {contractors.map((contractor, index) => (
                        <option key={index} value={contractor} />
                      ))}
                    </datalist>
                    <label className="labelsDefault">
                      Client:
                      <input
                        list="clients"
                        className="inputsDefault"
                        type="text"
                        {...register('client')}
                      />
                    </label>
                    <datalist id="clients">
                      {clients.map((client, index) => (
                        <option key={index} value={client} />
                      ))}
                    </datalist>
                    <label className="labelsDefault">
                      P/Hour:
                      <input
                        {...register('pHour')}
                        className="inputsDefault"
                        type="number"
                      />
                    </label>
                    <label className="labelsDefault">
                      Hours:
                      <input
                        onChange={(e) => setHoursWorked(e.target.value)}
                        className="inputsDefault"
                        type="number"
                      />
                    </label>
                    <label className=" w-[16rem] ml-6 self-center gap-1 flex flex-col labelsDefault">
                      Working Days:
                      <div className="flex flex-wrap gap-2">
                        {WEEKDAYS.map((day, index) => (
                          <label
                            key={index}
                            className="flex gap-1 text-sm items-center"
                          >
                            <input
                              value={day}
                              onChange={(e) => handleCheckboxAddNewWorkedDay(e)}
                              type="checkbox"
                            />
                            {day}
                          </label>
                        ))}
                      </div>
                    </label>
                  </div>
                  <div className="pt-7 text-sm flex flex-col items-center gap-5">
                    {jobToEdit.id ? (
                      <button
                        type="button"
                        className="buttonStyle1 px-3"
                        onClick={handleSubmit(handleEditJob)}
                      >
                        Edit
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="buttonStyle1 px-3"
                        onClick={handleSubmit(handleCreateNewJob)}
                      >
                        Create
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
