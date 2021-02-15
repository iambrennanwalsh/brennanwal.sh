import {Anchor, Box, Content, PageTitle, Seo, Tabs, Slide} from '@/components'
import {AddResourceAction, ApiContext} from '@/contexts'
import {Main} from '@/layouts'
import {getAll} from '@/utils/Api'
import {LayoutState} from '@/utils/LayoutState'
import {GetStaticProps, InferGetStaticPropsType} from 'next'
import {useContext, useEffect} from 'react'

const About = ({layoutState}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	const meta = {
		title: 'About Me',
		description: 'I am a full stack applications developer and entrepreneur living in Los Angeles.'
	}
	const {featured, categories, cloud} = layoutState
	const {state, dispatch} = useContext(ApiContext)
	useEffect(() => {
		if (!state.featured) dispatch(AddResourceAction({featured: featured}))
		if (!state.categories) dispatch(AddResourceAction({categories: categories}))
		if (!state.cloud) dispatch(AddResourceAction({cloud: cloud}))
	}, [])
	return (
		<Main>
			<Seo {...meta} />
			<PageTitle {...meta} />
			<Box>
				<Box.Heading>Who am I?</Box.Heading>
				<Content>
					<Content.Image src="/images/me/me3.jpg" lightbox />
					<Content.Paragraph>
						<s>Nobody really.</s> I am 24 years young, and living in Los Angeles where I was born
						and raised. I am a web, mobile, and desktop applications developer as well as an
						entrepreneur. When I'm not busy developing one of my own projects, you'll probably find
						me working on a clients.
					</Content.Paragraph>
				</Content>
				<Content>
					<Content.Heading>Developer</Content.Heading>
					<Content.Paragraph>
						My journey as a developer began when I was 16. I taught myself HTML and CSS over my
						Junior year of high school, and absolutely fell in love with it in the process. Coding
						engages my brain in all the right ways. It's something I can do all day long without the
						slightest burnout or fatigue.
					</Content.Paragraph>
					<Content.Paragraph>
						Almost a decade later, you'll find that I am proficient in an extensive list of
						languages, frameworks, platforms, and tools (you can find the complete list on my{' '}
						<Anchor href="/portfolio">Portfolio</Anchor>). I am fluent in PHP, JavaScript, Go,
						Objective-C, and Swift. My typical web app is built on Symfony 4, and Vue.js, Mainized
						with Docker, exhaustively tested via Behat and PHPSpec, and deployed to Heroku.
					</Content.Paragraph>
				</Content>
				<Content>
					<Content.Heading>Entrepreneur</Content.Heading>
					<Content.Paragraph>
						If there’s anything to know about me, it’s that I have a burning passion for the
						business world. I started my 1st at 17, buying 'The Lord of the Rings' prop replicas
						from China to resell them on eBay and etsy. 8 years and 3 ventures later, I’ve acquired
						extensive hands on experience in the many aspects of digital marketing, business
						operations, and project management.
					</Content.Paragraph>
				</Content>
			</Box>

			<Box>
				<Box.Heading>What I'm All About</Box.Heading>
				<Content>
					<Content.Heading>Behavior Driven Development</Content.Heading>
					<Content.Paragraph>
						BDD (a form of test driven development) at its core is a tool for 'closing the
						disconnect' between a developer and client. An issue I run into time and time again as a
						freelancer, is efficiently communicating with my clients. I am a developer. I work with
						websites all day every day. I know how to make a website that is useable, efficient, and
						meets my clients goals. But before I can, the client needs to express those goals to me.
						But thats not always an easy thing for the non technical to do.
					</Content.Paragraph>
					<Content.Paragraph>
						Behavioral driven development was created to remedy this exact type of dissconnect. When
						I begin a new project, I'll ussually sit down with the client for aboout an hour.
						Through a collaborative back and forth process, i'll extensively document exactly what
						it is they're envisioning. At the end of this process, I'll have a set of well defined
						features and behaviors to impliment. The process helps the client express their vision
						and me know what to focus on.
					</Content.Paragraph>
				</Content>
				<Content>
					<Content.Heading>The Law of Attraction</Content.Heading>
					<Content.Paragraph>
						The law of attraction is what enables my passion. What is the law of attraction?
						Whatever we focus on through our thoughts and intentions, we manifest into our lives.
						For example, let’s say your dream is to run a Fortune 500 company. Push away all the
						doubts, and allow yourself to just believe that you are 100% capable of becoming that
						CEO. That it's not just a dream. It's all about energy. When you believe that something
						you really want is within your capabilities, you’re going to be motivated to go get it.
						You’re not just going to be motivated, you’re going to be excited and passionate about
						it. By going about your life focusing on the things you want, you're happier.
					</Content.Paragraph>
				</Content>
			</Box>
			<Slide name="los-angeles" source="Born and raised in the city of angels." />
			<Box>
				<Box.Heading>Some Of My Notable Skills</Box.Heading>
				<Tabs>
					<Tabs.Tab initial title="Languages">
						<Content>
							<Content.Image src="/images/skills/php.png" />
							<Content.Heading level={3}>PHP</Content.Heading>
							<Content.Paragraph>
								PHP: Hypertext Preprocessor is a general-purpose programming language. PHP is
								primarily used for web development because it pairs well with html, works server
								side, and is easy to learn.
							</Content.Paragraph>
						</Content>

						<Content>
							<Content.Image src="/images/skills/js.png" />
							<Content.Heading>JavaScript</Content.Heading>
							<Content.Paragraph>
								JavaScript is a high-level, interpreted programming language. It's typically used
								client side to provide dynamic web browser interactivity, but can also be used on
								the server side as well.
							</Content.Paragraph>
						</Content>

						<Content>
							<Content.Image src="/images/skills/swift.png" />
							<Content.Heading>Swift</Content.Heading>
							<Content.Paragraph>
								Swift is a modern general-purpose, and compiled programming language developed by
								Apple. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and
								the large body of existing Objective-C code written for Apple products."
							</Content.Paragraph>
						</Content>

						<Content>
							<Content.Image src="/images/skills/golang.png" />
							<Content.Heading>GoLang</Content.Heading>
							<Content.Paragraph>
								GoLang is a modern statically-typed compiled language that is being developed by
								Google. The langauges defining features are its small size and support for
								concurrent programming.
							</Content.Paragraph>
						</Content>
					</Tabs.Tab>

					<Tabs.Tab title="Frameworks">
						<Content>
							<Content.Image src="/images/skills/symfony.png" />
							<Content.Heading>Symfony</Content.Heading>
							<Content.Paragraph>
								Symfony is a PHP web application framework and a set of reusable PHP components /
								libraries. Many of the more well known PHP frameworks such as Laravel, and Drupal
								utilize components of this framework.
							</Content.Paragraph>
						</Content>
						<Content>
							<Content.Image src="/images/skills/laravel.png" />
							<Content.Heading>Laravel</Content.Heading>
							<Content.Paragraph>
								Laravel is the most popular PHP web application framework. It is described as 'a web
								application framework with expressive, elegant syntax
							</Content.Paragraph>
						</Content>
						<Content>
							<Content.Image src="/images/skills/vue.png" />
							<Content.Heading>Vue.js</Content.Heading>
							<Content.Paragraph>
								Vue.js is an open-source JavaScript framework for building user interfaces and
								single-page applications.
							</Content.Paragraph>
						</Content>
						<Content>
							<Content.Image src="/images/skills/react.png" />
							<Content.Heading>React</Content.Heading>
							<Content.Paragraph>
								React is a JavaScript library for building user interfaces. It is maintained by
								Facebook and a community of individual developers and companies.
							</Content.Paragraph>
						</Content>
					</Tabs.Tab>

					<Tabs.Tab title="Tools">
						<Content>
							<Content.Image src="/images/skills/docker.png" />
							<Content.Heading>Docker</Content.Heading>
							<Content.Paragraph>
								Docker is a set of platform as a service products that use OS-level virtualization
								to deliver software in packages called containers.
							</Content.Paragraph>
						</Content>
						<Content>
							<Content.Image src="/images/skills/heroku.png" />
							<Content.Heading>Heroku</Content.Heading>
							<Content.Paragraph>
								Heroku is a cloud platform as a service supporting several programming languages.
								Connect a github repository, and each push becomes a deploy.
							</Content.Paragraph>
						</Content>
						<Content>
							<Content.Image src="/images/skills/postcss.png" />
							<Content.Heading>PostCSS</Content.Heading>
							<Content.Paragraph>
								PostCSS transforms CSS via JavaScript. Hundreds of plugins offer features such as
								auto-prefixing, future CSS syntax, modules, linting and more.
							</Content.Paragraph>
						</Content>
					</Tabs.Tab>
				</Tabs>
			</Box>
		</Main>
	)
}

export default About

export const getStaticProps: GetStaticProps = async () => {
	const layoutState = LayoutState(getAll('articles') as App.ArticleResource[])
	return {
		props: {
			layoutState
		}
	}
}
