import {Cloud, Icon, Image, Seperator} from '@/components'
import {styled} from '@/styles'

export const StyledFooter = styled('footer', {
  width: '100%',
  backgroundColor: '$responsiveBg',
})

export const StyledGradientStrip = styled('div', {
  p: '$4',
  color: '$whiteText',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'linear-gradient(to right, $primary, $secondary)',
})

export const StyledIgIcon = styled(Icon, {
  mr: '$6',
})

export const StyledFooterWidgets = styled('div', {
  p: '$8',
  maxWidth: '$widescreen',
  mx: 'auto',

  '@tablet': {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    py: '$9',
  },
})

export const StyledFooterSummary = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',

  '@tablet': {
    alignItems: 'start',
    width: '33.3%',
  },
})

export const StyledFooterLogo = styled(Image, {
  width: '150px',
  mb: '$6',
})

export const StyledFooterSeperator = styled(Seperator, {
  '@tablet': {
    display: 'none',
  },
})

export const StyledFooterNav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-evenly',

  '@tablet': {
    width: '50%',
  },
})

export const StyledFooterListHeader = styled('h5', {
  fontWeight: '$bold',
})

export const StyledFooterNavList = styled('div', {
  width: '200px',
})

export const StyledFooterCloud = styled(Cloud, {
  color: '$text',
  padding: 0,
  justifyContent: 'left',
})
