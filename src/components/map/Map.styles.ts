import styled from '@emotion/styled'

export const StyledMap = styled.div`
	height: 400px;
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
	border-radius: 4px;
	margin-bottom: 1.25rem;
	z-index: -1;

	.leaflet-marker-icon {
		transform: translate3d(383px, 159px, 0px) scale(0.7) !important;
		height: 45px;
	}

	.leaflet-popup {
		transform: translate3d(396px, 163px, 0px) !important;
	}
`
