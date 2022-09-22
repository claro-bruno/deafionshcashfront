import { Dialog, Transition } from '@headlessui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormEvent, Fragment, useState } from 'react'
import { axiosCreateClient, axiosUpdateClient } from '../../../api/client'
import '../../../components/modals/modal.css'
import { WEEKDAYS } from '../../../helpers/constants'
import useHandleChange from '../../../hooks/useHandleChange'
import { Client } from '../../../types/client'
import { ModalProps } from '../../../types/modal'

export default function SetClientModal({
  isModalOpen,
  switchModalView,
  modalInfos,
}: ModalProps) {
  const isEditMode = 'id' in modalInfos
  const [response, setResponse] = useState<any>({})
  const { invalidateQueries } = useQueryClient()
  const INITIAL_MODAL_CLIENT_STATES = {
    name: '',
    start: '',
    end: '',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  }

  const { state: clientState, handleChange } = useHandleChange<Client>(
    INITIAL_MODAL_CLIENT_STATES,
  )

  const { mutateAsync, data } = useMutation(axiosCreateClient, {
    onSuccess: () => {
      setResponse(data)

      invalidateQueries(['clients'])
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const { mutateAsync: updateMutateAsync, data: updateData } = useMutation(
    axiosUpdateClient,
    {
      onSuccess: () => {
        setResponse(updateData)

        invalidateQueries(['clients'])
      },
      onError: (error) => {
        console.log(error)
      },
    },
  )
  function handleSubmitClient(e: FormEvent<EventTarget>) {
    const payload = {
      name: states.name === '' && isEditMode ? modalInfos.name : states.name,
      start:
        states.start === '' && isEditMode ? modalInfos.start : states.start,
      end: states.end === '' && isEditMode ? modalInfos.end : states.end,
      monday:
        states.monday === false && isEditMode
          ? modalInfos.monday
          : states.monday,
      tuesday:
        states.tuesday === false && isEditMode
          ? modalInfos.tuesday
          : states.tuesday,
      wednesday:
        states.wednesday === false && isEditMode
          ? modalInfos.wednesday
          : states.wednesday,
      thursday:
        states.thursday === false && isEditMode
          ? modalInfos.thursday
          : states.thursday,
      friday:
        states.friday === false && isEditMode
          ? modalInfos.friday
          : states.friday,
      saturday:
        states.saturday === false && isEditMode
          ? modalInfos.saturday
          : states.saturday,
      sunday:
        states.sunday === false && isEditMode
          ? modalInfos.sunday
          : states.sunday,
    }
    console.log(payload, isEditMode)
    e.preventDefault()
    isEditMode ? updateMutateAsync(clientState) : mutateAsync(clientState)
    switchModalView()
  }

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={switchModalView}>
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
                  <form action="submit" onSubmit={handleSubmitClient}>
                    <div
                      tabIndex={0}
                      className="flex items-center focus:outline-none justify-center"
                    ></div>
                    <Dialog.Title
                      as="h3"
                      className="text-xl text-center py-4 font-medium leading-6 text-gray-900"
                    >
                      {isEditMode ? 'Edit Client' : 'New Client'}
                    </Dialog.Title>
                    <div className="mt-2 flex flex-col gap-4 items-center justify-center">
                      <label className="text-zinc-800 flex gap-2 flex-col">
                        Name:
                        <input
                          onChange={handleChange}
                          name="name"
                          defaultValue={modalInfos.name}
                          className="inputsDefault"
                          placeholder="Ex: Amazon"
                          type="text"
                          required
                        />
                      </label>
                      <div className="flex  flex-col gap-2">
                        <span className="text-zinc-800">Working Hours:</span>
                        <div className="flex text-zinc-800 justify-between gap-4">
                          <label className="flex flex-col text-zinc-700 text-sm">
                            Start:
                            <input
                              onChange={handleChange}
                              name="start"
                              defaultValue={modalInfos.start}
                              className="outline-brand  p-1 ring-1  ring-zinc-400  rounded"
                              type="time"
                              required
                            />
                          </label>
                          <label className="flex flex-col text-zinc-700 text-sm">
                            End:
                            <input
                              onChange={handleChange}
                              name="end"
                              defaultValue={modalInfos.end}
                              className="outline-brand  p-1 ring-1  ring-zinc-400  rounded"
                              type="time"
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
                            className=" flex gap-1 text-sm uppercase items-center"
                          >
                            <input
                              onChange={(e) => handleChange(e, true)}
                              name={day}
                              defaultChecked={modalInfos[day]}
                              type="checkbox"
                            />
                            {day}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="pt-7 flex flex-col items-center gap-5">
                      <button
                        type="submit"
                        className={`${
                          isEditMode ? 'buttonStyle2 ' : 'buttonStyle1'
                        } px-3`}
                      >
                        {isEditMode ? 'Edit ' : 'Create'}
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
