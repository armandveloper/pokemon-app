import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
	align?: string;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerStyled = styled.div<SpinnerProps>`
	border-top: 0.2rem solid #fff;
	border-radius: 50%;
	height: 2.5rem;
	width: 2.5rem;
	margin-left: ${(props) =>
		props.align === 'right' || props.align === 'center' ? 'auto' : 0};
	margin-right: ${(props) =>
		props.align === 'left' || props.align === 'center' ? 'auto' : 0};
	animation: ${spin} 1s linear infinite;
`;

function Spinner({ align = 'center' }: SpinnerProps) {
	return (
		<div role="status" aria-label="Loading...">
			<SpinnerStyled align={align} />
		</div>
	);
}

export default Spinner;
