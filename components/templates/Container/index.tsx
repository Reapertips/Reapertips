import { ReactNode } from 'react';
import styled from 'styled-components';

interface IContainer {
	className?: string;
	children: ReactNode;
}

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	max-width: 35rem;
	margin: 0 auto;
`;

const Container = ({ className, children }: IContainer) => {
	return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
