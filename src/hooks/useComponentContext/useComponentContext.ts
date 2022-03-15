import type { ComponentContextType } from '@/contexts'
import { ComponentContext } from '@/contexts'
import { useContext } from 'react'

export const useComponentContext = (): Required<ComponentContextType> => {
  const componentState = useContext(ComponentContext)
  if (!componentState?.data || !componentState.setData) {
    throw new Error(
      'The components context is not initiated. Try wrapping a parent component with the <ComponentContextProvider> component.'
    )
  }
  return {
    data: componentState.data,
    setData: componentState.setData
  }
}
