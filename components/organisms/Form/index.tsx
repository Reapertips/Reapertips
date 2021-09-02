import { useState } from 'react';

import { TextInput } from '@FormElements/TextInput';
import { RadioGroup } from '@FormElements/RadioGroup';

import { SuccessToast, ErrorToast } from '@lib/toast';
import { StyledSubmitButton } from './Form.styles';

export interface IForm {
	tipLabel: string;
	tipDescription: string;
	tipPlaceholder: string;
	usernameLabel: string;
	usernamePlaceholder: string;
	creditsLabel: string;
	creditsOptions: string[];
	submitButton: string;
}

export const Form = ({
	tipLabel,
	tipDescription,
	tipPlaceholder,
	usernameLabel,
	usernamePlaceholder,
	creditsLabel,
	creditsOptions,
	submitButton
}: IForm) => {
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
			<StyledSubmitButton value={submitText} />
		</form>
	);
};
