import { styled } from '@/styles'
import { ThemeVariants } from '@/utils/themeVariants'

export const StyledButton = styled('button', {
  marginBottom: '$6',
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: '0.8'
      }
    },
    size: {
      sm: {
        fontSize: '$sm',
        padding: '0 $6',
        height: '37px'
      },
      md: {
        fontSize: '$md',
        padding: '$6',
        height: '47px'
      },
      lg: {
        fontSize: '$lg',
        padding: '$7',
        height: '57px'
      }
    },
    bg: ThemeVariants('colors', 'backgroundColor'),
    color: ThemeVariants('colors', 'color'),
    freelancerButton: {
      true: {
        backgroundImage:
          'linear-gradient(to left, $primary 0%, $secondary 100%)',
        boxShadow:
          '0 3px 0 0 #175e2c, 0 4px 4px -1px rgb(0 0 0 / 60%), 0 4px 6px 1px rgb(0 0 0 / 30%), 0 1px 2px 1px rgb(0 0 0 / 0%) inset, 0 18px 32px -2px rgb(255 255 255 / 10%) inset',
        '&:hover [data-component="image"]': {
          transform: 'scale(1.2)'
        }
      }
    }
  },
  defaultVariants: {
    bg: 'primary',
    color: 'whiteText',
    size: 'sm'
  }
})
