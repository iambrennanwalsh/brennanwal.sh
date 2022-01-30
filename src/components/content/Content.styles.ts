import {StyledBox} from '@/components'
import {styled} from '@/styles'

export const StyledContent = styled('div', {
  padding: '$6 $6 $2',

  [`${StyledBox} > &:last-child`]: {
    paddingBottom: '$6',
  },

  '& > img': {
    width: '100%',
    marginBottom: '$6',
    borderRadius: '$round',
    boxShadow: '$sm',

    '@tablet': {
      marginLeft: '$6',
      float: 'right',
      width: '30%',
      maxWidth: '300px',
    },
  },

  '& > h3': {
    fontWeight: '400',
    color: '$primary',
    marginBottom: '$4',
    '@untilTablet': {
      paddingBottom: '$3',
      borderBottomWidth: '$sm',
      borderBottomStyle: '$solid',
      borderBottomColor: '$responsiveDivider',
    },
  },

  '& > p': {
    marginBottom: '$6',
  },

  '@untilTablet': {
    '& > hr': {
      display: 'none',
    },
  },

  variants: {
    tab: {
      true: {
        '& > img': {
          maxWidth: '50px',
          height: 'auto',
          marginLeft: '$8',
          marginRight: '$5',
          boxShadow: 0,
          float: 'right',
          '@tablet': {
            maxWidth: '75px',
          },
        },
      },
    },
  },
})
