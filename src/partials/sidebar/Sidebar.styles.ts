import {Card} from '@/components'
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

export const StyledSidebarContent = styled(Card, {
  boxShadow: '$md',
  marginBottom: '$6',
  borderRadius: '$round',
  padding: '0',
  backgroundColor: '$darkBg'
})

export const StyledSidebarMeCard = styled(StyledSidebarContent, {
  mt: '$10',
  position: 'relative',
  overflow: 'initial',
  pb: '1px'
})
