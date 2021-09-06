import styled from 'styled-components';

import { sizes } from '@utils/mediaQueries';

export const StyledForm = styled.form`
	width: 100%;
	max-width: ${sizes.xs};

	& > * {
		margin-bottom: 2rem;
	}

	& > *:last-child {
		margin-top: 2rem;
	}
`;
