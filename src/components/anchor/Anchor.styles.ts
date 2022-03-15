import { styled } from '@/styles'

export const StyledAnchor = styled('a', {
  variants: {
    variant: {
      nav: {
        '&:hover': {
          color: '$secondary',
          backgroundColor: '$darkBgHover'
        }
      }
    }
  }
})
