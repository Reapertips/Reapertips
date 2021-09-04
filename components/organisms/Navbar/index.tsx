import Image from 'next/image';
import Link from 'next/link';
import { StyledNavbar, StyledContainer, StyledLink, Logo, PageTitle, Wrapper, BackArrow } from './Navbar.styles';

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
							<Image src="/logo/logo-white.svg" alt="Reapertips white logo" width={56} height={64} priority={true} />
						</Logo>
					</Link>
					<PageTitle>{pageTitle}</PageTitle>
				</Wrapper>
			</StyledContainer>
		</StyledNavbar>
	);
};
