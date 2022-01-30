import {Image} from '@/components'
import {styled} from '@/styles'

export const StyledPageTitleImage = styled(Image, {
  mb: '$6',
  display: 'block',
  boxShadow: '$md',
  '@untilTablet': {
    stretch: ''
  },
  '@tablet': {
    borderRadius: '$circle'
  }
})

export const StyledPageTitleHeading = styled('h1', {
  marginBottom: '$3',
  fontSize: '$h1',
  textTransform: 'uppercase',
  color: '$primary',

  '@tablet': {
    color: '$whiteText'
  }
})

export const StyledPageTitleContainer = styled('div', {
  my: '$6',
  px: '$6',
  pb: '$6',
  borderBottomWidth: '$sm',
  borderBottomStyle: 'solid',
  borderBottomColor: '$responsiveDivider',

  '@tablet': {
    borderBottom: 0
  }
})

export const StyledPageTitleSummary = styled('p', {
  paddingLeft: '$5',
  color: '$grayText',

  '@tablet': {
    paddingLeft: 0
  }
})
