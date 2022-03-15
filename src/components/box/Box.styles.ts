import { styled } from '@/styles'
import { Anchor } from '../anchor'

export const StyledBox = styled('div', {
  position: 'relative',
  stretch: true,

  '@tablet': {
    mb: '$6',
    overflow: 'hidden',
    borderRadius: '$round',
    borderBottom: '2px solid $secondary',
    boxShadow: '$md',
    background: '$bg'
  }
})

export const StyledBoxHeading = styled('h2', {
  backgroundImage: 'linear-gradient(to left, $primary, $secondary)',
  pl: '$6',
  color: '$whiteText',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0px -1px 3px rgb(0 0 0 / 10%) inset',
  height: '50px'
})

export const StyledBoxHeadingAnchor = styled(Anchor, {
  backgroundColor: '$responsiveBg',
  p: '$5 $7',
  display: 'flex',
  boxShadow: '-1px 0px 3px rgb(0 0 0 / 15%)',
  '@tablet': {
    backgroundColor: '$bg'
  }
})
