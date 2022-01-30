import {styled} from '@/styles'

export const StyledAnchor = styled('a', {
  variants: {
    activeStyle: {
      navLink: {
        color: '$secondary',
        backgroundColor: '$darkBgHover'
      }
    }
  }
})
