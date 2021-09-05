import styled from 'styled-components';
import { transparentize } from 'polished';

import { white } from '@utils/colors';
import { sizes } from '@utils/mediaQueries';

export const StyledPost = styled.a`
	position: relative;
	display: flex;
	border: 1px solid ${transparentize(0.9, white)};
	border-radius: 3px;
	aspect-ratio: 1/1;
	width: 200px;
	max-width: ${sizes.xxs};
	border-radius: 3px;
	overflow: hidden;
	transition: transform 0.2s;

	&:hover {
		transform: scale(1.05);
	}

	img {
		width: 100%;
		object-fit: contain;
	}
`;
