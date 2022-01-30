import {Component, Notification, Props} from '@/'
import {useNotificationsContext} from '@/hooks'
import {useEffect, useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import {StyledToast, StyledToastIcon, StyledToastMessage, StyledToasts} from '.'

export type ToastContainerProps = Props<'div'>

export const ToastContainer: Component<ToastContainerProps> = props => {
  const {notifications} = useNotificationsContext()

  return (
    <StyledToasts {...props}>
      {notifications.map(toast => (
        <Toast {...toast} key={toast.message} />
      ))}
    </StyledToasts>
  )
}

type ToastOwnProps = Notification
export type ToastProps = Props<typeof StyledToast, ToastOwnProps>

const Toast: Component<ToastProps> = ({id, message, type, ...props}) => {
  const [inProp, setInProp] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setInProp(false), 3000)
  }, [])

  return (
    <CSSTransition in={inProp} appear timeout={350} unmountOnExit>
      <StyledToast color={type} onClick={() => setInProp(false)} {...props}>
        <StyledToastIcon icon={type} size="md" />
        <StyledToastMessage>{message}</StyledToastMessage>
      </StyledToast>
    </CSSTransition>
  )
}
