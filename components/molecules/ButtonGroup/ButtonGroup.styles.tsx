import styled from 'styled-components';

import { sizes } from '@utils/mediaQueries';

export const StyledButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	max-width: ${sizes.xxs};

	& .button {
		margin: 0 auto;
	}
`;
