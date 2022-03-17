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
  borderBottomWidth: '$sm',
  borderBottomStyle: '$solid',
  borderBottomColor: '$responsiveDivider',
  paddingBottom: '$3',
  marginBottom: '$4',
  '@tablet': {
    paddingBottom: '0',
    borderBottom: 'none'
  }
})

export const StyledContentSeperator = styled(Seperator, {
  display: 'none',
  '@tablet': {
    display: 'block'
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
      pl: '$4'
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
