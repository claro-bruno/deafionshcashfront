import { useQuery } from '@tanstack/react-query'
import { GearSix } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { axiosGetAllContractors } from '../../api/contractor'
import Header from '../../components/header/Header'
import { headerTableContractors } from '../../helpers/headersTables'
import useModal from '../../hooks/useModal'
import { Contractor } from '../../types/contractor'
import ContractorsLine from './components/contractorsLine/ContractorsLine'
import ContractorModalInfos from './components/contractorsModalInfos/ContractorsModalInfos'

export default function Contractors() {
  const { switchModalView, isModalOpen } = useModal()
  const [contractorInfos, setContractorInfos] = useState({})
  const { data } = useQuery([`contractors`], axiosGetAllContractors)
  const [allContractors, setAllContractors] = useState<Contractor[]>([])
  console.log(data?.data)
  useEffect(() => {
    if (data?.data) {
      setAllContractors(data?.data)
    }
  }, [data])
  function handleModalInfos(infos: {}, src: string) {
    switchModalView()
    setContractorInfos({ ...infos, src })
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
      <main className="mt-10 px-12  flex justify-center items-center">
        <table className="table max-w-[77vw] ">
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
            {allContractors.map((contractor) => (
              <ContractorsLine
                key={contractor.id}
                handleModalInfos={handleModalInfos}
                contractor={contractor}
              />
            ))}
          </tbody>
        </table>
        <ContractorModalInfos
          isModalOpen={isModalOpen}
          switchModalView={switchModalView}
          modalInfos={contractorInfos}
        />
      </main>
    </>
  )
}
