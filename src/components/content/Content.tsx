import type {Component, Props} from '@/'
import type {ImageProps} from '@/components'
import {
  StyledContent,
  StyledContentHeading,
  StyledContentImage,
  StyledContentSeperator
} from '.'

interface ContentOwnProps {
  image?: ImageProps
  heading?: string
  withSeperator?: boolean
}

export type ContentProps = Props<typeof StyledContent, ContentOwnProps>

export const Content: Component<ContentProps> = ({
  heading,
  image,
  tab = false,
  withSeperator = true,
  children,
  ...props
}) => {
  return (
    <StyledContent tab={tab} data-component="content" {...props}>
      {image && <StyledContentImage alt={image.alt} {...image} />}
      {heading && <StyledContentHeading>{heading}</StyledContentHeading>}
      {children}
      {withSeperator && <StyledContentSeperator marginTop />}
    </StyledContent>
  )
}

Content.toString = () => '[data-component="content"]'
