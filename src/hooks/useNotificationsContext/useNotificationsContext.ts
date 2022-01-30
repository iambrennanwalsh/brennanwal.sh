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
        'NotificationsContext not found. Try wrapping a parent component with <NotificationsContextProvider>.'
      )
    }
    return {
      notifications: notificationsState.notifications,
      setNotifications: notificationsState.setNotifications,
    }
  }
