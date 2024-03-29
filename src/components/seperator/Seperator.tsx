import { Component, Props } from '@/'
import { StyledSeperator } from '.'

export type SeperatorProps = Props<typeof StyledSeperator>

export const Seperator: Component<SeperatorProps> = props => {
  return <StyledSeperator data-component="seperator" {...props} />
}

Seperator.toString = () => '[data-component="seperator"]'
