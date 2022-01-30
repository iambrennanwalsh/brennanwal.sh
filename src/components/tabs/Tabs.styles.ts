import {styled, theme} from '@/styles'
import {darken} from 'polished'

export const StyledTabs = styled('div', {
  '& img': {
    maxWidth: '50px',
    height: 'auto',
    ml: '$7',
    mr: '$1',
    boxShadow: 'unset',
    float: 'right',

    '@tablet': {
      maxWidth: '75px',
    },
  },

  '& h3': {
    width: '70%',

    '@tablet': {
      maxWidth: 'unset',
    },
  },
})

export const StyledTabsContainer = styled('div', {
  display: 'flex',
})

export const StyledTab = styled('div', {
  flex: '1',
  fontSize: '$xs',
  textTransform: 'uppercase',
  color: '$primary',
  padding: '$1 0',
  textAlign: 'center',
  transition: '$fast',
  background: '$lighter',
  boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1) inset',
  cursor: 'pointer',

  '@tablet': {
    background: '$white',
  },

  '&:hover': {
    background: darken(0.05, theme.colors.lighter.value),

    '@tablet': {
      background: darken(0.05, theme.colors.white.value),
    },
  },

  variants: {
    active: {
      true: {
        background: '$white',
        boxShadow: 'unset',

        '@tablet': {
          background: '$whiter',
        },

        '&:hover': {
          background: '$white',

          '@tablet': {
            background: '$whiter',
          },
        },
      },
    },
  },
})
