import styled from 'styled-components';

interface PokemonImageProps {
	image: string;
	name: string;
}

const PokemonImageStyled = styled.img.attrs((props) => ({
	src: props.src,
	alt: props.alt,
}))`
	display: block;
	height: 30rem;
	margin: 0 auto;
	object-fit: contain;
	position: relative;
	width: 30rem;
	transition: opacity 0.3s ease;
`;

function PokemonImage({ image, name }: PokemonImageProps) {
	return <PokemonImageStyled alt={name} src={image} />;
}

export default PokemonImage;
