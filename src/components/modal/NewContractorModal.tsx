import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import './modal.css'
import { ModalProps } from '../../types/modal'

export default function NewContractorModal({ isModalOpen, closeModal, }: ModalProps) {

  function handleClose() {
    closeModal()
  }

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='modal'>
                  <div tabIndex={0} className='flex items-center focus:outline-none justify-center'>
                  </div>
                  <Dialog.Title
                    as='h3'
                    className='text-xl text-center py-4 font-medium leading-6 text-gray-900'
                  >
                    Edit Contractor
                  </Dialog.Title>
                  <div className='mt-2 flex flex-col gap-4 items-center justify-center'>
                    <label className='flex flex-col gap-4 items-center'>
                      <img
                        className='h-20 w-20 rounded-md'
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt="profile "
                      />
                      <input
                        accept='image/*'
                        type='file'
                        className='block w-full text-sm text-slate-500 file:mr-4 file:py-1 file:px-2 file:rounded-full
                        file:text-sm file:font-semibold file:bg-white file:border file:text-brand hover:file:bg-brand hover:file:text-white transition-colors duration-300 hover:file:border-transparent' />
                    </label>
                    <select className='outline-green-500 bg-slate-50 border border-zinc-400 rounded p-1'>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                    <label className='labelsDefault'>
                      Name:
                      <input
                        className='inpuntsDefault'
                        type='text'
                        value='Bruno alves'
                      />
                    </label>
                    <label className='labelsDefault'>
                      Email:
                      <input
                        className='inpuntsDefault'
                        type='text'
                        value='brunofay1@hotmail.com'
                      />
                    </label>
                    <label className='labelsDefault'>
                      Phone:
                      <input
                        className='inpuntsDefault'
                        type='text'
                        name='phone'
                        inputMode='numeric'
                        pattern='[0-9]{3}-[0-9]{4}-[0-9]{4}'
                        maxLength={11}
                        value='51985473129'
                      />
                    </label>
                  </div>
                  <div className='pt-7 text-sm flex flex-col items-center gap-5'>
                    <button
                      type='button'
                      className='submitModalButton'
                      onClick={closeModal}
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