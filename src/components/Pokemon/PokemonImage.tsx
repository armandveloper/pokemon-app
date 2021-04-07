import styled from 'styled-components';

interface PokemonImageProps {
	image: string;
}

const PokemonImageStyled = styled.img.attrs((props) => ({
	src: props.src,
	alt: 'Pokemon',
}))`
	display: block;
	height: 30rem;
	margin: 0 auto;
	object-fit: contain;
	position: relative;
	width: 30rem;
`;

function PokemonImage({ image }: PokemonImageProps) {
	return <PokemonImageStyled src={image} />;
}

export default PokemonImage;
