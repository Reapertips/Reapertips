import Link from 'next/link';
import { StyledNavbar, StyledContainer, StyledLink, Logo, Wrapper, BackArrow } from './Navbar.styles';

interface INavbar {
	pageTitle: string;
}

export const Navbar = ({ pageTitle }: INavbar) => {
	return (
		<StyledNavbar>
			<Link href="/" passHref>
				<StyledLink>
					<BackArrow src="/icons/nav-back.svg" alt="White left arrow to go back to homepage" />
				</StyledLink>
			</Link>

			<StyledContainer>
				<Wrapper>
					<Logo src="/logo/logo-white.svg" alt="Reapertips white logo" />
					<h1>{pageTitle}</h1>
				</Wrapper>
			</StyledContainer>
		</StyledNavbar>
	);
};
