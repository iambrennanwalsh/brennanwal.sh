import styled from '@emotion/styled'
import {Mq, Theme} from '@/styles/abstract'
import {darken} from 'polished'

export const StyledTabsTab = styled.div`
	flex: 1;
	font-size: 10px;
	text-transform: uppercase;
	color: ${Theme.pallete.primary};
	padding: 15px 0;
	text-align: center;
	line-height: 1;
	transition: 0.2s;
	background: ${Theme.pallete.lighter};
	box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1) inset;
	cursor: pointer;

	${Mq.from('tablet')} {
		background: ${Theme.pallete.white};
	}

	&:hover {
		background: ${darken(0.05, Theme.pallete.lighter)};

		${Mq.from('tablet')} {
			background: ${darken(0.05, Theme.pallete.white)};
		}
	}

	&.active {
		background: ${Theme.pallete.white};
		box-shadow: unset;

		${Mq.from('tablet')} {
			background: ${Theme.pallete.whiter};
		}

		&:hover {
			background: ${Theme.pallete.white};

			${Mq.from('tablet')} {
				background: ${Theme.pallete.whiter};
			}
		}
	}
`

export const StyledTabs = styled.div`
	display: flex;
	margin: 0;
`
