import {Component, Props} from '@/'
import {StyledButton} from './Button.styles'

export interface ButtonOwnProps {
  handle?: () => void
}

export type ButtonProps = Props<typeof StyledButton, ButtonOwnProps>

export const Button: Component<ButtonProps> = ({children, ...props}) => {
  return <StyledButton {...props}>{children}</StyledButton>
}
