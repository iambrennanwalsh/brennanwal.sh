import styled from '@emotion/styled'
import {Theme, Gradient} from '@/styles/abstract'
import {darken} from 'polished'

export const StyledPill = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 4px;
	border: 0;
	box-shadow: box-shadow;
	color: ${Theme.pallete.whiter};
	cursor: pointer;
	font-size: 13px;
	height: 25px;
	overflow: hidden;
	background: ${Theme.pallete.grayer};
	color: ${Theme.pallete.whiter};
	border-bottom: 3px solid ${darken(0.1, Theme.pallete.secondary)};

	& > * {
		padding: 6px 8px;
		line-height: 1;
	}

	& > i {
		${Gradient(Theme.pallete.secondary)};
		color: ${Theme.pallete.whiter};
		box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.3), -2px 0px 3px rgba(0, 0, 0, 0.3);
		font-size: 12px;
	}
`
