import styled from '@emotion/styled'
import {Mq, Theme, Gradient} from '@/styles/abstract'
import {StyledCloud} from '@/components/cloud'

export const StyledFooter = styled.footer`
	width: 100%;
	background: ${Theme.pallete.white};

	.footer {
		&__bottom,
		&__ig-header {
			padding: 10px;
			color: ${Theme.pallete.whiter};
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			${Gradient('primary')};
		}

		&__ig-header-icon {
			margin-right: 20px;
			vertical-align: -3px;
			font-size: 20px;
		}

		&__ig-header-arrow {
			margin-left: 20px;
			vertical-align: -3px;
			font-size: 20px;
		}

		&__ig-spacer {
			margin-right: 3px;
		}

		&__widgets {
			padding: 2rem;
			max-width: 1240px;
			margin: 0 auto 1rem;

			${Mq.from('tablet')} {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				padding: 2.5rem 0;
				margin-bottom: 0;
			}
		}

		&__summary {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			margin-bottom: 1rem;

			${Mq.from('tablet')} {
				align-items: flex-start;
				text-align: left;
				width: 33.3%;
				margin-bottom: 0;
			}
		}

		&__list-header {
			font-weight: bold;
		}

		&__portrait {
			margin-bottom: 30px;
			width: 161px;
			border: 4px solid rgb(238, 238, 238);
			box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.3);
		}

		&__rule {
			background: ${Theme.pallete.lighter};
			margin-bottom: 1.25rem;

			${Mq.from('tablet')} {
				display: none;
			}
		}

		&__logo {
			width: 150px;
			margin-bottom: 1rem;
		}

		&__nav {
			display: flex;
			justify-content: space-evenly;

			${Mq.from('tablet')} {
				width: 50%;
			}

			&-list {
				width: 200px;
				&.cloud ${StyledCloud} {
					color: #555;
					padding: unset;
					justify-content: left;
				}
			}
		}

		&__links {
			list-style-position: inside;
			list-style-type: none;
			margin-left: 0;
		}
	}
`
