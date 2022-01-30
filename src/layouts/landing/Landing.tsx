import {Component, Props} from '@/'
import {Anchor, Group, Hero, Icon} from '@/components'
import {Base} from '@/layouts'
import {Main} from '@/partials'
import {
  StyledLandingHeroBoldText,
  StyledLandingHeroCaption,
  StyledLandingHeroHeader,
  StyledLandingHeroMeta
} from '.'

interface LandingOwnProps {
  page: string
}

export type LandingProps = Props<typeof Base, LandingOwnProps>

export const Landing: Component<LandingProps> = ({page, seo, children}) => {
  const PageHero = Heros[page]
  return (
    <Base seo={seo}>
      <PageHero />
      <Main>{children}</Main>
    </Base>
  )
}

type LandingHeroProps = Props<typeof Hero>

const HomeHero: Component<LandingHeroProps> = () => (
  <Hero effect="home">
    <StyledLandingHeroHeader>I am Brennan Walsh.</StyledLandingHeroHeader>
    <StyledLandingHeroCaption>
      Web, Mobile, and Software Applications Developer.
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
