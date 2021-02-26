import styled from '@emotion/styled'
import {Mq} from '@/styles/abstract'

export const StyledMain = styled.main`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 1.25rem;

	${Mq.from('tablet')} {
		display: flex;
		padding: 1.25rem;
	}

	${Mq.from('widescreen')} {
		max-width: 1240px;
	}
`
