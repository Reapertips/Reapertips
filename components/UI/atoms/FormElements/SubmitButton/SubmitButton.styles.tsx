import styled from 'styled-components';

import { sizes } from '@utils/mediaQueries';

export const StyledSubmitButton = styled.input`
	width: 100%;
	max-width: ${sizes.xs};
	padding: 1rem;
	border: 0;
	border-radius: 0.5rem;
	font-size: 1rem;
	font-weight: 600;
	background: ${(props) => props.theme.dark.blue[400]};
	color: ${(props) => props.theme.dark.greyscale[100]};
	-webkit-appearance: none;

	&:hover {
		cursor: pointer;
	}

	&:disabled {
		cursor: not-allowed;
		background: grey;
	}
`;
