import { ReactNode } from 'react';
import styled from 'styled-components';

import { breakpoints } from '@utils/mediaQueries';

interface IContainer {
	className?: string;
	children: ReactNode;
}

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
	max-width: ${breakpoints.lg}px;
	margin: 0 auto;
`;

const Container = ({ className, children }: IContainer) => {
	return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
