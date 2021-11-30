import {useContext, useEffect} from 'react'
import {GetStaticProps, InferGetStaticPropsType} from 'next'
import {
	Anchor,
	Box,
	Content,
	Group,
	Hero,
	Icon,
	Seo,
	Text,
	Slide
} from '@/components'
import {AddResourceAction, ApiContext} from '@/contexts'
import {Main} from '@/layouts'
import {getAll} from '@/utils/Api'
import {LayoutState} from '@/utils/LayoutState'

const Home = ({
	layoutState
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	const {featured, categories, cloud} = layoutState
	const {state, dispatch} = useContext(ApiContext)

	useEffect(() => {
		if (!('featured' in state))
			dispatch(AddResourceAction({featured: featured}))
		if (!('categories' in state))
			dispatch(AddResourceAction({categories: categories}))
		if (!('cloud' in state)) dispatch(AddResourceAction({cloud: cloud}))
	}, [])

	const meta = {
		title: 'Web Developer and Entrepreneur',
		description:
			'Hi, Im Brennan. Im a web, mobile, and desktop applications developer, and entrepreneur. Welcome to my personal blog, portfolio, and home page.'
	}

	return (
		<>
			<Seo {...meta} />
			<Hero>
				<Hero.Heading>I am Brennan Walsh.</Hero.Heading>
				<Hero.SubHeading>
					Web, Mobile, and Software Applications Developer.
				</Hero.SubHeading>
				<div className="meta">
					<Text element="b">@iambrennanwalsh</Text>
					<Group>
						<Anchor href="https://github.com/iambrennanwalsh/">
							<Icon size="md" type="github" />
						</Anchor>
						<Anchor href="https://facebook.com/iambrennanwalsh/">
							<Icon size="md" type="facebook" />
						</Anchor>
						<Anchor href="https://instagram.com/iambrennanwalsh/">
							<Icon size="md" type="instagram" />
						</Anchor>
						<Anchor href="https://www.linkedin.com/in/iambrennanwalsh/">
							<Icon size="md" type="linkedin" />
						</Anchor>
					</Group>
				</div>
			</Hero>
			<Main>
				<button
					type="button"
					onClick={() => {
						throw new Error('Sentry Frontend Error')
					}}>
					Throw error
				</button>
				<Box>
					<Box.Heading>
						A Little About Me
						<Anchor href="/about">
							<Icon type="right" />
						</Anchor>
					</Box.Heading>
					<Content>
						<Content.Image src="/images/me/me2.jpg" lightbox />
						<Content.Heading>Hi, I'm Brennan Walsh</Content.Heading>
						<Content.Paragraph>
							I’m a full stack applications developer and entrepreneur based out
							of Los Angeles. I currently freelance my skills via{' '}
							<a href="https://www.freelancer.com/u/iambrennanwalsh">
								Freelancer.com
							</a>{' '}
							and{' '}
							<a href="https://www.freelancer.com/u/iambrennanwalsh">
								Upwork.com
							</a>
							.
						</Content.Paragraph>
						<Content.Paragraph>
							If theres anything to know about me it's that I love what I do.
							I'm so beyond passionate about technology, and the business world,
							that I don't even consider what I do 'work'. It's a hobby. my
							passion. Its something I can do all day without developing the
							slightest burnout or fatigue.
						</Content.Paragraph>
						<Content.Paragraph>
							I preach the power of a positive mindset, gratitude, and the law
							of attraction. Life is so fragile and precious. So be happy for
							the sake of being happy. Like a child. Happy for no reason at all.
							Change your mindset, change your life.
						</Content.Paragraph>
					</Content>
				</Box>
				<Box>
					<Box.Heading>
						What I'm Working On
						<Anchor href="/portfolio">
							<Icon type="right" />
						</Anchor>
					</Box.Heading>
					<Content>
						<Content.Image lightbox src="/images/portfolio/brennan.jpg" />
						<Content.Heading>Freelance</Content.Heading>
						<Content.Paragraph>
							My latest project is my freelance work. I freelance my application
							development skills to anyone with a project they need help with. I
							even offer free consultations, to help clear the confusion that
							surrounds the technical aspect of creating for the web. My
							clients, include individuals, small businesses, startups, non
							profits, and corportations. No matter the complexity of your idea,
							I can bring your vision to life.{' '}
							<Anchor href="https://www.freelancer.com/u/iambrennanwalsh">
								Hire me on freelancer.com.
							</Anchor>
						</Content.Paragraph>
					</Content>
					<Content>
						<Content.Image lightbox src="/images/portfolio/wagregistry.jpg" />
						<Content.Heading>WagRegistry</Content.Heading>
						<Content.Paragraph>
							WagRegistry is a project in the works. It's a web application that
							aims to simplify the process of registering service, therapy, and
							emotional support dogs. It can be a confusing process and people
							often come to it with anxiety, worried about getting on their
							plane, an uber, or staying at a hotel with their dog. My app seeks
							to be simple but informative.
						</Content.Paragraph>
					</Content>
				</Box>
				<Slide
					name="steve-jobs"
					quote="The people who are crazy enough to think that they can change the world, are the ones who do."
					source="Steve Jobs"
				/>
				<Box>
					<Box.Heading>
						Github Repository
						<Anchor href="https://github.com/iambrennanwalsh/brennanwal.sh">
							<Icon type="right" />
						</Anchor>
					</Box.Heading>
					<Content>
						<Content.Paragraph>
							The backend of this app is powered by the{' '}
							<a>Symfony 4 PHP framework</a>, and <a>Doctrine</a> for database
							management. The frontend is built on <a>Vue.js</a>, <a>webpack</a>{' '}
							for asset bundling, and the <a>Bulma css framework</a>. This site
							is tracked in version control using <a>git</a> and <a>Github</a>,
							and uses <a>Heroku</a> for deployment. Every push to the master
							branch triggers Heroku to deploy a new version of this app.
						</Content.Paragraph>
						<Content.Paragraph>
							See the <a>README.md</a> file in the root of the public github
							repository, for more detailed information regarding how this app
							utilizes the aformentioned technologies.
						</Content.Paragraph>
					</Content>
				</Box>
			</Main>
		</>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const articles = getAll('articles')
	const layoutState = LayoutState(articles as App.Article[])
	return {
		props: {
			layoutState
		}
	}
}
