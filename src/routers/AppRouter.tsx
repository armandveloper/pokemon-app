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
				<Route path="/" exact={true} component={HomePage} />
				<Route path="/search" exact={true} component={SearchPage} />
				<Route
					path="/pokemon/:id"
					exact={true}
					component={PokemonPage}
				/>
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default AppRouter;
