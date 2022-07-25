import { ChangeEvent, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { WarningCircle } from 'phosphor-react'
import './modal.css'

export default function TermModal({ title, pdfUrl, isModalOpen, closeModal, }: any) {
  const [isChecked, setIsChecked] = useState(false)
  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked)
  }
  function handleClose() {
    closeModal()
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
                <Dialog.Panel className="termModal">
                  <div tabIndex={0} className='flex items-center focus:outline-none justify-center'>
                    <WarningCircle size={42} color='red' />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center py-4 font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2 flex items-center justify-center">
                    <iframe src={`${pdfUrl}#toolbar=0`} height="800vh" width="100%"></iframe>
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
                      className="bg-brand disabled:opacity-50 ring border ring-transparent hover:ring-brand text-white text-sm font-bold py-2 px-4 rounded-lg"
                      onClick={handleClose}
                    >
                      Send
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