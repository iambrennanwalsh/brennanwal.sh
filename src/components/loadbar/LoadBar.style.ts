import {Theme, Gradient} from '@/styles/abstract'
import styled from '@emotion/styled'

export const StyledLoadBar = styled.div`
	width: 100%;
	height: 2px;
	background: ${Theme.pallete.dark};
	position: sticky;
	top: 0px;
	z-index: 100;
`

export const StyledProgress = styled.div`
	height: 2px;
	width: '100%';
	${Gradient('primary')};
`
