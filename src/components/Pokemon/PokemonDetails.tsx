import styled from 'styled-components';
import PokemonTypeList from './PokemonTypeList';

const PokemonDetailsStyled = styled.div`
	color: #fff;
`;

function PokemonDetails() {
	return (
		<PokemonDetailsStyled>
			<PokemonTypeList typeList={['fire', 'flying']} />
		</PokemonDetailsStyled>
	);
}

export default PokemonDetails;
