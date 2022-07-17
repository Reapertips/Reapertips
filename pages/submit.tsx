import { Popup, IPopup } from '@components/UI/molecules/Popup';
import { Navbar } from '@components/UI/organisms/Navbar';
import { Form, IForm } from '@components/UI/organisms/Form';
import Layout from '@components/utils/Layout';
import Container from '@components/utils/Container';

// import { client, getSubmitPage } from '@utils/queries';
import type { IPage } from '@utils/types';
import { getSubmitPage } from '@lib/graphcms';

export interface ISubmitPage extends IPage, IForm {
	popup: IPopup;
}

export default function Submit(props: ISubmitPage) {
	const { pageTitle, popup } = props;

	return (
		<Layout {...props}>
			<Navbar pageTitle={pageTitle} />
			<Container>
				<Popup icon={popup.icon} text={popup.text} closable={true} />
				<Form {...props} />
			</Container>
		</Layout>
	);
}

export const getStaticProps = async ({ preview = false }) => {
	const data: ISubmitPage = (await getSubmitPage(preview)).submitPages[0];

	// const data = (await client.request(getSubmitPage)).submitPages[0];

	return {
		props: data
	};
};
