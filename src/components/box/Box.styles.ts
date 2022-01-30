import {StyledAnchor} from '@/components'
import {styled} from '@/styles'

export const StyledBox = styled('div', {
  position: 'relative',
  stretch: true,

  '@tablet': {
    marginBottom: '$6',
    overflow: 'hidden',
    borderRadius: '$round',
    borderBottomWidth: '$md',
    borderBottomStyle: '$solid',
    borderBottomColor: '$secondary',
    boxShadow: '$md',
    background: '$bg',
  },

  '& h2': {
    backgroundImage: 'linear-gradient(to right, $primary, $secondary)',
    pl: '$6',
    color: '$whiteText',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '$body',
    boxShadow: '0px -1px 3px rgb(0 0 0 / 10%) inset',
    height: '50px',

    [`& > ${StyledAnchor}`]: {
      background: '$responsiveBg',
      padding: '$5 $7',
      display: 'flex',
      boxShadow: '-1px 0px 3px rgb(0 0 0 / 15%)',
      '@tablet': {
        background: '$bg',
      },
    },
  },
})
