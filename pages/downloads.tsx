import styled from 'styled-components';
import { request } from 'graphql-request';

import Layout from '@components/templates/Layout';
import Container from '@components/templates/Container';
import { Post } from '@components/atoms/Post';

import { cms, getDownloadsPage } from '@utils/queries';
import type { IDownloads } from '@utils/types';
import { Navbar } from '@components/atoms/Navbar';

const Gallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
	gap: 1rem;
	width: 100%;
`;

const StyledPost = styled(Post)`
	aspect-ratio: 1/1;
`;

const Downloads = ({ pageTitle, pageDescription, seo, posts }: IDownloads) => {
	return (
		<Layout pageTitle={pageTitle} pageDescription={pageDescription}>
			<Navbar pageTitle={pageTitle} />
			<Container>
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
