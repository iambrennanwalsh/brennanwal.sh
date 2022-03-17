import { Icon } from '@/components'
import { styled } from '@/styles'

export const StyledToastIcon = styled(Icon, {
  display: 'inline-block',
  marginRight: '$6'
})

export const StyledToastMessage = styled('span', {
  display: 'inline-block'
})

export const StyledToast = styled('div', {
  width: '100%',
  minHeight: '60px',
  color: '$whiteText',
  textAlign: 'left',
  borderRadius: '$round',
  px: '$6',
  lineHeight: '$sm',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  marginBottom: '$6',
  pointerEvents: 'all',
  fontSize: '$sm',
  boxShadow: '$sm',
  '@tablet': {
    width: '300px'
  },
  variants: {
    color: {
      info: {
        backgroundColor: '$info'
      },
      warning: {
        backgroundColor: '$warning',
        color: '$blackText'
      },
      danger: {
        backgroundColor: '$danger'
      },
      success: {
        backgroundColor: '$success'
      }
    }
  }
})

export const StyledToasts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'end',
  padding: '$6',
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '100vh',
  pointerEvents: 'none',

  '@tablet': {
    alignItems: 'end'
  }
})
