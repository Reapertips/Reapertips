import styled from 'styled-components';
import { transparentize } from 'polished';

import Container from '@components/templates/Container';

import { black, blue, white } from '@utils/colors';
import { devices } from '@utils/mediaQueries';

export const StyledNavbar = styled.nav`
	position: relative;
	padding: 2rem 1.25rem;
	background: ${blue};
	background-image: linear-gradient(to top, ${transparentize(0.73, black)}, transparent);
	color: ${white};
	margin-bottom: 2.5rem;
`;

export const StyledLink = styled.a`
	display: block;

	&:hover {
		cursor: pointer;
	}
`;

export const BackArrow = styled.img`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 2rem;
	width: 2rem;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.6;
	}
`;

export const StyledContainer = styled(Container)`
	display: flex;
	justify-content: center;
`;

export const Logo = styled.a`
	display: flex;
`;

export const PageTitle = styled.h1`
	font-family: 'Ubuntu', sans-serif;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;

	@media ${devices.xs} {
		flex-direction: row;
		gap: 1.25rem;
	}

	h1 {
		font-size: 2rem;
	}
`;
