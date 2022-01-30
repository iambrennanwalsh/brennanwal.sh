import {keyframes, styled} from '@/styles'

const spinnerAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const StyledIcon = styled('i', {
  fontFamily: 'icons',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontVariant: 'normal',
  variants: {
    icon: {
      spinner: {
        '&::before': {
          animation: `${spinnerAnimation}`,
          animationDuration: '2s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
          display: 'inline-block',
          content: `\\f110`,
        },
      },
      success: {
        '&::before': {
          content: `\\e800`,
        },
      },
      plus: {
        '&::before': {
          content: `\\e801`,
        },
      },
      minus: {
        '&::before': {
          content: `\\e802`,
        },
      },
      close: {
        '&::before': {
          content: `\\e803`,
        },
      },
      tags: {
        '&::before': {
          content: `\\e804`,
        },
      },
      edit: {
        '&::before': {
          content: `\\e80b`,
        },
      },
      bookmark: {
        '&::before': {
          content: `\\e80b`,
        },
      },
      right: {
        '&::before': {
          content: `\\e806`,
        },
      },
      left: {
        '&::before': {
          content: `\\e80d`,
        },
      },
      down: {
        '&::before': {
          content: `\\e80e`,
        },
      },
      up: {
        '&::before': {
          content: `\\e80c`,
        },
      },
      danger: {
        '&::before': {
          content: `\\e807`,
        },
      },
      comment: {
        '&::before': {
          content: `\\e808`,
        },
      },
      triangle: {
        '&::before': {
          content: `\\e809`,
        },
      },
      globe: {
        '&::before': {
          content: `\\e80a`,
        },
      },
      link: {
        '&::before': {
          content: `\\f08e`,
        },
      },
      facebook: {
        '&::before': {
          content: `\\f09a`,
        },
      },
      bars: {
        '&::before': {
          content: `\\f0c9`,
        },
      },
      github: {
        '&::before': {
          content: `\\f113`,
        },
      },
      envelope: {
        '&::before': {
          content: `\\f0e0`,
        },
      },
      linkedin: {
        '&::before': {
          content: `\\f0e1`,
        },
      },
      download: {
        '&::before': {
          content: `\\f0ed`,
        },
      },
      info: {
        '&::before': {
          content: `\\f129`,
        },
      },
      warning: {
        '&::before': {
          content: `\\f12a`,
        },
      },
      plane: {
        '&::before': {
          content: `\\f1d8`,
        },
      },
      instagram: {
        '&::before': {
          content: `\\f16d`,
        },
      },
      commenting: {
        '&::before': {
          content: `\\f27a`,
        },
      },
      user: {
        '&::before': {
          content: `\\f2bd`,
        },
      },
    },
    size: {
      sm: {
        fontSize: '1rem',
      },
      md: {
        fontSize: '$lg',
      },
      lg: {
        fontSize: '$xl',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})
