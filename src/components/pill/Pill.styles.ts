import {Icon} from '@/components'
import {styled} from '@/styles'

export const StyledPillIcon = styled(Icon, {
  p: '7px 0px 5px',
  lineHeight: '1'
})

export const StyledPill = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$round',
  border: 0,
  cursor: 'pointer',
  textTransform: 'uppercase',
  overflow: 'hidden',
  color: '$whiteText',
  fontSize: '$sm'
})
