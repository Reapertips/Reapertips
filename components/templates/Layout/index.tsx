import { ReactNode } from 'react';
import SEO from '@templates/SEO';
import { StyledLayout } from './Layout.styles';

interface Props {
	pageTitle: string;
	pageDescription: string;
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ pageTitle, pageDescription, children }) => {
	return (
		<StyledLayout>
			<SEO pageTitle={pageTitle} pageDescription={pageDescription} />
			{children}
		</StyledLayout>
	);
};

export default Layout;
