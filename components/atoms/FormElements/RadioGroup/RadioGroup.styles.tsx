import styled from 'styled-components';
import { transparentize } from 'polished';

import { white } from '@utils/colors';

export const Title = styled.h1`
	font-size: 1rem;
	color: ${white};
	margin-bottom: 0.5rem;
`;

export const Option = styled.div`
	color: ${transparentize(0.4, white)};
	width: fit-content;

	&:not(:last-child) {
		margin-bottom: 0.5rem;
	}

	input,
	label {
		&:hover {
			cursor: pointer;
		}
	}

	input {
		margin-right: 0.5rem;
	}
`;
