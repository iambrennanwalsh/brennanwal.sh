import {useState, useEffect} from 'react'
import {CSSTransition} from 'react-transition-group'
import {StyledModal, StyledModalBackground, StyledModalContent} from './Modal.styles'

export const Modal: App.ModalComponent = function ({className, styles}) {
	const [state, setState] = useState<boolean>(false)
	const [body, setBody] = useState<React.ReactNode | undefined>()

	useEffect(() => {
		window.addEventListener(
			'modal',
			((event: CustomEvent) => {
				setBody(event.detail)
				setState(true)
			}) as EventListener,
			false
		)
	}, [])

	return (
		<CSSTransition in={state} timeout={500} unmountOnExit classNames="modal">
			<StyledModal {...(styles && {css: styles})} {...(className && {className: className})}>
				<StyledModalBackground onClick={() => setState(false)} />
				<StyledModalContent>{body && body}</StyledModalContent>
			</StyledModal>
		</CSSTransition>
	)
}
