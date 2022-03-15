import type { Component, Props } from '@/'
import type { AnchorProps, ImageProps } from '@/components'
import { Icon, Image } from '@/components'
import { useRouter } from 'next/router'
import type { MemoExoticComponent } from 'react'
import { memo, useEffect, useState } from 'react'
import {
  StyledNav,
  StyledNavAnchor,
  StyledNavBurger,
  StyledNavContainer,
  StyledNavMenu
} from './Nav.styles'

// eslint-disable-next-line react/display-name
const Logo: MemoExoticComponent<Component<ImageProps>> = memo(
  ({ alt, ...props }) => {
    return <Image alt={alt} {...props} />
  }
)

interface NavOwnProps {
  menu: AnchorProps[]
  logo: ImageProps
}

export type NavProps = Props<typeof StyledNav, NavOwnProps>

export const Nav: Component<NavProps> = ({ menu, logo, ...props }) => {
  const router = useRouter()

  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

  useEffect(() => {
    setIsMenuActive(false)
    window.scrollTo(0, 0)
  }, [router.asPath])

  return (
    <StyledNav data-component="nav" {...props}>
      <StyledNavContainer>
        <StyledNavAnchor href="/">
          <Logo {...logo} />
        </StyledNavAnchor>
        <StyledNavMenu active={isMenuActive}>
          {menu.map(anchor => (
            <StyledNavAnchor {...anchor} key={anchor.href} />
          ))}
        </StyledNavMenu>
        <StyledNavBurger onClick={() => setIsMenuActive(!isMenuActive)}>
          <Icon icon="bars" />
        </StyledNavBurger>
      </StyledNavContainer>
    </StyledNav>
  )
}

Nav.toString = () => '[data-component="nav"]'
