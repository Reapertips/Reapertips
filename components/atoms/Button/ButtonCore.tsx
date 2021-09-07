import Image from 'next/image';

import { IImage } from '@utils/types';
import { StyledButton, Subtitle, Title, Wrapper } from './ButtonCore.styles';

export interface IButtonCore {
	title: string;
	icon?: IImage;
	subtitle?: string;
	color: 'red' | 'blue';
	mode: 'primary' | 'secondary';
}

export const ButtonCore = ({ title, icon, subtitle, color, mode }: IButtonCore) => {
	return (
		<StyledButton color={color} mode={mode} className="button">
			<Wrapper>
				<Title color={color}>{title}</Title>
				{icon && <Image src={icon?.url} alt={icon?.alt} width={50} height={50} />}
			</Wrapper>
			{subtitle && <Subtitle>{subtitle}</Subtitle>}
		</StyledButton>
	);
};
