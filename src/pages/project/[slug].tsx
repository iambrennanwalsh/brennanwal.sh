import {get, getAll, getSlugs} from '@/utils/Api'
import renderToString from 'next-mdx-remote/render-to-string'
import {GetStaticProps, GetStaticPaths, InferGetStaticPropsType} from 'next'
import path from 'path'
import {PageTitle, Seo} from '@/components'
import {Main} from '@/layouts'
import {LayoutState} from '@/utils/LayoutState'
import {ApiContext, AddResourceAction} from '@/contexts'
import {useContext, useEffect} from 'react'
import {
	ComponentsProvider,
	ScopeProvider,
	MarkdownProvider
} from '@/utils/MarkdownProvider'

const Project: App.SinglePage = ({
	renderedOutput,
	frontMatter,
	layoutState
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	const {featured, categories, cloud} = layoutState
	const {state, dispatch} = useContext(ApiContext)
	useEffect(() => {
		if (!state.featured) dispatch(AddResourceAction({featured: featured}))
		if (!state.categories) dispatch(AddResourceAction({categories: categories}))
		if (!state.cloud) dispatch(AddResourceAction({cloud: cloud}))
	}, [])
	return (
		<Main>
			<Seo title={frontMatter.title} description={frontMatter.summary} />
			<PageTitle
				title={frontMatter.title}
				description={frontMatter.summary}
				image={frontMatter.image}
			/>
			<div dangerouslySetInnerHTML={{__html: renderedOutput}} />
		</Main>
	)
}

export default Project

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getSlugs('projects').map(file => {
		const ext = path.extname(file)
		return {
			params: {
				slug: file.replace(ext, '')
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
	const layoutState = LayoutState(articles as App.Article[])
	const data = get(`${params.slug}.mdx`, 'projects')
	const {content} = data
	delete data.content
	const {renderedOutput} = await renderToString(content, {
		components: ComponentsProvider,
		scope: ScopeProvider(data),
		provider: MarkdownProvider
	})
	return {
		props: {
			renderedOutput,
			frontMatter: data,
			layoutState
		}
	}
}
