import styled from '@emotion/styled'
import {Theme, Stretch, Mq} from '@/styles/abstract'
import {css} from '@emotion/react'
import {StyledSeperator} from '@/components/seperator'

export const SlideCss = css`
	align-items: center;
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
	display: flex;
	font-size: 20px;
	height: 400px;
	justify-content: center;
	padding: 1.5rem;
	text-align: center;
	text-transform: uppercase;

	${Mq.from('tablet')} {
		border-radius: 4px;
		margin-bottom: 1.25rem;
	}

	${Mq.until('tablet')} {
		${Stretch}
	}

	& .quote {
		color: ${Theme.pallete.whiter};
		max-width: 600px;
	}

	& .source {
		background: linear-gradient(
			to right,
			${Theme.pallete.primary},
			${Theme.pallete.secondary}
		);
		color: ${Theme.pallete.blacker};
		display: inline;
		padding: 2px 5px;
		box-shadow: 0px 0px 3px rgb(0, 0, 0);
	}

	& ${StyledSeperator} {
		display: none;
	}

	&.steve-jobs {
		background: url('/images/slides/hiking.jpg');
		background-position-x: 10%;
		background-position-y: 100%;
	}

	&.los-angeles {
		background: url('/images/slides/la.jpg');
		background-position-x: 50%;
		background-position-y: 50%;

		& .source {
			color: ${Theme.pallete.whiter};
		}
	}
`

export const StyledSlide = styled.div`
	${SlideCss}
`
