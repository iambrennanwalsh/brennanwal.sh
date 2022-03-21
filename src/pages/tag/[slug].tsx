import type { Article } from '@/'
import { Card, Grid, PageTitle, Seo } from '@/components'
import { Standard } from '@/layouts'
import { getAllResources, getSlug } from '@/utils'
import type { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'

const tagSeo = {
  title: `Tag`,
  description: 'The personal blog of applications developer Brennan Walsh.'
}

const Tag = ({
  resources,
  tag
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const router = useRouter()

  const [articles, setArticles] = useState(
    resources.articles.filter(
      article => article.tags && article.tags.includes(tag)
    )
  )
  
  const [seo, setSeo] = useState(tagSeo)
  const [pageTitle, setPageTitle] = useState({
    ...tagSeo,
    description: 'Loading articles...'
  })
 
  useEffect(() => {
    const page = Number((router.query.page as string) ?? 1)
    const showingFrom = page == 1 ? 0 : (page - 1) * 9
    const showingTo = page * 9 > articles.length ? articles.length : page * 9

    const title = page > 1 ? `Tag: ${tag} • Page ${page}` : `Tag: ${tag}`
    const summary =
      articles.length == 0
        ? 'Nothing in here.'
        : `Showing articles <i className='has-color-primary'>${
            showingFrom + 1
          }</i> through <i className='has-color-primary'>${showingTo}</i> of <i className='has-color-primary'>${
            articles.length
          }</i> total articles.`

    setPageTitle({
      ...pageTitle,
      title,
      description: summary
    })
    setSeo({
      ...seo,
      title,
      description: summary
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag, router.query.page])

  useEffect(() => {
    setArticles(
      resources.articles.filter(
        article => article.tags && article.tags.includes(tag)
      )
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag])

  const gridTemplate = (data: Article): JSX.Element => (
    <Card
      heading={data.title}
      link={{ href: `/article/${getSlug(data.title)}` }}
      image={{ src: data.image, alt: data.title }}>
      {data.summary}
    </Card>
  )

  return (
    <>
      <PageTitle {...pageTitle} />
      <Seo {...seo} />
      {/*<Dropdown baseUrl="/category/" data={categories} label="Categories.." />*/}
      <Grid
        data={articles}
        baseUrl="/tag"
        template={gridTemplate}
        className="blog"
      />
    </>
  )
}
export default Tag

export const getStaticPaths: GetStaticPaths = async () => {
  const tags: string[] = []
  const resources = getAllResources<Article>('articles')
  resources.forEach(article => tags.push(...(article.tags as string[])))
  const paths = Array.from(new Set(tags)).map(i => {
    return {
      params: {
        slug: getSlug(i as string)
      }
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context: {
  params?: {
    slug: string
  }
}) => {
  const articles = getAllResources<Article>('articles')
  const tags: string[] = []

  articles.forEach(
    article => article.tags && tags.push(...(article.tags as string[]))
  )
  const currentTag = Array.from(new Set(tags)).find(
    tag => getSlug(tag) == context.params?.slug
  )

  return {
    props: {
      resources: {
        articles: articles
      },
      tag: currentTag!
    }
  }
}

Tag.getLayout = function getLayout(page: ReactElement) {
  return <Standard>{page}</Standard>
}
