import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='flex  min-w-screen min-h-screen'>
      <div className='flex-1 flex items-center justify-center  bg-brand ' >

        <h1 className='first-letter:text-6xl leading-4 relative bottom-16 font-extrabold text-2xl text-gray-200'>
          Welcome to Global Janitorial Services!
        </h1>
      </div>
      <div className='flex-1 flex flex-col w-[100%]  min-h-full  items-center  '>
        <div className='relative top-5 right-[16.5rem]'>
          <img
          className='h-16'
            src="https://www.globaljanitorialservices.com/assets/images/resources/logo-3.png"
            alt="globaljanitorialservices logo" />
        </div>
        <div className='flex items-center mt-9 p-4 my-auto gap-2 flex-col'>
          <form className='flex flex-col items-center justify-center gap-4 px-4 h-72 w-auto'>
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
              className='bg-[#F83F37] mt-3 px-3 py-1 rounded text-white font-bold'
              type="submit">
              Sing in
            </button>
          </form>
          <span className='text-sm mt-2 text-gray-400'>
            Don't have an account?{<Link className='text-blue-500' to='/register'> Register</Link>}
          </span>
        </div>
      </div>
    </div>
  )
}
