import { useQuery } from '@tanstack/react-query'
import { Circle } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { axiosGetAllClients } from '../../api/client'
import Header from '../../components/header/Header'
import LoadingSpinner from '../../components/LoadingSpinner'
import { AuthContext } from '../../context/AuthProvider'
import { headerTableClients } from '../../helpers/headersTables'
import useModal from '../../hooks/useModal'
import { Client } from '../../types/client'
import SetClientModal from './components/SetClientModal'

export default function ClientPage() {
  const { name } = useParams()
  const [filterClient, setFilterClient] = useState(name ?? '')
  const access = useContextSelector(AuthContext, (context) => context.access)
  const { switchModalView, isModalOpen } = useModal()
  const [clients, setClients] = useState<Client[] | []>([])
  const { data, isLoading } = useQuery(['clients'], axiosGetAllClients)
  const [isEditable, setIsEditable] = useState({})

  useEffect(() => {
    if (data?.data) {
      setClients(data?.data)
    }
  }, [data])

  function tableFilters(item: { name: string }) {
    return item.name.toUpperCase().includes(filterClient.toUpperCase())
  }

  function handleEditClient(item: any) {
    if ('id' in isEditable) {
      setIsEditable({})
    } else {
      setIsEditable(item)
    }
    switchModalView()
  }

  return (
    <div className="flex  flex-col  bg-gray-100 min-h-screen">
      <Header>
        <input
          placeholder="Ex: Amazon"
          onChange={(e) => setFilterClient(e.target.value)}
          className="inputsDefault mx-auto self-center relative left-40  "
          value={filterClient}
          type="text"
        />
      </Header>
      <div className=" mt-10 w-[80vw] self-center tableContainer overflow-auto ">
        <table className="table">
          <thead className="tableHead">
            <tr>
              {headerTableClients.map((item, index) => (
                <th scope="col" key={index} className="tableLine">
                  {item}
                </th>
              ))}
              {access === 'ADMIN' && (
                <th scope="col" className="tableLine">
                  <button
                    type="button"
                    onClick={switchModalView}
                    className=" relative left-2 mt-2 flex justify-center px-2 buttonStyle1"
                  >
                    Add new Client
                  </button>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr className="tableLoading">
                <LoadingSpinner css="w-10 h-10" />
              </tr>
            ) : (
              clients.map((item) => {
                if (tableFilters(item)) {
                  return (
                    <tr key={item.id} className="bg-white border-b ">
                      <th
                        scope="row"
                        className="flex relative top-[1.35rem] justify-center"
                      >
                        <Circle
                          weight="fill"
                          size={15}
                          color={item.status === 'ACTIVE' ? 'green' : 'gray'}
                        />
                      </th>
                      <td className="tableLine">{item.name}</td>
                      <td className="tableLine">
                        <ul className="flex flex-wrap gap-1">
                          {item.sunday && (
                            <li className="flex items-center gap-1">
                              <Circle size={5} color="black" weight="fill" />
                              Sun
                            </li>
                          )}
                          {item.monday && (
                            <li className="flex items-center gap-1">
                              <Circle size={5} color="black" weight="fill" />
                              Mon
                            </li>
                          )}
                          {item.tuesday && (
                            <li className="flex items-center gap-1">
                              <Circle size={5} color="black" weight="fill" />
                              Tues
                            </li>
                          )}
                          {item.wednesday && (
                            <li className="flex items-center gap-1">
                              <Circle size={5} color="black" weight="fill" />
                              Wed
                            </li>
                          )}
                          {item.thursday && (
                            <li className="flex items-center gap-1">
                              <Circle size={5} color="black" weight="fill" />
                              Thur
                            </li>
                          )}
                          {item.friday && (
                            <li className="flex items-center gap-1">
                              <Circle size={5} color="black" weight="fill" />
                              Fri
                            </li>
                          )}
                          {item.saturday && (
                            <li className="flex items-center gap-1">
                              <Circle size={5} color="black" weight="fill" />
                              Sat
                            </li>
                          )}
                        </ul>
                      </td>
                      <td className="tableLine">
                        {`${item.start}h - ${item.end}h`}
                      </td>
                      {access === 'ADMIN' && (
                        <td className="tableLine">
                          <button
                            onClick={() => handleEditClient(item)}
                            className="buttonStyle2 px-3 relative left-7"
                          >
                            Edit
                          </button>
                        </td>
                      )}
                    </tr>
                  )
                } else {
                  return []
                }
              })
            )}
          </tbody>
        </table>
      </div>
      <SetClientModal
        isModalOpen={isModalOpen}
        switchModalView={() => handleEditClient(isEditable)}
        modalInfos={isEditable}
      />
    </div>
  )
}
