import {StyledIcon} from '.'

export const Icon: App.IconComponent = ({className, size, styles, type}) => {
	return (
		<StyledIcon
			type={type}
			{...(size && {size: size})}
			{...(styles && {css: styles})}
			{...(className && {className: className})}
		/>
	)
}
