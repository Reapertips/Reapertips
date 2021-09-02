import styled from 'styled-components';

import { white, button__blue } from '@utils/colors';
import { sizes } from '@utils/mediaQueries';

export const StyledSubmitButton = styled.input`
	min-width: ${sizes.xs};
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
