import styled from '@emotion/styled'
import {Mq, Theme} from '@/styles/abstract'
import {css} from '@emotion/react'
import {StyledCard} from '@/components/card'
import {StyledContent} from '@/components/content'
import {StyledImage} from '@/components/image'
import {StyledH3} from '../heading'
import {StyledGroup} from '../group'

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

	${StyledContent} {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	&.blog {
		${StyledCard} {
			background-color: ${Theme.pallete.dark};

			${StyledGroup} {
				background: unset;
				padding-bottom: 1rem;
			}

			${StyledH3} {
				background: unset;
				z-index: unset;
			}

			${StyledImage} {
				display: inline;
				line-height: unset;
			}

			${StyledContent} {
				background: unset;
			}
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
