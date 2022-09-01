import { GearSix } from 'phosphor-react'
import Header from '../../components/header/Header'
import { bodyTableContractors, headerTableContractors } from './constants'

export default function Contractors() {
  return (
    <>
      <Header>
        <input
          placeholder="Ex: Bruno"
          className="inputsDefault mx-auto self-center relative left-40  "
          type="text"
        />
      </Header>
      <main className="mt-10 px-12">
        <table className="table ">
          <thead className="tableHead">
            <tr>
              {headerTableContractors.map((item, index) => (
                <th scope="col" key={index} className="tableLine">
                  {item}
                </th>
              ))}
              <th scope="col" className="tableLine">
                <GearSix size={24} />
              </th>
            </tr>
          </thead>
          <tbody>
            {bodyTableContractors.map((user) => (
              <tr key={user.id} className=" bg-white border-b py-4 ">
                <td>
                  <select
                    className="rounded bg-white border ml-3 outline-none p-1"
                    value={user.status}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">a Inactive</option>
                    <option value="pending">Pending</option>
                  </select>
                </td>
                <td className="px-4">
                  {' '}
                  {`${user.firstname} ${user.lastname}`}
                </td>
                <td className="px-2  h-16 flex items-start gap-2 justify-center flex-col">
                  <span className="relative left-4">
                    {user['itin/ssn/ein']}
                  </span>
                  <button className="buttonStyle1 relative left-2 text-xs py-[0.09rem] px-2">
                    Document img
                  </button>
                </td>
                <td className="px-4">{user.phone}</td>
                <td className="px-4">
                  <button className="buttonStyle1 text-xs py-[0.09rem] px-2">
                    Address infos
                  </button>
                </td>
                <td className="px-4">
                  <button
                    onClick={() => console.log(user.address)}
                    className="buttonStyle1 text-xs py-[0.09rem] px-2"
                    type="button"
                  >
                    Save
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  )
}
