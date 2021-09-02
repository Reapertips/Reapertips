import Link from 'next/link';

import { ButtonCore, IButtonCore } from './ButtonCore';

export interface ILinkButton extends IButtonCore {
	externalLink?: boolean;
	link?: string;
}

export const LinkButton = (props: ILinkButton) => {
	const { externalLink, link } = props;

	const getPageLink = (url: string) => {
		const dotSep = url.split('.');
		const lastDotPart = dotSep[dotSep.length - 1];
		const paths = lastDotPart.split('/').slice(1);
		return paths.join('/');
	};

	if (link !== undefined && !externalLink) {
		return (
			<Link href={getPageLink(link)}>
				<a>
					<ButtonCore {...props} />
				</a>
			</Link>
		);
	} else {
		return (
			<a href={link} target="_blank" rel="noopener noreferrer">
				<ButtonCore {...props} />
			</a>
		);
	}
};
