import styled from '@emotion/styled'
import {Theme} from '@/styles/abstract'
import {StyledImage} from '@/components/image'
import {StyledContent} from '@/components/content'
import {StyledGroup} from '@/components/group'
import {StyledH3} from '@/components/heading'
import {css} from '@emotion/react'

export const CardCss = css`
	border-bottom: 2px solid ${Theme.pallete['secondary']};
	border-radius: 4px;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	margin-bottom: 1.25rem;
	overflow: hidden;

	& ${StyledImage} {
		display: block;
		line-height: 0;
	}

	& ${StyledH3} {
		padding: 12.5px 20px;
		box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.3);
		background-color: ${Theme.pallete.dark};
		position: relative;
		font-size: 1.125rem;
		color: ${Theme.pallete.whiter};
		overflow: hidden;
		text-align: left;
		line-height: 1.5rem;
		transition: 0.3s;
	}

	& ${StyledContent} {
		padding: 16px 20px;
		color: ${Theme.pallete.grayer};
		background: ${Theme.pallete['whiter']};
	}

	& > ${StyledGroup} {
		justify-content: space-around;
		padding-bottom: 16px;
		padding-left: 1.25rem;
		padding-right: 1.25rem;
		background: ${Theme.pallete['whiter']};
	}

	&.alternate {
		position: relative;

		& ${StyledH3} {
			bottom: 0;
			left: 0;
			right: 0;
			position: absolute;
			line-height: 1.35em;
			background-color: rgba(49, 54, 54, 0.8);
			transition: 0.5s;
			font-size: 14px;
			color: ${Theme.pallete.whiter};
			border-bottom: 0px;
		}

		&:hover {
			& ${StyledH3} {
				background-color: rgba(49, 54, 54, 0.95);
			}
		}
	}

	&.me {
		position: relative;
		margin-top: 65px;
		overflow: initial;
		border-radius: 6px;

		& ${StyledImage} {
			border-radius: 100%;
			position: absolute;
			top: -65px;
			width: 115px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 1;
			border: 5px solid ${Theme.pallete.dark};
		}

		& ${StyledH3} {
			padding-top: 65px;
			border-radius: 4px 4px 0px 0px;
			text-transform: uppercase;
		}

		& > ${StyledGroup} {
			margin-left: auto;
			margin-right: auto;
		}
	}
`

export const StyledCard = styled.div`
	${CardCss}
`
