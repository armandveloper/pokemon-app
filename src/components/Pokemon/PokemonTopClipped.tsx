import styled from 'styled-components';

interface PokemonTopProps {
	bgc: string;
}

const PokemonTopCLippedStyled = styled.div<PokemonTopProps>`
	background-color: ${(props) => props.bgc};
	height: 100%;
	width: 100%;
	clip-path: polygon(0% 0%, 100% 0%, 100% 45%, 0% 100%);
	position: absolute;
	top: 0;
	left: 0;
	transition: background-color 0.5s ease;
`;

function PokemonTopClipped({ bgc }: PokemonTopProps) {
	return <PokemonTopCLippedStyled bgc={bgc} />;
}

export default PokemonTopClipped;
