import Link from 'next/link';
import { StyledButton } from './Button.styles';
import { button__blue, button__red } from '@utils/colors';

export interface IButton {
	id: string;
	title: string;
	subtitle?: string;
	externalLink: boolean;
	link?: string;
	color: 'red' | 'blue';
	type: 'primary' | 'secondary';
}

export const Button = ({
	title,
	subtitle,
	color = 'blue',
	type = 'primary',
	externalLink = false,
	link,
	...props
}: IButton) => {
	const ButtonColor = color === 'blue' ? button__blue : button__red;

	if (link === undefined) {
		return (
			<StyledButton color={ButtonColor} mode={type}>
				<h1>{title}</h1>
				<p>{subtitle}</p>
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
						<StyledButton color={ButtonColor} mode={type}>
							<h1>{title}</h1>
							<p>{subtitle}</p>
						</StyledButton>
					</a>
				</Link>
			);
		} else {
			return (
				<StyledButton as="a" color={ButtonColor} mode={type} href={link} target="_blank" rel="noopener noreferrer">
					<h1>{title}</h1>
					<p>{subtitle}</p>
				</StyledButton>
			);
		}
	}
};
