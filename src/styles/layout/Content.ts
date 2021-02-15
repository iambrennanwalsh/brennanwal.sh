import {css} from '@emotion/react'
import {Mq} from '@/styles/abstract'

export const Content = css`
	#content {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		padding: 0 1.25rem;
		height: 100%;

		${Mq.from('tablet')} {
			width: 65%;
			padding: 0;
		}

		${Mq.from('desktop')} {
			width: 70%;
		}

		${Mq.from('widescreen')} {
			width: 75%;
		}
	}
`
