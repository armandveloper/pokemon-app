import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
	margin: 0 auto;
	max-width: 120rem;
	padding: 0 2rem;
	width: 100%;
`;

function Wrapper({ children }: PropsWithChildren<{}>) {
	return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
