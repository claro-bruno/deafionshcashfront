import { Dialog, Transition } from '@headlessui/react'
import { CheckCircle, Warning } from 'phosphor-react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { ModalProps } from '../../../types/modal'

export default function AlertModal({
  isModalOpen,
  modalInfos,
  closeModal,
}: ModalProps) {
  const navigate = useNavigate()
  function handleCloseModal() {
    modalInfos.isContractorCreated && navigate('/')
    closeModal()
  }

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => handleCloseModal()}
        >
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-center">
                    {modalInfos?.isContractorCreated ? (
                      <CheckCircle size={36} color={'green'} />
                    ) : (
                      <Warning size={36} color={'red'} />
                    )}
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center py-4 font-medium leading-6 text-gray-900"
                  >
                    <span className="font-bold">
                      {modalInfos?.isContractorCreated
                        ? 'Successfully created'
                        : 'Warning!'}
                    </span>
                  </Dialog.Title>
                  <div className="mt-2 flex items-center justify-center">
                    {modalInfos?.isContractorCreated ? (
                      <div className="text-lg text-gray-700  flex flex-col gap-2 ">
                        Your login is:
                        <p className="text-xl italic flex flex-col gap-2">
                          <div>
                            <span className="text-gray-900 font-semibold text-lg">
                              Username:
                            </span>{' '}
                            {modalInfos.username}
                          </div>
                          <div>
                            <span className="text-gray-900 font-semibold text-lg">
                              Password:
                            </span>{' '}
                            {modalInfos.password}
                          </div>
                        </p>
                        <span className="text-base text-gray-500">
                          wait until approved to enter the site.
                        </span>
                      </div>
                    ) : (
                      <p className="text-lg text-gray-500 ">
                        {modalInfos?.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-7 flex justify-evenly">
                    <button
                      type="button"
                      className="buttonStyle1 px-3 "
                      onClick={() => handleCloseModal()}
                    >
                      Close
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
