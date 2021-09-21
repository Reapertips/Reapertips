import styled from 'styled-components';

import { sizes } from '@utils/mediaQueries';

export const StyledButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: ${sizes.xxs};

	& > *:not(:last-child) {
		margin-bottom: 1rem;
	}

	& .button {
		margin: 0 auto;
	}
`;
