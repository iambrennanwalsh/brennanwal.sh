import type {Component, Props} from '@/'
import {StyledContent} from '.'

export type ContentProps = Props<typeof StyledContent>
export type ContentComponent = Component<ContentProps>

export const Content: ContentComponent = ({children, ...props}) => {
  return <StyledContent {...props}>{children}</StyledContent>
}
