import type {Component, Props} from '@/'
import type {AnchorProps, ImageProps} from '@/components'
import {Anchor} from '@/components'
import type {ReactNode} from 'react'
import {
  StyledCard,
  StyledCardContent,
  StyledCardGroup,
  StyledCardHeading,
  StyledCardImage
} from '.'

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
      {image && <StyledCardImage {...image} />}
      <StyledCardHeading>{heading}</StyledCardHeading>
      {children && (
        <StyledCardContent withSeperator={false}>{children}</StyledCardContent>
      )}
    </>
  )
  return (
    <StyledCard data-component="card" {...props}>
      {link ? <Anchor {...link}>{cardBody}</Anchor> : cardBody}
      {meta && <StyledCardGroup>{meta}</StyledCardGroup>}
    </StyledCard>
  )
}

Card.toString = () => '[data-component="card"]'
