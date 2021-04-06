import styled from 'styled-components';
import Wrapper from '../layout/Wrapper';
import PokemonCard from './PokemonCard';

const PokemonListStyled = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	grid-gap: 2rem 0.6rem;
`;

function PokemonList() {
	const pokemons: number[] = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
	];
	return (
		<Wrapper>
			<PokemonListStyled>
				{pokemons.map((pokemon) => (
					<PokemonCard key={pokemon} pokemonId={pokemon} />
				))}
			</PokemonListStyled>
		</Wrapper>
	);
}

export default PokemonList;
