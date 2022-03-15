import {styled} from '@/styles'
import {ThemeVariants} from '@/utils/themeVariants'

export const StyledCloud = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
})

export const StyledCloudNode = styled('span', {
  padding: '$1',
  '&:hover': {
    color: '$primary'
  },
  variants: {
    size: ThemeVariants('fontSizes', 'fontSize'),
    color: ThemeVariants('colors', 'color')
  }
})
