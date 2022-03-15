import { Article, Component, Props } from '@/'
import { Anchor, Button, Card, Cloud, Image } from '@/components'
import { useApiContext } from '@/hooks'
import { useEffect, useState } from 'react'
import { StyledSidebar, StyledSidebarContent, StyledSidebarMeCard } from '.'

export type SidebarProps = Props<typeof StyledSidebar>

export const Sidebar: Component<SidebarProps> = () => {
  const { resources } = useApiContext()
  const [featured, setFeatured] = useState<Article[]>([])

  useEffect(() => {
    if (resources.articles) {
      setFeatured(resources.articles.filter(article => article.featured))
    }
  }, [resources])

  return (
    <StyledSidebar>
      <StyledSidebarMeCard
        sidebarMeCard={true}
        panel={true}
        image={{
          src: '/images/me/me.jpg',
          alt: 'Me',
          lightbox: true
        }}
        heading="Brennan Walsh">
        <p>
          I&apos;m a full stack applications developer, and entrepreneur.
          Welcome to my peronsal <Anchor href="/portfolio">portfolio</Anchor>,
          and <Anchor href="/blog">blog</Anchor>.
        </p>
      </StyledSidebarMeCard>
      <Button
        bg="info"
        size="md"
        color="whiteText"
        handle={() =>
          (window.location.href =
            'https://www.freelancer.com/u/iambrennanwalsh')
        }
        freelancerButton>
        <Image
          variant="freelancerLogo"
          alt="freelancer"
          src="/images/interface/freelance.svg"
        />
        Hire me on freelancer.
      </Button>
      <StyledSidebarContent panel={true} heading="Tags">
        <Cloud />
      </StyledSidebarContent>
      {featured &&
        featured.map(article => (
          <Card
            key={article.title}
            heading={article.title}
            image={{ alt: article.title, src: article.image }}
            link={{ href: `/article/${article.slug}` }}></Card>
        ))}
    </StyledSidebar>
  )
}
