import {Component, Props} from '@/'
import {StyledIcon} from '.'

export const SocialIcons = [
  {
    icon: 'github',
    size: 'md',
    href: 'https://github.com/iambrennanwalsh/'
  },
  {
    icon: 'facebook',
    size: 'md',
    href: 'https://facebook.com/iambrennanwalsh/'
  },
  {
    icon: 'instagram',
    size: 'md',
    href: 'https://instagram.com/iambrennanwalsh/'
  },
  {
    icon: 'linkedin',
    size: 'md',
    href: 'https://www.linkedin.com/in/iambrennanwalsh/'
  }
]

export type IconProps = Props<typeof StyledIcon>

export const Icon: Component<IconProps> = props => {
  return <StyledIcon {...props} />
}
