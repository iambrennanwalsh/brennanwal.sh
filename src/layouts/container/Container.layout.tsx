import {Header, Footer} from '@/layouts'
import {Modal, Toast} from '@/components'

export const Container: App.Component = ({children}) => {
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
