import type {Component, Props} from '@/'
import {StyledHero, StyledHeroContent, StyledHeroEffect} from '.'

export type HeroProps = Props<typeof StyledHero>

export const Hero: Component<HeroProps> = ({children, ...props}) => {
  return (
    <StyledHero data-component="hero" {...props}>
      <StyledHeroEffect />
      <StyledHeroContent>{children}</StyledHeroContent>
    </StyledHero>
  )
}

Hero.toString = () => '[data-component="hero"]'
