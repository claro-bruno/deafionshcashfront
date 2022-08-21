import { useState } from 'react'

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function closeModal() {
    setIsModalOpen(!isModalOpen)
  }

  return {
    isModalOpen,
    closeModal,
  }
}
