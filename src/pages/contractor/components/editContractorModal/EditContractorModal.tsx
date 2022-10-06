import { Dialog, Transition } from '@headlessui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormEvent, Fragment } from 'react'
import { axiosUpdateContractor } from '../../../../api/contractor'
import '../../../../components/modals/modal.css'
import useHandleChange from '../../../../hooks/useHandleChange'
import { EditContractor, InputsFiles } from '../../../../types/contractor'
import { ModalProps } from '../../../../types/modal'

export default function EditContractorModal({
  isModalOpen,
  switchModalView,
  modalInfos,
}: ModalProps) {
  const { inputsFiles, handleInputsFiles } = useHandleChange<InputsFiles>({
    profile: {},
    documentProof: {},
    residenceProof: {},
  })
  const { state, handleChange } = useHandleChange<EditContractor>({
    id: modalInfos.id ?? '',
    email: modalInfos.email ?? '',
    telephone: modalInfos.telephone ?? '',
    identification: modalInfos.identification ?? '',
  })
  const queryClient = useQueryClient()

  const { mutateAsync, data } = useMutation(
    (payload: [EditContractor, InputsFiles]) =>
      axiosUpdateContractor(payload[0], payload[1]),
    {
      onSuccess() {
        queryClient.invalidateQueries(['contractor', modalInfos.id])
        console.log(data)
      },
    },
  )

  function handleClose() {
    switchModalView()
  }
  function handleSubmitEditedContractor(e: FormEvent<EventTarget>) {
    e.preventDefault()
    console.log(state, inputsFiles)
    mutateAsync([state, inputsFiles])
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
                <Dialog.Panel className="modal min-h-[60vh] max-w-[75vw]">
                  <div
                    tabIndex={0}
                    className="flex items-center focus:outline-none justify-center"
                  ></div>
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center  font-bold leading-6 text-gray-700"
                  >
                    Edit Contractor
                  </Dialog.Title>
                  <form
                    onSubmit={handleSubmitEditedContractor}
                    className="mt-6 flex flex-col gap-6 items-center justify-center"
                  >
                    <label className="flex  flex-col gap-4 items-center">
                      <img
                        className="max-h-[20rem] max-w-[20rem] rounded-md object-contain"
                        src={
                          modalInfos.urlProfile ??
                          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                        }
                        alt="profile "
                      />
                    </label>
                    <h2 className="lowercase first-letter:uppercase">
                      {modalInfos.status}
                    </h2>
                    <div className="flex gap-4">
                      <label className="labelsDefault">
                        Email:
                        <input
                          onChange={handleChange}
                          className="inputsDefault"
                          name="email"
                          type="text"
                          defaultValue={modalInfos.email}
                        />
                      </label>
                      <label className="labelsDefault">
                        Phone:
                        <input
                          onChange={handleChange}
                          className="inputsDefault"
                          type="text"
                          name="phone"
                          inputMode="numeric"
                          maxLength={11}
                          defaultValue={modalInfos.telephone}
                        />
                      </label>
                      <label className="labelsDefault">
                        <div className="flex items-start">ITIN/SSN</div>
                        <input
                          title="Employer Identification Number (EIN)"
                          placeholder="00-0000000"
                          maxLength={9}
                          className="inputsDefault"
                          type="text"
                          onChange={handleChange}
                          name="ssnOrItin"
                          inputMode="numeric"
                          defaultValue={modalInfos.identification}
                        />
                      </label>
                    </div>

                    <div className="flex ml-[6rem] ">
                      <label className="labelsDefault ">
                        Document Photo
                        <input
                          accept="image/*"
                          onChange={(e) =>
                            handleInputsFiles(e, 'documentProof')
                          }
                          type="file"
                          className=" file:py-[0.35rem]  fileInput"
                        />
                      </label>
                      <label className="labelsDefault ">
                        Residency proof
                        <input
                          type="file"
                          onChange={(e) =>
                            handleInputsFiles(e, 'residenceProof')
                          }
                          className="fileInput file:py-[0.35rem] "
                        />
                      </label>
                      <label className="labelsDefault ">
                        Profile Image
                        <input
                          accept="image/*"
                          onChange={(e) => handleInputsFiles(e, 'profile')}
                          type="file"
                          className="fileInput file:py-[0.30rem]"
                        />
                      </label>
                    </div>
                    <button
                      type="submit"
                      className=" buttonStyle2 px-4 mt-10 font-bold"
                    >
                      Edit
                    </button>
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
