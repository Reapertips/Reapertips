import styled from 'styled-components';

import { IButtonCore } from './ButtonCore';

import { white, button__blue, button__red } from '@utils/colors';
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
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const ImageWrapper = styled.div`
	display: flex;
	margin-left: 0.75rem;
`;

export const Title = styled.h1`
	font-size: ${(props) => (props.color === 'red' ? '1.5rem' : '1.2rem')};
	font-weight: 700;
`;

export const Subtitle = styled.p`
	margin-top: 0.25rem;
	font-size: 0.875rem;
`;
