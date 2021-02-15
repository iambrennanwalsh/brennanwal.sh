// Toast Styles (client/src/component/toast)

import styled from '@emotion/styled'
import {Theme, Mq, Gradient} from '@/styles/abstract'
import {Icon} from '@/components'

export const StyledToastIcon = styled(Icon)`
	display: inline-block;
	margin-right: 1.25rem;
`

export const StyledToastMessage = styled.span`
	display: inline-block;
`

export const StyledToast = styled.div`
	width: 100%;
	min-height: 60px;
	color: ${Theme.pallete.whiter};
	text-align: left;
	border-radius: ${Theme.styles.borderRadius};
	line-height: 1.25;
	padding: 0px 1.25rem 0px 1.75rem;
	display: flex;
	align-items: center;
	cursor: pointer;
	position: relative;
	margin-bottom: 1.25rem;
	pointer-events: all;
	font-size: 14px;
	box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
	${Mq.from('tablet')} {
		width: 300px;
	}

	&.info {
		${Gradient(Theme.pallete.info)};
	}

	&.warning {
		${Gradient(Theme.pallete.warning)};
		color: ${Theme.pallete.blacker};
	}

	&.danger {
		${Gradient(Theme.pallete.danger)}
	}

	&.success {
		${Gradient(Theme.pallete.success)};
	}
`

export const StyledToasts = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	padding: 1.25rem;
	position: fixed;
	top: 0px;
	width: 100%;
	height: 100vh;
	pointer-events: none;

	${Mq.from('tablet')} {
		align-items: flex-end;
	}
`
