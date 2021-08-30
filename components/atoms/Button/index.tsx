import Link from 'next/link';
import Image from 'next/image';

import { IButton } from '@utils/types';
import { StyledButton } from './Button.styles';

export const Button = ({
	title,
	icon,
	subtitle,
	color = 'blue',
	mode = 'primary',
	externalLink = false,
	link,
	...props
}: IButton) => {
	if (link === undefined) {
		return (
			<StyledButton color={color} mode={mode} {...props}>
				<div>
					<h1>{title}</h1>
					{icon && <Image src={icon?.url} alt={icon?.alt} width={40} height={40} />}
				</div>
				{subtitle && <p>{subtitle}</p>}
			</StyledButton>
		);
	} else {
		if (!externalLink) {
			const getPageLink = () => {
				const dotSep = link.split('.');
				const lastDotPart = dotSep[dotSep.length - 1];
				const paths = lastDotPart.split('/').slice(1);
				return paths.join('/');
			};

			return (
				<Link href={getPageLink()}>
					<a>
						<StyledButton color={color} mode={mode} {...props}>
							<div>
								<h1>{title}</h1>
								{icon && <Image src={icon?.url} alt={icon?.alt} width={40} height={40} />}
							</div>
							{subtitle && <p>{subtitle}</p>}
						</StyledButton>
					</a>
				</Link>
			);
		} else {
			return (
				<StyledButton as="a" color={color} mode={mode} href={link} target="_blank" rel="noopener noreferrer" {...props}>
					<div>
						<h1>{title}</h1>
						{icon && <Image src={icon?.url} alt={icon?.alt} width={40} height={40} />}
					</div>
					{subtitle && <p>{subtitle}</p>}
				</StyledButton>
			);
		}
	}
};
