import styled from 'styled-components';
import { transparentize } from 'polished';

import { sizes } from '@utils/mediaQueries';

export const StyledPost = styled.a`
	position: relative;
	display: flex;
	border: 1px solid ${(props) => transparentize(0.9, props.theme.dark.greyscale[100])};
	border-radius: 3px;
	aspect-ratio: 1/1;
	width: 200px;
	max-width: ${sizes.xxs};
	border-radius: 3px;
	overflow: hidden;
	transition: transform 0.2s;

	&:after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}

	&:hover {
		transform: scale(1.05);
	}

	img {
		width: 100%;
		object-fit: contain;
	}
`;
