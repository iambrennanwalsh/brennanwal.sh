import type { Article, Component, Project, Props } from '@/'
import type { Dispatch, SetStateAction } from 'react'
import { createContext, useState } from 'react'

export type ApiResources = {
  projects?: Project[]
  articles?: Article[]
}

export interface ApiContextType {
  resources?: ApiResources
  setResources: Dispatch<SetStateAction<ApiResources>>
}

export const ApiContext = createContext<ApiContextType | undefined>(undefined)

interface ApiContextProviderOwnProps {
  value: ApiResources
}
export type ApiContextProviderProps = Props<'div', ApiContextProviderOwnProps>
export type ApiContextProviderComponent = Component<ApiContextProviderProps>

export const ApiContextProvider: ApiContextProviderComponent = ({
  value = {},
  children
}) => {
  const [resources, setResources] = useState(value)

  return (
    <ApiContext.Provider
      value={{
        resources,
        setResources
      }}>
      {children}
    </ApiContext.Provider>
  )
}
