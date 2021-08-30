import { useState } from 'react';

import { Title, Option } from './FormRadioGroup.styles';

interface IFormRadioGroup {
	title: string;
	name: string;
	options: string[];
}

export const FormRadioGroup = ({ title, name, options }: IFormRadioGroup) => {
	const [selected, setSelected] = useState<string>(options[0]);

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
							onChange={(e) => setSelected(e.target.value)}
						/>
						{option}
					</label>
				</Option>
			))}
		</div>
	);
};
