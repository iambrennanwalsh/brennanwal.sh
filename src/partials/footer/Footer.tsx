import type {Component, Props} from '@/'
import {Anchor, Instagram} from '@/components'
import {useApiContext} from '@/hooks'
import {Slugify} from '@/utils/slugify'
import {
  StyledFooter,
  StyledFooterCloud,
  StyledFooterListHeader,
  StyledFooterLogo,
  StyledFooterNav,
  StyledFooterNavList,
  StyledFooterSeperator,
  StyledFooterSummary,
  StyledFooterWidgets,
  StyledGradientStrip,
  StyledIgIcon
} from '.'

export type FooterProps = Props<typeof StyledFooter>

export const Footer: Component<FooterProps> = props => {
  const {resources} = useApiContext()

  return (
    <StyledFooter {...props}>
      <Anchor href="https://www.instagram.com/iambrennanwalsh/">
        <StyledGradientStrip as="h2">
          <StyledIgIcon size="lg" icon="instagram" />
          Follow @iambrennanwalsh on IG
        </StyledGradientStrip>
      </Anchor>
      <Instagram />
      <StyledFooterWidgets>
        <StyledFooterSummary>
          <StyledFooterLogo
            src="/images/interface/logo.png"
            alt="Brennan Walsh"
            height="48"
            width="436"
          />
          <p>
            I&apos;m a web, mobile, and software applications developer, and
            entrepreneur. Welcome to my peronsal portfolio, and blog.
          </p>
        </StyledFooterSummary>
        <StyledFooterSeperator marginTop marginBottom />
        <StyledFooterNav>
          <StyledFooterNavList>
            <StyledFooterListHeader>Navigation</StyledFooterListHeader>
            <ul>
              <li>
                <Anchor href="/">Home</Anchor>
              </li>
              <li>
                <Anchor href="/about">About</Anchor>
              </li>
              <li>
                <Anchor href="/portfolio">Portfolio</Anchor>
              </li>
              <li>
                <Anchor href="/blog">Blog</Anchor>
              </li>
              <li>
                <Anchor href="/contact">Contact Me</Anchor>
              </li>
            </ul>
          </StyledFooterNavList>
          <StyledFooterNavList>
            <StyledFooterListHeader>Categories</StyledFooterListHeader>
            <ul>
              {resources.categories &&
                resources.categories.map(cat => (
                  <li key={cat as unknown as string}>
                    <Anchor
                      href={`/category/${Slugify(cat as unknown as string)}`}>
                      {cat}
                    </Anchor>
                  </li>
                ))}
            </ul>
          </StyledFooterNavList>
          <StyledFooterNavList>
            <StyledFooterListHeader>Tags</StyledFooterListHeader>
            <StyledFooterCloud />
          </StyledFooterNavList>
        </StyledFooterNav>
      </StyledFooterWidgets>
      <StyledGradientStrip>Brennan Walsh. © 2019</StyledGradientStrip>
    </StyledFooter>
  )
}
