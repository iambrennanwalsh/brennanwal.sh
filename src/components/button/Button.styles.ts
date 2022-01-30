import {styled} from '@/styles'
import {ThemeVariants} from '@/utils/themeVariants'

export const StyledButton = styled('button', {
  marginBottom: '1.25rem',
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: '0.8',
      },
    },
    size: {
      sm: {
        fontSize: '$sm',
        padding: '0 $6',
        height: '37px',
      },
      md: {
        fontSize: '$md',
        padding: '$6',
        height: '47px',
      },
      lg: {
        fontSize: '$lg',
        padding: '$7',
        height: '57px',
      },
    },
    bg: ThemeVariants('colors', 'backgroundColor'),
    color: ThemeVariants('colors', 'color'),
  },
  defaultVariants: {
    bg: 'primary',
    color: 'whiteText',
    size: 'sm',
  },
})
