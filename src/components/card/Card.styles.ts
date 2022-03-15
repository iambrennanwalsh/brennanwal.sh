import { Content } from '@/components/content'
import { Group } from '@/components/group'
import { Image } from '@/components/image'
import { styled } from '@/styles'

export const StyledCardImage = styled(Image, {
  display: 'block',
  lineHeight: 0,
  boxShadow: '$sm'
})

export const StyledCardHeading = styled('h3', {
  lineHeight: '$sm',
  padding: '$5 $6 $4',
  fontSize: '1rem',
  color: '$whiteText',
  overflow: 'hidden',
  textAlign: 'left',
  transition: '$fast',
  zIndex: '$bottom',
  fontWeight: '$body'
})

export const StyledCardGroup = styled(Group, {
  justifyContent: 'space-around',
  padding: '$5 $6'
})

export const StyledCardContent = styled(Content, {
  color: '$grayText',
  py: '0',
  px: '$6',
  pb: '$5'
})

export const StyledCard = styled('div', {
  borderRadius: '$round',
  boxShadow: '$md',
  mb: '$6',
  backgroundColor: '$darkBg',
  overflow: 'hidden',

  variants: {
    sidebarMeCard: {
      true: {
        [`& ${StyledCardContent}`]: {
          pb: '$6'
        },
        [`& ${StyledCardHeading}`]: {
          pt: '$10'
        },
        [`& ${StyledCardImage}`]: {
          borderRadius: '$circle',
          position: 'absolute',
          top: '-65px',
          width: '115px',
          left: '50%',
          WebkitTransform: 'translateX(-50%)',
          MozTransform: 'translateX(-50%)',
          MsTransform: 'translateX(-50%)',
          transform: 'translateX(-50%)',
          zIndex: '$high',
          border: '5px solid hsl(180, 7%, 16%)'
        }
      }
    },
    panel: {
      true: {
        [`& ${StyledCardImage}`]: {
          textTransform: 'uppercase'
        }
      }
    }
  }
})
