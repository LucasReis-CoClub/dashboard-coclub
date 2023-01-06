import { useContext } from 'react'

import { PersistContext, PersistDataType } from 'contexts/Persist'

interface TReturn {
  persistedData: PersistDataType | undefined
  persist: (data: PersistDataType) => void
  resetPersistedData: () => void
}

const usePersist = (): TReturn => {
  const { data, setData, reset } = useContext(PersistContext)

  return {
    persistedData: data,
    persist: (currData) => {
      setData(currData)
    },
    resetPersistedData: reset
  }
}

export default usePersist
