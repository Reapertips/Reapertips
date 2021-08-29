import { ReactNode } from 'react';
import styled from 'styled-components';

import { breakpoints, devices } from '@utils/mediaQueries';

interface IContainer {
	className?: string;
	children: ReactNode;
}

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	max-width: ${breakpoints.sm}px;
	margin: 0 auto;

	@media ${devices.sm} {
		width: 60%;
	}

	@media ${devices.md} {
		width: 50%;
	}
`;

const Container = ({ className, children }: IContainer) => {
	return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
