import {getAll} from '@/utils/Api'
import {GetStaticProps, GetStaticPaths, InferGetStaticPropsType} from 'next'
import {useEffect, useState, useContext} from 'react'
import {Card, Dropdown, Grid, PageTitle, Pill, Seo} from '@/components'
import {Main} from '@/layouts'
import {useRouter} from 'next/router'
import {Slugify} from '@/utils/Slugify'
import {LayoutState} from '@/utils/LayoutState'

import {AddResourceAction, ApiContext} from '@/contexts'

const Blog = ({
	articles,
	category,
	layoutState
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	const router = useRouter()
	const totalPosts = articles.length
	const [pageTitleSummary, setPageTitleSummary] = useState('Loading articles..')
	const [meta, setMeta] = useState({
		title: `Category: ${category}`,
		description: 'The personal blog of applications developer and entrepreneur Brennan Walsh.'
	})
	const {featured, categories, cloud} = layoutState
	const {state, dispatch} = useContext(ApiContext)
	useEffect(() => {
		if (!state.featured) dispatch(AddResourceAction({featured: featured}))
		if (!state.categories) dispatch(AddResourceAction({categories: categories}))
		if (!state.cloud) dispatch(AddResourceAction({cloud: cloud}))
	}, [])
	useEffect(() => {
		const page = Number((router.query.page as string) ?? 1)
		const showingFrom = page == 1 ? 0 : (page - 1) * 9
		const showingTo = page * 9 > totalPosts ? totalPosts : page * 9
		const title = page > 1 ? `Category: ${category} • Page ${page}` : `Category: ${category}`
		const summary =
			totalPosts == 0
				? 'Nothing in here.'
				: `Showing articles <i className='has-color-primary'>${
						showingFrom + 1
				  }</i> through <i className='has-color-primary'>${showingTo}</i> of <i className='has-color-primary'>${totalPosts}</i> total articles.`
		setPageTitleSummary(summary)
		setMeta({title: title, description: meta.description})
	}, [category, router.query.page])

	const template = (data: App.ArticleResource) => (
		<Card className="blog" href={{href: '/article/' + data.slug}}>
			{data.image && <Card.Image src={data.image} />}
			<Card.Heading level={3}>{data.title}</Card.Heading>
			<Card.Content>{data.summary}</Card.Content>
			{data.tags && (
				<Card.Meta styles={{justifyContent: 'flex-start !important'}}>
					<Pill
						key={data.slug}
						data={data.tags.map(tag => ({label: tag, href: {href: '/tag/' + Slugify(tag)}}))}
						icon={{type: 'tags'}}
					/>
				</Card.Meta>
			)}
		</Card>
	)

	return (
		<Main>
			<Seo {...meta} />
			<PageTitle title={meta.title} description={pageTitleSummary} />
			<Dropdown baseUrl="/category/" data={categories} label={category} />
			<Grid data={articles} baseUrl={`/category/${Slugify(category)}`} template={template} />
		</Main>
	)
}
export default Blog

export const getStaticPaths: GetStaticPaths = async () => {
	const categories = getAll('articles').map(articles => articles.category)
	const paths = [...new Set(categories)].map(i => {
		return {
			params: {
				slug: Slugify(i as string)
			}
		}
	})
	return {
		paths: paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
	const articles = getAll('articles')
	const categoryArticles = articles.filter(
		article => Slugify(article.category as string) == params.slug
	)
	const layoutState = LayoutState(articles as App.ArticleResource[])
	return {
		props: {
			articles: categoryArticles,
			category: categoryArticles[0].category,
			layoutState
		}
	}
}
