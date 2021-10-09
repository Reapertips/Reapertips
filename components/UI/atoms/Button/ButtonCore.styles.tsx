import styled from 'styled-components';

import { IButtonCore } from './ButtonCore';

import { theme } from '@lib/theme';
import { sizes } from '@utils/mediaQueries';

const getButtonColor = (color: 'red' | 'blue') => {
	const { blue, red } = theme.colors;
	return color === 'blue' ? blue[400] : red[400];
};

export const StyledButton = styled.button<Partial<IButtonCore>>`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 1rem 1.25rem;
	border-radius: 12px;
	background-color: ${(props) => (props.color === 'blue' ? props.theme.colors.blue[400] : props.theme.colors.red[400])};
	background: ${(props) => props.mode === 'secondary' && 'none'};
	border: 0;
	box-shadow: ${(props) =>
		props.mode === 'primary' ? 'none' : props.color && `inset 0 0 0 2px ${getButtonColor(props.color)}`};
	width: 100%;
	max-width: ${sizes.xxs};
	color: ${(props) =>
		props.mode === 'primary' ? props.theme.colors.greyscale[100] : props.color && getButtonColor(props.color)};
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
