import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import {
	PokemonPageParams,
	LocationState,
} from '../interfaces/router.interface';
import { useBasicValues } from '../hooks/useBasicValues';
import { contrast } from '../helpers/contrast-color';
import PokemonImage from '../components/Pokemon/PokemonImage';
import PokemonTopClipped from '../components/Pokemon/PokemonTopClipped';
import PokemonHeader from '../components/Pokemon/PokemonHeader';
import PokemonTop from '../components/Pokemon/PokemonTop';
import PokemonDetails from '../components/Pokemon/PokemonDetails';

const PokemonPageStyled = styled.div`
	h1 {
		font-size: 3.6rem;
		letter-spacing: 1.5px;
		margin-top: 4rem;
		text-align: center;
		text-transform: capitalize;
	}
`;

function PokemonPage({
	match,
	location,
}: RouteComponentProps<PokemonPageParams, {}, LocationState>) {
	const { id } = match.params;
	const { name, bgc, artworkUrl } = useBasicValues(location.state, id);

	return (
		<PokemonPageStyled>
			<PokemonTop color={contrast(bgc)}>
				<PokemonHeader id={+id} />
				<PokemonTopClipped bgc={bgc} />
				<PokemonImage image={artworkUrl} />
			</PokemonTop>
			<h1>{name}</h1>
			<PokemonDetails />
		</PokemonPageStyled>
	);
}

export default PokemonPage;
