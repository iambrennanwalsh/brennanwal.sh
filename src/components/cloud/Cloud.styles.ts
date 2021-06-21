import {css} from '@emotion/react'
import styled from '@emotion/styled'
import {Theme} from '@/styles/abstract'

export const StyledCloud = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 1rem 1.25rem;
`

const Size = ({size}: {size: number}) => css`
	font-size: ${size}rem;
	color: ${size > 1.25 ? Theme.pallete.secondary : Theme.pallete.lighter};
`

export const StyledCloudNode = styled.span`
	${Size};
	padding: 0.15rem;
	&:hover {
		color: ${Theme.pallete.primary};
	}
`
