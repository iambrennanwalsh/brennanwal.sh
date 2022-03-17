import { globalCss } from '@/styles/stitches.config'

export const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'icons',
    src: `url('/fonts/icons.eot') format('embedded-opentype'),
          url('/fonts/icons.woff2') format('woff2'),
          url('/fonts/icons.woff') format('woff'),
          url('/fonts/icons.ttf') format('truetype'),
          url('/fonts/icons.svg') format('svg')`
  },
  html: {
    boxSizing: 'border-box',
    background: '$responsiveBg',
    color: '$text',
    fontFamily: '$body',
    fontSize: '$body',
    lineHeight: '$body',
    fontWeight: '$body',
    textSizeAdjust: '100%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    fontSmooth: 'always',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',

    '@tablet': {
      background: `url('/images/interface/background.png')`
    }
  },

  '*, *::before, *::after': {
    boxSizing: 'inherit',
    margin: 0,
    padding: 0
  },

  '*:focus': {
    outline: '0'
  },

  'h1, h2, h3, h4, h5, h6': {
    lineHeight: '$md',
    fontWeight: '300'
  },

  h1: {
    fontSize: '$h1'
  },
  h2: {
    fontSize: '$h2'
  },
  h3: {
    fontSize: '$h3'
  },
  h4: {
    fontSize: '$h4'
  },
  h5: {
    fontSize: '$h5'
  },
  h6: {
    fontSize: '$h6'
  },

  a: {
    color: '$link',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: '$fast',

    '&:hover': {
      color: '$linkHover'
    }
  },

  hr: {
    border: 0,
    height: '1px'
  },

  label: {
    color: '$grayText'
  },

  'input, textarea, select': {
    width: '100%',
    px: '$4',
    py: '$3',
    fontSize: '$sm',
    color: '$text',
    border: 0,
    borderBottomStyle: '$solid',
    borderBottomWidth: '$md',
    borderBottomColor: '$lighter',
    borderRadius: '$round',
    backgroundColor: '$whiter',
    fontFamily: '$body',

    '@tablet': {
      backgroundColor: 'unset',
      width: '90%',
      borderRadius: '0px',
      borderBottomWidth: '1px',

      '&:hover:placeholder, &:active:placeholder, &:focus:placeholder': {
        color: '$text'
      }
    }
  },

  button: {
    border: '0',
    outline: '0',
    cursor: 'pointer',
    transition: '$fast',
    fontFamily: '$body',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '$round',
    width: '100%',
    '&:active': {
      transform: 'translateY(3px)',
      transition: 0
    }
  },

  textarea: {
    minHeight: '100px'
  },

  'input::placeholder, textarea::placeholder': {
    color: '$grayText',
    '@tablet': {
      color: '#777'
    }
  },

  select: {
    appearance: 'none',
    background: `$whiter, url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2552557CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')`,
    backgroundRepeat: 'no-repeat, repeat',
    backgroundPosition: 'right 1rem top 50%, 0 0',
    backgroundSize: '0.65em auto, 100%'
  },

  img: {
    height: 'auto',
    maxWidth: '100%'
  },

  'code:not([class*="language"])': {
    color: '$secondary',
    borderBottomWidth: '$sm',
    borderBottomStyle: '$dashed',
    borderBottomColor: '$secondary'
  },

  'pre, code': {
    fontFamily: '$code'
  },

  ul: {
    listStylePosition: 'inside',
    listStyleType: 'none',
    marginLeft: 0
  },

  '[data-component="code"]': {
    position: 'relative',
    fontSize: '$sm',
    lineHeight: '$sm'
  },

  '[data-component="code"] > span': {
    position: 'absolute',
    zIndex: '1',
    color: '#ffffff',
    right: '0',
    top: '0',
    width: '50px',
    height: '25px',
    borderBottomRightRadius: '3px',
    borderBottomLeftRadius: '3px',
    borderBottom: '0',
    fontSize: '14px',
    boxShadow: 'unset',
    background: '$primary',
    textAlign: 'center',
    lineHeight: '24px'
  },

  '[data-component="code"] > pre': {
    textAlign: 'left',
    p: '0.5em',
    overflow: 'scroll',
    width: 'calc(100% + 3rem)',
    ml: '-1.5rem',
    boxShadow: '0px 0px 7px 7px rgba(0, 0, 0, 0.3) inset',
    maxWidth: 'unset'
  },

  '[data-component="code"] .token-line': {
    display: 'table-row'
  },

  '[data-component="code"] .token-line > span:first-child': {
    display: 'table-cell',
    textAlign: 'right',
    pr: '1em',
    userSelect: 'none',
    opacity: '0.5',
    paddingLeft: '0.5rem'
  },

  '[data-component="code"] .token-line span': {
    display: 'table-cell'
  }
})
