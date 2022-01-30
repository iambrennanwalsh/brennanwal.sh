import type {Component, Props} from '@/'
import {LoadBar, Nav} from '@/components'
import {StyledHeader} from '.'

export const navMenu = [
  {children: 'Home', href: '/'},
  {children: 'About', href: '/about'},
  {children: 'Portfolio', href: '/portfolio'},
  {children: 'Blog', href: '/blog'},
  {children: 'Contact', href: '/contact'},
]

export const navLogo = {
  src: '/images/interface/logo.png',
  alt: 'brennanwal.sh logo',
}

export type HeaderProps = Props<typeof StyledHeader>

export const Header: Component<HeaderProps> = props => (
  <>
    <LoadBar />
    <StyledHeader {...props}>
      <Nav menu={navMenu} logo={navLogo} />
    </StyledHeader>
  </>
)
