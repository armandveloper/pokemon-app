import { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Result } from '../../interfaces/resource-general-response.interface';
import { PokemonContext } from '../../context/PokemonContext';
import Wrapper from '../layout/Wrapper';
import Spinner from '../ui/Spinner';
import PokemonCard from './PokemonCard';

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
	const { pokemonList, setPage, page } = useContext(PokemonContext);

	const spinnerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleObserver = (
			entities: IntersectionObserverEntry[],
			observer: IntersectionObserver
		) => {
			const target = entities[0];
			if (target.isIntersecting) {
				setPage();
			}
		};
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
	}, [setPage]);

	return (
		<Wrapper>
			<PokemonListStyled>
				{pokemonList.map(({ name, url }: Result) => (
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
