import {StyledAnchor} from '@/components/anchor'
import {StyledImage} from '@/components/image'
import {styled} from '@/styles'

export const StyledNavMenu = styled('div', {
  display: 'flex',
  transformOrigin: 'top',
  transition: '$med',
  '@untilTablet': {
    flexDirection: 'column',
    boxShadow: '$md',
    backgroundColor: '$darkBg',
    position: 'absolute',
    top: '$9',
    zIndex: '$1',
    width: '100%',
    overflow: 'hidden',
    maxHeight: '570px',
    transform: 'scaleY(0)',
  },
  variants: {
    active: {
      true: {
        '@untilTablet': {
          transform: 'scaleY(1)',
          opacity: '1',
        },
      },
    },
  },
})

export const StyledNavBurger = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$darkBgHover',
  color: '$grayText',
  cursor: 'pointer',
  width: '3.25rem',

  '@tablet': {
    display: 'none',
  },
})

export const StyledNavAnchor = styled(StyledAnchor, {
  padding: '$6',
  display: 'flex',
  alignItems: 'center',
  color: '$light',
  fontSize: '$sm',
  height: '3.25rem',
  [`${StyledNavMenu} &`]: {
    '@untilTablet': {
      borderBottomWidth: '$sm',
      borderBottomStyle: '$solid',
      borderBottomColor: '$darker',
    },
  },
  '@tablet': {
    padding: '0 $6',
  },
  '&:hover': {
    background: '$darkBgHover',
  },
})

export const StyledNavLogo = styled(StyledNavAnchor, {
  display: 'flex',
  alignItems: 'center',
  [`& ${StyledImage}`]: {
    height: '1rem',
  },
})

export const StyledNav = styled('div', {
  backgroundColor: '$darkBg',
  boxShadow: '$sm',
})

export const StyledNavContainer = styled('div', {
  mx: 'auto',
  position: 'relative',
  maxWidth: '$widescreen',
  alignItems: 'stretch',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  maxHeight: '3.25rem',

  '@tablet': {
    px: '$6',
  },
})
