import {Content, Sidebar} from '@/layouts'
import {StyledMain} from '.'

export const Main: App.Component = ({children}) => {
	return (
		<StyledMain>
			<Content>{children}</Content>
			<Sidebar />
		</StyledMain>
	)
}
