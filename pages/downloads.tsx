import { Popup, IPopup } from '@components/molecules/Popup';
import { IPost } from '@components/atoms/Post';
import { Navbar } from '@components/organisms/Navbar';
import { Gallery } from '@components/organisms/Gallery';
import Layout from '@components/templates/Layout';
import Container from '@components/templates/Container';

import { client, getDownloadsPage } from '@utils/queries';
import type { IPage } from '@utils/types';

export interface IDownloadsPage extends IPage {
	popup: IPopup;
	posts: IPost[];
}

const Downloads = (props: IDownloadsPage) => {
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
};

export default Downloads;

export const getStaticProps = async () => {
	const data = (await client.request(getDownloadsPage)).downloadPages[0];

	return {
		props: data
	};
};
