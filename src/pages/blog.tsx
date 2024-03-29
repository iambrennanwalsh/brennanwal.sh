import type { Article } from '@/'
import { Card, Grid, PageTitle, Seo } from '@/components'
import { Standard } from '@/layouts'
import { getAllResources, getSlug } from '@/utils'
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
  resources
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const router = useRouter()

  const [seo, setSeo] = useState(blogSeo)
  const [pageTitle, setPageTitle] = useState({
    ...blogSeo,
    description: 'Loading articles...'
  })

  const totalPosts = resources.articles.length

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
  }, [router.query.page])

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
        data={resources.articles}
        baseUrl="/blog"
        template={gridTemplate}
        className="blog"
      />
    </>
  )
}
export default Blog

export const getStaticProps = async () => {
  const articles = getAllResources<Article>('articles')
  return {
    props: {
      resources: {
        articles
      }
    }
  }
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Standard>{page}</Standard>
}
