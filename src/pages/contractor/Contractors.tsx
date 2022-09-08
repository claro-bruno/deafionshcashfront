import { GearSix } from 'phosphor-react'
import { useState } from 'react'
import Header from '../../components/header/Header'
import useFormate from '../../hooks/useFormate'
import useModal from '../../hooks/useModal'
import ContractorModalInfos from './components/contractorsModalInfos/contractorModalInfos'
import { bodyTableContractors, headerTableContractors } from './constants'

export default function Contractors() {
  const { formatPhone, formatSsnOrItin } = useFormate()
  const { closeModal, isModalOpen } = useModal()
  const [contractorInfos, setContractorInfos] = useState({})
  function handleModalInfos(infos: {}) {
    closeModal()
    setContractorInfos(infos)
  }
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
              <tr key={user.id} className=" bg-white  border-b  ">
                <td>
                  <select
                    className="rounded bg-white  border ml-3 outline-none p-1"
                    value={user.status}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="pending">Pending</option>
                  </select>
                </td>
                <td className="px-4">
                  {' '}
                  {`${user.firstname} ${user.lastname}`}
                </td>
                <td className="px-2 my-2  h-16 flex items-start gap-2 justify-center flex-col">
                  <span className="relative left-4">
                    {formatSsnOrItin(user['itin/ssn/ein'].value)}
                  </span>
                  <button
                    onClick={() => handleModalInfos(user['itin/ssn/ein'])}
                    className="buttonStyle1 relative left-2 text-xs py-[0.09rem] px-2"
                  >
                    Document img
                  </button>
                </td>
                <td className="px-4">{formatPhone(user.phone)}</td>
                <td className="px-4">
                  <button
                    onClick={() => handleModalInfos(user.address)}
                    className="buttonStyle1 text-xs py-[0.09rem] px-2"
                  >
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
        <ContractorModalInfos
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          modalInfos={contractorInfos}
        />
      </main>
    </>
  )
}
