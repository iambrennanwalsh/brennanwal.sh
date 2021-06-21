import {StyledHero} from '.'
import {Content, Heading, Text} from '@/components'

export const Hero: App.HeroComponent = ({
	effect = 'home',
	className,
	styles,
	children
}) => {
	return (
		<StyledHero
			{...(styles && {css: styles})}
			className={`${effect} ${className && className}`}>
			<div className={`effect animation infinite in ${effect}`} />
			<Content className="animation appear in slide">{children}</Content>
		</StyledHero>
	)
}

const HeroHeading: App.HeroHeadingComponent = props => {
	return <Heading {...props} />
}
const HeroSubHeading: App.HeroSubHeadingComponent = props => {
	return <Text {...props} />
}

Hero.Heading = HeroHeading
Hero.SubHeading = HeroSubHeading
