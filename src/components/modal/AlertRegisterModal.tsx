import { Dialog, Transition } from '@headlessui/react'
import { WarningCircle } from 'phosphor-react'
import { ChangeEvent, Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './alertRegisterModal.css'

export default function AlertRegisterModal({ isModalOpen, closeModal, }: any) {
  const [isChecked, setIsChecked] = useState(false)
  const navigate = useNavigate()
  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked)
  }
  function handleClose() {
    closeModal()
    navigate('/')
  }

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
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
                <Dialog.Panel className="modalAlertCard">
                  <div className='flex items-center justify-center'>
                    <WarningCircle size={42} color='red' />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center py-4 font-medium leading-6 text-gray-900"
                  >
                    Carefully Read!
                  </Dialog.Title>
                  <div className="mt-2 flex items-center justify-center">
                    <p className="text-sm text-gray-500 ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum asperiores, quibusdam deserunt aliquid at id facere ducimus repellat porro. Doloribus, quos! Accusamus odio inventore veritatis ab amet enim tenetur eius.
                    </p>
                  </div>

                  <div className="pt-7 flex flex-col items-center gap-5">
                    <label className='flex items-center text-sm gap-3'>
                      <input
                        onChange={handleCheckboxChange}
                        className='form-radio-input h-4 w-4 '
                        type="checkbox"

                      />
                      I declare that I have read and am aware that I must comply with the rules contained in the
                      regulation.
                    </label>
                    <button
                      disabled={!isChecked}
                      type="button"
                      className="submitAlertModalButton"
                      onClick={closeModal}
                    >
                      Submit
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