import { ChangeEvent, useState } from 'react'

export default function useHandleChange<t>(initialState: t) {
  const [state, setState] = useState<t>(initialState)
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }
  return [state, handleChange] as const
}
