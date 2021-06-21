// Button Styles (client/src/component/button)

import styled from '@emotion/styled'
import {css} from '@emotion/react'
import {lighten} from 'polished'
import {Theme, Gradient} from '@/styles/abstract'
import {StyledImage} from '@/components/image'

const color = ({color}: App.ButtonProps) =>
	css`
		box-shadow: 0 3px 0 0 ${lighten(-0.15, Theme.pallete[color!])},
			0 4px 4px -1px rgba(0, 0, 0, 0.6), 0 4px 6px 1px rgba(0, 0, 0, 0.3),
			0 1px 2px 1px rgba(0, 0, 0, 0) inset,
			0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;

		color: #fff;
		${Gradient(Theme.pallete[color!])};
		&:hover {
			box-shadow: 0 3px 0 0 ${lighten(-0.15, Theme.pallete[color!])},
				0 6px 4px -1px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.5),
				0 1px 2px 1px rgba(0, 0, 0, 0) inset,
				0 18px 32px -2px rgba(255, 255, 255, 0.14) inset;
		}
		&:active {
			box-shadow: 0 0px 0 0 ${lighten(-0.2, Theme.pallete[color!])},
				0 3px 0 0 rgba(0, 0, 0, 0), 0 4px 16px rgba(0, 0, 0, 0),
				0 1px 2px 1px rgba(0, 0, 0, 0.5) inset,
				0 -18px 32px -2px rgba(255, 255, 255, 0.1) inset;

			color: ${lighten(-0.15, Theme.pallete[color!])};
		}
	`

const disabled = ({disabled}: App.ButtonProps) =>
	disabled &&
	css`
		cursor: not-allowed;
		opacity: 0.8;
		&:active {
			opacity: 0.6;
		}
	`

const size = ({size}: App.ButtonProps) =>
	css`
		font-size: ${size == 'lg' ? '1.25rem' : size == 'md' ? '1.125rem' : '14px'};
		padding: ${size == 'lg'
			? '1.875rem'
			: size == 'md'
			? '1.25rem'
			: '0 1.125rem'};
		height: ${size == 'lg' ? '57px' : size == 'md' ? '47px' : '37px'};
	`

export const StyledButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	border-radius: ${Theme.styles.borderRadius};
	border: 0;
	outline: 0;
	cursor: pointer;
	transition: 0.3s;
	font-family: 'Maven Pro';
	margin-bottom: 1.25rem;
	&:active {
		transform: translateY(3px);
		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
		transition: 0s;
	}
	${disabled}
	${size}
	${color}

	&.freelance {
		font-size: 16px;
		height: 47px;
		color: #fff;

		& ${StyledImage} {
			height: 28px;
			position: relative;
			top: 2px;
		}
	}
`
