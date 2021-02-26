import {Anchor, Content, Cloud, Text, Button, Card, Image, Icon} from '@/components'
import {SocialIcons} from '@/Params'
import {Theme} from '@/styles/abstract'
import {useContext} from 'react'
import {ApiContext} from '@/contexts'
import {StyledSidebar} from '.'

export const Sidebar: App.Component = function () {
	const {state} = useContext(ApiContext)

	return (
		<StyledSidebar>
			<Card className="me">
				<Card.Image src="/images/me/me.jpg" lightbox />
				<Card.Heading level={3}>Brennan Walsh</Card.Heading>
				<Card.Content>
					<Text>
						I'm a full stack applications developer, and entrepreneur. Welcome to my peronsal{' '}
						<Anchor href="/portfolio">portfolio</Anchor>, and <Anchor href="/blog">blog</Anchor>.
					</Text>
				</Card.Content>
				<Card.Meta>
					{SocialIcons.map(meta => (
						<Anchor key={meta.href} href={meta.href}>
							<Icon type={meta.type} size={meta.size} styles={{color: Theme.pallete.tertiary}} />
						</Anchor>
					))}
				</Card.Meta>
			</Card>
			<Button className="freelance" color="info">
				<Image src="/images/interface/freelance.svg" />
				Hire me on freelancer.
			</Button>
			<Content
				className="nosep"
				styles={{
					boxShadow: '0px 0px 3px rgb(0 0 0 / 30%)',
					marginBottom: '1.25rem',
					borderRadius: '4px',
					padding: '0',
					background: '#272d2d'
				}}>
				<Content.Heading
					styles={{
						color: '#fff !important',
						padding: '20px 20px 12.5px !important',
						textTransform: 'uppercase !important',
						marginBottom: '0 !important'
					}}>
					Tags
				</Content.Heading>
				{state.cloud && <Cloud cloud={state.cloud} />}
			</Content>
			{state.featured &&
				state.featured.map(article => (
					<Card key={article.slug} className="alternate" href={{href: `/article/${article.slug}`}}>
						{article.image && <Card.Image src={article.image} />}
						<Card.Heading>{article.title}</Card.Heading>
					</Card>
				))}
		</StyledSidebar>
	)
}
