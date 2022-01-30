import type {Dispatch, SetStateAction} from 'react'
import type {Notification} from '@/'

export {
	NotificationsContext,
	NotificationsContextProvider
} from './Notifications.context'

export type Notifications = Notification[]

export interface NotificationsContextType {
	notifications?: Notifications
	setNotifications: Dispatch<SetStateAction<Notification[] | undefined>>
}
