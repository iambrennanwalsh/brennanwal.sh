import {styled} from '@/styles'

export const StyledSeperator = styled('hr', {
  backgroundColor: '$responsiveDivider',

  '@tablet': {
    backgroundColor: '$divider',
  },

  variants: {
    marginTop: {
      true: {
        mt: '$6',
      },
    },

    marginBottom: {
      true: {
        mb: '$6',
      },
    },
  },
})
