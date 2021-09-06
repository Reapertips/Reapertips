import { ButtonCore } from './ButtonCore';
import { ILinkButton, LinkButton } from './LinkButton';

export interface IButton extends ILinkButton {
	id?: string;
}

export const Button = (props: IButton) => {
	const { href } = props;

	return href === undefined || href === '' ? <ButtonCore {...props} /> : <LinkButton {...props} />;
};
