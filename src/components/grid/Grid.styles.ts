import styled from '@emotion/styled'
import {Mq} from '@/styles/abstract'
import {css} from '@emotion/react'

export const GridCss = css`
	margin-bottom: 1.25rem;

	& > div {
		${Mq.between('tablet', 'desktop')} {
			column-count: 2;
		}

		${Mq.from('desktop')} {
			column-count: 3;
		}

		div {
			break-inside: avoid;
		}
	}

	&.portfolio > div {
		${Mq.from('tablet')} {
			column-count: 2;
		}
	}
`

export const StyledGrid = styled.div`
	${GridCss}
`
