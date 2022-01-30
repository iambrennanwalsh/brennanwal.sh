import {Image} from '@/components/image'
import {styled} from '@/styles'

export const StyledModal = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'fixed',
  zIndex: '200',
  overflow: 'hidden',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,

  variants: {
    enter: {
      true: {
        opacity: 0,
      },
    },
    exit: {
      true: {
        opacity: 1,
      },
    },
    active: {
      true: {},
    },
  },
  compoundVariants: [
    {
      enter: true,
      active: true,
      css: {
        opacity: 1,
        transition: '$med',
      },
    },
    {
      exit: true,
      active: true,
      css: {
        opacity: 0,
        transition: '$med',
      },
    },
  ],
})

export const StyledModalBackground = styled('div', {
  backgroundColor: 'rgba(0, 0, 0, 0.86)',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
})

export const StyledModalContent = styled('div', {
  background: '$darker',
  padding: '$3',
  margin: '$5',
  width: 'auto',
  maxWidth: '1000px',
  height: 'auto',
  position: 'relative',

  [`& ${Image}`]: {
    display: 'block',
    margin: 'auto',
    maxHeight: '600px',
    textAlign: 'center',
  },
})
