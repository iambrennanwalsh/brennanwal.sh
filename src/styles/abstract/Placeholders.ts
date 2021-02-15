import {Mq} from '.'
import {css} from '@emotion/react'

export const Stretch = css`
	${Mq.until('tablet')} {
		width: calc(100% + 3rem);
		margin-left: -1.5rem;
		max-width: unset;
	}
`

export const ClearFix = css`
	content: ' ';
	display: table;
	clear: both;
`
