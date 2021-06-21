import styled from '@emotion/styled'
import {Theme} from '@/styles/abstract'

export const StyledPre = styled.pre`
	text-align: left;
	padding: 0.5em;
	overflow: scroll;
	width: calc(100% + 3rem);
	margin-left: -1.5rem;
	box-shadow: 0px 0px 7px 7px rgba(0, 0, 0, 0.3) inset;
	max-width: unset;
	position: relative;
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

export const StyledLanguageTag = styled.span`
	position: absolute;
	right: 0;
	top: 0;
	width: 50px;
	height: 25px;
	border-radius: 0px 0px 0px 3px;
	border-bottom: 0px;
	font-size: 14px;
	box-shadow: unset;
	background: ${Theme.pallete.primary};
	font-weight: bolder;
	text-align: center;
	line-height: 24px;
	font-family: 'Maven Pro';
`
