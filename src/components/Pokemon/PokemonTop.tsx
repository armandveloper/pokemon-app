import { ReactNode } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from 'react-feather';

interface PokemonTopProps {
	children: ReactNode;
	color: string;
}

const PokemonTopStyled = styled.div<{ color: string }>`
	color: ${(props) => props.color};
	height: 35rem;
	position: relative;
	transtion: color 0.5s ease;
	> button {
		background: rgba(255, 255, 255, 0.45);
		border: none;
		border-radius: 50%;
		color: #000;
		cursor: pointer;
		height: 3.6rem;
		margin: 0;
		padding: 0;
		width: 3.6rem;
		position: absolute;
		top: calc(50% - 1.8rem);
		z-index: 1;
		transition: transform 0.3s ease;
		&:first-child {
			left: 1rem;
			&:hover {
				transform: translateX(-0.5rem);
			}
		}
		&:last-child {
			right: 1rem;
			&:hover {
				transform: translateX(0.5rem);
			}
		}
	}
`;

function PokemonTop({ children, color }: PokemonTopProps) {
	const history = useHistory();
	const location = useLocation();
	const id = +location.pathname.split('/')[2];

	return (
		<PokemonTopStyled color={color}>
			<button
				title="Prev"
				onClick={() => history.push(`/pokemon/${id - 1}`)}
			>
				<ArrowLeft size={24} color="currentColor" />
			</button>
			{children}
			<button title="Next">
				<ArrowRight
					size={24}
					color="currentColor"
					onClick={() => history.push(`/pokemon/${id + 1}`)}
				/>
			</button>
		</PokemonTopStyled>
	);
}

export default PokemonTop;
