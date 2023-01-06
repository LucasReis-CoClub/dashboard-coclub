import React from 'react'

import useState from 'hooks/state'

interface IGenericType {
  [key: string]: any
}

export interface ISession {
  token: string
}

interface IStoreValues {
  setStore: (value: IGenericType) => void
  data: IGenericType
  resetData: () => void
}

const StoreContext = React.createContext<IStoreValues | null>(null)

const StoreProvider: React.FC<{ children: any }> = ({ children }) => {
  const [state, setState] = useState<IGenericType>()

  const value = {
    setStore: (data: IGenericType) => setState(data),
    resetData: () => setState((state: any) => ({ language: state.language })),
    data: state
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export default {
  Provider: StoreProvider,
  Context: StoreContext,
  useStore: (): IStoreValues => React.useContext(StoreContext) as IStoreValues
}
