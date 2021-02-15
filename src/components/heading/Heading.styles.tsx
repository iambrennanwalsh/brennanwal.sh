import styled from '@emotion/styled'

export const StyledH1 = styled.h1``
export const StyledH2 = styled.h2``
export const StyledH3 = styled.h3``
export const StyledH4 = styled.h4``
export const StyledH5 = styled.h5``
export const StyledH6 = styled.h6``

const Headings = {
	1: StyledH1,
	2: StyledH2,
	3: StyledH3,
	4: StyledH4,
	5: StyledH5,
	6: StyledH6
}

export const getStyledHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
	return Headings[level]
}
