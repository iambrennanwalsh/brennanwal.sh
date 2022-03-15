import {Component, Props} from '@/'
import {StyledButton} from './Button.styles'

export interface ButtonOwnProps {
  handle?: () => void
}

export type ButtonProps = Props<typeof StyledButton, ButtonOwnProps>

export const Button: Component<ButtonProps> = ({
  children,
  handle,
  ...props
}) => {
  return (
    <StyledButton
      data-component="button"
      {...(handle && {onClick: handle})}
      {...props}>
      {children}
    </StyledButton>
  )
}

Button.toString = () => `[data-component="button"]`
