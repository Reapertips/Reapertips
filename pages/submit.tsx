import styled from 'styled-components';
import { request } from 'graphql-request';

import { TopMessage } from '@components/atoms/TopMessage';
import { FormTextInput } from '@components/atoms/FormTextInput';
import { FormRadioGroup } from '@components/atoms/FormRadioGroup';
import { Navbar } from '@components/organisms/Navbar';
import Layout from '@components/templates/Layout';
import Container from '@components/templates/Container';

import { cms, getSubmitPage } from '@utils/queries';
import type { ISubmit } from '@utils/types';

const StyledTopMessage = styled(TopMessage)`
	margin-bottom: 2.5rem;
`;

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
				<StyledTopMessage icon={topMessageIcon} text={topMessageText} closable={true} />

				<form name="tips-suggestions" data-netlify="true" netlify-honeypot="bot-field" hidden>
					<textarea name="message" />
					<input type="text" name="username" />
					{creditsOptions.map((option) => (
						<input key={option} type="radio" name="credits" id={option} />
					))}
				</form>

				<form name="tips-suggestions" method="post">
					<input type="hidden" name="form-name" value="tips-suggestions" />
					<FormTextInput
						name="message"
						label={{ text: tipLabel, size: 'big' }}
						description={tipDescription}
						textarea={{ placeholder: tipPlaceholder }}
						required
					/>
					<FormTextInput
						name="username"
						label={{ text: usernameLabel, size: 'default' }}
						input={{ type: 'text', placeholder: usernamePlaceholder }}
					/>
					<FormRadioGroup title={creditsLabel} name="credits" options={creditsOptions} />
					<FormTextInput name="submit" input={{ type: 'submit', value: submitButton }} required />
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
