import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { FormInputGroup, FormDescription, StyledFormInput, FormLabel } from './TextInput.styles';

export interface ITextInput {
	name: string;
	required?: boolean;
	disabled?: boolean;
	label?: {
		text: string;
		size: 'default' | 'big';
	};
	description?: string;
	input?: {
		value?: string;
		type: string;
		placeholder?: string;
	};
	textarea?: {
		placeholder: string;
		value?: string;
	};
	callback?: Dispatch<SetStateAction<string>>;
}

export const TextInput = ({
	name,
	required = false,
	disabled,
	label,
	description,
	input,
	textarea,
	callback
}: ITextInput) => {
	const [value, setValue] = useState<string>('');

	useEffect(() => {
		if (callback) {
			callback(value);
		}
	}, [callback, value]);

	return (
		<FormInputGroup>
			{label && (
				<FormLabel label={label} htmlFor={name}>
					{label.text} {!required && <span>(optional)</span>}
				</FormLabel>
			)}
			{description && <FormDescription>{description}</FormDescription>}
			{input && (
				<StyledFormInput
					id={name}
					name={name}
					type={input.type}
					placeholder={input.placeholder}
					value={input.value}
					required={required}
					disabled={!!disabled}
					textarea={textarea}
					onChange={(e: { target: { value: SetStateAction<string> } }) => setValue(e.target.value)}
				/>
			)}
			{textarea && (
				<StyledFormInput
					as="textarea"
					id={name}
					name={name}
					placeholder={textarea.placeholder}
					value={textarea.value}
					disabled={!!disabled}
					required={required}
					textarea={textarea}
					onChange={(e: { target: { value: SetStateAction<string> } }) => setValue(e.target.value)}
				/>
			)}
		</FormInputGroup>
	);
};
