import { Dialog, Transition } from '@headlessui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import { axiosCreateClient } from '../../../api/client'
import '../../../components/modals/modal.css'
import { ModalProps } from '../../../types/modal'
import { WEEKDAYS } from '../constants'

export default function NewClientModal({
  isModalOpen,
  closeModal,
}: ModalProps) {
  const [response, setResponse] = useState<any>({})
  const { invalidateQueries } = useQueryClient()

  const { mutateAsync, data } = useMutation(axiosCreateClient, {
    onSuccess: () => {
      setResponse(data)
      reset()
      invalidateQueries(['clients'])
    },
    onError: (error) => {
      console.log(error)
    },
  })
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      name: '',
      start: '',
      end: '',
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    },
  })
  const sunday = watch('Sunday')
  const tuesday = watch('Tuesday')
  const saturday = watch('Saturday')
  const monday = watch('Monday')
  const wednesday = watch('Wednesday')
  const thursday = watch('Thursday')
  const friday = watch('Friday')
  const isSomeDayChecked = [
    sunday,
    tuesday,
    wednesday,
    thursday,
    friday,
    monday,
    saturday,
  ].every((day) => day === false)

  function handleNewClient(payload: any) {
    mutateAsync(payload)
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
                  <form
                    action="submit"
                    onSubmit={handleSubmit(handleNewClient)}
                  >
                    <div
                      tabIndex={0}
                      className="flex items-center focus:outline-none justify-center"
                    ></div>
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center py-4 font-medium leading-6 text-gray-900"
                    >
                      New Company
                    </Dialog.Title>
                    <div className="mt-2 flex flex-col gap-4 items-center justify-center">
                      <label className="text-zinc-800 flex gap-2 flex-col">
                        Name:
                        <input
                          {...register('name')}
                          className="inputsDefault"
                          placeholder="Ex: Amazon"
                          type="text"
                        />
                      </label>
                      <div className="flex  flex-col gap-2">
                        <span className="text-zinc-800">Working Hours:</span>
                        <div className="flex text-zinc-800 justify-between gap-4">
                          <label className="flex flex-col text-zinc-700 text-sm">
                            Start:
                            <input
                              {...register('start')}
                              className="outline-brand  p-1 ring-1  ring-zinc-400  rounded"
                              type="time"
                              required
                            />
                          </label>
                          <label className="flex flex-col text-zinc-700 text-sm">
                            End:
                            <input
                              className="outline-brand  p-1 ring-1  ring-zinc-400  rounded"
                              type="time"
                              {...register('end')}
                              required
                            />
                          </label>
                        </div>
                      </div>
                      <div className="text-zinc-800 gap-1 flex flex-col">
                        Working Days:
                        {WEEKDAYS.map((day, index) => (
                          <label
                            key={index}
                            className="flex gap-1 text-sm items-center"
                          >
                            <input {...register(`${day}`)} type="checkbox" />
                            {day}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="pt-7 flex flex-col items-center gap-5">
                      <button
                        disabled={isSomeDayChecked}
                        type="submit"
                        className="buttonStyle1 px-3"
                        onClick={closeModal}
                      >
                        Create
                      </button>
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
