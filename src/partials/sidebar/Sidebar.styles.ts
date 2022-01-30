import {Card, Content} from '@/components'
import {styled} from '@/styles'

export const StyledSidebar = styled('aside', {
  mx: 'auto',
  display: 'none',

  '@tablet': {
    display: 'block',
    pl: '$6',
    width: '35%',
    position: 'relative'
  },

  '@desktop': {
    width: '30%'
  },

  '@widescreen': {
    width: '25%'
  }
})

export const StyledSidebarMeCard = styled(Card, {
  '& img': {
    borderRadius: '$circle',
    position: 'absolute',
    top: '-65px',
    width: '115px',
    left: '50%',
    WebkitTransform: 'translateX(-50%)',
    MozTransform: 'translateX(-50%)',
    MsTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
    zIndex: '$high',
    border: '5px solid hsl(180, 7%, 16%)'
  }
})

export const StyledSidebarContent = styled(Content, {
  boxShadow: '$md',
  marginBottom: '$6',
  borderRadius: '$round',
  padding: '0',
  backgroundColor: '$darkBg'
})
