import styled from 'styled-components';

import { Post } from '@components/atoms/Post';

import { sizes } from '@utils/mediaQueries';

export const StyledGallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
	gap: 1rem;
	width: 100%;
	max-width: ${sizes.md};
`;

export const StyledPost = styled(Post)`
	width: 100%;
`;
