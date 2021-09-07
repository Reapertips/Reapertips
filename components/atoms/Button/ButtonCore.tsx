import Image from 'next/image';

import { IImage } from '@utils/types';
import { StyledButton, Subtitle, Title, Wrapper, ImageWrapper } from './ButtonCore.styles';

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
				{icon && (
					<ImageWrapper>
						<Image src={icon?.url} alt={icon?.alt} width={48} height={48} />
					</ImageWrapper>
				)}
			</Wrapper>
			{subtitle && <Subtitle>{subtitle}</Subtitle>}
		</StyledButton>
	);
};
