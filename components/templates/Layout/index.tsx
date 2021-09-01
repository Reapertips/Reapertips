import { ReactNode } from 'react';
import SEO from '@templates/SEO';
import { StyledLayout } from './Layout.styles';
import { IPage } from '@utils/types';

interface ILayout extends IPage {
	children: ReactNode;
}

const Layout = ({ pageTitle, pageDescription, seo, children }: ILayout) => {
	return (
		<StyledLayout>
			<SEO pageTitle={pageTitle} pageDescription={pageDescription} seo={seo} />
			{children}
		</StyledLayout>
	);
};

export default Layout;
