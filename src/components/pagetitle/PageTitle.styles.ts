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
		letter-spacing: 2px;
		padding-bottom: 0.5rem;
		padding-top: 0.5rem;
		text-transform: uppercase;
		${Mq.until('tablet')} {
			font-size: 1rem;
		}
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
