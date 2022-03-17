import type { Article } from '@/'
import { Card, Grid, PageTitle, Seo } from '@/components'
import { useApiContext } from '@/hooks'
import { Standard } from '@/layouts'
import { getSlug } from '@/utils/getSlug'
import type { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { getAllResources } from '../../utils/getAllResources/GetAllResources'

const tagSeo = {
  title: `Tag`,
  description: 'The personal blog of applications developer Brennan Walsh.'
}

const Tag = ({
  articles,
  tag
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const router = useRouter()
  const { resources, setResources } = useApiContext()
  const [pageTitle, setPageTitle] = useState({
    ...tagSeo,
    description: 'Loading articles...'
  })
  const [seo, setSeo] = useState(tagSeo)

  const totalPosts = articles.length

  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const cats = resources.articles?.map(article => article.category)
    setCategories(Array.from(new Set(cats)))
  }, [resources])

  useEffect(() => {
    if (!('articles' in resources))
      setResources({ ...resources, articles: articles })
  }, [articles, resources, setResources])

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
  }, [tag, router.query.page, totalPosts, pageTitle, seo])

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
  const tags: string[] = []
  const articles = getAllResources<Article>('articles')
  articles.forEach(
    article => article.tags && tags.push(...(article.tags as string[]))
  )
  const currentTag = Array.from(new Set(tags)).find(
    tag => getSlug(tag) == context.params?.slug
  )

  const taggedArticles = articles.filter(
    article => article.tags && article.tags.includes(currentTag!)
  )

  return {
    props: {
      articles: taggedArticles,
      tag: currentTag
    }
  }
}

Tag.getLayout = function getLayout(page: ReactElement) {
  return <Standard>{page}</Standard>
}
