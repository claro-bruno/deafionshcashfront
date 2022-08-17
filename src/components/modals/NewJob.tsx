import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  clients,
  contractors,
  createObjectDaysByMonth,
} from '../../pages/job/constants'
import { ModalProps } from '../../types/modal'
import './modal.css'

const WEEKDAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

type NewJobProps = ModalProps & { users: any[] }

export default function NewJob({
  isModalOpen,
  closeModal,
  users,
}: NewJobProps) {
  const newJob = useForm({
    defaultValues: {
      contractor: '',
      client: '',
      pHour: '',
      hours: '0',
      year: '2022',
      month: 'January',
      workedDaysInfos: {},
    },
  })

  const { register, handleSubmit } = newJob
  const [hoursWorked, setHoursWorked] = useState(0)
  const [daysWorked, setDaysWorked] = useState<string[]>([])

  function handleCreateNewJob(data: any) {
    const formatedNewJob = {
      ...data,
      workedDaysInfos: createObjectDaysByMonth(data.month, data.year, {
        hours: hoursWorked,
        days: daysWorked,
      }),
    }
    console.log(formatedNewJob)
    /* users.push(data) */
    closeModal()
  }
  function addNewWorkedDay(e: any) {
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
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
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
                leave="ease-in duration-200"
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
                    New Job
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
                        onChange={(e) => setHoursWorked(Number(e.target.value))}
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
                              onChange={(e) => addNewWorkedDay(e)}
                              type="checkbox"
                            />
                            {day}
                          </label>
                        ))}
                      </div>
                    </label>
                  </div>
                  <div className="pt-7 text-sm flex flex-col items-center gap-5">
                    <button
                      type="button"
                      className="buttonStyle1 px-3"
                      onClick={handleSubmit(handleCreateNewJob)}
                    >
                      Create
                    </button>
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
