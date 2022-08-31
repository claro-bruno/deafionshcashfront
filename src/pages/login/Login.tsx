import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { axiosLogin } from '../../api/login'
import AlertModal from '../../components/modals/AlertModal'
import useModal from '../../hooks/useModal'

export type UserLogin = {
  username: string
  password: string
}

export default function Login() {
  const [response, setResponse] = useState<any>({})
  const { isModalOpen, closeModal } = useModal()
  const { register, handleSubmit } = useForm<UserLogin>({
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const navigate = useNavigate()
  const { mutateAsync, data } = useMutation(
    (payload: UserLogin) => axiosLogin(payload),
    {
      onSuccess: () => {
        navigate('/payments')
      },
      onError: (error: { response: any }) => {
        setResponse({
          isContractorCreated: false,
          message: error.response.data,
        })
        closeModal()
      },
    },
  )
  console.log(data)
  function handleLogin(payload: UserLogin) {
    mutateAsync(payload)
  }
  return (
    <div className="flex  min-w-screen min-h-screen">
      <div className="flex-1 flex items-center flex-col object-cover justify-center  bg-brand ">
        <h1 className=" uppercase leading-4 relative bottom-24 font-extrabold text-4xl font-['Poppins'] text-gray-200">
          Global Janitorial Services!
        </h1>
        <img
          className="w-[99%] object-cover rounded shadow-md"
          src="https://www.globaljanitorialservices.com/assets/images/backgrounds/main-slider-2-1.jpg"
          alt="workers smiling"
        />
      </div>
      <div className="flex-1 flex flex-col w-[100%] bg-gray-100 min-h-full  items-center  ">
        <div className="flex items-center mt-3  gap-2 flex-col">
          <img
            className="h-[12rem] object-contain"
            src="https://www.globaljanitorialservices.com/assets/images/resources/welcome-two-small-img.png"
            alt="globaljanitorialservices logo"
          />
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col items-center justify-center gap-4 px-4 h-72 w-auto"
          >
            <label className="labelsDefault">
              Username
              <input
                {...register('username')}
                className="inputsDefault"
                type="text"
              />
            </label>
            <label className="labelsDefault">
              Password
              <input
                {...register('password')}
                className="inputsDefault"
                type="password"
              />
            </label>
            <button className="buttonStyle2 px-3" type="submit">
              Sign in
            </button>
          </form>
          <span className="text-sm mt-2 text-gray-400">
            Don&apos;t have an account ?{' '}
            {
              <Link className="text-blue-500" to="/register/terms">
                Register
              </Link>
            }
          </span>
        </div>
      </div>
      <AlertModal
        modalInfos={response}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />
    </div>
  )
}
