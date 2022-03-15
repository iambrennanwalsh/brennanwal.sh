import {Component, Notification, Props} from '@/'
import {createContext, Dispatch, SetStateAction, useState} from 'react'

export type Notifications = Notification[]

export interface NotificationsContextType {
  notifications?: Notifications
  setNotifications: Dispatch<SetStateAction<Notification[] | undefined>>
}

export const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined)

type NotificationsContextProviderProps = Props<'div'>

export const NotificationsContextProvider: Component<NotificationsContextProviderProps> =
  ({children}) => {
    const [notifications, setNotifications] = useState<
      Notifications | undefined
    >([])

    return (
      <NotificationsContext.Provider value={{notifications, setNotifications}}>
        {children}
      </NotificationsContext.Provider>
    )
  }
