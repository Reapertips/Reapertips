import styled from 'styled-components';
import { blue, white } from '@utils/colors';
import { devices } from '@utils/mediaQueries';

interface IStyledTopMessage {
	visible: boolean;
}

export const StyledTopMessage = styled.div<IStyledTopMessage>`
	position: relative;
	display: ${(props) => (props.visible ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	background: ${blue};
	color: ${white};
	width: 100%;
	border-radius: 12px;
	padding: 0.75rem 1.5rem;
	margin-bottom: 1.5rem;
	font-size: 0.875rem;
`;

interface IClose {
	closable: boolean;
}

export const Close = styled.div<IClose>`
	position: absolute;
	display: ${(props) => (props.closable ? 'flex' : 'none')};
	top: 8px;
	right: 10px;
	opacity: 0.5;

	&:hover {
		cursor: pointer;
	}
`;

export const MessageIcon = styled.div`
	display: none;
	position: relative;
	height: 100%;

	@media ${devices.sm} {
		display: flex;
	}

	div {
		height: 100%;
	}
`;
