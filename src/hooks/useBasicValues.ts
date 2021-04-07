import { usePalette } from 'react-palette';
import { LocationState } from '../interfaces/router.interface';

export function useBasicValues(state: LocationState, id: string) {
	const artworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

	const { data } = usePalette(artworkUrl);

	if (state) return state;
	return { name: null, artworkUrl, bgc: data.muted || 'gray' };
}
