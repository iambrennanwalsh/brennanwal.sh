import styled from '@emotion/styled'
import {Mq} from '@/styles/abstract'

export const StyledContent = styled.section`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding: 0 1.25rem;
	height: 100%;
	overflow-x: hidden;

	${Mq.from('tablet')} {
		width: 65%;
		padding: 0;
	}

	${Mq.from('desktop')} {
		width: 70%;
	}

	${Mq.from('widescreen')} {
		width: 75%;
	}
`
