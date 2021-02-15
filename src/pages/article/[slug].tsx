import {useCallback, useContext, useEffect} from 'react'
import path from 'path'
import {GetStaticProps, GetStaticPaths, InferGetStaticPropsType} from 'next'
import {useRouter} from 'next/router'
import renderToString from 'next-mdx-remote/render-to-string'
import {PageTitle, Seo} from '@/components'
import {Main} from '@/layouts'
import {AddResourceAction, ApiContext} from '@/contexts'
import {getAll, getSlugs} from '@/utils/Api'
import {LayoutState} from '@/utils/LayoutState'
import {ComponentsProvider, ScopeProvider, MarkdownProvider} from '@/utils/MarkdownProvider'

const Article = ({
	renderedOutput,
	frontMatter,
	layoutState
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	const {state, dispatch} = useContext(ApiContext)
	const {featured, categories, cloud} = layoutState
	useEffect(() => {
		if (!state.featured) dispatch(AddResourceAction({featured: featured}))
		if (!state.categories) dispatch(AddResourceAction({categories: categories}))
		if (!state.cloud) dispatch(AddResourceAction({cloud: cloud}))
	}, [])

	const router = useRouter()
	const comments = useCallback(
		node => {
			if (node) {
				const script = document.createElement('script')
				script.setAttribute('src', 'https://utteranc.es/client.js')
				script.setAttribute('crossorigin', 'anonymous')
				script.setAttribute('async', 'true')
				script.setAttribute('repo', 'iambrennanwalsh/brennanwal.sh')
				script.setAttribute('issue-term', 'pathname')
				script.setAttribute('theme', 'github-light')
				while (node.firstChild) node.removeChild(node.firstChild)
				node.appendChild(script)
			}
		},
		[router.asPath]
	)

	return (
		<Main>
			<Seo title={frontMatter.title} description={frontMatter.summary} />
			<PageTitle
				title={frontMatter.title}
				description={frontMatter.summary}
				image={frontMatter.image}
			/>
			<div dangerouslySetInnerHTML={{__html: renderedOutput}} />
			<h2 className="comments-text is-centered is-uppercase has-top-margin has-color-primary">
				<span className="has-color-lighter">-</span> Comments{' '}
				<span className="has-color-lighter">-</span>
			</h2>
			<div className="comments" ref={comments} />
		</Main>
	)
}

export default Article

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getSlugs('articles').map(file => {
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
	const layoutState = LayoutState(articles as App.ArticleResource[])
	const data = articles.find(article => article.slug == params.slug)
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
