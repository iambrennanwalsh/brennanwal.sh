import {useContext, useEffect, useState} from 'react'
import {GetStaticProps, InferGetStaticPropsType} from 'next'
import {Button, Card, Grid, Group, PageTitle, Seo} from '@/components'
import {ApiContext, AddResourceAction} from '@/contexts'
import {Main} from '@/layouts'
import {getAll} from '@/utils/Api'
import {LayoutState} from '@/utils/LayoutState'

const Portfolio = ({
	projects,
	projectCategories,
	layoutState
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	const {featured, categories, cloud} = layoutState
	const {state, dispatch} = useContext(ApiContext)

	useEffect(() => {
		if (!state.featured) dispatch(AddResourceAction({featured: featured}))
		if (!state.categories) dispatch(AddResourceAction({categories: categories}))
		if (!state.cloud) dispatch(AddResourceAction({cloud: cloud}))
		const body = document.querySelector('body')
		body.classList.add('portfolio')
		return () => {
			body.classList.remove('portfolio')
		}
	}, [])

	const [category, setCategory] = useState('All')

	const meta = {
		title: 'Portfolio',
		description:
			"My portfolio of projects i've worked on over the years. Click on a project to learn more about it."
	}

	const template = (data: App.Project): JSX.Element => (
		<Card className="alternate" href={{href: '/project/' + data.slug}}>
			{data.image && <Card.Image src={data.image} />}
			<Card.Heading level={3}>{data.title}</Card.Heading>
		</Card>
	)

	return (
		<Main>
			<Seo {...meta} />
			<PageTitle {...meta} />
			<Group>
				<Button
					handle={() => setCategory('All')}
					color={category == 'All' ? 'primary' : 'dark'}>
					All
				</Button>
				{projectCategories.map(cat => (
					<Button
						handle={() => setCategory(cat)}
						key={cat}
						color={category == cat ? 'primary' : 'dark'}>
						{cat}
					</Button>
				))}
			</Group>
			<Grid
				data={
					category == 'All'
						? projects
						: projects.filter(proj => proj.category == category)
				}
				template={template}
				baseUrl="/portfolio"
				className="portfolio"
			/>
		</Main>
	)
}

export default Portfolio

export const getStaticProps: GetStaticProps = async () => {
	const projects = getAll('projects')
	const projectCategories = projects.map(proj => proj.category)

	const articles = getAll('articles')
	const layoutState = LayoutState(articles as App.Article[])

	return {
		props: {
			projects,
			projectCategories: [...new Set(projectCategories)],
			layoutState
		}
	}
}
