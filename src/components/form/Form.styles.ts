import styled from '@emotion/styled'
import {StyledSeperator} from '@/components/seperator'

export const StyledForm = styled.form`
	.field {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 1.25rem;
	}

	.input {
		&.invalid {
			background: #f7c4b0;
		}
	}

	button {
		float: right;
		margin-bottom: 1.25rem;

		&.submission {
			width: 120px;
		}
	}

	${StyledSeperator} {
		display: none;
		margin-bottom: 1.25rem;
	}
`
