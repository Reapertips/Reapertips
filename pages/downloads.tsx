import Image from 'next/image';
import styled from 'styled-components';
import { request } from 'graphql-request';

import { Post } from '@components/atoms/Post';
import { Navbar } from '@components/atoms/Navbar';
import Layout from '@components/templates/Layout';
import Container from '@components/templates/Container';

import { cms, getDownloadsPage } from '@utils/queries';
import type { IDownloads } from '@utils/types';
import { blue, white } from '@utils/colors';

const Gallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
	gap: 1rem;
	width: 100%;
`;

const StyledPost = styled(Post)`
	aspect-ratio: 1/1;
`;

const Message = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	background: ${blue};
	color: ${white};
	width: 100%;
	border-radius: 12px;
	padding: 0.5rem 1rem;
	margin-bottom: 1.5rem;
`;

const Downloads = ({ pageTitle, pageDescription, seo, posts }: IDownloads) => {
	return (
		<Layout pageTitle={pageTitle} pageDescription={pageDescription}>
			<Navbar pageTitle={pageTitle} />
			<Container>
				<Message>
					<Image src="/icons/click.svg" alt="White cursor icon" width={32} height={32} />
					<p>Click on the related post to get the files!</p>
				</Message>

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
