import {styled} from '@/styles'

export const StyledSlideQuote = styled('p', {
  color: '$whiteText',
  maxWidth: '600px',
  marginBottom: '$6',
})

export const StyledSlideSource = styled('p', {
  backgroundImage: 'linear-gradient(-45deg, $primary, $secondary)',
  color: '$blackText',
  display: 'inline',
  padding: '$1 $3',
  boxShadow: '$sm',
})

export const StyledSlide = styled('div', {
  alignItems: 'center',
  boxShadow: '$md',
  display: 'flex',
  fontSize: '$xl',
  height: '400px',
  justifyContent: 'center',
  padding: '$7',
  textAlign: 'center',
  textTransform: 'uppercase',

  '@tablet': {
    borderRadius: '4px',
    marginBottom: '1.25rem',
  },

  '@untilTablet': {
    stretch: true,
  },

  variants: {
    type: {
      steveJobs: {
        background: 'url("/images/slides/hiking.jpg")',
        backgroundPositionX: '10%',
        backgroundPositionY: '100%',
      },
      losAngeles: {
        background: 'url("/images/slides/la.jpg")',
        backgroundPositionX: '50%',
        backgroundPositionY: '50%',
        [`& ${StyledSlideSource}`]: {
          color: '$whiteText',
        },
      },
    },
  },
  defaultVariants: {
    type: 'steveJobs',
  },
})
