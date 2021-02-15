import {StyledPill} from './Pill.styles'
import {Anchor, Icon, Text} from '@/components'

export const Pill: App.PillComponent = function ({label, icon, href, className, styles}) {
	return (
		<Anchor {...href}>
			<StyledPill {...(styles && {css: styles})} {...(className && {className: className})}>
				{icon && <Icon {...icon} />}
				<Text element="span">{label}</Text>
			</StyledPill>
		</Anchor>
	)
}
