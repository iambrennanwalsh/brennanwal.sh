import {StyledContent} from '@/components/content'
import {StyledGroup} from '@/components/group'
import {styled} from '@/styles'

export const StyledCard = styled('div', {
  borderRadius: '$round',
  boxShadow: '$md',
  mb: '$6',
  backgroundColor: '$darkBg',
  overflow: 'hidden',

  '& img': {
    display: 'block',
    lineHeight: 0,
    boxShadow: '$md',
  },

  '& h3': {
    padding: '$5 $6',
    fontSize: '1rem',
    color: '$whiteText',
    overflow: 'hidden',
    textAlign: 'left',
    transition: '$fast',
    zIndex: '$below',
    fontWeight: '$body',
  },

  [`& ${StyledContent}`]: {
    padding: '0 $6',
  },

  [`& ${StyledGroup}`]: {
    justifyContent: 'space-around',
    padding: '$5 $6',
  },
})
