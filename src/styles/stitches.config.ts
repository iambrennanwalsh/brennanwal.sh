import type {CSS} from '@stitches/react'
import {createStitches, PropertyValue} from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: 'hsl(138, 61.2%, 38.4%)',
      secondary: 'hsl(88.3, 41.3%, 50.6%)',
      tertiary: 'hsl(256.6, 74.5%, 67.6%)',
      danger: 'hsl(355, 94.7%, 62.7%)',
      warning: 'hsl(47.1, 75.6%, 43.3%)',
      success: 'hsl(138, 61.2%, 38.4%)',
      info: 'hsl(190.4, 53%, 57.5%)',
      whiter: 'hsl(0, 0%, 100%)',
      white: 'hsl(0, 0%, 93.3%)',
      lighter: 'hsl(0, 0%, 86.7%)',
      light: 'hsl(0, 0%, 60%)',
      gray: 'hsl(0, 0%, 46.7%)',
      grayer: 'hsl(0, 0%, 40%)',
      dark: 'hsl(180, 8%, 20%)',
      darker: 'hsl(180, 7%, 16%)',
      black: 'hsl(180, 8%, 12%)',
      blacker: 'hsl(180, 7%, 8%)',

      responsiveBg: '$white',
      bg: '$whiter',
      darkBg: '$dark',
      darkBgHover: '$darker',

      responsiveDivider: '$lighter',
      divider: '$white',

      link: '$primary',
      linkHover: '$secondary',

      text: '$grayer',
      grayText: '$light',
      whiteText: '$whiter',
      blackText: '$blacker',
    },
    fonts: {
      body: `'Nunito Sans', sans-serif`,
      code: `'Inconsolata', monospace`,
      icon: 'Icons',
    },
    fontWeights: {
      body: '400',
      bold: '700',
    },
    fontSizes: {
      xs: '10px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',

      body: '$md',
      h1: '$2xl',
      h2: '$lg',
      h3: '$lg',
      h4: '$body',
      h5: '$body',
      h6: '$body',
    },
    lineHeights: {
      sm: '24px',
      md: '30px',
      lg: '50px',

      body: '$md',
      display: '$lg',
    },
    letterSpacings: {},
    sizes: {
      phablet: '520px',
      tablet: '768px',
      desktop: '992px',
      widescreen: '1216px',
      fullhd: '1408px',
      ultrawide: '1920px',
    },
    space: {
      0: '0',
      1: '2px',
      2: '4px',
      3: '8px',
      4: '12px',
      5: '16px',
      6: '20px',
      7: '24px',
      8: '32px',
      9: '48px',
      10: '64px',

      block: '$5',
    },
    zIndices: {
      bottom: '-1',
      auto: 0,
      high: 1,
      higher: 10,
      highest: 100,
    },
    shadows: {
      box: '0px -1px 3px rgb(0 0 0 / 10%) inset',
      color: '0deg 0% 50%',
      sm: `1px 1px 3px hsl(0deg 0% 0% / 0.7)`,
      md: `
        1px 1px 3px hsl(0deg 0% 0% / 0.7),
        2px 2px 6px hsl(0deg 0% 0% / 0.5)`,
      lg: `
        1px 2px 2px hsl(0deg 0% 0% / 0.2),
        2px 4px 4px hsl(0deg 0% 0% / 0.2),
        4px 8px 8px hsl(0deg 0% 0% / 0.2),
        8px 16px 16px hsl(0deg 0% 0% / 0.2),
        16px 32px 32px hsl(0deg 0% 0% / 0.2)`,
    },
    radii: {
      round: '4px',
      circle: '50%',
    },
    transitions: {
      fast: '.2s',
      med: '.5s',
      slow: '1s',
    },
    borderWidths: {
      sm: '1px',
      md: '2px',
    },
    borderStyles: {
      solid: 'solid',
      dashed: 'dashed',
    },
  },
  media: {
    phablet: '(min-width: 520px)',
    untilPhablet: '(max-width: 519px)',
    tablet: '(min-width: 768px)',
    untilTablet: '(max-width: 767px)',
    desktop: '(min-width: 992px)',
    untilDesktop: '(max-width: 991px)',
    widescreen: '(min-width: 1216px)',
    untilWidescreen: '(max-width: 1215px)',
    fullhd: '(min-width: 1408px)',
    untilFullhd: '(max-width: 1407px)',
    ultrawide: '(min-width: 1920px)',
    untilUltrawide: '(max-width: 1919px)',
  },
  utils: {
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'padding'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'padding'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'margin'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'margin'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    stretch: () => ({
      '@untilTablet': {
        width: 'calc(100% + $space$9)',
        marginLeft: '-$7',
        maxWidth: 'unset',
      },
    }),
  },
})

export type Css = CSS<typeof config>
