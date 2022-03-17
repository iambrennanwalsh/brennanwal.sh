import { styled } from '@/styles'
import { getThemeVariants } from '@/utils/getThemeVariants'

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
    size: getThemeVariants('fontSizes', 'fontSize'),
    color: getThemeVariants('colors', 'color')
  }
})
