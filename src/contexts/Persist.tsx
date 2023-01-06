/* eslint-disable @typescript-eslint/consistent-type-assertions */
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

export interface PersistDataType {
  language: string
}

interface PersistContextType {
  data: PersistDataType | undefined
  setData: (data: PersistDataType) => void
  reset: () => void
}

interface PersistContextProviderProps {
  children: ReactNode
}

export const PersistContext = createContext({} as PersistContextType)

export function PersistContextProvider ({ children }: PersistContextProviderProps) {
  const [data, setData] = useState<PersistDataType>()
  const [finishedGettingPersistedData, setFinishedGettingPersistedData] = useState(false)

  useEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem('app.coclub::PERSIST_DATA')

      if (value) {
        try {
          const parsedValue = JSON.parse(value)
          setData(parsedValue)
        } catch (e) {
          console.log(e)
        }
      }
      setFinishedGettingPersistedData(true)
    })()
  }, [])

  useEffect(() => {
    if (data) {
      const tmpData = { ...data }

      // not persisting
      // delete tmpData?.deeplinkParams

      AsyncStorage.setItem('app.coclub::PERSIST_DATA', JSON.stringify(tmpData))
    }
  }, [data])

  const setDataCorrectly = (item: any) => {
    setData((state) => ({
      ...state,
      ...item
    }))
  }

  const reset = () => {
    setData(undefined)
    AsyncStorage.removeItem('app.coclub::PERSIST_DATA')
  }

  if (!finishedGettingPersistedData) return <></>

  return (
    <PersistContext.Provider value={{ data, setData: setDataCorrectly, reset }}>{children}</PersistContext.Provider>
  )
}
