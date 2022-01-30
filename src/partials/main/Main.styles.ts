import {styled} from '@/styles'

export const StyledMain = styled('main', {
  width: '100%',
  mx: 'auto',
  mb: '$6',

  '@tablet': {
    display: 'flex',
    padding: '$6',
  },

  '@widescreen': {
    maxWidth: '$widescreen',
  },
})
