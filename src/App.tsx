import { PokemonProvider } from './context/PokemonContext';
import AppRouter from './routers/AppRouter';

function App() {
	return (
		<PokemonProvider>
			<AppRouter />
		</PokemonProvider>
	);
}

export default App;
