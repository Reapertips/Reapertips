import styled from 'styled-components';
import { transparentize } from 'polished';
import { white, button__blue } from '@utils/colors';

export const FormInputGroup = styled.div`
	display: flex;
	flex-direction: column;

	&:not(:last-child) {
		margin-bottom: 2rem;
	}
`;

interface IFormLabel {
	size: 'default' | 'big';
}

export const FormLabel = styled.label<IFormLabel>`
	color: ${white};
	font-size: ${(props) => (props.size === 'default' ? '1rem' : '1.5rem')};
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

interface IStyledFormInput {
	isTextarea: boolean;
}

export const StyledFormInput = styled.input<IStyledFormInput>`
	width: 100%;
	min-height: ${(props) => (props.isTextarea ? '160px' : 'inherit')};
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

	&:focus {
		outline: none;
	}

	&::placeholder {
		color: ${white};
		opacity: 0.4;
	}

	&[type='submit'] {
		background: ${button__blue};
		color: ${white};
		font-size: 1rem;
		font-weight: 600;
		margin-top: 5rem;
	}
`;
