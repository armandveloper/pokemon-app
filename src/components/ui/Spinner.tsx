import { forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
	align?: string;
	className?: string;
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
	display: ${(props) =>
		props.className?.includes('visible') ? 'block' : 'none'};
	width: 2.5rem;
	margin-left: ${(props) =>
		props.align === 'right' || props.align === 'center' ? 'auto' : 0};
	margin-right: ${(props) =>
		props.align === 'left' || props.align === 'center' ? 'auto' : 0};
	animation: ${spin} 1s linear infinite;
	margin-top: ${(props) => (props.className?.includes('mt') ? '4rem' : '0')};
`;

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
	({ align, className = 'visible' }: SpinnerProps, ref) => {
		return (
			<div ref={ref} role="status" aria-label="Loading...">
				<SpinnerStyled className={className} align={align} />
			</div>
		);
	}
);

export default Spinner;
