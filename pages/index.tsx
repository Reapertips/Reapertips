import { IButton } from '@components/UI/atoms/Button';
import { ButtonGroup } from '@components/UI/molecules/ButtonGroup';
import { IProfile, Profile } from '@components/UI/molecules/Profile';
import Container from '@components/utils/Container';
import Layout from '@components/utils/Layout';

import type { IPage } from '@utils/types';
import { getHomePage } from '@lib/graphcms';

export interface IHomePage extends IPage {
	profile: IProfile;
	buttons: IButton[];
}

export default function Home(props: IHomePage) {
	const { profile, buttons } = props;

	return (
		<Layout {...props}>
			<Container>
				<Profile {...profile} />
				<ButtonGroup buttons={buttons} />
			</Container>
		</Layout>
	);
}

export const getStaticProps = async ({ preview = false }) => {
	const data: IHomePage = (await getHomePage(preview)).homePages[0];

	return {
		props: data
	};
};
