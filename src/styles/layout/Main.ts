import {css} from '@emotion/react'
import {Mq} from '@/styles/abstract'

export const Main = css`
	#main {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1.25rem;

		${Mq.from('tablet')} {
			display: flex;
			padding: 1.25rem;
		}

		${Mq.from('widescreen')} {
			max-width: 1240px;
		}
	}
`
