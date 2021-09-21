import styled from 'styled-components';

import { Post } from '@components/UI/atoms/Post';

import { sizes } from '@utils/mediaQueries';

export const StyledGallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
	gap: 0.75rem;
	width: 100%;
	max-width: ${sizes.md};
`;

export const StyledPost = styled(Post)`
	width: 100%;
`;
