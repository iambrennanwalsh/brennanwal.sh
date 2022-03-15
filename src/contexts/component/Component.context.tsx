import { Props } from '@/'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

export interface ComponentContextType {
  data?: unknown
  setData: Dispatch<SetStateAction<unknown>>
}

export const ComponentContext = createContext<ComponentContextType | undefined>(
  undefined
)

interface ComponentContextProviderOwnProps {
  value?: unknown
}

export function ComponentContextProvider({
  children,
  value
}: Props<'div', ComponentContextProviderOwnProps>) {
  const [data, setData] = useState(value ?? {})

  return (
    <ComponentContext.Provider value={{ data, setData }}>
      {children}
    </ComponentContext.Provider>
  )
}
