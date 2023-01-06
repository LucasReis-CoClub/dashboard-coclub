import React from 'react'
import { type } from 'ramda'

type TState = [state: any, setState: (...props: any[]) => void]

export default <State>(initialState?: any): TState => {
  const [state, setUseState] = React.useState<State>(initialState)

  const setState = (newState: any) => {
    if (type(newState) === 'Array') return setUseState((prev: any) => [...prev, ...newState] as State)

    if (type(newState) === 'Object') return setUseState((prev: any) => ({ ...prev, ...newState }))

    return setUseState(newState)
  }

  return [state, setState]
}
