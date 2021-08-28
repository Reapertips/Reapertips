import styled from 'styled-components';
import { white } from '@utils/colors';

export const StyledProfile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	color: ${white};
	margin: 3rem 0;

	img {
		height: 150px;
		border-radius: 100%;
	}
`;
