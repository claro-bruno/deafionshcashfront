import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import {
  clients,
  contractors,
  INITIAL_STATE_31_DAYS_OBJ,
} from '../../pages/registration/constants'
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

type NewRegistrationProps = ModalProps & { users: any[] }

export default function NewRegistration({
  isModalOpen,
  closeModal,
  users,
}: NewRegistrationProps) {
  const newJob = useForm({
    defaultValues: {
      contractor: '',
      client: '',
      pHour: '',
      hours: '0',
      month: 'January',
      workedDays: INITIAL_STATE_31_DAYS_OBJ,
    },
  })
  const { register, handleSubmit } = newJob
  function handleCreateNewJob(data: any) {
    console.log(data)
    users.push(data)
    closeModal()
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
                  <div className="mt-2 flex flex-col gap-4 items-center justify-center">
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
                  </div>
                  <div className="text-zinc-800 gap-1 flex flex-col">
                    Working Days:
                    {WEEKDAYS.map((day, index) => (
                      <label
                        key={index}
                        className="flex gap-1 text-sm items-center"
                      >
                        <input
                          className=""
                          placeholder="Ex: Amazon"
                          type="checkbox"
                        />
                        {day}
                      </label>
                    ))}
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
