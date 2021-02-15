import {css} from '@emotion/react'
import {Theme, Mq} from '@/styles/abstract'

const colors = () => {
	const styles = {}
	for (var color in Theme.pallete) {
		;['color', 'background'].forEach(i => {
			styles[`.has-${i}-${color}`] = {}
			styles[`.has-${i}-${color}`][i] = `${Theme.pallete[color]} !important`
		})
	}
	return styles
}

export const Helpers = css`
	${colors()}

	.is-centered {
		text-align: center !important;
	}

	.has-bottom-margin {
		margin-bottom: ${Theme.sizes.lg} !important;
	}

	.has-top-margin {
		margin-top: ${Theme.sizes.lg} !important;
	}

	.has-right-margin {
		margin-right: ${Theme.sizes.lg} !important;
	}

	.has-left-margin {
		margin-left: ${Theme.sizes.lg} !important;
	}

	.has-padding {
		padding: ${Theme.sizes.lg} !important;
	}

	.is-pulled-left {
		float: left !important;
	}

	.is-pulled-right {
		float: right !important;
	}

	.is-uppercase {
		text-transform: uppercase !important;
	}

	.is-italic {
		font-style: italic !important;
	}

	.is-bold {
		font-weight: bold !important;
	}

	.is-hidden {
		display: none !important;
	}

	.is-flex {
		display: flex !important;
	}

	.has-flex-content-justified-evenly {
		justify-content: space-evenly;
	}

	.has-flex-content-justified-around {
		justify-content: space-around;
	}

	${Mq.until('phablet')} {
		.is-hidden-mobile {
			display: none !important;
		}
	}
`
