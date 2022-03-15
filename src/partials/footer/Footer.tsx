import type {Component, Props} from '@/'
import {Anchor, Instagram} from '@/components'
import {useApiContext} from '@/hooks'
import {navLogo} from '@/partials/header'
import {Slugify} from '@/utils/slugify'
import {useEffect, useState} from 'react'
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
export type FooterComponent = Component<FooterProps>

export const Footer: FooterComponent = props => {
  const {resources} = useApiContext()

  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    if (resources.articles) {
      const cats = resources.articles?.map(article => article.category)
      setCategories(Array.from(new Set(cats)))
    }
  }, [resources])

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
          <StyledFooterLogo {...navLogo} height="48" width="436" />
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
              {categories &&
                categories.map(cat => (
                  <li key={cat}>
                    <Anchor href={`/category/${Slugify(cat)}`}>{cat}</Anchor>
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
