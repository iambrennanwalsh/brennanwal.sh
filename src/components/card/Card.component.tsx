import {Content, Group, Heading, Image, Anchor} from '@/components'
import {useChildren} from '@/hooks'
import {StyledCard} from '.'

export const Card: App.CardComponent = function ({
	href,
	className,
	styles,
	children
}) {
	const Children = useChildren(children)

	return (
		<StyledCard
			{...(styles && {css: styles})}
			{...(className && {className: className})}>
			<Anchor {...href}>
				{Children.withType(CardImage)}
				{Children.withType(CardHeading)}
				{Children.withType(CardContent)}
			</Anchor>
			{Children.withType(CardMeta)}
		</StyledCard>
	)
}

const CardImage: App.CardImageComponent = props => {
	return <Image {...props} />
}

const CardHeading: App.CardHeadingComponent = props => {
	return <Heading {...props} level={3} />
}

const CardContent: App.CardContentComponent = props => {
	return <Content {...props} />
}

const CardMeta: App.CardMetaComponent = props => {
	return <Group {...props} />
}

Card.Image = CardImage
Card.Heading = CardHeading
Card.Content = CardContent
Card.Meta = CardMeta
