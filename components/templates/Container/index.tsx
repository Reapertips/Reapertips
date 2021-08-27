import { ReactNode } from 'react'
import styled from 'styled-components'

import { breakpoints } from '@utils/mediaQueries'

interface Props {
	className?: string
	children: ReactNode
}

const StyledContainer = styled.div`
	width: 80%;
	max-width: ${breakpoints.lg}px;
	margin: 0 auto;
`

const Container: React.FC<Props> = ({ className, children }) => {
	return <StyledContainer className={className}>{children}</StyledContainer>
}

export default Container
