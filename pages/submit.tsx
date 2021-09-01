import { useState } from 'react';
import styled from 'styled-components';
import { request } from 'graphql-request';
import { SuccessToast, ErrorToast } from '@lib/toast';

import { TopMessage } from '@components/atoms/TopMessage';
import { TextInput } from '@FormElements/TextInput';
import { SubmitButton } from '@FormElements/SubmitButton';
import { RadioGroup } from '@FormElements/RadioGroup';
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
	const [message, setMessage] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [credits, setCredits] = useState<string>(creditsOptions[0]);
	const [submitText, setSubmitText] = useState<string>(submitButton);

	const resetForm = () => {
		setMessage('');
		setUsername('');
		setCredits(creditsOptions[0]);
	};

	const handleSubmit = async (e: { preventDefault: () => void; currentTarget: { elements: any } }) => {
		e.preventDefault();

		setSubmitText('Submitting...');

		const formElements = [...e.currentTarget.elements];

		const filledOutElements = formElements
			.filter((elem) => !!elem.value)
			.map((element) => encodeURIComponent(element.name) + '=' + encodeURIComponent(element.value))
			.join('&');

		await fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: filledOutElements
		})
			.then(() => {
				SuccessToast('Tip sent!');
				setTimeout(() => {
					setSubmitText(submitButton);
					resetForm();
				}, 2000);
			})
			.catch((_) => {
				ErrorToast('Something went wrong');
			});
	};

	return (
		<Layout pageTitle={pageTitle} pageDescription={pageDescription} ogImage={seo.ogImage.url}>
			<Navbar pageTitle={pageTitle} />
			<Container>
				<StyledTopMessage icon={topMessageIcon} text={topMessageText} closable={true} />

				<form name="reapertips-suggestions" method="POST" data-netlify="true" onSubmit={handleSubmit}>
					<input type="hidden" name="form-name" value="reapertips-suggestions" />
					<TextInput
						name="message"
						label={{ text: tipLabel, size: 'big' }}
						description={tipDescription}
						textarea={{ placeholder: tipPlaceholder, value: message }}
						callback={setMessage}
						required
					/>
					<TextInput
						name="username"
						label={{ text: usernameLabel, size: 'default' }}
						input={{ type: 'text', placeholder: usernamePlaceholder, value: username }}
						callback={setUsername}
					/>
					<RadioGroup
						title={creditsLabel}
						name="credits"
						options={creditsOptions}
						selected={credits}
						callback={setCredits}
					/>
					<SubmitButton value={submitText} />
				</form>
			</Container>
		</Layout>
	);
};

export default Submit;

export const getStaticProps = async () => {
	const data = (await request(cms, getSubmitPage)).submitPages[0];

	return {
		props: data
	};
};
