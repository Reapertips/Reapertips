import { Button, IButton } from '@atoms/Button';

import { StyledButtons } from './ButtonsGroup.styles';

export interface IButtonsGroup {
	buttons: IButton[];
}

export const ButtonsGroup = ({ buttons }: IButtonsGroup) => {
	return (
		<StyledButtons>
			{buttons.map((button) => (
				<Button key={button.id} {...button} />
			))}
		</StyledButtons>
	);
};
