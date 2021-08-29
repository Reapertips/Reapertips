import { ReactNode } from 'react';
import SEO from '@templates/SEO';
import { StyledLayout } from './Layout.styles';

interface Props {
	pageTitle: string;
	pageDescription: string;
	ogImage: string;
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ pageTitle, pageDescription, ogImage, children }) => {
	return (
		<StyledLayout>
			<SEO pageTitle={pageTitle} pageDescription={pageDescription} ogImage={ogImage} />
			{children}
		</StyledLayout>
	);
};

export default Layout;
