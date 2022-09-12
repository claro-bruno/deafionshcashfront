import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import useFormate from '../../hooks/useFormate'
import { ModalProps } from '../../types/modal'
import './modal.css'

export default function NewContractorModal({
  isModalOpen,
  switchModalView,
}: ModalProps) {
  function handleClose() {
    switchModalView()
  }
  const { formatEIN, formatPhone } = useFormate()
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
                <Dialog.Panel className="modal min-h-[70vh] max-w-[75vw]">
                  <div
                    tabIndex={0}
                    className="flex items-center focus:outline-none justify-center"
                  ></div>
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center  font-medium leading-6 text-gray-900"
                  >
                    Edit Contractor
                  </Dialog.Title>
                  <div className="mt-6 flex flex-col gap-6 items-center justify-center">
                    <label className="flex  flex-col gap-4 items-center">
                      <img
                        className="h-20 w-20 rounded-md"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt="profile "
                      />
                    </label>
                    <select className="outline-brand3 bg-slate-50 border border-zinc-400 rounded p-1">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                    <div className="flex gap-4">
                      <label className="labelsDefault">
                        First name:
                        <input
                          className="inputsDefault"
                          type="text"
                          value="Bruno"
                        />
                      </label>
                      <label className="labelsDefault">
                        Middle name:
                        <input
                          className="inputsDefault"
                          type="text"
                          value="alves"
                        />
                      </label>
                      <label className="labelsDefault">
                        Last name:
                        <input
                          className="inputsDefault"
                          type="text"
                          value="fay"
                        />
                      </label>
                    </div>
                    <div className="flex gap-4">
                      <label className="labelsDefault">
                        Email:
                        <input
                          className="inputsDefault"
                          type="text"
                          value="brunofay1@hotmail.com"
                        />
                      </label>
                      <label className="labelsDefault">
                        Phone:
                        <input
                          className="inputsDefault"
                          type="text"
                          name="phone"
                          inputMode="numeric"
                          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                          maxLength={11}
                          value={formatPhone('51985473129')}
                        />
                      </label>
                      <label className="labelsDefault">
                        <div className="flex items-start">EIN</div>
                        <input
                          title="Employer Identification Number (EIN)"
                          placeholder="00-0000000"
                          maxLength={9}
                          className="inputsDefault"
                          type="text"
                          inputMode="numeric"
                          value={formatEIN('000000000')}
                        />
                      </label>
                    </div>
                    <div className="flex ml-[6rem] ">
                      <label className="labelsDefault ">
                        Document Photo
                        <input
                          accept="image/*"
                          type="file"
                          className=" file:py-[0.35rem]  fileInput"
                        />
                      </label>
                      <label className="labelsDefault ">
                        Residency proof
                        <input
                          type="file"
                          className="fileInput file:py-[0.35rem] "
                        />
                      </label>
                      <label className="labelsDefault ">
                        Profile Image
                        <input
                          accept="image/*"
                          type="file"
                          className="fileInput file:py-[0.30rem]"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="relative top-16 text-sm flex flex-col items-center gap-5">
                    <button
                      type="button"
                      className=" buttonStyle1 px-4 font-bold"
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
