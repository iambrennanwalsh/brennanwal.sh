import {Component, Props} from '@/'
import {StyledSeperator} from '.'

export type SeperatorProps = Props<typeof StyledSeperator>

export const Seperator: Component<SeperatorProps> = props => {
  return <StyledSeperator {...props} />
}
