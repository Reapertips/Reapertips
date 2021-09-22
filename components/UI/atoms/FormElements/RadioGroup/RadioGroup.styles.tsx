import styled from 'styled-components';
import { transparentize } from 'polished';

export const Title = styled.h1`
	font-size: 1rem;
	color: ${(props) => props.theme.dark.greyscale[100]};
	margin-bottom: 0.5rem;
`;

export const Option = styled.div`
	color: ${(props) => transparentize(0.4, props.theme.dark.greyscale[100])};
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
