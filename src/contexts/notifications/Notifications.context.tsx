import {createContext, useReducer} from 'react'
import {NotificationsReducer} from './Notifications.reducer'

export const NotificationsContext: App.NotificationsContext =
	createContext(undefined)

export const NotificationsProvider: App.Component = ({children}) => {
	const [state, dispatch] = useReducer(NotificationsReducer, [])

	return (
		<NotificationsContext.Provider value={{state, dispatch}}>
			{children}
		</NotificationsContext.Provider>
	)
}
