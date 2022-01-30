import {styled} from '@/styles'

export const StyledLandingHeroHeader = styled('h1', {
  fontSize: '$3xl',
  lineHeight: '$display',
  textTransform: 'uppercase',
  color: '$whiteText',
  mb: '10px',
})

export const StyledLandingHeroCaption = styled('p', {
  fontStyle: 'italic',
  backgroundImage: 'linear-gradient(-45deg, $primary, $secondary)',
  color: '$whiteText',
  padding: '0 $3',
  mb: 0,
})

export const StyledLandingHeroMeta = styled('div', {
  position: 'absolute',
  bottom: '30px',
})

export const StyledLandingHeroBoldText = styled('b', {
  display: 'inline-block',
  color: '$whiteText',
  fontStyle: 'italic',
  marginBottom: '$6',
})
