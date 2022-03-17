import type { Article, Project } from '@/'
import { Button, Card, Grid, Group, PageTitle, Seo } from '@/components'
import { useApiContext } from '@/hooks'
import { Standard } from '@/layouts'
import { InferGetStaticPropsType } from 'next'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { getAllResources } from '../utils/getAllResources/GetAllResources'

const portfolioSeo = {
  title: 'Portfolio',
  description: "A subset of the projects i've worked on over the years."
}

function Portfolio({
  articles,
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { resources, setResources } = useApiContext()

  const [categories] = useState(
    Array.from(new Set(projects.map(proj => proj.category)))
  )
  const [category, setCategory] = useState('Freelance')

  useEffect(() => {
    if (!('articles' in resources) || !('projects' in resources))
      setResources({ ...resources, articles: articles, projects: projects })
  }, [articles, projects, resources, setResources])

  const GridTemplate = (data: Project): JSX.Element => (
    <Card
      heading={data.title}
      link={{ href: data.href }}
      image={{ src: data.image, alt: data.title }}
    />
  )

  return (
    <>
      <PageTitle {...portfolioSeo} />
      <Seo {...portfolioSeo} />
      <Group>
        {categories.map(cat => (
          <Button
            handle={() => setCategory(cat)}
            key={cat}
            color="whiteText"
            bg={category == cat ? 'primary' : 'dark'}>
            {cat}
          </Button>
        ))}
      </Group>
      <Grid
        data={projects.filter(proj => proj.category == category)}
        template={GridTemplate}
        baseUrl="/portfolio"
        className="portfolio"
      />
    </>
  )
}

export default Portfolio

export const getStaticProps = async () => {
  const articles = getAllResources<Article>('articles')
  const projects = getAllResources<Project>('projects')

  return {
    props: {
      articles,
      projects
    }
  }
}

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return <Standard>{page}</Standard>
}
