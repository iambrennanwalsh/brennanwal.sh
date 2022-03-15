import { styled } from '@/styles'

export const StyledCode = styled('div', {
  position: 'relative',
  fontSize: '$sm',
  lineHeight: '$sm'
})

export const StyledPre = styled('pre', {
  textAlign: 'left',
  p: '0.5em',
  overflow: 'scroll',
  width: 'calc(100% + 3rem)',
  ml: '-1.5rem',
  boxShadow: '0px 0px 7px 7px rgba(0, 0, 0, 0.3) inset',
  maxWidth: 'unset'
})

export const StyledLine = styled('div', {
  display: 'table-row'
})

export const StyledLineNo = styled('span', {
  display: 'table-cell',
  textAlign: 'right',
  pr: '1em',
  userSelect: 'none',
  opacity: '0.5',
  paddingLeft: '0.5rem'
})

export const StyledLineContent = styled('span', {
  display: 'table-cell'
})

export const StyledLanguageTag = styled('span', {
  position: 'absolute',
  zIndex: '1',
  color: '#fff',
  right: 0,
  top: 0,
  width: '50px',
  height: '25px',
  borderBottomRightRadius: '3px',
  borderBottomLeftRadius: '3px',
  borderBottom: '0px',
  fontSize: '14px',
  boxShadow: 'unset',
  background: '$primary',
  textAlign: 'center',
  lineHeight: '24px'
})
