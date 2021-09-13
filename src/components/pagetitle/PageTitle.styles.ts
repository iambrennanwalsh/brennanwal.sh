import {Mq, Theme, Stretch, Gradient} from '@/styles/abstract'
import styled from '@emotion/styled'
import {StyledImage} from '@/components/image/Image.styles'
import {StyledH1} from '@/components/heading/Heading.styles'
import {StyledContent} from '@/components/content/Content.styles'
import {StyledSeperator} from '@/components/seperator/Seperator.styles'
import {css} from '@emotion/react'

export const PageTitleCss = css`
	& > div {
		border-radius: ${Theme.styles.borderRadius};
		border-bottom: 3px solid ${Theme.pallete.primary};
		box-shadow: ${Theme.styles.boxShadow};
		margin-bottom: 1rem;
		overflow: hidden;
		text-align: center;

		${Mq.until('tablet')} {
			margin: 1rem 0;
		}
	}

	& > ${StyledImage} {
		margin-bottom: 1rem;
		display: block;
		box-shadow: ${Theme.styles.boxShadow};
		${Stretch}

		${Mq.from('tablet')} {
			border-radius: ${Theme.styles.borderRadius};
		}
	}

	& ${StyledH1} {
		color: ${Theme.pallete.whiter};
		padding-bottom: 0.5rem;
		padding-top: 0.5rem;
		font-weight: 100;
		${Gradient('primary')}
	}

	& ${StyledContent} {
		background: ${Theme.pallete.whiter};
		padding: 1rem 1.25rem !important;

		& ${StyledSeperator} {
			display: none;
		}
	}
`

export const StyledPageTitle = styled.div`
	${PageTitleCss}
`

export const StyledAltPageTitle = styled.div`
	& > div {
		margin: 1.5rem 0 1.25rem;
		padding: 0 1.25rem 1.25rem;
		border-bottom: 1px solid #ddd;

		${Mq.from('tablet')} {
			border-bottom: unset;
		}

		& div {
			line-height: 1.75;
			padding-left: 1rem;
			color: #777;

			${Mq.from('tablet')} {
				padding-left: unset;
				color: #aaa;
			}
		}
	}
	& ${StyledH1} {
		font-weight: 100;
		margin-bottom: 0.5rem;
		font-size: 1.5rem;
		text-transform: uppercase;
		color: #5aa61c;

		${Mq.from('tablet')} {
			color: #fff;
		}
	}
`
