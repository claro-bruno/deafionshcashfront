import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ModalProps } from '../../../../types/modal'

export default function ContractorModalInfos({
  isModalOpen,
  switchModalView,
  modalInfos,
}: ModalProps) {
  function handleClose() {
    switchModalView()
  }

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative  z-10" onClose={handleClose}>
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
            <div className="flex  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="modal relative top-[15vh] max-w-[40vw]">
                  <div
                    tabIndex={0}
                    className="flex items-center focus:outline-none justify-center"
                  ></div>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold  text-center leading-6 text-gray-900"
                  >
                    {modalInfos.address ? 'Address' : 'ITIN/SSN/EIN'}
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col gap-6 items-center justify-center">
                    {modalInfos.address && (
                      <div className="flex flex-col gap-2 px-[20%]">
                        <p className="flex items-center text-sm gap-1">
                          <span className="font-semibold text-lg text-gray-500">
                            Street:
                          </span>
                          {modalInfos.address}
                        </p>
                        <p className="flex items-center text-sm gap-1">
                          <span className="font-semibold text-lg text-gray-500">
                            Zip-code:
                          </span>

                          {modalInfos.zipcode}
                        </p>
                        <p className="flex items-center text-sm gap-1">
                          <span className="font-semibold text-lg text-gray-500">
                            City:
                          </span>

                          {modalInfos.city}
                        </p>
                        <p className="flex items-center text-sm gap-1">
                          <span className="font-semibold text-lg text-gray-500">
                            State:
                          </span>

                          {modalInfos.state}
                        </p>
                      </div>
                    )}
                    <img
                      className=" object-contain w-[300px] h-[300px] hover:scale-125 hover:h-[500px] ease-in duration-200"
                      src={
                        modalInfos.src ||
                        'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
                      }
                      alt="proof address"
                    />
                  </div>
                  <div className="relative top-16 text-sm flex flex-col items-center gap-5">
                    <button
                      type="button"
                      className=" buttonStyle1 px-3"
                      onClick={switchModalView}
                    >
                      Save
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
