import {Theme} from '@/styles/abstract'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import {Anchor, Group} from '@/components'

const LinkStyles = css`
	color: ${Theme.pallete.whiter};
	min-width: 2.25em;
	font-size: 1em;
	align-items: center;
	justify-content: center;
	margin: 0.25rem;
	font-weight: bold;
	border-radius: 4px;
	display: inline-flex;
	height: 2.25em;
	transition: 0.3s;
`

export const StyledPaginationArrow = styled(Anchor)`
	background: ${Theme.pallete.secondary};
	${LinkStyles}

	&:hover {
		color: ${Theme.pallete.dark};
	}
`

export const StyledPaginationLink = styled(Anchor)`
	border: 2px solid ${Theme.pallete.primary};
	background: ${Theme.pallete.primary};
	${LinkStyles};

	&.active,
	&:hover {
		background: ${Theme.pallete.darker};
		color: ${Theme.pallete.whiter};
	}
`

export const StyledPagination = styled(Group)`
	justify-content: center;
	margin-bottom: 1.25rem;
`
