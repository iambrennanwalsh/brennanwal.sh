import styled from '@emotion/styled'
import {Theme, Gradient, Mq, Stretch} from '@/styles/abstract'
import {css} from '@emotion/react'

export const BoxCss = css`
	position: relative;

	${Mq.from('tablet')} {
		margin-bottom: 1rem;
		overflow: hidden;
		border-radius: ${Theme.styles.borderRadius};
		border-bottom: 2px solid ${Theme.pallete.secondary};
		box-shadow: ${Theme.styles.boxShadow};
		background: ${Theme.pallete.whiter};
	}

	${Mq.until('tablet')} {
		${Stretch}
	}

	& > h2 {
		${Gradient('primary')}
		padding: 10px 0px 10px 1.5rem;
		color: ${Theme.pallete.whiter};
		overflow: hidden;

		& > a {
			color: ${Theme.pallete.primary};
			position: absolute;
			right: 0;
			top: 0;
			background: ${Theme.pallete.white};
			padding: 17px 24px 17px 27px;
			display: flex;
			box-shadow: -1px -3px 3px rgba(0, 0, 0, 0.14);
			${Mq.from('tablet')} {
				background: ${Theme.pallete.whiter};
			}
		}
	}
`

export const StyledBox = styled.div`
	${BoxCss}
`
