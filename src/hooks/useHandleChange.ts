import { ChangeEvent, useState } from 'react'

export default function useHandleChange<t>(initialState: t) {
  const [state, setState] = useState<t>(initialState)
  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
    checkbox = false,
  ) {
    if (checkbox) {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      })
    } else
      setState({
        ...state,
        [event.target.name]: event.target.value,
      })
  }
  return [state, handleChange] as const
}
