import styled from '@emotion/styled'
import {Theme} from '@/styles/abstract'
import {StyledIcon} from '@/components/icon'

export const StyledPill = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 4px;
	border: 0;
	cursor: pointer;
	text-transform: uppercase;
	overflow: hidden;
	background: ${Theme.pallete.dark};
	color: ${Theme.pallete.whiter};
	font-size: 12px;
	text-transform: uppercase;
	overflow: hidden;
	background: hsl(180, 4.9%, 20.2%);
	color: hsl(0, 0%, 100%);

	${StyledIcon} {
		padding: 7px 0px 5px;
		line-height: 1;
	}

	.links {
		display: flex;
		justify-content: space-between;
		padding: 3px 10px 0px;

		a {
			color: #fff;
			margin-right: 5px;

			&:hover {
				color: ${Theme.pallete.secondary};
			}

			&:last-child {
				margin-right: 0px;
			}
		}
	}

	& > i {
		background: ${Theme.pallete.dark};
		color: ${Theme.pallete.secondary};
		font-size: 14px;
	}
`
