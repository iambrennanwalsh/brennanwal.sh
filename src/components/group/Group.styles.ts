import {styled} from '@/styles'

export const StyledGroup = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  [`& > *`]: {
    mx: '$3',
  },
  [`& > *:first-of-type`]: {
    ml: 0,
  },
  [`& > *:last-of-type`]: {
    mr: 0,
  },
})
