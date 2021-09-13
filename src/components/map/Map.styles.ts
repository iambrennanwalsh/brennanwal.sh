import styled from '@emotion/styled'

export const StyledMap = styled.div`
	height: 400px;
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
	border-radius: 4px;
	margin-bottom: 1.25rem;

	.leaflet-popup {
		bottom: 30px !important;
	}

	.leaflet-bottom.leaflet-right {
		display: none;
	}
`
