import {getAll} from '@/utils/Api'
import {GetStaticProps, GetStaticPaths, InferGetStaticPropsType} from 'next'
import {useContext, useEffect, useState} from 'react'
import {Card, Dropdown, Grid, PageTitle, Pill, Seo} from '@/components'
import {Main} from '@/layouts'
import {useRouter} from 'next/router'
import {Slugify} from '@/utils/Slugify'
import {ApiContext, AddResourceAction} from '@/contexts'
import {LayoutState} from '@/utils/LayoutState'

const Blog = ({
	articles,
	tag,
	layoutState
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	const {featured, categories, cloud} = layoutState
	const {state, dispatch} = useContext(ApiContext)
	useEffect(() => {
		if (!state.featured) dispatch(AddResourceAction({featured: featured}))
		if (!state.categories) dispatch(AddResourceAction({categories: categories}))
		if (!state.cloud) dispatch(AddResourceAction({cloud: cloud}))
	}, [])

	const router = useRouter()
	const totalPosts = articles.length
	const [pageTitleSummary, setPageTitleSummary] = useState('Loading articles..')
	const [meta, setMeta] = useState({
		title: `Tag: ${tag}`,
		description:
			'The personal blog of applications developer and entrepreneur Brennan Walsh.'
	})
	useEffect(() => {
		const page = Number((router.query.page as string) ?? 1)
		const showingFrom = page == 1 ? 0 : (page - 1) * 9
		const showingTo = page * 9 > totalPosts ? totalPosts : page * 9
		const title = page > 1 ? `Tag: ${tag} • Page ${page}` : `Tag: ${tag}`
		const summary =
			totalPosts == 0
				? 'Nothing in here.'
				: `Showing articles <i className='has-color-primary'>${
						showingFrom + 1
				  }</i> through <i className='has-color-primary'>${showingTo}</i> of <i className='has-color-primary'>${totalPosts}</i> total articles.`
		setPageTitleSummary(summary)
		setMeta({title: title, description: meta.description})
	}, [tag, router.query.page])

	const template = (data: App.Article) => (
		<Card className="blog" href={{href: '/article/' + data.slug}}>
			{data.image && <Card.Image src={data.image} />}
			<Card.Heading level={3}>{data.title}</Card.Heading>
			<Card.Content>{data.summary}</Card.Content>
			{data.tags && (
				<Card.Meta styles={{justifyContent: 'flex-start !important'}}>
					<Pill
						key={data.slug}
						data={data.tags.map(tag => ({
							label: tag,
							href: {href: '/tag/' + Slugify(tag)}
						}))}
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
			<Dropdown baseUrl="/category/" data={categories} label="Categories.." />
			<Grid
				data={articles}
				baseUrl={`/tag/${Slugify(tag)}`}
				template={template}
			/>
		</Main>
	)
}
export default Blog

export const getStaticPaths: GetStaticPaths = async () => {
	const tags = []
	getAll('articles').forEach(i => tags.push(...(i.tags as string[])))
	const paths = [...new Set(tags)].map(i => {
		return {
			params: {
				slug: Slugify(i)
			}
		}
	})
	return {
		paths: paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
	const articles = getAll('articles') as App.Article[]
	const tags = []
	articles.forEach(i => tags.push(...(i.tags as string[])))
	const currentTag = [...new Set(tags)].find(tag => Slugify(tag) == params.slug)
	const taggedArticles = articles.filter(article => {
		const arr = [...article.tags]
		const slugs = arr.map(i => Slugify(i))
		return slugs.includes(params.slug as string)
	})
	const layoutState = LayoutState(articles as App.Article[])
	return {
		props: {
			articles: taggedArticles,
			tag: currentTag,
			layoutState
		}
	}
}
