import { ButtonCore } from './ButtonCore';
import { ILinkButton, LinkButton } from './LinkButton';

export interface IButton extends ILinkButton {
	id?: string;
}

export const Button = (props: IButton) => {
	const { link } = props;

	return link === undefined ? <ButtonCore {...props} /> : <LinkButton {...props} />;
};
