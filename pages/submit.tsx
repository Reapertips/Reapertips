import { Popup, IPopup } from '@components/UI/molecules/Popup';
import { Navbar } from '@components/UI/organisms/Navbar';
import { Form, IForm } from '@components/UI/organisms/Form';
import Layout from '@components/utils/Layout';
import Container from '@components/utils/Container';

import type { IPage } from '@utils/types';
import { getSubmitPage } from '@lib/graphcms';

export interface ISubmitPage extends IPage, IForm {
	popup: IPopup;
}

interface IProps {
	page: ISubmitPage;
	preview: boolean;
}

export default function Submit({ page, preview }: IProps) {
	const { pageTitle, popup } = page;

	return (
		<Layout {...page} preview={preview}>
			<Navbar pageTitle={pageTitle} />
			<Container>
				<Popup icon={popup.icon} text={popup.text} closable={true} />
				<Form {...page} />
			</Container>
		</Layout>
	);
}

export const getStaticProps = async ({ preview = false }) => {
	const page: ISubmitPage = (await getSubmitPage(preview)).submitPages[0];

	return {
		props: {
			page,
			preview
		}
	};
};
