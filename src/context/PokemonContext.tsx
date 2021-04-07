import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import {
	ResourceGeneralResponse,
	Result,
} from '../interfaces/resource-general-response.interface';

interface PokemonContextInterface {
	pokemonList: Result[];
	page: string;
	getPokemon(): void;
	setPage(): void;
}

export const PokemonContext = createContext<PokemonContextInterface>(
	{} as PokemonContextInterface
);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
	const [pokemonList, setPokemonList] = useState<Result[]>([]);
	const [page, setPage] = useState('https://pokeapi.co/api/v2/pokemon');

	const nextPageRef = useRef<string | null>(null);

	const getPokemon = useCallback(async () => {
		const resp = await fetch(page);
		const data: ResourceGeneralResponse = await resp.json();
		nextPageRef.current = data.next;
		setPokemonList((pokemon) => [...pokemon, ...data.results]);
	}, [page]);

	const nextPage = useCallback(() => setPage(nextPageRef.current || ''), []);

	useEffect(() => {
		if (!page) return;
		getPokemon();
	}, [page, getPokemon]);

	return (
		<PokemonContext.Provider
			value={{
				pokemonList,
				page,
				getPokemon,
				setPage: nextPage,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};
