import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { PokemonInfo } from '../interfaces/pokemon-info.interface';
import {
	ResourceGeneralResponse,
	Result,
} from '../interfaces/resource-general-response.interface';

interface PokemonContextInterface {
	pokemonList: Result[];
	page: string;
	currentPokemon: PokemonInfo;
	pokemonNotFoundError: boolean;
	isNetworkError: boolean;
	getPokemon(): void;
	setPage(): void;
	getPokemonById(id: number): Promise<void>;
	setPokemonError(isError: boolean): void;
}

export const PokemonContext = createContext<PokemonContextInterface>(
	{} as PokemonContextInterface
);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
	const [pokemonList, setPokemonList] = useState<Result[]>([]);
	const [page, setPage] = useState('https://pokeapi.co/api/v2/pokemon');
	const [isNetworkError, setNetworkError] = useState(false);

	const nextPageRef = useRef<string | null>(null);

	const getPokemon = useCallback(async () => {
		try {
			const resp = await fetch(page);
			if (resp.status === 404) throw new Error('Network Error');
			const data: ResourceGeneralResponse = await resp.json();
			nextPageRef.current = data.next;
			setPokemonList((pokemon) => [...pokemon, ...data.results]);
		} catch (err) {
			console.log(err);
			setNetworkError(true);
		}
	}, [page]);

	const nextPage = useCallback(() => setPage(nextPageRef.current || ''), []);

	useEffect(() => {
		if (!page) return;
		getPokemon();
	}, [page, getPokemon]);

	const [currentPokemon, setCurrentPokemon] = useState({} as PokemonInfo);

	const getPokemonById = useCallback(async (id: number) => {
		try {
			const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			if (resp.status === 404) throw new Error('Pokemon not found');
			const data: PokemonInfo = await resp.json();
			setCurrentPokemon(data);
		} catch (err) {
			throw new Error(err);
		}
	}, []);

	const [pokemonNotFoundError, setPokemonNotFoundError] = useState(false);

	const setPokemonError = useCallback(
		(isError: boolean) => setPokemonNotFoundError(isError),
		[]
	);

	return (
		<PokemonContext.Provider
			value={{
				pokemonList,
				page,
				currentPokemon,
				getPokemon,
				setPage: nextPage,
				getPokemonById,
				pokemonNotFoundError,
				setPokemonError,
				isNetworkError,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};
