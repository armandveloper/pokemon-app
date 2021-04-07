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
