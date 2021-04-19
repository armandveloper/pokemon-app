import { PokemonProvider } from './context/PokemonContext';
import AppRouter from './routers/AppRouter';
import GlobalStyle from './styles/GlobalStyle';

function App() {
	return (
		<PokemonProvider>
			<GlobalStyle />
			<AppRouter />
		</PokemonProvider>
	);
}

export default App;
