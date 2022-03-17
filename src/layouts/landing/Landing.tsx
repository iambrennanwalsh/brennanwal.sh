import { Component, Props } from '@/'
import { Anchor, Group, Hero, Icon } from '@/components'
import { Main } from '@/partials'
import {
  StyledLandingHeroBoldText,
  StyledLandingHeroCaption,
  StyledLandingHeroHeader,
  StyledLandingHeroMeta
} from '.'

interface LandingOwnProps {
  page: string
}

export type LandingProps = Props<'div', LandingOwnProps>

export const Landing: Component<LandingProps> = ({ page, children }) => {
  const PageHero = Heros[page]
  return (
    <>
      <PageHero />
      <Main>{children}</Main>
    </>
  )
}

type LandingHeroProps = Props<typeof Hero>

const HomeHero: Component<LandingHeroProps> = () => (
  <Hero effect="home">
    <StyledLandingHeroHeader>I am Brennan Walsh.</StyledLandingHeroHeader>
    <StyledLandingHeroCaption>
      <span>Web, Mobile, and Software Applications Developer.</span>
    </StyledLandingHeroCaption>
    <StyledLandingHeroMeta>
      <StyledLandingHeroBoldText>@iambrennanwalsh</StyledLandingHeroBoldText>
      <Group>
        <Anchor href="https://github.com/iambrennanwalsh/">
          <Icon size="md" icon="github" />
        </Anchor>
        <Anchor href="https://facebook.com/iambrennanwalsh/">
          <Icon size="md" icon="facebook" />
        </Anchor>
        <Anchor href="https://instagram.com/iambrennanwalsh/">
          <Icon size="md" icon="instagram" />
        </Anchor>
        <Anchor href="https://www.linkedin.com/in/iambrennanwalsh/">
          <Icon size="md" icon="linkedin" />
        </Anchor>
      </Group>
    </StyledLandingHeroMeta>
  </Hero>
)

const Heros: Record<string, Component<LandingHeroProps>> = {
  home: HomeHero
}
