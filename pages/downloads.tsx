import { Popup, IPopup } from '@components/UI/molecules/Popup';
import { IPost } from '@components/UI/atoms/Post';
import { Navbar } from '@components/UI/organisms/Navbar';
import { Gallery } from '@components/UI/organisms/Gallery';
import Layout from '@components/utils/Layout';
import Container from '@components/utils/Container';

import { client, getDownloadsPage } from '@utils/queries';
import type { IPage } from '@utils/types';

export interface IDownloadsPage extends IPage {
	popup: IPopup;
	posts: IPost[];
}

export default function Downloads(props: IDownloadsPage) {
	const { pageTitle, popup, posts } = props;

	return (
		<Layout {...props}>
			<Navbar pageTitle={pageTitle} />
			<Container>
				<Popup icon={popup.icon} text={popup.text} />
				<Gallery posts={posts} />
			</Container>
		</Layout>
	);
}

export const getStaticProps = async () => {
	const data = (await client.request(getDownloadsPage)).downloadPages[0];

	return {
		props: data
	};
};
