// Toast Component(client/src/component/toast)

import React, {useState, useEffect, useContext} from 'react'
import {CSSTransition} from 'react-transition-group'
import {NotificationsContext} from '@/contexts'
import {StyledToast, StyledToasts, StyledToastIcon, StyledToastMessage} from '.'

export const ToastContainer: App.ToastContainer = function () {
	const toasts = useContext(NotificationsContext)?.state

	return (
		<StyledToasts>
			{toasts && toasts.map(toast => <Toast {...toast} key={toast.id} />)}
		</StyledToasts>
	)
}

const Toast: App.ToastComponent = function ({message, type}) {
	const [inProp, setInProp] = useState<boolean>(true)

	useEffect(() => {
		setTimeout(() => setInProp(false), 3000)
	}, [])

	return (
		<CSSTransition in={inProp} appear timeout={350} unmountOnExit classNames="toast">
			<StyledToast className={type} onClick={() => setInProp(false)}>
				<StyledToastIcon type={type} size="md" />
				<StyledToastMessage>{message}</StyledToastMessage>
			</StyledToast>
		</CSSTransition>
	)
}
