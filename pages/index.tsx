import styled from 'styled-components';

import { Button } from '@atoms/Button';
import { Profile } from '@atoms/Profile';
import Container from '@components/templates/Container';
import Layout from '@components/templates/Layout';

import type { IHome } from '@utils/types';
import { fetch, getHomePage } from '@utils/queries';

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Home = ({ pageTitle, pageDescription, seo, profile, buttons }: IHome) => {
	return (
		<Layout pageTitle={pageTitle} pageDescription={pageDescription} ogImage={seo.ogImage.url}>
			<Container>
				<Profile {...profile} />
				<Buttons>
					{buttons.map((button) => (
						<Button key={button.id} {...button} />
					))}
				</Buttons>
			</Container>
		</Layout>
	);
};

export const getStaticProps = async () => {
	const data: IHome = (await fetch(getHomePage)).homePages[0];

	return {
		props: data
	};
};

export default Home;
