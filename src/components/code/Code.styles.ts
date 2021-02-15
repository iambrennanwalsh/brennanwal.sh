import styled from '@emotion/styled'

export const StyledPre = styled.pre`
	text-align: left;
	padding: 0.5em;
	overflow: scroll;
	width: calc(100% + 3rem);
	margin-left: -1.5rem;
	box-shadow: 0px 0px 7px 7px rgba(0, 0, 0, 0.3) inset;
	max-width: unset;
`

export const StyledLine = styled.div`
	display: table-row;
`

export const StyledLineNo = styled.span`
	display: table-cell;
	text-align: right;
	padding-right: 1em;
	user-select: none;
	opacity: 0.5;
`

export const StyledLineContent = styled.span`
	display: table-cell;
`
