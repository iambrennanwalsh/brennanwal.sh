import type {Component, Props} from '@/'
import {Modal, Toast} from '@/components'
import {Footer, Header} from '@/partials'

export type ContainerProps = Props<'div'>

export const Container: Component<ContainerProps> = ({children}) => {
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
