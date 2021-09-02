import styled from 'styled-components';

import { white, button__blue } from '@utils/colors';

export const StyledSubmitButton = styled.input`
	min-width: 560px;
	max-width: 100%;
	padding: 1rem;
	border: 0;
	border-radius: 0.5rem;
	font-size: 1rem;
	font-weight: 600;
	background: ${button__blue};
	color: ${white};

	&:hover {
		cursor: pointer;
	}

	&:disabled {
		cursor: not-allowed;
		background: grey;
	}
`;
