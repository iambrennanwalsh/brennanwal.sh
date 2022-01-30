import {Component, Props} from '@/'
import {createContext, useState} from 'react'
import {Notifications, NotificationsContextType} from '.'

export const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined)

type NotificationsContextProviderProps = Props<'div'>

export const NotificationsContextProvider: Component<
  NotificationsContextProviderProps
> = ({children}) => {
  const [notifications, setNotifications] = useState<Notifications | undefined>(
    []
  )

  return (
    <NotificationsContext.Provider value={{notifications, setNotifications}}>
      {children}
    </NotificationsContext.Provider>
  )
}
