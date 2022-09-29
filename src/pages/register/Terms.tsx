import { File } from 'phosphor-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import AntiBriberyandCorruption from '../../assets/AntiBriberyandCorruption.pdf'
import CodeofConduct from '../../assets/CodeofConduct.pdf'
import CodeofEthicalBehavior from '../../assets/CodeofEthicalBehavior.pdf'
import Header from '../../components/header/Header'
import TermModal from '../../components/modals/TermModal'
import { AuthContext } from '../../context/AuthProvider'
import useModal from '../../hooks/useModal'

export default function Terms() {
  const { switchModalView, isModalOpen } = useModal()
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
  const access = useContextSelector(AuthContext, (context) => context.access)
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
    switchModalView()
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
        <div className="flex flex-col bg-gray-50 shadow-lg justify-around border p-4 rounded-lg mb-[9rem] h-[15rem] items-center">
          <h3 className="">Anti-Bribery and Corruption</h3>
          <File
            className="cursor-pointer"
            tabIndex={1}
            onClick={() => handleClickPdf('Anti-Bribery and Corruption')}
            size={62}
            weight="fill"
          />
          {!access && (
            <label className="flex text-sm items-center gap-2">
              <input
                name="antiBrbery"
                onChange={handleChange}
                type="checkbox"
                checked={isChecked.antiBrbery}
              />
              accept terms and conditions
            </label>
          )}
        </div>
        <div className="flex flex-col bg-gray-50 shadow-lg justify-around border p-4 rounded-lg mb-[9rem] h-[15rem] items-center">
          <h3 className="">Employee Code of Conduct</h3>
          <File
            className="cursor-pointer"
            tabIndex={1}
            onClick={() => handleClickPdf('Code of Conduct')}
            size={62}
            weight="fill"
          />
          {!access && (
            <label className="flex text-sm items-center gap-2">
              <input
                name="codeofConduct"
                onChange={handleChange}
                type="checkbox"
                checked={isChecked.codeofConduct}
              />
              accept terms and conditions
            </label>
          )}
        </div>
        <div className="flex flex-col bg-gray-50 shadow-lg justify-around border p-4 rounded-lg mb-[9rem] h-[15rem] items-center">
          <h3 className="">Code of Ethical Behavior</h3>
          <File
            className="cursor-pointer"
            tabIndex={1}
            onClick={() => handleClickPdf('Code of Ethical Behavior')}
            size={62}
            weight="fill"
          />
          {!access && (
            <label className="flex text-sm items-center gap-2">
              <input
                name="codeofEthicalBehavior"
                onChange={handleChange}
                type="checkbox"
                checked={isChecked.codeofEthicalBehavior}
              />
              accept terms and conditions
            </label>
          )}
        </div>
      </div>
      {!access && (
        <button
          onClick={navigateToRegisterPage}
          disabled={IsAllTermsChecked}
          className="buttonStyle1 px-3 flex items-center justify-center self-center"
          type="button"
        >
          Register
        </button>
      )}
      <TermModal
        isModalOpen={isModalOpen}
        switchModalView={() => switchModalView()}
        title={pdfInfos.title}
        pdfUrl={pdfInfos.url}
      />
    </div>
  )
}
