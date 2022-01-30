import {styled} from '@/styles'

export const StyledGrid = styled('div', {
  mb: '$6',

  '& > div': {
    '@tablet': {
      columnCount: '2',
    },
    '@desktop': {
      columnCount: '3',
    },

    '& div': {
      breakInside: 'avoid',
    },
  },
})
