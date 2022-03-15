import type { Article } from '@/'
import { Card, Grid } from '@/components'
import { useApiContext, useComponentContext } from '@/hooks'
import { Standard } from '@/layouts'
import { GetAllResources } from '@/utils/getAllResources'
import { Slugify } from '@/utils/slugify'
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
  const { data, setData } = useComponentContext()

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

    const newData = {
      ...(data as object),
      pageTitle: {
        title,
        description: summary
      },
      seo: {
        title,
        description: categorySeo.description
      }
    }
    setData(newData)
  }, [category, data, router.query.page, setData, totalPosts])

  const gridTemplate = (data: Article): JSX.Element => (
    <Card
      heading={data.title}
      link={{ href: `/article/${Slugify(data.title)}` }}
      image={{ src: data.image, alt: data.title }}>
      {data.summary}
    </Card>
  )

  return (
    <>
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
  const categories = await GetAllResources<Article>('articles').then(articles =>
    articles.map(article => article.category)
  )
  const paths = Array.from(new Set(categories)).map(i => {
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

export const getStaticProps = async (context: {
  params?: {
    slug: string
  }
}) => {
  const articles = await GetAllResources<Article>('articles')
  const categoryArticles = articles.filter(
    article => Slugify(article.category) == context.params?.slug
  )
  return {
    props: {
      articles: categoryArticles,
      category: categoryArticles[0].category
    }
  }
}

Category.getLayout = function getLayout(page: ReactElement) {
  return (
    <Standard
      pageTitle={{ ...categorySeo, description: 'Loading articles..' }}
      seo={categorySeo}>
      {page}
    </Standard>
  )
}
