import {keyframes, styled} from '@/styles'

const loadbarAnimation = keyframes({
  '0%': {
    transform: 'scaleX(0)',
  },
  '100%': {
    transform: 'scaleX(1)',
  },
})

export const StyledLoadBar = styled('div', {
  width: '100%',
  height: '2px',
  background: '$darkBg',
  position: 'sticky',
  top: 0,
  zIndex: '$highest',

  '& > div': {
    height: '2px',
    width: '100%',
    backgroundImage: 'linear-gradient(-45deg, $primary, $secondary)',
  },

  variants: {
    load: {
      true: {
        '& > div': {
          animation: `${loadbarAnimation}`,

          animationTimingFunction: 'ease-out',
          transformOrigin: 'left',
          animationDuration: '.5s',
          animationFillMode: 'both',
        },
      },
    },
  },
})
