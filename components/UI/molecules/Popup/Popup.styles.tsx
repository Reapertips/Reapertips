import styled from 'styled-components';

import { IPopup } from '.';

import { devices, sizes } from '@utils/mediaQueries';

export const StyledPopup = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.theme.dark.blue[400]};
	color: ${(props) => props.theme.dark.greyscale[100]};
	width: ${sizes.xs};
	max-width: 100%;
	border-radius: 12px;
	padding: 0.5rem 1.625rem;
	margin-bottom: 2.5rem;
	font-size: 0.875rem;

	@media ${devices.sm} {
		padding: 0.3rem 1.625rem;
	}
`;

export const Close = styled.div<Partial<IPopup>>`
	position: absolute;
	display: ${(props) => (props.closable ? 'flex' : 'none')};
	top: 8px;
	right: 10px;
	opacity: 0.5;

	&:hover {
		cursor: pointer;
	}
`;

export const Icon = styled.div`
	display: none;
	position: relative;
	height: 2.5rem;
	margin-right: 0.75rem;

	@media ${devices.sm} {
		display: flex;
	}

	div {
		height: 100%;
	}
`;
