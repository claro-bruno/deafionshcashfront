import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='flex  min-w-screen min-h-screen'>
      <div className='flex-1 flex flex-col items-center justify-center  bg-brand ' >
        <h1 className='leading-4 relative bottom-16 font-extrabold text-2xl text-gray-200'>
          You already have an account?
        </h1>
        <Link
          className='hover:bg-brand2 text-brand2 mt-3 px-4 py-1 ring-2 hover:ring-transparent ring-white hover:ring- rounded transition-colors hover:text-white font-extrabold text-xl'
          to='/'>
          Sing in
        </Link>
      </div>
      <div className='flex-1 flex flex-col w-[100%]  min-h-full  items-center  '>
        <div className='relative top-5 right-[16.5rem]'>
          <img
            className='h-16'
            src="https://www.globaljanitorialservices.com/assets/images/resources/logo-3.png"
            alt="global janitorial services logo" />
        </div>
        <div className='flex items-center mt-9 p-4 my-auto gap-2 flex-col'>
          <form className='flex flex-col items-center justify-center gap-4 px-4 h-72 w-auto'>
            <label className='flex flex-col gap-1 text-zinc-600'>
              Phone
              <input
                className='rounded-md text-sm w-56 text-zinc-800 p-1 h-8 border outline-transparent focus:outline-brand transition-colors'
                type="tel"
                name="phone"
                pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                maxLength={11}
              />
            </label>
            <label className='flex flex-col gap-1 text-zinc-600'>
              Birthday
              <input
                min='1940-12-31'
                max='2022-12-31'
                className='rounded-md text-sm w-56 text-zinc-800 p-1 h-8 border outline-transparent focus:outline-brand transition-colors'
                type="date" />
            </label>
            <label className='flex flex-col gap-1 text-zinc-600'>
              Address
              <textarea
                className='rounded-md text-sm w-56 text-zinc-800 p-1 h-28 border outline-transparent focus:outline-brand resize-none transition-colors'
              />
            </label>
            <label className='flex flex-col gap-1 text-zinc-600'>
              Email
              <input
                className='rounded-md text-sm w-56 text-zinc-800 p-1 h-8 border outline-transparent focus:outline-brand transition-colors'
                type="email" />
            </label>
            <label className='flex flex-col gap-1 text-zinc-600'>
              Password
              <input
                className='rounded-md text-sm w-56 text-zinc-800 p-1 h-8 border outline-transparent focus:outline-brand transition-colors'
                type="password" />
            </label>
            <button
              className='hover:bg-brand mt-3 px-3 py-1 ring-2 ring-brand hover:ring-transparent text-brand rounded transition-colors hover:text-white font-bold'
              type="submit">
              Register
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}
