import type { Article } from '@/'
import { Box, Content, PageTitle, Seo } from '@/components'
import { ContactForm } from '@/forms'
import { Standard } from '@/layouts'
import { getAllResources } from '@/utils'
import { InferGetStaticPropsType } from 'next'
import dynamic from 'next/dynamic'
import { ReactElement } from 'react'

const contactSeo = {
  title: 'Contact Me',
  description: 'Get in touch with me.'
}

const Contact = ({
  resources
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const Map = dynamic<{}>(
    () => import('../components/map/Map').then(component => component.Map),
    {
      ssr: false
    }
  )

  return (
    <>
      <PageTitle {...contactSeo} />
      <Seo {...contactSeo} />
      <Map />
      <Box heading="Lets Get In Touch">
        <Content>
          Get in touch with me using the form below. Alternatively you may email
          me directly at{' '}
          <a href="mailto:mail@brennanwal.sh">mail@brennanwal.sh</a>.
        </Content>
        <Content>
          <ContactForm />
        </Content>
      </Box>
    </>
  )
}

export default Contact

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

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Standard>{page}</Standard>
}
