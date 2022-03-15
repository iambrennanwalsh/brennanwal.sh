import type { Component, Props } from '@/'
import type { LinkProps as NextJsLinkProps } from 'next/link'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { StyledAnchor } from '.'

interface AnchorOwnProps extends NextJsLinkProps {
  href: string
  shallow?: boolean
}

export type AnchorProps = Props<typeof StyledAnchor, AnchorOwnProps>

export const Anchor: Component<AnchorProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter()

  const [type] = useState<'external' | 'internal'>(() => {
    if (/^(https?:\/\/)/.test(href)) return 'external'
    else return 'internal'
  })

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(router.asPath === href)
  }, [router, href, type])

  const internalLink = (
    <Link passHref href={href}>
      <StyledAnchor
        data-component="anchor"
        {...(isActive && { 'data-active': true })}
        {...props}>
        {children}
      </StyledAnchor>
    </Link>
  )

  const externalLink = (
    <StyledAnchor data-component="anchor" href={href} {...props}>
      {children}
    </StyledAnchor>
  )

  return type == 'internal' ? internalLink : externalLink
}

Anchor.toString = () => '[data-component="anchor"]'
