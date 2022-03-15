import type { Article as ArticleType } from '@/'
import { useApiContext, useComponentContext } from '@/hooks'
import { Standard } from '@/layouts'
import { styled } from '@/styles'
import { GetAllResources } from '@/utils/getAllResources'
import { ComponentsProvider, MarkdownProvider } from '@/utils/mdxProvider'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import renderToString from 'next-mdx-remote/render-to-string'
import { useRouter } from 'next/router'
import { ReactElement, useCallback, useEffect } from 'react'

const articleSeo = {
  title: `Article`,
  description: 'The personal blog of applications developer Brennan Walsh.'
}

const CommentHeading = styled('h2', {
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: '$5',
  color: '$primary',

  span: {
    color: '$grayText',
    '@tablet': {
      color: '$lighter'
    }
  }
})

const Article = ({
  articles,
  article,
  content
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const router = useRouter()
  const { resources, setResources } = useApiContext()
  const { data, setData } = useComponentContext()

  useEffect(() => {
    if (!('articles' in resources))
      setResources({ ...resources, articles: articles })
  }, [articles, resources, setResources])

  const comments = useCallback(node => {
    if (node) {
      const script = document.createElement('script')
      script.setAttribute('src', 'https://utteranc.es/client.js')
      script.setAttribute('crossorigin', 'anonymous')
      script.setAttribute('async', 'true')
      script.setAttribute('repo', 'iambrennanwalsh/brennanwal.sh')
      script.setAttribute('issue-term', 'pathname')
      script.setAttribute('theme', 'github-dark')
      while (node.firstChild) node.removeChild(node.firstChild)
      node.appendChild(script)
    }
  }, [])

  useEffect(() => {
    const newData = {
      ...(data as object),
      pageTitle: {
        image: article?.image,
        title: article?.title,
        description: article?.summary
      },
      seo: {
        image: article?.image,
        title: article?.title,
        description: article?.summary
      }
    }
    setData(newData)
  }, [article, data, router.query.page, setData])

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <CommentHeading>
        <span>-</span> Comments <span>-</span>
      </CommentHeading>
      <div className="comments" ref={comments} />
    </>
  )
}

export default Article

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await GetAllResources<ArticleType>('articles')
  const paths = articles.map(article => {
    return {
      params: {
        slug: article.slug
      }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context: {
  params?: { slug: string }
}) => {
  const articles = await GetAllResources<ArticleType>('articles')
  const article = articles.find(article => article.slug == context.params?.slug)
  const { renderedOutput } = await renderToString(article?.content ?? '', {
    components: ComponentsProvider,
    provider: MarkdownProvider
  })
  return {
    props: {
      articles: articles,
      article: article,
      content: renderedOutput
    }
  }
}

Article.getLayout = function getLayout(page: ReactElement) {
  return (
    <Standard pageTitle={articleSeo} seo={articleSeo}>
      {page}
    </Standard>
  )
}
