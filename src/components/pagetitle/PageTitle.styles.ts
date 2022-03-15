import { Image } from '@/components'
import { styled } from '@/styles'

export const StyledPageTitleImage = styled(Image, {
  mb: '$6',
  display: 'block',
  boxShadow: '$md',

  '@untilTablet': {
    stretch: true
  },

  '@tablet': {
    borderRadius: '$round'
  }
})

export const StyledPageTitleHeading = styled('h1', {
  marginBottom: '$3',
  color: '$primary',

  '@tablet': {
    color: '$whiteText'
  }
})

export const StyledPageTitleContainer = styled('div', {
  my: '$7',
  px: '$6'
})

export const StyledPageTitleSummary = styled('p', {
  color: '$grayText'
})
