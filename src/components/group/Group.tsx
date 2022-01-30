import {Component, Props} from '@/'
import {StyledGroup} from '.'

export type GroupProps = Props<typeof StyledGroup>

export const Group: Component<GroupProps> = props => {
  return <StyledGroup {...props} />
}
