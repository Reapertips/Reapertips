import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { FormInputGroup, FormDescription, StyledFormInput, FormLabel } from './TextInput.styles';

interface ITextInput {
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
		disabled?: boolean;
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
	callback,
	...props
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
				<FormLabel size={label.size} htmlFor={name}>
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
					isTextarea={false}
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
					isTextarea={true}
					onChange={(e: { target: { value: SetStateAction<string> } }) => setValue(e.target.value)}
				/>
			)}
		</FormInputGroup>
	);
};
