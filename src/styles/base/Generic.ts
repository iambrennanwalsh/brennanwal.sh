import {Theme, Mq} from '@/styles/abstract'
import {css} from '@emotion/react'

export const Generic = css`
	html {
		box-sizing: border-box;
		background: ${Theme.pallete.white};
		color: ${Theme.pallete.grayer};
		font-family: ${Theme.styles.fontFamily};
		font-size: ${Theme.sizes.base};
		line-height: ${Theme.sizes.xl};
		text-size-adjust: 100%;
		overflow-y: scroll;
		overflow-x: hidden;
		-webkit-font-smoothing: antialiased;

		${Mq.from('tablet')} {
			background: url('/images/interface/background.png');
		}
	}

	#app {
		position: relative;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
		margin: 0;
		padding: 0;
		font-weight: normal;
	}

	*:focus {
		outline: none;
	}

	h1 {
		font-weight: bold;
		color: ${Theme.pallete.primary};
		font-size: ${Theme.sizes.lg};
	}

	h2,
	h3 {
		font-size: ${Theme.sizes.md};
	}

	h4,
	h5,
	h6 {
		font-size: ${Theme.sizes.base};
	}

	p:not(:last-child) {
		margin-bottom: ${Theme.space['1.25']};
	}

	a {
		color: ${Theme.pallete.primary};
		transition: 0.2s;
		cursor: pointer;
		text-decoration: none;

		&:hover {
			color: ${Theme.pallete.secondary};
		}
	}
	hr {
		background-color: transparent;
		border: 0;
		height: 1px;
		margin: 1.25rem 0 0;

		${Mq.from('tablet')} {
			background-color: ${Theme.pallete.white};
		}
	}

	label {
		width: 100%;
		font-size: ${Theme.sizes.small};
		color: ${Theme.pallete.gray};
		margin-bottom: 5px;

		${Mq.from('tablet')} {
			width: 25%;
			text-align: right;
			padding-right: ${Theme.space[1]};
		}
	}

	input,
	textarea,
	select {
		width: 100%;
		padding: 8px 10px;
		font-size: ${Theme.sizes.small};
		color: ${Theme.pallete.grayer};
		border: 0;
		border-bottom: 2px solid ${Theme.pallete.lighter};
		border-radius: ${Theme.styles.borderRadius};
		background-color: ${Theme.pallete.whiter};
		font-family: ${Theme.styles.fontFamily};

		${Mq.from('tablet')} {
			width: 75%;
			background-color: ${Theme.pallete.white};
		}
	}
	textarea {
		min-height: 100px;
	}

	input::placeholder,
	textarea::placeholder {
		color: ${Theme.pallete.grayer};
	}

	select {
		appearance: none;
		background: ${Theme.pallete.whiter},
			url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2552557CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
		background-repeat: no-repeat, repeat;
		background-position: right 1rem top 50%, 0 0;
		background-size: 0.65em auto, 100%;
	}

	img {
		height: auto;
		max-width: 100%;
	}

	code:not([class*='language']) {
		color: ${Theme.pallete.secondary};
		border-bottom: 1px dashed ${Theme.pallete.secondary};
	}

	.codeblock {
		position: relative;
	}
`
