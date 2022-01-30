import type {Component, Props} from '@/'
import type {AnchorProps, ImageProps} from '@/components'
import {Anchor, Content, Group, Image} from '@/components'
import type {ReactNode} from 'react'
import {StyledCard} from '.'

interface CardOwnProps {
  link?: AnchorProps
  image?: ImageProps
  heading: string
  meta?: ReactNode
}

export type CardProps = Props<typeof StyledCard, CardOwnProps>

export const Card: Component<CardProps> = ({
  link,
  heading,
  image,
  meta,
  children,
  ...props
}) => {
  const cardBody = (
    <>
      {image && <Image alt={image.alt} {...image} />}
      <h3>{heading}</h3>
      {children && <Content withSeperator={false}>{children}</Content>}
    </>
  )
  return (
    <StyledCard>
      {link ? <Anchor {...link}>{cardBody}</Anchor> : cardBody}
      {meta && <Group>{meta}</Group>}
    </StyledCard>
  )
}
