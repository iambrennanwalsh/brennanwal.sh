import {styled} from '@/styles'

export const StyledMap = styled('div', {
  height: '400px',
  boxShadow: '$md',
  borderRadius: '$round',
  marginBottom: '$6',

  '& .leaflet-popup': {
    bottom: '30px !important',
  },

  '& .leaflet-bottom.leaflet-right': {
    display: 'none',
  },
})
