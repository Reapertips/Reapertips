import styled from 'styled-components';
import { blue, white } from '@utils/colors';

export const StyledTopMessage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	background: ${blue};
	color: ${white};
	width: 100%;
	border-radius: 12px;
	padding: 0.5rem 1rem;
	margin-bottom: 1.5rem;
`;
