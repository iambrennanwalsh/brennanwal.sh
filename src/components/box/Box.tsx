import {Component, Props} from '@/'
import type {AnchorProps} from '@/components'
import {Anchor} from '@/components'
import {StyledBox} from '.'

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
    <StyledBox {...props}>
      {heading && (
        <h2>
          {heading}
          {link && <Anchor {...link} />}
        </h2>
      )}
      {children}
    </StyledBox>
  )
}
