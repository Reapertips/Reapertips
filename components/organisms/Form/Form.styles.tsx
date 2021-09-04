import styled from 'styled-components';

import { SubmitButton } from '@components/atoms/FormElements/SubmitButton';

import { sizes } from '@utils/mediaQueries';

export const StyledForm = styled.form`
	width: 100%;
	max-width: ${sizes.xs};
`;

export const StyledSubmitButton = styled(SubmitButton)`
	margin-top: 5rem;
`;
