import styled from 'styled-components';
import { white } from '@utils/colors';

export const StyledProfile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	color: ${white};
	margin: 3rem 0 2.5rem 0;
`;

export const ProfilePicture = styled.div`
	img {
		height: 150px;
		border-radius: 100%;
	}
`;

export const Username = styled.a`
	display: flex;
	align-items: center;
	font-size: 2rem;
	font-family: 'Ubuntu', sans-serif;
	font-weight: 700;

	p {
		display: inline;
		margin-left: 0.5rem;
	}
`;
