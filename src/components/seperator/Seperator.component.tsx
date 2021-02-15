import {StyledSeperator} from './Seperator.styles'

export const Seperator: App.SeperatorComponent = function ({styles, className}) {
	return (
		<StyledSeperator {...(styles && {css: styles})} {...(className && {className: className})} />
	)
}
