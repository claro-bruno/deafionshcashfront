import { FormProvider, useForm } from 'react-hook-form'
import Header from '../../components/header/Header'
import AlertModal from './components/AlertModal'
import useModal from '../../hooks/useModal'
import { NewContractor } from '../../types/contractor'
import NewContractorForm from './components/NewContractorForm'
import { INITIAL_NEW_CONTRACTOR_STATE } from './constants'

export default function Register() {
  const { closeModal, isModalOpen } = useModal()

  const newContractorForm = useForm<NewContractor>({
    defaultValues: INITIAL_NEW_CONTRACTOR_STATE,
  })
  return (
    <div className="flex flex-col  min-w-screen min-h-screen">
      <Header />
      <main className="flex flex-col my-auto gap-2 w-[100%]  min-h-full  items-center  ">
        <FormProvider {...newContractorForm}>
          <NewContractorForm />
        </FormProvider>
        <AlertModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </main>
    </div>
  )
}
