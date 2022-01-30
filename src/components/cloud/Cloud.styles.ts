import {styled} from '@/styles'
import {ThemeVariants} from '@/utils/themeVariants'

export const StyledCloud = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '$5 $6',
})

export const StyledCloudNode = styled('span', {
  padding: '$1',
  '&:hover': {
    color: '$primary',
  },
  variants: {
    size: ThemeVariants('fontSizes', 'fontSize'),
    color: ThemeVariants('colors', 'color'),
  },
})
