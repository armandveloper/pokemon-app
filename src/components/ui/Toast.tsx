import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toastAnimation } from '../../animations/index';

interface ToastProps {
	open: boolean;
	type?: string;
	text: string;
	autoHide?: boolean;
	handleClose?(isError: boolean): void;
}

const ToastStyled = styled.div<{ type: string }>`
	background-color: ${(props) =>
		props.type === 'success' ? 'rgb(75, 192, 122)' : '#D50000'};
	border-radius: 0.5rem;
	font-size: 1.6rem;
	padding: 1rem 2.5rem;
	text-align: center;
	width: 100%;
	position: fixed;
	top: 1rem;
	left: 0;
	right: 0;
	z-index: 100;
	${toastAnimation};
`;

function Toast({ open, type = 'success', text, autoHide = false }: ToastProps) {
	const [isOpen, setIsOpen] = useState(open);

	useEffect(() => {
		if (autoHide) {
			setTimeout(() => {
				setIsOpen(false);
			}, 2800);
		}
	}, [autoHide]);

	if (!isOpen) return null;

	return <ToastStyled type={type}>{text}</ToastStyled>;
}

export default Toast;
