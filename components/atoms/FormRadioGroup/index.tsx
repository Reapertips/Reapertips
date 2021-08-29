import { Title, Label, Option } from './FormRadioGroup.styles';

interface IFormRadioGroup {
	title: string;
	name: string;
	options: string[];
}

export const FormRadioGroup = ({ title, name, options }: IFormRadioGroup) => {
	return (
		<div>
			<Title>{title}</Title>
			{options.map((option) => (
				<Option key={option}>
					<input type="radio" id={option} name={name} checked />
					<Label htmlFor={option}>{option}</Label>
				</Option>
			))}
		</div>
	);
};
