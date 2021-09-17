import styled from '@emotion/styled'
import {Mq} from '@/styles/abstract'
import {css} from '@emotion/react'
import {StyledCard} from '@/components/card'
import {StyledContent} from '@/components/content'

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

	& ${StyledCard} ${StyledContent} {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
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
