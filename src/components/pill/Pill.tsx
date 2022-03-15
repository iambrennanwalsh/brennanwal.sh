import type {Component, Props} from '@/'
import type {AnchorProps, IconProps} from '@/components'
import {Anchor, Icon} from '@/components'
import {StyledPill} from '.'

export type PillOwnProps = {
  href: AnchorProps
  icon?: IconProps
}
export type PillProps = Props<typeof StyledPill, PillOwnProps>
export type PillComponent = Component<PillProps>

export const Pill: PillComponent = function ({href, icon, ...props}) {
  return (
    <StyledPill {...props} data-component="pill">
      {icon && <Icon {...icon} />}
      <Anchor {...href} />
    </StyledPill>
  )
}

Pill.toString = () => '[data-component="pill"]'
