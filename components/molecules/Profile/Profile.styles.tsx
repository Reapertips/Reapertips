import styled from 'styled-components';
import { white } from '@utils/colors';

export const StyledProfile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${white};
	margin: 3rem 0;
`;

export const ProfilePicture = styled.div`
	display: flex;

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
	margin-top: 0.5rem;

	p {
		display: inline;
		margin-left: 0.5rem;
		padding-bottom: 5px;
	}
`;
