import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import '../../../components/modals/modal.css'

export default function NewReportMonth({ isModalOpen, switchModalView }: any) {
  const { register, reset, watch } = useForm({
    defaultValues: {
      payedForm: '',
      date: '',
      paymentType: '',
      paymentIdentifierStatus: '',
      paymentIdentifier: '',
    },
  })

  const paymentType = watch('paymentType')
  const paymentIdentifierStatus = watch('paymentIdentifierStatus')

  function validateInputPaymentIdView(): boolean {
    if (
      (paymentType === 'check' || paymentType === 'app') &&
      paymentIdentifierStatus === 'ok'
    ) {
      return true
    }
    return false
  }

  /*
  const { changeAlertModalState, getAlertMessage } = useContext(alertContext)
  const { data: clients } = useQuery(['clients'], axiosGetAllClients)
  const { data: contractors } = useQuery(
    [`contractors`],
    axiosGetAllContractors,
  ) */

  function handleCloseModal() {
    switchModalView()
    reset()
  }
  /*   function handleCreateNewReport(data: any) {
    console.log(data)
    handleCloseModal()
  } */

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-1"
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
                leave="ease-in duration-1"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="modal">
                  <div
                    tabIndex={0}
                    className="flex items-center focus:outline-none justify-center"
                  ></div>
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center py-4 font-medium leading-6 text-gray-900"
                  >
                    New Report
                  </Dialog.Title>
                  <form className=" flex flex-col gap-4 items-center justify-center">
                    <label className="flex flex-col gap-4 items-center"></label>
                    <label className="labelsDefault">
                      Payed for:
                      <input
                        className="inputsDefault"
                        list="contractors"
                        type="text"
                        {...register('payedForm')}
                        required
                      />
                    </label>
                    <label className="labelsDefault">
                      Date
                      <input
                        {...register('date')}
                        min="2022-01-01"
                        max="2032-01-01"
                        className="inputsDefault"
                        type="date"
                        required
                      />
                    </label>
                    <label className="labelsDefault">
                      Payment Type
                      <select
                        className="p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-brand focus:border-brand "
                        {...register('paymentType')}
                        required
                      >
                        <option value="check">Check</option>
                        <option value="app">App</option>
                        <option value="receipt">Receipt</option>
                      </select>
                    </label>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-zinc-600 dark:text-white">
                        Payment Identifier status
                      </h3>
                      <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                          <label className="flex items-center gap-2 py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                            <input
                              type="radio"
                              className="inputRadio"
                              value="ok"
                              {...register('paymentIdentifierStatus')}
                            />
                            Ok
                          </label>
                        </li>{' '}
                        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                          <label className="flex items-center gap-2 py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                            <input
                              type="radio"
                              className="inputRadio"
                              value="pending"
                              {...register('paymentIdentifierStatus')}
                            />
                            Pending
                          </label>
                        </li>
                        <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                          <label className="flex items-center gap-2 py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                            <input
                              type="radio"
                              className="inputRadio"
                              value="unknown"
                              {...register('paymentIdentifierStatus')}
                            />
                            Unknown
                          </label>
                        </li>
                      </ul>
                    </div>
                    {validateInputPaymentIdView() && (
                      <label className="labelsDefault">
                        Payment Identifier:
                        <input
                          list="clients"
                          className="inputsDefault"
                          type="text"
                          {...register('paymentIdentifier')}
                        />
                      </label>
                    )}

                    {/*  <div className="pt-7 text-sm flex flex-col items-center gap-5">
                      {1 + 1 === 3 ? (
                        <button type="submit" className="buttonStyle2 px-3">
                          Edit
                        </button>
                      ) : (
                        <button
                          type="submit"
                          onClick={handleSubmit(handleCreateNewReport)}
                          className="buttonStyle1 px-3"
                        >
                          Create
                        </button>
                      )}
                    </div> */}
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
