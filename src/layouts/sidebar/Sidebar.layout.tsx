import {Anchor, Content, Cloud, Text, Button, Card, Image} from '@/components'
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
				<Card.Content className="nosep">
					<Text>
						I'm a full stack applications developer, and entrepreneur. Welcome
						to my peronsal <Anchor href="/portfolio">portfolio</Anchor>, and{' '}
						<Anchor href="/blog">blog</Anchor>.
					</Text>
				</Card.Content>
			</Card>
			<Button className="freelance" color="primary">
				<Image src="/images/interface/freelance.svg" />
				Hire me on freelancer.
			</Button>
			<Content
				className="nosep"
				styles={{
					boxShadow: '0px 0px 3px 2px rgb(0 0 0 / 30%)',
					marginBottom: '1.25rem',
					borderRadius: '6px',
					padding: '0',
					backgroundColor: `hsl(180, 8%, 20%)`
				}}>
				<Content.Heading
					styles={{
						color: '#fff !important',
						padding: '20px 20px 12.5px !important',
						textTransform: 'uppercase !important',
						marginBottom: '0 !important',
						fontSize: '1rem'
					}}>
					Tags
				</Content.Heading>
				{state.cloud && <Cloud cloud={state.cloud} />}
			</Content>
			{state.featured &&
				state.featured.map(article => (
					<Card
						key={article.slug as string}
						className="alternate"
						href={{href: `/article/${article.slug}`}}>
						{article.image && <Card.Image src={article.image as string} />}
						<Card.Heading>{article.title}</Card.Heading>
					</Card>
				))}
		</StyledSidebar>
	)
}
