import { ReactNode } from 'react';
import styled from 'styled-components';

interface PokemonTopProps {
	children: ReactNode;
	color: string;
}

const PokemonTopStyled = styled.div<{ color: string }>`
	color: ${(props) => props.color};
	height: 35rem;
	position: relative;
	transtion: color 0.5s ease;
`;

function PokemonTop({ children, color }: PokemonTopProps) {
	return <PokemonTopStyled color={color}>{children}</PokemonTopStyled>;
}

export default PokemonTop;
