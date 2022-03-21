import type { Article, Project } from '@/'
import { Button, Card, Grid, Group, PageTitle, Seo } from '@/components'
import { Standard } from '@/layouts'
import { getAllResources } from '@/utils'
import { InferGetStaticPropsType } from 'next'
import type { ReactElement } from 'react'
import { useState } from 'react'

const portfolioSeo = {
  title: 'Portfolio',
  description: "A subset of the projects i've worked on over the years."
}

function Portfolio({
  resources
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [categories] = useState(
    Array.from(new Set(resources.projects.map(proj => proj.category)))
  )
  const [category, setCategory] = useState('Freelance')

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
        data={resources.projects.filter(proj => proj.category == category)}
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
      resources: {
        articles,
        projects
      }
    }
  }
}

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return <Standard>{page}</Standard>
}
