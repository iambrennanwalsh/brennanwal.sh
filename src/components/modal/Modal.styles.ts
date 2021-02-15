import styled from '@emotion/styled'
import {StyledImage} from '@/components/image'

export const StyledModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: fixed;
	z-index: 200;
	overflow: hidden;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.modal-enter {
		opacity: 0;
		&-active {
			opacity: 1;
			transition: 500ms;
		}
	}
	&.modal-exit {
		opacity: 1;
		&-active {
			opacity: 0;
			transition: 500ms;
		}
	}
`

export const StyledModalBackground = styled.div`
	background-color: rgba(0, 0, 0, 0.86);
	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
`

export const StyledModalContent = styled.div`
	background: hsl(180, 7.1%, 16.5%);
	padding: 10px;
	margin: 1rem;
	width: auto;
	max-width: 1000px;
	height: auto;
	position: relative;

	& ${StyledImage} {
		display: block;
		margin: auto;
		max-height: 600px;
		text-align: center;
	}
`
