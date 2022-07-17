import { ReactNode } from 'react';
import Link from 'next/link';

import SEO from '@components/utils/SEO';

import { StyledLayout } from './Layout.styles';
import { IPage } from '@utils/types';
import styled from 'styled-components';

interface ILayout extends IPage {
	children: ReactNode;
	preview: boolean;
}

const PreviewBanner = styled.div`
	background: white;
	padding: 0.5rem;
	text-align: center;

	a {
		text-decoration: underline;
		font-weight: bold;
	}
`;

const Layout = (props: ILayout) => {
	const { pageTitle, pageDescription, seo, preview, children } = props;

	return (
		<>
			{preview && (
				<PreviewBanner>
					This page is a preview. <Link href={`/api/exit-preview`}>Click here</Link> to exit preview mode.
				</PreviewBanner>
			)}
			<StyledLayout>
				<SEO pageTitle={pageTitle} pageDescription={pageDescription} seo={seo} />
				{children}
			</StyledLayout>
		</>
	);
};

export default Layout;
