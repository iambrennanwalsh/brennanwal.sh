import type { Article as ArticleType } from '@/'
import { PageTitle, Seo } from '@/components'
import { Standard } from '@/layouts'
import { styled } from '@/styles'
import { getAllResources, getMarkdownComponents } from '@/utils'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import renderToString from 'next-mdx-remote/render-to-string'
import { ReactElement, useCallback } from 'react'

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
  resources,
  article,
  content
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
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

  return (
    <>
      <PageTitle
        image={article.image}
        title={article.title}
        description={article.summary}
      />
      <Seo
        image={article.image}
        title={article.title}
        description={article.summary}
      />
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
  const articles = getAllResources<ArticleType>('articles')
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
  const articles = getAllResources<ArticleType>('articles')
  const article = articles.find(article => article.slug == context.params?.slug)
  const { renderedOutput } = await renderToString(article?.content ?? '', {
    provider: getMarkdownComponents()
  })
  return {
    props: {
      resources: {
        articles: articles
      },
      article: article!,
      content: renderedOutput
    }
  }
}

Article.getLayout = function getLayout(page: ReactElement) {
  return <Standard>{page}</Standard>
}
