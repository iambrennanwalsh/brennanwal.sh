import { Article } from '@/'
import { Card, Grid } from '@/components'
import { useApiContext, useComponentContext } from '@/hooks'
import { Standard } from '@/layouts'
import { GetAllResources } from '@/utils/getAllResources'
import { Slugify } from '@/utils/slugify'
import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'

const blogSeo = {
  title: 'Blog',
  description:
    'The personal blog of applications developer and entrepreneur Brennan Walsh.'
}

const Blog = ({
  articles
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

    const title = page > 1 ? `Blog • Page ${page}` : 'Blog'
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
        description: blogSeo.description
      }
    }
    setData(newData)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.page])

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
        baseUrl="/blog"
        template={gridTemplate}
        className="blog"
      />
    </>
  )
}
export default Blog

export const getStaticProps = async () => {
  const articles = await GetAllResources<Article>('articles')
  return {
    props: {
      articles
    }
  }
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <Standard
      pageTitle={{ ...blogSeo, description: 'Loading articles...' }}
      seo={blogSeo}>
      {page}
    </Standard>
  )
}
