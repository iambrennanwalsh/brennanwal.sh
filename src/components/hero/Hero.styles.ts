import styled from '@emotion/styled'
import {Mq, Theme} from '@/styles/abstract'
import {StyledH1} from '@/components/heading'
import {StyledIcon} from '@/components/icon'
import {StyledContent} from '../content'

export const StyledHero = styled.div`
	position: relative;
	overflow-x: hidden;
	height: 500px;
	box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.5) inset;
	background-size: cover;

	& .effect {
		height: 100%;
		position: absolute;
		left: 0;
		pointer-events: none;
	}

	& p {
		font-style: italic;
		background: linear-gradient(
			to right,
			${Theme.pallete.primary},
			${Theme.pallete.secondary}
		);
		color: ${Theme.pallete.whiter};
		margin-bottom: 0;
	}

	& ${StyledH1} {
		font-size: 1.75rem;
		line-height: 50px;
		text-transform: uppercase;
		color: ${Theme.pallete.whiter};
		margin-bottom: 10px;
	}

	& ${StyledContent} {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100%;
		text-align: center;
		animation-delay: 1s;
	}

	&.home {
		background: linear-gradient(
				to top,
				rgb(10, 10, 10),
				rgba(10, 10, 10, 0.4),
				rgba(10, 10, 10, 0)
			),
			url('/images/slides/slider.jpg') no-repeat center right;

		${Mq.from('tablet')} {
			background: linear-gradient(
					to right,
					rgb(10, 10, 10),
					rgba(10, 10, 10, 0.8),
					rgba(10, 10, 10, 0)
				),
				url('/images/slides/slider.jpg') no-repeat center right;
			background-size: cover;
		}

		& .effect {
			background: url('/images/slides/clouds.png');
			width: 4000px;
			display: none;
			${Mq.from('tablet')} {
				display: block;
			}
		}

		& .meta {
			position: absolute;
			bottom: 30px;

			& b {
				display: inline-block;
				color: ${Theme.pallete.light};
				font-style: italic;
				margin-bottom: 1rem;
			}

			& ${StyledIcon} {
				font-size: 24px;
			}
		}
	}
`
