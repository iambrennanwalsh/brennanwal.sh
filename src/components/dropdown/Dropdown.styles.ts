import {Theme, Mq} from '@/styles/abstract'
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import {Anchor} from '@/components'
import {StyledIcon} from '@/components/icon'

const itemStyles = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1.25rem;
	border-bottom: 1px solid #444;
	background: ${Theme.pallete.darker};
	color: ${Theme.pallete.light};
	font-size: 14px;
	box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.3);
`

export const StyledDropdownItem = styled(Anchor)`
	${itemStyles}
`

export const StyledDropdownLabel = styled.div`
	${itemStyles}
	border-bottom: 0;
	padding: 0.5rem 1.25rem;
	border-radius: 4px;
	background: ${Theme.pallete.dark};
	color: ${Theme.pallete.whiter};
	z-index: 3;
	position: relative;

	${StyledIcon} {
		color: ${Theme.pallete.secondary};
		transition: 0.2s;
	}
`

export const StyledDropdown = styled.div`
	width: 100%;
	${Mq.from('phablet')} {
		width: 49%;
	}
	${Mq.from('desktop')} {
		width: 32%;
	}
	margin-bottom: 1.25rem;
	position: relative;

	&.active ${StyledDropdownLabel} {
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}

	.dropdown-items > ${StyledDropdownItem}:last-of-type {
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	.dropdown-items {
		position: absolute;
		top: 100%;
		z-index: 2;
		transition: 0.2s;
		transform: scaleY(0);
		opacity: 0;
		transform-origin: top;
		width: 100%;
	}

	&.active .dropdown-items {
		transform: scaleY(1);
		opacity: 1;
	}

	&.active ${StyledIcon} {
		transform: rotate(180deg);
	}
`
