import styled from 'styled-components';
import { white, button__blue, button__red } from '@utils/colors';
import { IButtonCore } from './ButtonCore';

export const StyledButton = styled.button<Partial<IButtonCore>>`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 1rem 1.25rem;
	border-radius: 12px;
	background-color: ${(props) => (props.color === 'blue' ? button__blue : button__red)};
	background: ${(props) => props.mode === 'secondary' && 'none'};
	border: 0;
	width: 400px;
	max-width: 100%;
	color: ${white};
	transition: transform 0.2s;

	&:hover {
		transform: scale(1.05);
		cursor: pointer;
	}

	div {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	h1 {
		font-size: ${(props) => (props.color === 'red' ? '1.5rem' : '1.25rem')};
	}

	p {
		margin-top: 0.25rem;
		opacity: 0.6;
		font-size: 0.875rem;
	}
`;
