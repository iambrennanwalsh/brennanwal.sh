import type { Article } from '@/'
import { Card, Grid, PageTitle, Seo } from '@/components'
import { useApiContext } from '@/hooks'
import { Standard } from '@/layouts'
import { getAllResources, getSlug } from '@/utils'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'

const categorySeo = {
  title: `Category`,
  description: 'The personal blog of applications developer Brennan Walsh.'
}

const Category = ({
  articles,
  category
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const router = useRouter()
  const { resources, setResources } = useApiContext()

  const [pageTitle, setPageTitle] = useState({
    ...categorySeo,
    description: 'Loading articles...'
  })
  const [seo, setSeo] = useState(categorySeo)

  const totalPosts = articles.length

  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const cats = resources.articles?.map(article => article.category)
    setCategories(Array.from(new Set(cats)))
  }, [resources])

  useEffect(() => {
    if (!('articles' in resources))
      setResources({ ...resources, articles: articles })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles])

  useEffect(() => {
    const page = Number((router.query.page as string) ?? 1)
    const showingFrom = page == 1 ? 0 : (page - 1) * 9
    const showingTo = page * 9 > totalPosts ? totalPosts : page * 9

    const title =
      page > 1
        ? `Category: ${category} • Page ${page}`
        : `Category: ${category}`
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
  }, [category, pageTitle, router.query.page, seo, totalPosts])

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
        baseUrl="/category"
        template={gridTemplate}
        className="blog"
      />
    </>
  )
}

export default Category

export const getStaticPaths: GetStaticPaths = async () => {
  const resources = getAllResources<Article>('articles')
  const categories = resources.map(article => article.category)
  const paths = Array.from(new Set(categories)).map(i => {
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
  const categoryArticles = articles.filter(
    article => getSlug(article.category) == context.params?.slug
  )
  return {
    props: {
      articles: categoryArticles,
      category: categoryArticles[0].category
    }
  }
}

Category.getLayout = function getLayout(page: ReactElement) {
  return <Standard>{page}</Standard>
}
