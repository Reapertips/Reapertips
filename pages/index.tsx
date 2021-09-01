import { IButton } from '@components/atoms/Button';
import { ButtonsGroup } from '@components/molecules/ButtonsGroup';
import { IProfile, Profile } from '@components/molecules/Profile';
import Container from '@components/templates/Container';
import Layout from '@components/templates/Layout';

import type { IPage } from '@utils/types';
import { fetch, getHomePage } from '@utils/queries';

export interface IHomePage extends IPage {
	profile: IProfile;
	buttons: IButton[];
}

const Home = (props: IHomePage) => {
	const { profile, buttons } = props;

	return (
		<Layout {...props}>
			<Container>
				<Profile {...profile} />
				<ButtonsGroup buttons={buttons} />
			</Container>
		</Layout>
	);
};

export const getStaticProps = async () => {
	const data: IHomePage = (await fetch(getHomePage)).homePages[0];

	return {
		props: data
	};
};

export default Home;
