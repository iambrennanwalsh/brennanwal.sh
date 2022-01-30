import {Component, Props} from '@/'
import {useEffect, useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import {StyledModal, StyledModalBackground, StyledModalContent} from '.'

export type ModalProps = Props<typeof StyledModal>

export const Modal: Component<ModalProps> = props => {
  const [state, setState] = useState<boolean>(false)
  const [body, setBody] = useState<React.ReactNode | undefined>()

  useEffect(() => {
    window.addEventListener(
      'lightbox',
      ((event: CustomEvent) => {
        setBody(event.detail)
        setState(true)
      }) as EventListener,
      false
    )
  }, [])

  return (
    <CSSTransition in={state} timeout={500} unmountOnExit>
      <StyledModal {...props}>
        <StyledModalBackground onClick={() => setState(false)} />
        <StyledModalContent>{body && body}</StyledModalContent>
      </StyledModal>
    </CSSTransition>
  )
}
