import { useQuery } from '@tanstack/react-query'
import { Circle, Plus } from 'phosphor-react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosGetAllClients } from '../../api/client'
import Header from '../../components/header/Header'
import useModal from '../../hooks/useModal'
import NewCompanyModal from './components/SetClientModal'
import { bodyTable, headerTable } from './constants'

export default function Client() {
  const { name } = useParams()
  const [filterClient, setFilterClient] = useState(name ?? '')
  const { switchModalView, isModalOpen } = useModal()
  /*   const { data } = useQuery(['clients'], axiosGetAllClients)
  console.log(data?.data) */
  const [isEditable, setIsEditable] = useState({})

  function tableFilters(item: { name: string }) {
    return item.name.toUpperCase().includes(filterClient.toUpperCase())
  }

  function handleEditClient(item: any) {
    if ('id' in isEditable) {
      setIsEditable({})
    }
    setIsEditable(item)
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
              {headerTable.map((item, index) => (
                <th scope="col" key={index} className="tableLine">
                  {item}
                </th>
              ))}
              <th scope="col" className="tableLine">
                <button
                  type="button"
                  onClick={switchModalView}
                  className=" relative left-8 mt-2 flex justify-center px-2 buttonStyle1"
                >
                  <Plus size={20} color={'white'} />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {bodyTable.map((item) => {
              if (tableFilters(item)) {
                return (
                  <tr key={item.id} className="bg-white border-b ">
                    <th scope="row" className="tableBodyTh">
                      <Circle
                        weight="fill"
                        size={15}
                        color={item.status === 'Active' ? 'green' : 'gray'}
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
                    <td className="tableLine">
                      <button
                        onClick={() => handleEditClient(item)}
                        className="buttonStyle2 px-3 relative left-7"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                )
              } else {
                return []
              }
            })}
          </tbody>
        </table>
      </div>
      <NewCompanyModal
        isModalOpen={isModalOpen}
        switchModalView={() => handleEditClient(isEditable)}
        modalInfos={isEditable}
      />
    </div>
  )
}
