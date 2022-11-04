import { Dialog, Transition } from '@headlessui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormEvent, Fragment } from 'react'
import { useContext } from 'use-context-selector'
import { axiosUpdateContractor } from '../../../../api/contractor'
import '../../../../components/modals/modal.css'
import { alertContext } from '../../../../context/AlertProvider/AlertContextProvider'
import useFormate from '../../../../hooks/useFormate'
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
  const address = Array.isArray(modalInfos.address) && modalInfos.address[0]
  const { state, handleChange } = useHandleChange<EditContractor>({
    email: '',
    telephone: '',
    identification: '',
    first_name: '',
    last_name: '',
    middle_name: '',
    dob: '',
    status: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    ein: '',
  })
  const queryClient = useQueryClient()
  const { changeAlertModalState, getAlertMessage } = useContext(alertContext)
  const { formatDate, formatPhone } = useFormate()
  const { mutateAsync } = useMutation(
    (payload: [EditContractor, InputsFiles]) =>
      axiosUpdateContractor(payload[0], payload[1]),
    {
      onSuccess() {
        queryClient.invalidateQueries(['contractor', modalInfos.id])
      },
      onError: (error: { response: any }) => {
        console.log(error.response?.data)
        getAlertMessage({
          message: error.response?.data,
        })
        changeAlertModalState()
      },
    },
  )

  function handleClose() {
    switchModalView()
  }
  function handleSubmitEditedContractor(e: FormEvent<EventTarget>) {
    e.preventDefault()
    const bodyPayload = {
      id: modalInfos.id,
      email: state.email ? state.email : modalInfos.email,
      telephone: state.telephone ? state.telephone : modalInfos.telephone,
      identification: state.identification
        ? state.identification
        : modalInfos.identification,
      first_name: state.first_name ? state.first_name : modalInfos.first_name,
      last_name: state.last_name ? state.last_name : modalInfos.last_name,
      middle_name: state.middle_name
        ? state.middle_name
        : modalInfos.middle_name,
      dob: state.dob ? state.dob : modalInfos.dob,
      status: state.status ? state.status : modalInfos.status,
      address: state.address ? state.address : address.address,
      city: state.city ? state.city : address.city,
      state: state.state ? state.state : address.state,
      zipcode: state.zipcode ? state.zipcode : address.zipcode,
      ein: state.ein ? state.ein : modalInfos.ein,
    }
    mutateAsync([bodyPayload, inputsFiles])
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
                          modalInfos?.urlProfile ||
                          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                        }
                        alt="profile "
                      />
                    </label>
                    <h2 className="lowercase first-letter:uppercase">
                      {modalInfos?.status}
                    </h2>
                    <div className="flex gap-4">
                      <label className="labelsDefault">
                        First name
                        <input
                          onChange={handleChange}
                          placeholder="Ex: John  "
                          className="inputsDefault"
                          name="first_name"
                          type="text"
                          defaultValue={modalInfos?.first_name}
                        />
                      </label>
                      <label className="labelsDefault">
                        <div className="flex items-start">Middle name</div>
                        <input
                          onChange={handleChange}
                          placeholder="Ex: Doe  "
                          className="inputsDefault"
                          name="middle_name"
                          type="text"
                          defaultValue={modalInfos?.middle_name}
                        />
                      </label>
                      <label className="labelsDefault">
                        Last name
                        <input
                          onChange={handleChange}
                          type="text"
                          placeholder="Ex: Smith  "
                          className="inputsDefault"
                          name="last_name"
                          defaultValue={modalInfos?.last_name}
                        />
                      </label>
                    </div>

                    <div className="flex gap-4">
                      <label className="labelsDefault">
                        Email:
                        <input
                          onChange={handleChange}
                          className="inputsDefault"
                          name="email"
                          type="text"
                          defaultValue={modalInfos?.email}
                        />
                      </label>
                      <label className="labelsDefault">
                        Phone:
                        <input
                          onChange={handleChange}
                          className="inputsDefault"
                          type="text"
                          name="telephone"
                          inputMode="numeric"
                          maxLength={11}
                          defaultValue={formatPhone(modalInfos?.telephone)}
                        />
                      </label>
                      <label className="labelsDefault">
                        Birthday
                        <input
                          onChange={handleChange}
                          min="1940-12-31"
                          max="2022-12-31"
                          className="inputsDefault"
                          type="date"
                          name="dob"
                          defaultValue={formatDate(
                            modalInfos?.dob,
                            'birthDate',
                          )}
                        />
                      </label>
                    </div>
                    <div className="flex gap-4">
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
                          defaultValue={modalInfos?.identification}
                        />
                      </label>

                      <label className="labelsDefault">
                        <div className="flex items-start">EIN</div>
                        <input
                          title="Employer Identification Number (EIN)"
                          onChange={handleChange}
                          placeholder="00-0000000"
                          maxLength={9}
                          className="inputsDefault"
                          type="text"
                          inputMode="numeric"
                          defaultValue={modalInfos?.ein}
                        />
                      </label>
                      <label className="labelsDefault">
                        Address
                        <input
                          inputMode="numeric"
                          onChange={handleChange}
                          maxLength={120}
                          className="inputsDefault"
                          type="text"
                          defaultValue={address.address}
                        />
                      </label>
                    </div>
                    <div className="flex gap-4">
                      <label className="labelsDefault">
                        State
                        <input
                          className="inputsDefault"
                          onChange={handleChange}
                          maxLength={120}
                          type="text"
                          defaultValue={address.state}
                        />
                      </label>
                      <label className="labelsDefault">
                        Zip-code
                        <input
                          className="inputsDefault"
                          onChange={handleChange}
                          type="text"
                          maxLength={20}
                          defaultValue={address.zipcode}
                        />
                      </label>
                      <label className="labelsDefault">
                        City
                        <input
                          className="inputsDefault"
                          onChange={handleChange}
                          type="text"
                          maxLength={120}
                          defaultValue={address.city}
                        />
                      </label>
                    </div>
                    <div className="flex ml-[6rem] ">
                      <label className="labelsDefault ">
                        Document Photo
                        <input
                          accept="image/"
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
                          accept="image/"
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
