import styled from 'styled-components';
import { transparentize } from 'polished';

import Container from '@components/templates/Container';

import { black, blue, white } from '@utils/colors';

export const StyledNavbar = styled.nav`
	position: relative;
	padding: 2rem;
	background: ${blue};
	background-image: linear-gradient(to top, ${transparentize(0.73, black)}, transparent);
	color: ${white};
	margin-bottom: 4rem;
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
`;

export const StyledContainer = styled(Container)`
	display: flex;
	justify-content: center;
`;

export const Logo = styled.img`
	width: 3.5rem;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1.25rem;
`;
