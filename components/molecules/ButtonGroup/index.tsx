import { Button, IButton } from '@atoms/Button';

import { StyledButtonGroup } from './ButtonGroup.styles';

export interface IButtonGroup {
	buttons: IButton[];
}

export const ButtonGroup = ({ buttons }: IButtonGroup) => {
	return (
		<StyledButtonGroup>
			{buttons.map((button) => (
				<Button key={button.id} {...button} />
			))}
		</StyledButtonGroup>
	);
};
