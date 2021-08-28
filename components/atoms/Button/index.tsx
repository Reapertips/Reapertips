import Link from 'next/link';
import { StyledButton } from './Button.styles';
import { button__blue, button__red } from '@utils/colors';

export interface IButton {
	title: string;
	subtitle?: string;
	color?: 'red' | 'blue';
	type?: 'primary' | 'secondary';
	external?: boolean;
	link?: string;
	onClick?: () => void;
}

export const Button = ({
	title,
	subtitle,
	color = 'blue',
	type = 'primary',
	external = false,
	link,
	...props
}: IButton) => {
	const ButtonColor = color === 'blue' ? button__blue : button__red;
	const target = link !== undefined && external === true ? '_blank' : '';

	return link !== undefined ? (
		<Link href={link}>
			<a target={target}>
				<StyledButton className="button" color={ButtonColor} mode={type}>
					<h1>{title}</h1>
					<p>{subtitle}</p>
				</StyledButton>
			</a>
		</Link>
	) : (
		<StyledButton className="button" color={ButtonColor} mode={type}>
			<h1>{title}</h1>
			<p>{subtitle}</p>
		</StyledButton>
	);
};
