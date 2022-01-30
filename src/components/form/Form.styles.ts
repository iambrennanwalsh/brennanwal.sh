import {Button} from '@/components'
import {styled} from '@/styles'

export const StyledForm = styled('div', {})

export const StyledFormField = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  mb: '$6',
})

export const StyledFormInput = styled('input', {
  variants: {
    invalid: {
      true: {
        background: '#f7c4b0',
      },
    },
  },
})

export const StyledFormButton = styled(Button, {
  float: 'right',
  mb: '$6',
  width: '120px',
})
