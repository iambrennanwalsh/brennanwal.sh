import type {Component, Props} from '@/'
import type {AnchorProps, ImageProps} from '@/components'
import {Icon, Image} from '@/components'
import {useRouter} from 'next/router'
import {memo, useEffect, useState} from 'react'
import {
  StyledNav,
  StyledNavAnchor,
  StyledNavBurger,
  StyledNavContainer,
  StyledNavLogo,
  StyledNavMenu,
} from './Nav.styles'

const Logo: Component<ImageProps> = ({alt, ...props}) => {
  return <Image alt={alt} {...props} />
}

const MemoizedLogo = memo(Logo)

interface NavOwnProps {
  menu: AnchorProps[]
  logo: ImageProps
}

export type NavProps = Props<typeof StyledNav, NavOwnProps>

export const Nav: Component<NavProps> = ({menu, logo, ...props}) => {
  const router = useRouter()

  const [menuState, setMenuState] = useState<boolean>(false)

  useEffect(() => {
    setMenuState(false)
    window.scrollTo(0, 0)
  }, [router.asPath])

  return (
    <StyledNav {...props}>
      <StyledNavContainer>
        <StyledNavLogo href="/">
          <MemoizedLogo {...logo} />
        </StyledNavLogo>
        <StyledNavMenu active={menuState}>
          {menu.map(link => (
            <StyledNavAnchor {...link} key={link.href}>
              {link.children}
            </StyledNavAnchor>
          ))}
        </StyledNavMenu>
        <StyledNavBurger onClick={() => setMenuState(!menuState)}>
          <Icon icon="bars" />
        </StyledNavBurger>
      </StyledNavContainer>
    </StyledNav>
  )
}
