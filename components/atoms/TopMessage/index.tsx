import Image from 'next/image';

import { StyledTopMessage } from './TopMessage.styles';

interface ITopMessage {
	icon: {
		url: string;
		alt: string;
	};
	text: string;
}

export const TopMessage = ({ icon, text }: ITopMessage) => {
	return (
		<StyledTopMessage>
			<Image src={icon.url} alt={icon.alt} width={32} height={32} />
			<p>{text}</p>
		</StyledTopMessage>
	);
};
