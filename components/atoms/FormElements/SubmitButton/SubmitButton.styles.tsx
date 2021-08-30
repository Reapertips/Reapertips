import styled from 'styled-components';

import { white, button__blue } from '@utils/colors';

export const StyledSubmitButton = styled.input`
	width: 100%;
	margin-top: 5rem;
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
`;
