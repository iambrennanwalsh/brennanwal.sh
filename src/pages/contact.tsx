import {Box, Content} from '@/components'
import {ContactForm} from '@/forms'
import {useApiContext} from '@/hooks'
import {Standard} from '@/layouts'
import {GetAllResources} from '@/utils/getAllResources'
import {LayoutState} from '@/utils/layoutState'
import {InferGetStaticPropsType} from 'next'
import dynamic from 'next/dynamic'
import {ReactElement, useEffect} from 'react'

const contactSeo = {
  title: 'Contact Me',
  description:
    "Get in touch with me using the form below. Alternatively you may email me directly at <a href='mailto:mail@brennanwal.sh'>mail@brennanwal.sh</a>.",
}

const Contact = ({
  layoutState,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const {featured, categories} = layoutState
  const {resources, setResources} = useApiContext()

  useEffect(() => {
    const newResources = {}
    if (!('featured' in resources)) newResources['featured'] = featured
    if (!('categories' in resources)) newResources['categories'] = categories
    if (Object.keys(newResources).length > 0)
      setResources({...resources, ...newResources})
  }, [featured, categories, resources, setResources])

  const Map = dynamic<{}>(
    () => import('../components/map/Map').then(component => component.Map),
    {
      ssr: false,
    }
  )

  return (
    <>
      <Map />
      <Box heading="Lets Get In Touch">
        <Content>
          <ContactForm />
        </Content>
      </Box>
    </>
  )
}

export default Contact

export const getStaticProps = async () => {
  const articles = await GetAllResources('articles')
  const layoutState = LayoutState(articles)
  return {
    props: {
      layoutState,
    },
  }
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Standard seo={contactSeo}>{page}</Standard>
}
