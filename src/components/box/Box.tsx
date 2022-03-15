import type {Component, Props} from '@/'
import type {AnchorProps} from '@/components'
import {StyledBox, StyledBoxHeading, StyledBoxHeadingAnchor} from '.'

interface BoxOwnProps {
  heading?: string
  link?: AnchorProps
}

export type BoxProps = Props<typeof StyledBox, BoxOwnProps>

export const Box: Component<BoxProps> = ({
  heading,
  link,
  children,
  ...props
}) => {
  return (
    <StyledBox data-component="box" {...props}>
      {heading && (
        <StyledBoxHeading>
          {heading}
          {link && <StyledBoxHeadingAnchor {...link} />}
        </StyledBoxHeading>
      )}
      {children}
    </StyledBox>
  )
}

Box.toString = () => '[data-component="box"]'
