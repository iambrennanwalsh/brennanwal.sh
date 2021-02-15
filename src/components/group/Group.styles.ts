import styled from '@emotion/styled'

export const StyledGroup = styled.div`
	display: flex;
	justify-content: space-between;
	& > * {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}
	& > *:first-of-type {
		margin-left: 0;
	}
	& > *:last-of-type {
		margin-right: 0;
	}
`
