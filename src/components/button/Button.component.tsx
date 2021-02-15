import {StyledButton} from './Button.styles'

export const Button: App.ButtonComponent = function ({
	color = 'primary',
	size = 'sm',
	disabled = false,
	handle,
	styles,
	className,
	children
}) {
	return (
		<StyledButton
			color={color}
			size={size}
			disabled={disabled}
			{...(handle && {onClick: handle})}
			{...(styles && {css: styles})}
			{...(className && {className: className})}>
			{children}
		</StyledButton>
	)
}
