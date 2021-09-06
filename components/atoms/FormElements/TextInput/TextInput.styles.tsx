import styled from 'styled-components';

import { ITextInput } from '.';

import { white } from '@utils/colors';
import { sizes } from '@utils/mediaQueries';

export const FormInputGroup = styled.div<Partial<ITextInput>>`
	display: ${(props) => (props.hidden ? 'none' : 'flex')};
	flex-direction: column;
`;

export const FormLabel = styled.label<Partial<ITextInput>>`
	color: ${white};
	font-size: ${(props) => (props.label?.size === 'default' ? '1rem' : '1.5rem')};
	font-weight: 700;
	margin-bottom: 0.5rem;

	span {
		font-style: italic;
		opacity: 0.4;
		font-weight: 400;
	}
`;

export const FormDescription = styled.p`
	color: ${white};
	opacity: 0.6;
	font-size: 0.75rem;
	margin-bottom: 0.75rem;
`;

export const StyledFormInput = styled.input<Partial<ITextInput>>`
	width: ${sizes.xs};
	max-width: 100%;
	min-height: ${(props) => (props.textarea !== undefined ? '160px' : 'inherit')};
	max-height: 400px;
	border-radius: 0.5rem;
	border: 0;
	padding: 1rem;
	font-size: 0.875rem;
	background: #394256;
	color: ${white};
	resize: vertical;

	&:hover {
		cursor: pointer;
	}

	&:disabled {
		cursor: not-allowed;
	}

	&:focus {
		outline: none;
	}

	&::placeholder {
		color: ${white};
		opacity: 0.4;
	}
`;
