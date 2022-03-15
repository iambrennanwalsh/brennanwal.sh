import { Anchor } from '@/components/anchor'
import { StyledImage } from '@/components/image'
import { styled } from '@/styles'

export const StyledNav = styled('nav', {
  backgroundColor: '$darkBg',
  boxShadow: '$sm',
  display: 'flex',
  justifyContent: 'center',
  color: '$grayText'
})

export const StyledNavContainer = styled('div', {
  position: 'relative',
  maxWidth: '$widescreen',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  width: '100%',
  height: '3.25rem',

  '@tablet': {
    px: '$6'
  }
})

export const StyledNavMenu = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  transformOrigin: 'top',
  boxShadow: '$md',
  transition: '$med',
  backgroundColor: '$darkBg',
  position: 'absolute',
  top: '$9',
  zIndex: '$1',
  width: '100%',
  maxHeight: '250px',
  transform: 'scaleY(0)',

  '@tablet': {
    flexDirection: 'row',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    position: 'static',
    width: 'unset',
    transform: 'scaleY(1)'
  },

  variants: {
    active: {
      true: {
        transform: 'scaleY(1)'
      }
    }
  }
})

export const StyledNavBurger = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$darkBgHover',
  color: 'inherit',
  cursor: 'pointer',
  width: '3.25rem',

  '@tablet': {
    display: 'none'
  }
})

export const StyledNavAnchor = styled(Anchor, {
  color: 'inherit',
  fontSize: '$sm',
  p: '$3 $6',
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    background: '$darkBgHover'
  },

  [`& ${StyledImage}`]: {
    height: '1rem'
  },

  [`${StyledNavMenu} &`]: {
    '&[data-active]': {
      color: '$secondary',
      backgroundColor: '$darkBgHover'
    },
    borderBottomWidth: '$sm',
    borderBottomStyle: '$solid',
    borderBottomColor: '$darker',
    '@tablet': {
      border: 'none'
    }
  }
})
