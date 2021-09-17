import styled from '@emotion/styled'
import {Theme} from '@/styles/abstract'
import {StyledImage} from '@/components/image'
import {StyledContent} from '@/components/content'
import {StyledGrid} from '@/components/grid'
import {StyledGroup} from '@/components/group'
import {StyledH3} from '@/components/heading'
import {css} from '@emotion/react'
import {StyledSeperator} from '../seperator'

export const CardCss = css`
	border-radius: 6px;
	box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.3);
	margin-bottom: 1.25rem;
	overflow: hidden;
	border-bottom: 0;

	& ${StyledImage} {
		display: block;
		line-height: 0;
		box-shadow: 0px 0 3px 2px rgb(0 0 0 / 30%);
	}

	& ${StyledH3} {
		padding: 15px 20px 12.5px 20px;
		background-color: ${Theme.pallete.dark};
		position: relative;
		font-size: 1rem;
		color: ${Theme.pallete.whiter};
		overflow: hidden;
		text-align: left;
		line-height: 1.5rem;
		transition: 0.3s;
		z-index: -1;
	}

	& ${StyledContent} {
		padding: 0 1.25rem;
		color: #999;
		background: ${Theme.pallete['dark']};
	}

	& > ${StyledGroup} {
		justify-content: space-around;
		padding: 1rem 1.25rem 0.7rem;
		background: ${Theme.pallete['dark']};
	}

	&.blog ${StyledSeperator} {
		display: none;
	}

	&.alternate {
		position: relative;

		& ${StyledH3} {
			transition: 0.5s;
			font-size: 14px;
			border-bottom: 0px;
			z-index: -1;
		}

		&:hover ${StyledH3} {
			background: ${Theme.pallete['darker']};
		}
	}

	&.me {
		position: relative;
		margin-top: 65px;
		overflow: initial;
		border-radius: 6px;
		padding-bottom: 1px;
		background: ${Theme.pallete.dark};

		& ${StyledImage} {
			border-radius: 100%;
			position: absolute;
			top: -65px;
			width: 115px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 2;
			border: 5px solid ${Theme.pallete.darker};
		}

		& ${StyledH3} {
			padding-top: 65px;
			border-radius: 4px 4px 0px 0px;
			text-transform: uppercase;
			z-index: 1;
		}

		& > ${StyledGroup} {
			margin-left: auto;
			margin-right: auto;
		}
		${StyledSeperator} {
			background-color: ${Theme.pallete.grayer};
		}
	}
`

export const StyledCard = styled.div`
	${CardCss}
`
