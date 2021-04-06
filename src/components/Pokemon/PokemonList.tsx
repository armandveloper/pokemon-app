import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
	ResourceGeneralResponse,
	Result,
} from '../../interfaces/resource-general-response.interface';
import Wrapper from '../layout/Wrapper';
import PokemonCard from './PokemonCard';
import Spinner from '../ui/Spinner';

const PokemonListStyled = styled.ul`
	list-style: none;
	margin: 0;
	margin-bottom: 2rem;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	grid-gap: 2rem 0.6rem;
`;

function PokemonList() {
	const [pokemons, setPokemons] = useState<Result[]>([]);

	const [page, setPage] = useState('https://pokeapi.co/api/v2/pokemon');

	const spinnerRef = useRef<HTMLDivElement>(null);

	const nextPageRef = useRef<string | null>(null);

	useEffect(() => {
		const getPokemons = async () => {
			if (!page) return;
			const resp = await fetch(page);
			const data: ResourceGeneralResponse = await resp.json();
			setPokemons((pokemons) => [...pokemons, ...data.results]);
			nextPageRef.current = data.next;
		};
		getPokemons();
	}, [page]);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '10px',
			threshold: 1.0,
		};

		const observer = new window.IntersectionObserver(
			handleObserver,
			options
		);
		if (spinnerRef.current) {
			observer.observe(spinnerRef.current);
		}
	}, []);

	const handleObserver = (
		entities: IntersectionObserverEntry[],
		observer: IntersectionObserver
	) => {
		const target = entities[0];
		if (target.isIntersecting) {
			setPage(nextPageRef.current || '');
		}
	};

	return (
		<Wrapper>
			<PokemonListStyled>
				{pokemons.map(({ name, url }: Result) => (
					<PokemonCard
						key={name}
						name={name}
						pokemonId={+url.split('/')[6]}
					/>
				))}
			</PokemonListStyled>
			<Spinner
				ref={spinnerRef}
				align="center"
				className={page ? 'visible' : 'hidden'}
			/>
		</Wrapper>
	);
}

export default PokemonList;
