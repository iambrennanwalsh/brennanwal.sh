import {css} from '@emotion/react'
import {Mq} from '@/styles/abstract'

export const Sidebar = css`
	#sidebar {
		margin-left: auto;
		margin-right: auto;
		display: none;

		${Mq.from('tablet')} {
			display: block;
			padding-left: 1.25rem;
			width: 35%;
			position: relative;
		}

		${Mq.from('desktop')} {
			width: 30%;
		}

		${Mq.from('widescreen')} {
			width: 25%;
		}
	}
`
