import type {Component, Props} from '@/'
import {StyledContent} from '.'

export type ContentProps = Props<typeof StyledContent>

export const Content: Component<ContentProps> = ({children, ...props}) => {
	return <StyledContent {...props}>{children}</StyledContent>
}
