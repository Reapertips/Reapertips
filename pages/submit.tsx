import { Popup, IPopup } from '@components/molecules/Popup';
import { Navbar } from '@components/organisms/Navbar';
import { Form, IForm } from '@components/organisms/Form';
import Layout from '@components/templates/Layout';
import Container from '@components/templates/Container';

import { fetch, getSubmitPage } from '@utils/queries';
import type { IPage } from '@utils/types';

export interface ISubmitPage extends IPage, IForm {
	popup: IPopup;
}

const Submit = (props: ISubmitPage) => {
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
};

export default Submit;

export const getStaticProps = async () => {
	const data = (await fetch(getSubmitPage)).submitPages[0];

	return {
		props: data
	};
};
