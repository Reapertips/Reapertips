import { Popup, IPopup } from '@components/UI/molecules/Popup';
import { IPost } from '@components/UI/atoms/Post';
import { Navbar } from '@components/UI/organisms/Navbar';
import { Gallery } from '@components/UI/organisms/Gallery';
import Layout from '@components/utils/Layout';
import Container from '@components/utils/Container';

import type { IPage } from '@utils/types';
import { getDownloadsPage } from '@lib/graphcms';

export interface IDownloadsPage extends IPage {
	popup: IPopup;
	posts: IPost[];
}

interface IProps {
	page: IDownloadsPage;
	preview: boolean;
}

export default function Downloads({ page, preview }: IProps) {
	const { pageTitle, popup, posts } = page;

	return (
		<Layout {...page} preview={preview}>
			<Navbar pageTitle={pageTitle} />
			<Container>
				<Popup icon={popup.icon} text={popup.text} />
				<Gallery posts={posts} />
			</Container>
		</Layout>
	);
}

export const getStaticProps = async ({ preview = false }) => {
	const page: IDownloadsPage = (await getDownloadsPage(preview)).downloadPages[0];

	return {
		props: {
			page,
			preview
		}
	};
};
