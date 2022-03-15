import type {ApiContextType} from '@/contexts'
import {ApiContext} from '@/contexts'
import {useContext} from 'react'

export const useApiContext = (): Required<ApiContextType> => {
  const apiState = useContext(ApiContext)
  if (!apiState?.resources || !apiState.setResources) {
    throw new Error(
      'The api context is not initiated. Try wrapping a parent component with the <ApiContextProvider> component.'
    )
  }
  return {
    resources: apiState.resources,
    setResources: apiState.setResources
  }
}
