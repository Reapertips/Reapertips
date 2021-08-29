import styled from 'styled-components';
import { white } from '@utils/colors';

export const Title = styled.h1`
	font-size: 1rem;
	color: ${white};
	margin-bottom: 0.5rem;
`;

export const Option = styled.div`
	&:not(:last-child) {
		margin-bottom: 0.5rem;
	}
`;

export const Label = styled.label`
	color: ${white};
	opacity: 0.6;
`;
