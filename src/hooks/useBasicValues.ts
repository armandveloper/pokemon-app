import { useEffect, useState } from 'react';
import { usePalette } from 'react-palette';
import { LocationState } from '../interfaces/router.interface';

export function useBasicValues(state: LocationState, id: string) {
	const [artworkUrl, setArtworkUrl] = useState(
		`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
	);

	const { data, error } = usePalette(artworkUrl);

	useEffect(() => {
		if (error) {
			setArtworkUrl(
				`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
			);
		}
	}, [error, id]);

	useEffect(() => {
		// Cada que cambia el id tiene que actualizar la imagen
		setArtworkUrl(
			`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
		);
	}, [id]);

	if (state) return state;
	return { name: null, artworkUrl, bgc: data.muted || 'gray' };
}
