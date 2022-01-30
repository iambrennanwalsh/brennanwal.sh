import type {Component, Props} from '@/'
import type {LinkProps} from 'next/link'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {StyledAnchor} from '.'

interface AnchorOwnProps extends LinkProps {
  href: string
  shallow?: boolean
}

export type AnchorProps = Props<typeof StyledAnchor, AnchorOwnProps>

export const Anchor: Component<AnchorProps> = ({
  activeStyle,
  children,
  href,
  ...props
}) => {
  const router = useRouter()

  const [type] = useState<'external' | 'internal'>(() => {
    if (/^(https?:\/\/)/.test(href)) return 'external'
    else return 'internal'
  })

  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    setIsActive(type == 'internal' && router.asPath === href)
  }, [router, href, type])

  const internalLink = (
    <Link
      passHref
      href={href}
      {...(isActive && activeStyle && {activeStyle: activeStyle})}
      {...props}>
      <StyledAnchor>{children}</StyledAnchor>
    </Link>
  )

  const externalLink = (
    <StyledAnchor href={href} {...props}>
      {children}
    </StyledAnchor>
  )

  return type == 'internal' ? internalLink : externalLink
}

Anchor.toString = () => '.anchor'
