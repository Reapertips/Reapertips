import { StyledSubmitButton } from './SubmitButton.styles';

export interface ISubmitButton {
	disabled?: boolean;
	value: string;
	callback?: () => void;
	className?: string;
}

export const SubmitButton = ({ disabled = false, value, className, callback }: ISubmitButton) => {
	return (
		<StyledSubmitButton type="submit" value={value} disabled={disabled} onClick={callback} className={className} />
	);
};
