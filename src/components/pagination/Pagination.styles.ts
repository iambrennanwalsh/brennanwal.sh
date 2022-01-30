import {Anchor, Group} from '@/components'
import {styled} from '@/styles'

export const StyledPaginationLink = styled(Anchor, {
  color: '$whiter',
  minWidth: '2.25em',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0.25rem',
  fontWeight: 'bold',
  borderRadius: '$round',
  display: 'inline-flex',
  height: '2.25em',
  transition: '$fast',
  borderWidth: '$md',
  borderStyle: '$solid',
  borderColor: '$primary',
  background: '$primary',

  '&:hover': {
    background: '$darker',
  },

  variants: {
    active: {
      true: {
        background: '$darker',
      },
    },
  },
})

export const StyledPagination = styled(Group, {
  justifyContent: 'center',
  mb: '$6',
})
