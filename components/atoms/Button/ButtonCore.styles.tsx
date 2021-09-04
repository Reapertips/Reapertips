import styled from 'styled-components';

import { white, button__blue, button__red } from '@utils/colors';
import { IButtonCore } from './ButtonCore';
import { sizes } from '@utils/mediaQueries';

const getButtonColor = (color: 'red' | 'blue') => (color === 'blue' ? button__blue : button__red);

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
	box-shadow: ${(props) =>
		props.mode === 'primary' ? 'none' : props.color && `inset 0 0 0 2px ${getButtonColor(props.color)}`};
	width: 100%;
	max-width: ${sizes.xxs};
	color: ${(props) => (props.mode === 'primary' ? white : props.color && getButtonColor(props.color))};
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
