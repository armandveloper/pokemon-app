import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import Toast from '../components/ui/Toast';
import HomeHeader from '../components/layout/HomeHeader';
import PokemonList from '../components/Pokemon/PokemonList';

function HomePage() {
	const { pokemonNotFoundError } = useContext(PokemonContext);

	return (
		<>
			<Toast
				open={pokemonNotFoundError}
				type="error"
				text="Pokémon not found"
				autoHide={true}
			/>
			<HomeHeader />
			<PokemonList />
		</>
	);
}

export default HomePage;
