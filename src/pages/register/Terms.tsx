import React, { useState } from 'react'
import Header from '../../components/header/Header'
import AntiBriberyandCorruption from '../../assets/AntiBriberyandCorruption.pdf'
import CodeofConduct from '../../assets/CodeofConduct.pdf'
import CodeofEthicalBehavior from '../../assets/CodeofEthicalBehavior.pdf'
import TermModal from '../../components/modal/TermModal'
import { File } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export default function Terms() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pdfInfos, setPdfInfos] = useState<{ title: string; url: string }>({
    title: '',
    url: '',
  })
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState({
    antiBrbery: false,
    codeofConduct: false,
    codeofEthicalBehavior: false,
  })
  const IsAllTermsChecked =
    !isChecked.antiBrbery ||
    !isChecked.codeofConduct ||
    !isChecked.codeofEthicalBehavior
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value =
      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value
    setIsChecked({
      ...isChecked,
      [evt.target.name]: value,
    })
  }
  function handleClickPdf(pdfName: string) {
    setIsModalOpen(true)
    if (pdfName === 'Anti-Bribery and Corruption') {
      setPdfInfos({
        title: 'Anti-Bribery and Corruption',
        url: AntiBriberyandCorruption,
      })
    }
    if (pdfName === 'Code of Conduct') {
      setPdfInfos({
        title: 'Code of Conduct',
        url: CodeofConduct,
      })
    }
    if (pdfName === 'Code of Ethical Behavior') {
      setPdfInfos({
        title: 'Code of Ethical Behavior',
        url: CodeofEthicalBehavior,
      })
    }
  }
  function navigateToRegisterPage() {
    navigate('/register')
  }
  return (
    <div className="flex  bg-gray-100 min-h-screen flex-col">
      <Header />
      <div className="flex items-center mt-10 justify-around ">
        <div className="flex flex-col bg-gray-50 shadow-lg justify-between border p-4 rounded-lg mb-[9rem] h-[15rem] items-center">
          <h3 className="">Anti-Bribery and Corruption</h3>
          <File
            className="cursor-pointer"
            tabIndex={1}
            onClick={() => handleClickPdf('Anti-Bribery and Corruption')}
            size={62}
            weight="fill"
          />
          <label className="flex text-sm items-center gap-2">
            <input
              name="antiBrbery"
              onChange={handleChange}
              type="checkbox"
              checked={isChecked.antiBrbery}
            />
            accept terms and conditions
          </label>
        </div>
        <div className="flex flex-col bg-gray-50 shadow-lg justify-between border p-4 rounded-lg mb-[9rem] h-[15rem] items-center">
          <h3 className="">Employee Code of Conduct</h3>
          <File
            className="cursor-pointer"
            tabIndex={1}
            onClick={() => handleClickPdf('Code of Conduct')}
            size={62}
            weight="fill"
          />
          <label className="flex text-sm items-center gap-2">
            <input
              name="codeofConduct"
              onChange={handleChange}
              type="checkbox"
              checked={isChecked.codeofConduct}
            />
            accept terms and conditions
          </label>
        </div>
        <div className="flex flex-col bg-gray-50 shadow-lg justify-between border p-4 rounded-lg mb-[9rem] h-[15rem] items-center">
          <h3 className="">Code of Ethical Behavior</h3>
          <File
            className="cursor-pointer"
            tabIndex={1}
            onClick={() => handleClickPdf('Code of Ethical Behavior')}
            size={62}
            weight="fill"
          />
          <label className="flex text-sm items-center gap-2">
            <input
              name="codeofEthicalBehavior"
              onChange={handleChange}
              type="checkbox"
              checked={isChecked.codeofEthicalBehavior}
            />
            accept terms and conditions
          </label>
        </div>
      </div>
      <button
        onClick={navigateToRegisterPage}
        disabled={IsAllTermsChecked}
        className="disabled:opacity-50 disabled:hover:ring-transparent disabled:cursor-not-allowed bg-brand ring border ring-transparent hover:ring-brand w-min self-center text-white font-bold py-2 px-3 rounded m-4"
        type="button"
      >
        Register
      </button>
      <TermModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        title={pdfInfos.title}
        pdfUrl={pdfInfos.url}
      />
    </div>
  )
}
