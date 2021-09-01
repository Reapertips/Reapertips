import { useState, useEffect } from 'react';
import Image from 'next/image';

import { StyledTopMessage, Close, MessageIcon } from './TopMessage.styles';

interface ITopMessage {
	icon: {
		url: string;
		alt: string;
	};
	text: string;
	closable?: boolean;
	className?: string;
}

export const TopMessage = ({ icon, text, closable = false, className }: ITopMessage) => {
	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		const saved = sessionStorage.getItem('topMessageVisible');

		if (saved === null) {
			setVisible(true);
			sessionStorage.setItem('topMessageVisible', JSON.stringify(true));
		} else {
			sessionStorage.setItem('topMessageVisible', JSON.stringify(visible));
		}
	}, [visible]);

	return (
		<StyledTopMessage visible={visible} className={className}>
			<Close onClick={() => setVisible(false)} closable={closable}>
				<Image src="/icons/close.svg" alt="White close icon" width={12} height={12} />
			</Close>
			<MessageIcon>
				<Image src={icon.url} alt={icon.alt} width={32} height={32} />
			</MessageIcon>
			<p>{text}</p>
		</StyledTopMessage>
	);
};
