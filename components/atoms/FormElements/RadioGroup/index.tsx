import { useState, useEffect, Dispatch, SetStateAction } from 'react';

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

	const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
		setSelectedOption(e.target.value);
		// if (callback) {
		// 	callback(e.target.value);
		// }
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
							checked={selectedOption === option}
							onChange={handleChange}
						/>
						{option}
					</label>
				</Option>
			))}
		</div>
	);
};
