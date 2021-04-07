import styled from 'styled-components';

const PokemonTypeListStyled = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	li {
		flex: 0.45;
		background-color: tomato;
		border-radius: 2rem;
		padding: 0.8rem;
		text-align: center;
		user-select: none;
		text-transform: capitalize;
	}
`;

function PokemonTypeList({ typeList }: { typeList: string[] }) {
	return (
		<PokemonTypeListStyled>
			{typeList.map((type) => (
				<li key={type}>{type}</li>
			))}
		</PokemonTypeListStyled>
	);
}

export default PokemonTypeList;
