import type {Component, Props} from '@/'
import {Content, Sidebar} from '@/partials'
import {StyledMain} from '.'

export type MainProps = Props<typeof StyledMain>

export const Main: Component<MainProps> = ({children, ...props}) => {
	return (
		<StyledMain {...props}>
			<Content>{children}</Content>
			<Sidebar />
		</StyledMain>
	)
}
