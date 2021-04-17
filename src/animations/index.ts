import { css, keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {
    transform: scale3d(0, 0, 0);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`;

export const zoomInAnimation = () =>
	css`
		animation: ${zoomIn} 0.3s 0.5s ease forwards;
	`;

const slideInUp = keyframes`
  from {
    transform: translate3d(0, 100vh, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideInUpAnimation = () =>
	css`
		animation: ${slideInUp} 0.5s ease forwards;
	`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translate3d(0, 1rem, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInAnimation = () =>
	css`
		animation: ${fadeIn} 0.3s ease forwards;
	`;

export const toastAnimation = () =>
	css`
		animation: ${fadeIn} 0.3s ease forwards, ${slideUp} 0.3s ease forwards;
	`;
