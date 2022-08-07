import { useState } from 'react'

export default function useFormate(type: string, payload: string) {
  const [value, setValue] = useState('')
  switch (type) {
    case 'money':
      setValue(
        Number(payload)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,'),
      )
      break
    case 'phone':
      setValue(payload.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'))
      break
    case 'ssn':
      setValue(payload.replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3'))
      break
    case 'zip':
      setValue(payload.replace(/(\d{5})(\d{4})/, '$1-$2'))
      break
    case 'ein':
      setValue(payload.replace(/(\d{2})(\d{7})/, '$1-$2'))
      break
    default:
      setValue(payload)
  }

  return value
}
