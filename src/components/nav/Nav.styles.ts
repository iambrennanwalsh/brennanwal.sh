import styled from '@emotion/styled'
import {Theme, Mq} from '@/styles/abstract'
import {StyledImage} from '@/components/image'
import {Anchor} from '@/components'
import {css} from '@emotion/react'

export const StyledNavLink = styled(Anchor)`
	display: flex;
	align-items: center;
	padding: 0 1.25rem;
	color: ${Theme.pallete['light']};
	cursor: pointer;
	font-size: 14px;
	max-height: 3.25rem;

	&:hover {
		color: ${Theme.pallete['secondary']};
		background: ${Theme.pallete['darker']};
	}
`

const activeMenu = ({active}: App.GroupProps & {active: boolean}) =>
	active &&
	css`
		transform: scaleY(1);
		opacity: 1;
	`

export const StyledNavMenu = styled.div`
	display: flex;
	transform-origin: top;
	transition: 0.35s;
	${Mq.until('tablet')} {
		flex-direction: column;
		box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3) inset,
			0px 3px 3px rgba(0, 0, 0, 0.3);
		background: ${Theme.pallete['dark']};
		position: absolute;
		top: 3.28rem;
		z-index: 1;
		width: 100%;
		overflow: hidden;
		max-height: 570px;
		transform: scaleY(0);
		${activeMenu}
	}

	& > ${StyledNavLink} {
		${Mq.until('tablet')} {
			padding: 1.25rem;
			border-bottom: 1px solid hsl(0, 0%, 23.5%);
		}

		&.active {
			color: ${Theme.pallete['secondary']};
			background: ${Theme.pallete['darker']};
		}
	}
`

export const StyledNavBurger = styled.div`
	align-items: center;
	background-color: ${Theme.pallete['darker']};
	color: ${Theme.pallete['light']};
	cursor: pointer;
	font-size: 16px;
	display: flex;
	justify-content: center;
	width: 3.25rem;

	${Mq.from('tablet')} {
		display: none;
	}
`

export const StyledNavLogo = styled(StyledNavLink)`
	display: flex;
	align-items: center;
	padding: 1.35rem 1.25rem 1.25rem;

	& > ${StyledImage} {
		height: 1rem;
	}
`

export const StyledNav = styled.div`
	background-color: ${Theme.pallete['dark']};
	box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3);

	& > div {
		margin: auto;
		position: relative;
		max-width: 1240px;
		align-items: stretch;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		max-height: 3.25rem;

		${Mq.from('tablet')} {
			padding: 0 1.25rem;
		}
	}
`
