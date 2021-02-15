import {Content, Sidebar} from '.'

export const Main: App.Component = ({children}) => {
	return (
		<main id="main">
			<Content>{children}</Content>
			<Sidebar />
		</main>
	)
}
