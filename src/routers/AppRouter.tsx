import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PokemonPage from '../pages/PokemonPage';
import SearchPage from '../pages/SearchPage';

function AppRouter() {
	return (
		<Router basename="/pokemon-app">
			<Switch>
				<Route path="/" exact={true}>
					<HomePage />
				</Route>
				<Route path="/search">
					<SearchPage />
				</Route>
				<Route path="/pokemon/:id">
					<PokemonPage />
				</Route>
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default AppRouter;
