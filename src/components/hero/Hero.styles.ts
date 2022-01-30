import {Content} from '@/components'
import {keyframes, styled} from '@/styles'

const HomeAnimation = keyframes({
  '0%': {
    left: '0',
  },
  '100%': {
    left: '-4000px',
  },
})

const ContentAnimation = keyframes({
  '0%': {
    transform: 'scale(0)',
    opacity: 0,
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1,
  },
})

export const StyledHeroEffect = styled('div', {
  height: '100%',
  position: 'absolute',
  left: '0',
  pointerEvents: 'none',
})

export const StyledHero = styled('div', {
  position: 'relative',
  overflowX: 'hidden',
  height: '500px',
  boxShadow: '0px -3px 3px rgba(0, 0, 0, 0.5) inset',
  variants: {
    effect: {
      home: {
        backgroundSize: 'cover',
        background:
          'linear-gradient(to top, rgb(10, 10, 10), rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0)), url("/images/slides/slider.jpg") no-repeat center right',
        '@tablet': {
          background:
            'linear-gradient(to right, rgb(10, 10, 10), rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0)), url("/images/slides/slider.jpg") no-repeat center right',
          backgroundSize: 'cover',
        },
        [`& ${StyledHeroEffect}`]: {
          background: 'url("/images/slides/clouds.png")',
          width: '4000px',
          display: 'none',
          animation: `${HomeAnimation}`,
          animationDuration: '200s',
          animationTimingFunction: 'linear',
          '@tablet': {
            display: 'block',
          },
        },
      },
    },
  },
  defaultVariants: {
    effect: 'home',
  },
})

export const StyledHeroContent = styled(Content, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
  textAlign: 'center',
  animation: `${ContentAnimation} .5s ease-out 1s 1 normal both running`,
})
