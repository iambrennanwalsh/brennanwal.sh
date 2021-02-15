import {Animation, Fonts, Generic, Helpers} from './base'
import {Main, Content, Header, Sidebar, Footer} from './layout'
import {css} from '@emotion/react'

export const Styles = css`
	${Fonts}
	${Generic}
	${Animation}
  ${Helpers}
  ${Main}
  ${Content}
  ${Header}
  ${Sidebar}
  ${Footer}
`
