import type { PrismTheme } from 'prism-react-renderer'

export interface Theme {
  bg: string
  base: string
  comment: string
  primary: string
  primarySubtle: string
  primaryMuted: string
  secondary: string
  secondarySubtle: string
  secondaryMuted: string
}

export const Themes: Record<string, Theme> = {
  sea: {
    bg: '#1D262F',
    base: '#d6e9ff', // uno1
    comment: '#444c55', // uno5
    primary: '#34febb', // duo1
    primarySubtle: '#32ae85', // duo2
    primaryMuted: '#42675a', // duo3
    secondary: '#88b4e7', // uno2
    secondarySubtle: '#5d8cc0', // uno3
    secondaryMuted: '#586f89' // uno4
  },
  space: {
    bg: '#24242e',
    base: '#bebeef',
    comment: '#49495a',
    primary: '#fe7734',
    primarySubtle: '#b06845',
    primaryMuted: '#644c40',
    secondary: '#8686cb',
    secondarySubtle: '#7272a1',
    secondaryMuted: '#5b5b7b'
  }
}

export interface ThemeProps {
  theme: Theme
}
export type ThemeComponent = (theme: Theme) => PrismTheme

export const Theme: ThemeComponent = theme => ({
  plain: {
    background: theme.bg,
    color: theme.base
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
      style: {
        color: theme.secondaryMuted
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ['tag', 'operator', 'number'],
      style: {
        color: theme.primarySubtle
      }
    },
    {
      types: ['property', 'function'],
      style: {
        color: theme.primary
      }
    },
    {
      types: ['tag-id', 'selector', 'atrule-id'],
      style: {
        color: theme.secondarySubtle
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: theme.primaryMuted
      }
    },
    {
      types: [
        'boolean',
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'placeholder',
        'variable'
      ],
      style: {
        color: theme.secondary
      }
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through'
      }
    },
    {
      types: ['inserted'],
      style: {
        borderBottom: '1px dotted ' + theme.secondary,
        textDecorationLine: 'underline'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['important'],
      style: {
        color: theme.primary
      }
    },
    {
      types: ['class-name-definition', 'function-definition'],
      style: {
        color: theme.primary,
        fontWeight: 'bold'
      }
    }
  ]
})
