import { FormInputGroup, FormDescription, StyledFormInput, FormLabel } from './FormTextInput.styles';

interface IFormInput {
	name: string;
	required?: boolean;
	disabled?: boolean;
	label?: {
		text: string;
		size: 'default' | 'big';
	};
	description?: string;
	input?: {
		type: string;
		placeholder?: string;
		value?: string;
		disabled?: boolean;
	};
	textarea?: {
		placeholder: string;
	};
}

export const FormTextInput = ({
	name,
	required = false,
	disabled,
	label,
	description,
	input,
	textarea,
	...props
}: IFormInput) => {
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
				/>
			)}
			{textarea && (
				<StyledFormInput
					as="textarea"
					id={name}
					name={name}
					placeholder={textarea.placeholder}
					disabled={!!disabled}
					required={required}
					isTextarea={true}
				/>
			)}
		</FormInputGroup>
	);
};
