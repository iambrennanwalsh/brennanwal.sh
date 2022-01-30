import type {Component, Props} from '@/'
import type {ImageProps} from '@/components'
import {Image, Seperator} from '@/components'
import {StyledContent} from '.'

interface ContentOwnProps {
  image?: ImageProps
  heading?: string
  withSeperator?: boolean
}

export type ContentProps = Props<typeof StyledContent, ContentOwnProps>

export const Content: Component<ContentProps> = ({
  heading,
  image,
  withSeperator = true,
  children,
  ...props
}) => {
  return (
    <StyledContent {...props}>
      {image && <Image alt={image.alt} {...image} />}
      {heading && <h3>{heading}</h3>}
      {children}
      {withSeperator && <Seperator marginTop />}
    </StyledContent>
  )
}
