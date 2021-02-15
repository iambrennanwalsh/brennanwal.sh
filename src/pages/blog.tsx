import {getAll} from '@/utils/Api'
import {GetStaticProps, InferGetStaticPropsType} from 'next'
import {useContext, useEffect, useState} from 'react'
import {Card, Grid, PageTitle, Pill, Seo} from '@/components'
import {Main} from '@/layouts'
import {useRouter} from 'next/router'
import {Slugify} from '@/utils/Slugify'
import {LayoutState} from '@/utils/LayoutState'
import {AddResourceAction, ApiContext} from '@/contexts'

const Blog = ({
	articles,
	layoutState
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	const router = useRouter()
	const totalPosts = articles.length
	const [pageTitleSummary, setPageTitleSummary] = useState('Loading articles..')
	const [meta, setMeta] = useState({
		title: 'Blog',
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
		const title = page > 1 ? `Blog • Page ${page}` : 'Blog'
		const summary =
			totalPosts == 0
				? 'Nothing in here.'
				: `Showing articles <i className='has-color-primary'>${
						showingFrom + 1
				  }</i> through <i className='has-color-primary'>${showingTo}</i> of <i className='has-color-primary'>${totalPosts}</i> total articles.`
		setPageTitleSummary(summary)
		setMeta({title: title, description: meta.description})
	}, [router.query.page])

	const template = (data: App.ArticleResource) => (
		<Card href={{href: '/article/' + data.slug}}>
			{data.image && <Card.Image src={data.image} />}
			<Card.Heading level={3}>{data.title}</Card.Heading>
			<Card.Content>{data.summary}</Card.Content>
			{data.tags && (
				<Card.Meta styles={{justifyContent: 'flex-start !important'}}>
					{data.tags.map(tag => (
						<Pill
							key={tag}
							label={tag}
							icon={{type: 'success'}}
							href={{href: '/tag/' + Slugify(tag)}}
						/>
					))}
				</Card.Meta>
			)}
		</Card>
	)

	return (
		<Main>
			<Seo {...meta} />
			<PageTitle title={meta.title} description={pageTitleSummary} />
			<Grid data={articles} baseUrl="/blog" template={template} />
		</Main>
	)
}
export default Blog

export const getStaticProps: GetStaticProps = async () => {
	const articles = getAll('articles')
	const layoutState = LayoutState(articles as App.ArticleResource[])
	return {
		props: {
			articles,
			layoutState
		}
	}
}
