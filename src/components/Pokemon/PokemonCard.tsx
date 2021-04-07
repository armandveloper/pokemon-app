import { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { usePalette } from 'react-palette';
import { contrast } from '../../helpers/contrast-color';
import Spinner from '../ui/Spinner';

interface PokemonCardProps {
	pokemonId: number;
	name: string;
}

interface PokemonCardStyledProps {
	backgroundColor: string | undefined;
	isLoading: boolean;
}

const PokemonCardStyled = styled.li<PokemonCardStyledProps>`
	background-color: ${(props) => props.backgroundColor};
	border-radius: 0.5rem;
	cursor: pointer;
	height: ${(props) => (props.isLoading ? '10rem' : '20rem')};
	padding: 1.5rem 0.4rem;
	padding-right: ${(props) => (props.isLoading ? '1rem' : '0.4rem')};
	width: 100%;
	transition: background-color 0.5s ease, height 0.5s ease;
	a {
		text-decoration: none;
	}
	p {
		color: ${(props) => contrast(props.backgroundColor)};
		font-size: 2rem;
		font-weight: 500;
		letter-spacing: 0.5px;
		margin: 0 0 0rem 1rem;
		text-transform: capitalize;
	}
	img {
		display: block;
		height: 100%;
		margin-left: auto;
		max-width: 100%;
		object-fit: cover;
		transform: ${(props) =>
			props.isLoading ? 'scale3d(0, 0, 0)' : 'scale3d(1, 1, 1)'};
		transition: transform 0.3s 0.5s ease;
	}
	&:hover img {
		transform: translate3d(-1.5rem, 0, 0);
		transition-delay: 0s;
	}
`;

function PokemonCard({ pokemonId, name }: PokemonCardProps) {
	const artworkUrl: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

	const { data, loading, error } = usePalette(artworkUrl);

	const [isImageLoading, setImageLoading] = useState(true);

	const history = useHistory();

	const handlePokemonPage = () => {
		history.push(`/pokemon/${pokemonId}`, {
			name,
			bgc: data.muted,
			artworkUrl,
		});
	};

	return (
		<PokemonCardStyled
			backgroundColor={data.muted || 'gray'}
			isLoading={isImageLoading}
			onClick={handlePokemonPage}
		>
			<p>{name}</p>
			{loading ? (
				<Spinner align="right" />
			) : !loading && error ? (
				<p>Image not found</p>
			) : (
				<img
					src={artworkUrl}
					alt="Pokémon"
					onLoad={() => {
						setImageLoading(false);
					}}
				/>
			)}
		</PokemonCardStyled>
	);
}

export default PokemonCard;
