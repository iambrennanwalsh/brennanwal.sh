import styled from '@emotion/styled'
import {Mq, Theme} from '@/styles/abstract'
import {css} from '@emotion/react'

export const ContentCss = css`
	padding: 1.25rem 1.25rem 0;

	&:last-of-type {
		//padding-bottom: 1.25rem;
	}

	&:last-of-type .codeblock {
		//margin-bottom: -1.25rem;
	}

	& img {
		width: 100%;
		margin-bottom: 1rem;
		border-radius: ${Theme.styles.borderRadius};
		box-shadow: ${Theme.styles.boxShadow};

		${Mq.from('tablet')} {
			margin-left: 1rem;
			float: right;
			width: 30%;
			max-width: 300px;
		}
	}
	&.nosep hr,
	& .codeblock ~ hr {
		display: none;
	}

	& h3 {
		color: ${Theme.pallete.primary};
		margin-bottom: 1rem;
		border-bottom: 1px solid ${Theme.pallete.lighter};
		padding-bottom: 10px;
		line-height: 1;

		${Mq.from('tablet')} {
			border: 0;
			padding: 0;
		}

		& ~ p {
			${Mq.from('desktop')} {
				padding-left: 1rem;
			}
		}
	}

	.tab & {
		& img {
			max-width: 50px;
			height: auto;
			margin-left: 2rem;
			margin-right: 1rem;
			box-shadow: unset;
			float: right;

			${Mq.from('tablet')} {
				max-width: 75px;
			}

			& ~ h3 {
				${Mq.until('tablet')} {
					width: 70%;
				}
			}
		}
	}
	&.withForm hr {
		clear: both;
	}
`

export const StyledContent = styled.div`
	${ContentCss}
`
