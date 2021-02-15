import styled from '@emotion/styled'

export const StyledMap = styled.div`
	height: 400px;
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
	border-radius: 4px;
	margin-bottom: 1.25rem;
	z-index: -1;

	.leaflet-marker-icon {
		transform: translate3d(440px, 195px, 0px) scale(0.85) !important;
	}
`
