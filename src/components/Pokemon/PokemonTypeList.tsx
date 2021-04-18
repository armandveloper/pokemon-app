import styled from 'styled-components';
import { pokemonTypeColors } from '../../helpers/pokemon';
import { Type } from '../../interfaces/pokemon-info.interface';

const PokemonTypeListStyled = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	@media (min-width: 56.25em) {
		justify-content: center;
	}
	li {
		flex: 0.45;
		border-radius: 2rem;
		padding: 0.8rem;
		text-align: center;
		user-select: none;
		text-transform: capitalize;
		@media (min-width: 56.25em) {
			flex: 0.2;
			&:not(:last-child) {
				margin-right: 1rem;
			}
		}
	}
`;

function PokemonTypeList({ typeList }: { typeList: Type[] }) {
	return (
		<PokemonTypeListStyled>
			{typeList.map((type) => (
				<li
					key={type.type.name}
					style={{
						backgroundColor: pokemonTypeColors.get(type.type.name),
					}}
				>
					{type.type.name}
				</li>
			))}
		</PokemonTypeListStyled>
	);
}

export default PokemonTypeList;
