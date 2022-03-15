import { Button } from '@/components'
import { styled } from '@/styles'

export const StyledForm = styled('div', {
  '@tablet': {
    display: 'flex',
    flexDirection: 'column',
    '& label': {
      display: 'none'
    }
  }
})

export const StyledFormField = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  mb: '$6',
  alignItems: 'center',
  gap: '$2',
  '@tablet': {
    justifyContent: 'end'
  }
})

export const StyledFormInput = styled('input', {
  variants: {
    invalid: {
      true: {
        background: 'rgba(247, 196, 176, 0.4)'
      }
    }
  }
})

export const StyledFormButton = styled(Button, {
  float: 'right',
  mb: '$6',
  width: '120px',
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  '@tablet': {
    float: 'none',
    alignSelf: 'end'
  }
})
