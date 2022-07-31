import { Link } from 'react-router-dom'
import janitorialImage from '../../assets/janitorialfoto2.png'

export default function Login() {
  return (
    <div className="flex  min-w-screen min-h-screen">
      <div className="flex-1 flex items-center flex-col object-cover justify-center  bg-brand ">
        <h1 className="first-letter:text-6xl first-letter:text-zinc-900 leading-4 relative bottom-16 font-extrabold text-2xl font-sans text-gray-200">
          Global Janitorial Services!
        </h1>
        <img
          className="w-[99%] rounded shadow-md"
          src={janitorialImage}
          alt="workers smiling"
        />
      </div>
      <div className="flex-1 flex flex-col w-[100%] bg-gray-100 min-h-full  items-center  ">
        <div className="flex items-center mt-9 p-4  my-auto gap-2 flex-col">
          <img
            className=" mt-10 object-contain"
            src="https://www.globaljanitorialservices.com/assets/images/resources/logo-3.png"
            alt="globaljanitorialservices logo"
          />
          <form className="flex flex-col items-center justify-center gap-4 px-4 h-72 w-auto">
            <label className="labelsDefault">
              Username
              <input name="Username" className="inputsDefault" type="text" />
            </label>
            <label className="labelsDefault">
              Password
              <input
                name="password"
                className="inputsDefault"
                type="password"
              />
            </label>
            <button
              className="disabled:cursor-not-allowed bg-brand2 ring text-sm ring-transparent hover:ring-brand2 border border-transparent hover:border-white mt-3 px-2 py-[0.15rem]  rounded text-white font-bold transition-colors"
              type="submit"
            >
              <Link to="/main">Sing in</Link>
            </button>
          </form>
          <span className="text-sm mt-2 text-gray-400">
            Don`&lsquo;`t have an account ?{' '}
            {
              <Link className="text-blue-500" to="/register/terms">
                Register
              </Link>
            }
          </span>
        </div>
      </div>
    </div>
  )
}
