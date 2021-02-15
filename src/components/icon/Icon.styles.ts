import styled from '@emotion/styled'
import {css} from '@emotion/react'
import {Icons} from '@/Params'

const Icon = (type: string) =>
	type == 'spinner'
		? css`
				animation: spin 2s infinite linear;
				display: inline-block;
				content: '\\${Icons[type]}';
		  `
		: css`
				content: '\\${Icons[type]}';
		  `

const dynamicStyle = ({size, type}: App.IconProps) =>
	css`
		font-size: ${size == 'lg' ? '1.5rem' : size == 'md' ? '1.2rem' : '1rem'};
		:before {
			${type && Icon(type)}
		}
	`

export const StyledIcon = styled.i`
	font-family: 'icons';
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	${dynamicStyle}
`
