import type {Component, Props, Resource} from '@/'
import type {Dispatch, SetStateAction} from 'react'
import {createContext, useState} from 'react'

export type ApiResources = Record<string, Resource[]>

export interface ApiContextType {
  resources?: ApiResources
  setResources: Dispatch<SetStateAction<ApiResources>>
}

export const ApiContext = createContext<ApiContextType | undefined>(undefined)

type ApiContextProviderProps = Props<'div'>

export const ApiContextProvider: Component<ApiContextProviderProps> = ({
  children,
}) => {
  const [resources, setResources] = useState({})

  return (
    <ApiContext.Provider
      value={{
        resources,
        setResources,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}
