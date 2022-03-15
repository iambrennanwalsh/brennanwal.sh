import { keyframes, styled } from '@/styles'

const loadbarAnimation = keyframes({
  '0%': {
    transform: 'scaleX(0)'
  },
  '100%': {
    transform: 'scaleX(1)'
  }
})

export const StyledLoader = styled('div', {
  height: '2px',
  width: '100%',
  backgroundImage: 'linear-gradient(to left,  $primary, $secondary)',
  transformOrigin: 'left',
  transform: 'scaleX(0)',

  variants: {
    load: {
      true: {
        transition: '1s',
        transform: 'scaleX(1)'
      }
    }
  }
})

export const StyledLoadBar = styled('div', {
  width: '100%',
  height: '2px',
  background: '$darkBg',
  position: 'sticky',
  top: 0,
  zIndex: '$highest'
})
