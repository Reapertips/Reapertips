import Image from 'next/image';
import Link from 'next/link';
import { StyledNavbar, StyledContainer, StyledLink, Logo, Wrapper, BackArrow } from './Navbar.styles';

export interface INavbar {
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
					<Link href="/" passHref>
						<Logo>
							<Image src="/logo/logo-white.svg" alt="Reapertips white logo" width={56} height={64} />
						</Logo>
					</Link>
					<h1>{pageTitle}</h1>
				</Wrapper>
			</StyledContainer>
		</StyledNavbar>
	);
};
