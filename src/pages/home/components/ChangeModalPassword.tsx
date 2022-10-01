import { Dialog, Transition } from '@headlessui/react'
import { ChangeEvent, FormEvent, Fragment, useState } from 'react'
import { ModalProps } from '../../../types/modal'
import useHandleChange from '../../../hooks/useHandleChange'
import { useMutation } from '@tanstack/react-query'
import { axiosUpdateContractorPassword } from '../../../api/contractor'
import { useContextSelector } from 'use-context-selector'
import { AuthContext } from '../../../context/AuthProvider'

const INITIAL_INPUTS_STATE = {
  password: '',
  confirmPassword: '',
}
export default function ChangeModalPassword({
  isModalOpen,
  switchModalView,
}: ModalProps) {
  const { state: input, handleChange } = useHandleChange(INITIAL_INPUTS_STATE)
  const id = useContextSelector(
    AuthContext,
    (context) => context.contractor_id,
  )!
  const { mutateAsync, isLoading, isSuccess } = useMutation(
    axiosUpdateContractorPassword,
    {
      onSuccess() {
        setTimeout(() => {
          switchModalView()
        }, 1200)
      },
    },
  )

  const [error, setError] = useState({
    password: '',
    confirmPassword: '',
  })
  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    handleChange(e)
    validateInput(e)
  }

  function validateInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setError((prev) => {
      const stateObj = { ...prev, [name]: '' }
      switch (name) {
        case 'password':
          if (value.length < 8) {
            stateObj[name] = 'Please enter a Password with min 8 characters.'
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj.confirmPassword =
              'Password and Confirm Password does not match.'
          } else {
            stateObj.confirmPassword = input.confirmPassword
              ? ''
              : error.confirmPassword
          }
          break

        case 'confirmPassword':
          if (input.password && value !== input.password) {
            stateObj[name] = 'Password and Confirm Password does not match.'
          }
          break

        default:
          break
      }

      return stateObj
    })
  }
  console.log(id)

  function handleSubmitNewPassword(e: FormEvent<EventTarget>) {
    e.preventDefault()
    const payload = {
      password: input.password,
      id,
    }
    mutateAsync(payload)
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold text-center py-4  leading-6 text-gray-900"
                  >
                    Change Your Password
                  </Dialog.Title>
                  {!isSuccess && (
                    <p className="text-center text-zinc-400 italic text-xs my-2">
                      change your login password to a safer password
                    </p>
                  )}
                  <form onSubmit={handleSubmitNewPassword}>
                    {isSuccess ? (
                      <h1 className="text-center my-4 font-semibold text-lg text-zinc-700">
                        Password changed successfully!
                      </h1>
                    ) : (
                      <div className="mt-4 gap-4 flex flex-col items-center justify-center">
                        <label className="labelsDefault">
                          New Password:
                          <input
                            type="password"
                            className="inputsDefault"
                            name="password"
                            placeholder="Enter Password"
                            minLength={8}
                            maxLength={20}
                            value={input.password}
                            onChange={onInputChange}
                            onBlur={validateInput}
                            required
                          />
                        </label>
                        {error.password && (
                          <span className="text-xs text-red-400 italic">
                            {error.password}
                          </span>
                        )}
                        <label className="labelsDefault">
                          Confirm Password:
                          <input
                            type="password"
                            className="inputsDefault"
                            name="confirmPassword"
                            minLength={8}
                            maxLength={20}
                            placeholder="Repeat Password"
                            value={input.confirmPassword}
                            onChange={onInputChange}
                            onBlur={validateInput}
                            required
                          />
                        </label>
                        {error.confirmPassword && (
                          <span className="text-xs text-red-400 italic">
                            {error.confirmPassword}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="pt-7 flex justify-evenly">
                      <button
                        disabled={error.confirmPassword !== '' || isLoading}
                        type="submit"
                        className="px-3 buttonStyle1 self-center"
                      >
                        Confirm
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
