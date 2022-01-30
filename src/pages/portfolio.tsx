import {Resource} from '@/'
import {Button, Card, Grid, Group} from '@/components'
import {useApiContext} from '@/hooks'
import {Standard} from '@/layouts'
import {GetAllResources} from '@/utils/getAllResources'
import {LayoutState} from '@/utils/layoutState'
import {InferGetStaticPropsType} from 'next'
import type {ReactElement} from 'react'
import {useEffect, useState} from 'react'

const portfolioSeo = {
  title: 'Portfolio',
  description: "A subset of the projects i've worked on over the years.",
}

function Portfolio({
  projects,
  projectCategories,
  layoutState,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {featured, categories} = layoutState

  const {resources, setResources} = useApiContext()

  const [category, setCategory] = useState('Freelance')

  useEffect(() => {
    const newResources = {}
    if (!('featured' in resources)) newResources['featured'] = featured
    if (!('categories' in resources)) newResources['categories'] = categories
    if (Object.keys(newResources).length > 0)
      setResources({...resources, ...newResources})
  }, [featured, categories, resources, setResources])

  const GridTemplate = (data: Resource): JSX.Element => (
    <Card
      heading={data.title}
      link={{href: data.href}}
      image={{src: data.image, alt: data.title}}
    />
  )

  return (
    <>
      <Group>
        {projectCategories.map(cat => (
          <Button
            handle={() => setCategory(cat)}
            key={cat}
            color="whiteText"
            bg={category == cat ? 'primary' : 'dark'}
          >
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
  const articles = await GetAllResources('articles')
  const projects = await GetAllResources('projects')

  const projectCategories = projects.map(proj => proj.category)
  const layoutState = LayoutState(articles)

  return {
    props: {
      projects,
      projectCategories: Array.from(new Set(projectCategories)),
      layoutState,
    },
  }
}

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return <Standard seo={portfolioSeo}>{page}</Standard>
}
