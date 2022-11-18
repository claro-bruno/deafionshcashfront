import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import SelectFilter from '../../../components/listboxes/SelectFilter'
import '../../../components/modals/modal.css'
import { CLIENTS_LIST, monthsListBox } from '../../../helpers/constants'
import { useDateFilter } from '../../../hooks/useDateFIlter'

export default function NewMonthInvoice({ isModalOpen, switchModalView }: any) {
  const { register, reset, watch, handleSubmit } = useForm({
    defaultValues: {
      payedForm: '',
      date: '',
      paymentType: '',
      value: '',
      paymentCategory: '',
      paymentIdentifierStatus: '',
      paymentIdentifier: '',
    },
  })

  const { setMonthName, monthName } = useDateFilter()

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
  function handleCreateNewReport(data: any) {
    console.log(data)
    handleCloseModal()
  }

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
                    New Invoice
                  </Dialog.Title>
                  <form className=" flex flex-col gap-4 items-center justify-center">
                    <label className="flex flex-col gap-4 items-center"></label>
                    <label className="flex gap-2 items-center relative right-5 flex-row">
                      <span className="text-zinc-600 relative top-1">
                        Month:
                      </span>
                      <SelectFilter
                        setFilter={setMonthName}
                        selectOptions={monthsListBox}
                        listCSS="w-[8rem]"
                      />
                    </label>
                    <label className="labelsDefault">
                      Client:
                      <input
                        className="inputsDefault"
                        list="categories"
                        type="number"
                        {...register('value')}
                        required
                      />
                    </label>
                    <datalist id="categories">
                      {CLIENTS_LIST.map((client) => (
                        <option key={client}>{client}</option>
                      ))}
                    </datalist>
                    <label className="labelsDefault">
                      Description:
                      <input
                        className="inputsDefault"
                        type="text"
                        {...register('paymentCategory')}
                        required
                      />
                    </label>
                    <label className="labelsDefault">
                      Value:
                      <input
                        {...register('date')}
                        className="inputsDefault"
                        type="number"
                        required
                      />{' '}
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
                    </label>

                    {
                      <div className="pt-7 text-sm flex flex-col items-center gap-5">
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
                      </div>
                    }
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
