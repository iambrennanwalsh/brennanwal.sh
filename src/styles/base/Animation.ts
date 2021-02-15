import {css} from '@emotion/react'

export const Animation = css`
	.animation {
		animation-duration: 0.5s;
		animation-timing-function: ease-in-out;
		animation-fill-mode: both;
		animation-direction: normal;

		&.in {
			animation-direction: normal;
		}

		&.out {
			animation-direction: reverse;
		}

		&.opaque {
			opacity: 0;
		}

		&.faster {
			animation-duration: 0.2s;
		}

		&.fast {
			animation-duration: 0.3s;
		}

		&.slow {
			animation-duration: 0.7s;
		}

		&.slower {
			animation-duration: 1s;
		}

		&.infinite {
			animation-iteration-count: infinite;
		}

		&.fade {
			animation-name: fade;
		}

		&.slide {
			animation-name: zoom;
			animation-timing-function: ease-out;
		}

		&.loadbar {
			animation-name: loadbar;
			animation-timing-function: ease-out;
			transform-origin: left;
		}

		&.home {
			animation-name: home;
			animation-duration: 200s;
			animation-timing-function: linear;
		}

		&.spin {
			animation-name: spin;
			animation-iteration-count: infinite;
		}
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes zoom {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes loadbar {
		0% {
			transform: scaleX(0);
		}
		100% {
			transform: scaleY(1);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes home {
		0% {
			left: 0;
		}
		100% {
			left: -4000px;
		}
	}

	@keyframes spinner {
		0% {
			transform: perspective(120px) rotateX(0deg) rotateY(0deg);
		}
		50% {
			transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
		}
		100% {
			transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
		}
	}

	.fade {
		&-enter {
			opacity: 0;

			&-active {
				opacity: 1;
				transition: 500ms;
			}
		}

		&-exit {
			opacity: 1;

			&-active {
				opacity: 0;
				transition: 500ms;
			}
		}
	}

	.toast {
		&-appear {
			opacity: 0;

			&-active {
				opacity: 1;
				transition: 0.35s;
			}
		}

		&-exit {
			opacity: 1;

			&-active {
				opacity: 0;
				transition: 0.35s;
			}
		}
	}
`
