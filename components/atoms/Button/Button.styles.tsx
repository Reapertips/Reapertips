import styled from 'styled-components';
import { white } from '@utils/colors';

interface Props {
	color: string;
	mode: 'primary' | 'secondary';
}

export const StyledButton = styled.button<Props>`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 1rem 1.25rem;
	border-radius: 12px;
	background-color: ${(props) => props.color};
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

	h1 {
		font-size: 1.5rem;
	}

	p {
		margin-top: 0.5rem;
		opacity: 0.6;
	}
`;
