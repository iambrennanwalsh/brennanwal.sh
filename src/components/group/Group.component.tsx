import {StyledGroup} from '.'

export const Group: App.GroupComponent = ({styles, className, children}) => {
	return (
		<StyledGroup {...(styles && {css: styles})} {...(className && {className: className})}>
			{children}
		</StyledGroup>
	)
}
