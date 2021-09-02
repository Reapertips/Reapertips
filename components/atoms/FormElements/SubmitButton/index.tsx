import { StyledSubmitButton } from './SubmitButton.styles';

export interface ISubmitButton {
	disabled?: boolean;
	value: string;
	callback?: () => void;
}

export const SubmitButton = ({ disabled = false, value, callback }: ISubmitButton) => {
	return <StyledSubmitButton type="submit" value={value} disabled={disabled} onClick={callback} />;
};
