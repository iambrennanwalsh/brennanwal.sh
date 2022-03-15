import { StyledBox } from '@/components'
import { Image } from '@/components/image'
import { Seperator } from '@/components/seperator'
import { styled } from '@/styles'

export const StyledContentImage = styled(Image, {
  width: '100%',
  marginBottom: '$6',
  borderRadius: '$round',
  boxShadow: '$sm',

  '@tablet': {
    marginLeft: '$6',
    float: 'right',
    width: '30%',
    maxWidth: '300px'
  }
})

export const StyledContentHeading = styled('h3', {
  color: '$primary',
  marginBottom: '$5',
  '@untilTablet': {
    paddingBottom: '$3',
    borderBottomWidth: '$sm',
    borderBottomStyle: '$solid',
    borderBottomColor: '$responsiveDivider'
  }
})

export const StyledContentSeperator = styled(Seperator, {
  '@untilTablet': {
    display: 'none'
  }
})

export const StyledContent = styled('div', {
  padding: '$6 $6 $0',

  [`${StyledBox} & pre~hr`]: {
    display: 'none'
  },

  [`${StyledBox} & p:not(:last-child)`]: {
    mb: '$5'
  },

  '@desktop': {
    [`${StyledBox} & h3~p`]: {
      pl: '$5'
    }
  },
  variants: {
    tab: {
      true: {
        [`& ${StyledContentImage}`]: {
          maxWidth: '50px',
          height: 'auto',
          marginLeft: '$8',
          marginRight: '$5',
          boxShadow: 0,
          float: 'right',
          '@tablet': {
            maxWidth: '75px'
          }
        }
      }
    }
  }
})
