import styled from 'styled-components';
import { request } from 'graphql-request';

import { Post } from '@components/atoms/Post';
import { Navbar } from '@components/atoms/Navbar';
import { TopMessage } from '@components/atoms/TopMessage';
import Layout from '@components/templates/Layout';
import Container from '@components/templates/Container';

import { cms, getDownloadsPage } from '@utils/queries';
import type { IDownloads } from '@utils/types';

const Gallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
	gap: 1rem;
	width: 100%;
`;

const StyledPost = styled(Post)`
	aspect-ratio: 1/1;
`;

const Downloads = ({ pageTitle, pageDescription, seo, topMessageIcon, topMessageText, posts }: IDownloads) => {
	return (
		<Layout pageTitle={pageTitle} pageDescription={pageDescription} ogImage={seo.ogImage.url}>
			<Navbar pageTitle={pageTitle} />
			<Container>
				<TopMessage icon={topMessageIcon} text={topMessageText} />

				<Gallery>
					{posts.map((post) => (
						<StyledPost key={post.id} {...post} />
					))}
				</Gallery>
			</Container>
		</Layout>
	);
};

export default Downloads;

export const getStaticProps = async () => {
	const data = (await request(cms, getDownloadsPage)).downloads[0];

	return {
		props: data
	};
};
