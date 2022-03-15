import type {Component, Props} from '@/'
import {Modal, Toast} from '@/components'
import {Footer, Header} from '@/partials'

export type ContainerProps = Props<'div'>
export type ContainerComponent = Component<ContainerProps>

export const Container: ContainerComponent = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Modal />
      <Toast />
    </>
  )
}
