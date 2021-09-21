import Link from 'next/link';

import { ButtonCore, IButtonCore } from './ButtonCore';

export interface ILinkButton extends IButtonCore {
	href: string;
}

export const LinkButton = (props: ILinkButton) => {
	const { href } = props;

	const isExternal = !href.startsWith('/');

	return (
		<>
			{isExternal ? (
				<a href={href} target="_blank" rel="noopener noreferrer">
					<ButtonCore {...props} />
				</a>
			) : (
				<Link href={href}>
					<a>
						<ButtonCore {...props} />
					</a>
				</Link>
			)}
		</>
	);
};
