import { styled } from '@/styles'

export const StyledInstagram = styled('div', {
  '--content-width': '100vw',
  '--gutter': '0px',
  '--columns': '5',
  '--row-size': `calc((var(--content-width) - (var(--gutter) * (var(--columns) - 1))) / var(--columns))`,
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--columns), 1fr)',
  boxShadow: '0px 0px 10px 1px rgb(0 0 0 / 60%)',
  gridAutoRows: 'var(--row-size)',
  marginBottom: '$6',

  '@tablet': {
    '--columns': 10
  },

  '& > div': {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }
})
