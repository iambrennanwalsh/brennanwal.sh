import { Component, Props } from '@/'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
// @ts-ignore
import Prism from 'prism-react-renderer/prism'
import {
  StyledCode,
  StyledLanguageTag,
  StyledLine,
  StyledLineContent,
  StyledLineNo,
  StyledPre,
  Theme,
  Themes
} from '.'
;(typeof global !== 'undefined' ? global : window).Prism = Prism
require('prismjs/components/prism-php')

export type CodeProps = Props<typeof StyledPre>
export type CodeComponent = Component<CodeProps>

export const Code: CodeComponent = ({ children, className, ...props }) => {
  const language = className?.replace(/language-/, '')

  return (
    <StyledCode data-component="code" {...props}>
      <StyledLanguageTag>{language}</StyledLanguageTag>
      <Highlight
        {...defaultProps}
        theme={Theme(Themes.sea)}
        code={children as string}
        language={language as Language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <StyledPre className={className} style={style}>
            {tokens.map((line, i) => (
              <StyledLine key={i} {...getLineProps({ line, key: i })}>
                <StyledLineNo>{i + 1}</StyledLineNo>
                <StyledLineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </StyledLineContent>
              </StyledLine>
            ))}
          </StyledPre>
        )}
      </Highlight>
    </StyledCode>
  )
}

Code.toString = () => '[data-component="code"]'
