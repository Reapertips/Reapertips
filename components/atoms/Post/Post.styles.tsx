import styled from 'styled-components';
import { transparentize } from 'polished';

import { white } from '@utils/colors';

export const StyledPost = styled.a`
	position: relative;
	display: flex;
	border: 1px solid ${transparentize(0.9, white)};
	border-radius: 3px;
	aspect-ratio: 1/1;
	width: 100%;
	transition: transform 0.2s;

	&:hover {
		transform: scale(1.05);
	}

	img {
		width: 100%;
		object-fit: contain;
	}
`;
