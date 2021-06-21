import {createContext, useReducer} from 'react'
import {ApiReducer} from './Api.reducer'

export const ApiContext: App.ApiContext = createContext(undefined)

export const ApiProvider: App.Component = function ({children}) {
	const [state, dispatch] = useReducer(ApiReducer, {})
	return (
		<ApiContext.Provider value={{state, dispatch}}>
			{children}
		</ApiContext.Provider>
	)
}
