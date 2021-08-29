import { request } from 'graphql-request';

import { Navbar } from '@components/atoms/Navbar';
import Layout from '@components/templates/Layout';
import Container from '@components/templates/Container';

import { cms, getSubmitPage } from '@utils/queries';
import type { ISubmit } from '@utils/types';
import { TopMessage } from '@components/atoms/TopMessage';

const Submit = ({
	pageTitle,
	pageDescription,
	seo,
	topMessageIcon,
	topMessageText,
	tipLabel,
	tipDescription,
	tipPlaceholder,
	usernameLabel,
	usernamePlaceholder,
	creditsLabel,
	creditsOptions,
	submitButton
}: ISubmit) => {
	return (
		<Layout pageTitle={pageTitle} pageDescription={pageDescription} ogImage={seo.ogImage.url}>
			<Navbar pageTitle={pageTitle} />
			<Container>
				<TopMessage icon={topMessageIcon} text={topMessageText} />

				<form name="contact" netlify netlify-honeypot="bot-field" hidden>
					<input type="text" name="name" />
					<input type="email" name="email" />
					<textarea name="message"></textarea>
				</form>

				<form name="submissions" method="post">
					<input type="hidden" name="form-name" value="contact" />
					<input type="text" name="name" />
					<input type="email" name="email" />
					<textarea name="message"></textarea>
				</form>
			</Container>
		</Layout>
	);
};

export default Submit;

export const getStaticProps = async () => {
	const data = (await request(cms, getSubmitPage)).submits[0];

	return {
		props: data
	};
};
