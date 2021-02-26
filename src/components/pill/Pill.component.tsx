import {StyledPill} from './Pill.styles'
import {Anchor, Icon, Text} from '@/components'

export const Pill: App.PillComponent = function ({data, icon, className, styles}) {
	return (
		<StyledPill {...(styles && {css: styles})} {...(className && {className: className})}>
			{icon && <Icon {...icon} />}
			<div className="links">
				{data.map((i, x) => (
					<Anchor key={i.label} {...i.href}>
						<Text element="span">
							{i.label}
							{x + 1 < data.length && ', '}
						</Text>
					</Anchor>
				))}
			</div>
		</StyledPill>
	)
}
