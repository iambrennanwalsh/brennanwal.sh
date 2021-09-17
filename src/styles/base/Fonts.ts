import {css} from '@emotion/react'

export const Fonts = css`
	// Maven Pro 400/700 (Google Font)
	@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;700&display=swap');

	// Icons
	@font-face {
		font-family: 'icons';
		src: url('/fonts/icons.eot');
		src: url('/fonts/icons.eot') format('embedded-opentype'),
			url('/fonts/icons.woff2') format('woff2'),
			url('/fonts/icons.woff') format('woff'),
			url('/fonts/icons.ttf') format('truetype'),
			url('/fonts/icons.svg') format('svg');
		font-weight: normal;
		font-style: normal;
	}
`
