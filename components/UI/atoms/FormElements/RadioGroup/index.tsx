import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { encode, decode } from 'he';

import { Title, Option } from './RadioGroup.styles';

export interface IRadioGroup {
	title: string;
	name: string;
	options: string[];
	selected: string;
	callback?: Dispatch<SetStateAction<string>>;
}

export const RadioGroup = ({ title, name, options, selected, callback }: IRadioGroup) => {
	const [selectedOption, setSelectedOption] = useState<string>(selected);

	useEffect(() => {
		if (callback) {
			callback(selectedOption);
		}
	}, [callback, selectedOption]);

	const handleChange = (e: { target: { value: string } }) => {
		const { value } = e.target;
		setSelectedOption(value);
	};

	return (
		<div>
			<Title>{title}</Title>
			{options
				.map((option) => encode(option))
				.map((option) => (
					<Option key={option}>
						<label>
							<input
								type="radio"
								id={option}
								name={name}
								value={option}
								checked={selectedOption === option}
								onChange={handleChange}
							/>
							{decode(option)}
						</label>
					</Option>
				))}
		</div>
	);
};
