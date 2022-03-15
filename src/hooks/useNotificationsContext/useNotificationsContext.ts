import type {NotificationsContextType} from '@/contexts'
import {NotificationsContext} from '@/contexts'
import {useContext} from 'react'

export const useNotificationsContext =
  (): Required<NotificationsContextType> => {
    const notificationsState = useContext(NotificationsContext)
    if (
      !notificationsState?.notifications ||
      !notificationsState.setNotifications
    ) {
      throw new Error(
        'The notifications context is not initiated. Try wrapping a parent component with the <NotificationsContextProvider> component.'
      )
    }
    return {
      notifications: notificationsState.notifications,
      setNotifications: notificationsState.setNotifications
    }
  }
