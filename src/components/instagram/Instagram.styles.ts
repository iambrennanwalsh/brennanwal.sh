import styled from '@emotion/styled'
import {Mq} from '@/styles/abstract'

export const StyledInstagram = styled.div`
	display: grid;
	grid-template-columns: repeat(var(--columns), 1fr);
	grid-auto-rows: var(--row-size);
	margin-bottom: 1rem;
	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.6);
	--content-width: 100vw;
	--gutter: 0px;
	--columns: 5;
	--row-size: calc(
		(var(--content-width) - (var(--gutter) * (var(--columns) - 1))) / var(--columns)
	);

	${Mq.from('tablet')} {
		--columns: 10;
	}
	& > div {
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
	}
`
