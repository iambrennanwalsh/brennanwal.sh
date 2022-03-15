import { Component, Props } from '@/'
import { useComponentContext } from '@/hooks'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface SeoOwnProps {
  title: string
  description: string
  image?: string
}

interface SeoData {
  data: {
    seo: {
      title: string
      description: string
      image: string
    }
  }
  [index: string]: unknown
}

export type SeoProps = Props<typeof Head, SeoOwnProps>

export const Seo: Component<SeoProps> = ({
  title = 'Web Developer and Entrepreneur',
  description = 'Im a web, mobile, and desktop applications developer, and entrepreneur. Welcome to my personal blog, portfolio, and home page.',
  image = 'https://brennanwalsh.sh/images/slides/slider.jpg'
}) => {
  const { data } = useComponentContext() as SeoData

  const { asPath } = useRouter()
  return (
    <Head>
      <title key="title">{data.seo?.title ?? title} • Brennan Walsh</title>
      <meta
        name="description"
        content={data.seo?.description ?? description}
        key="description"
      />
      <meta
        name="author"
        content="Brennan Walsh / mail@brennanwal.sh / @iambrennanwalsh"
        key="author"
      />
      <meta property="og:type" content="website" key="og-type" />
      <meta
        property="og:url"
        content={`https://brennanwal.sh${asPath}`}
        key="og-url"
      />
      <meta
        property="og:title"
        content={data.seo?.title ?? title}
        key="og-title"
      />
      <meta
        property="og:description"
        content={data.seo?.description ?? description}
        key="og-description"
      />
      <meta
        property="og:image"
        content={data.seo?.image ?? image}
        key="og-image"
      />
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twitter-card"
      />
      <meta
        property="twitter:url"
        content={`https://brennanwal.sh${asPath}`}
        key="twitter-url"
      />
      <meta
        property="twitter:title"
        content={data.seo?.title ?? title}
        key="twitter-title"
      />
      <meta
        property="twitter:description"
        content={data.seo?.description ?? description}
        key="twitter-description"
      />
      <meta
        property="twitter:image"
        content={data.seo?.image ?? image}
        key="twitter-image"
      />
    </Head>
  )
}
