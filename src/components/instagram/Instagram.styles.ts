import {styled} from '@/styles'

export const StyledInstagram = styled('div', {
  '--content-width': '100vw',
  '--gutter': '0',
  '--columns': '5',
  '--row-size': `calc((var(--content-width) - (var(--gutter) * (var(--columns) - 1))) / var(--columns))`,
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--columns), 1fr)',
  gridAutoRows: 'var(--row-size)',
  marginBottom: '$6',

  '@tablet': {
    '--columns': 10,
  },

  '& > div': {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
})
