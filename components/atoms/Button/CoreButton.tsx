import Image from 'next/image';

import { IImage } from '@utils/types';
import { StyledButton } from './Button.styles';

export interface IButtonCore {
	title: string;
	icon?: IImage;
	subtitle?: string;
	color: 'red' | 'blue';
	mode: 'primary' | 'secondary';
}

export const ButtonCore = ({ title, icon, subtitle, color, mode, ...props }: IButtonCore) => {
	return (
		<StyledButton color={color} mode={mode} {...props}>
			<div>
				<h1>{title}</h1>
				{icon && <Image src={icon?.url} alt={icon?.alt} width={40} height={40} />}
			</div>
			{subtitle && <p>{subtitle}</p>}
		</StyledButton>
	);
};
