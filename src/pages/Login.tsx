import React from 'react'

export default function Login() {
  return (
    <div className='flex  min-w-screen min-h-screen'>
      <div className='flex-1 bg-brand' />
      <div className='flex-1 flex flex-col items-baseline '>
        <div className='mt-5 ml-10'>
          <img     
          src="https://www.globaljanitorialservices.com/assets/images/resources/logo-3.png" 
          alt="globaljanitorialservices logo" />
        </div>
        <div className='flex items-center w-[100%]  flex-col'>
          <form className='flex flex-col items-center justify-center gap-4 px-4 h-72 w-auto'>
            <label className='flex flex-col gap-1 text-zinc-400'>
              Email
              <input
                className='rounded-md text-sm w-56 text-zinc-600 p-1 h-8 border outline-transparent focus:outline-brand transition-colors'
                type="email" />
            </label>
            <label className='flex flex-col gap-1 text-zinc-400'>
              Password
              <input
                className='rounded-md text-sm w-56 text-zinc-600 p-1 h-8 border outline-transparent focus:outline-brand transition-colors'
                type="password" />
            </label>
          </form>
          <button
            className='bg-purple-500 relative bottom-7 px-3 py-1 rounded text-["Roboto"] text-white font-bold'
            type="submit">
            Sing in
          </button>
        </div>
      </div>
    </div>
  )
}
