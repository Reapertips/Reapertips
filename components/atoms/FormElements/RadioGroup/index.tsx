import { useEffect, Dispatch, SetStateAction } from 'react';

import { Title, Option } from './RadioGroup.styles';

interface IFormRadioGroup {
	title: string;
	name: string;
	options: string[];
	selected: string;
	callback?: Dispatch<SetStateAction<string>>;
}

export const RadioGroup = ({ title, name, options, selected, callback }: IFormRadioGroup) => {
	useEffect(() => {
		if (callback) {
			callback(selected);
		}
	}, [callback, selected]);

	const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
		if (callback) {
			callback(e.target.value);
		}
	};

	return (
		<div>
			<Title>{title}</Title>
			{options.map((option) => (
				<Option key={option}>
					<label>
						<input
							type="radio"
							id={option}
							name={name}
							value={option}
							checked={selected === option}
							onChange={handleChange}
						/>
						{option}
					</label>
				</Option>
			))}
		</div>
	);
};
