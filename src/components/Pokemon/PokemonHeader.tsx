import styled from 'styled-components';
import { ChevronLeft } from 'react-feather';
import { useHistory } from 'react-router';

interface PokemonHeaderProps {
	id: number;
}

const PokemonHeaderStyled = styled.header`
	padding: 1.5rem 2rem;
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	button {
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		margin: 0;
		padding: 0.5rem;
		display: inline-flex;
		align-items: center;
		transition: transform 0.3s ease;
		&:focus {
			outline: none;
		}
		&:hover,
		&:focus {
			transform: translate3d(-0.5rem, 0, 0);
		}
	}
	span {
		font-size: 2rem;
		font-weight: 900;
		letter-spacing: 0.3px;
		margin-left: -4rem;
	}
`;

function PokemonHeader({ id }: PokemonHeaderProps) {
	const history = useHistory();

	const handleGoBack = () => {
		if (history.length === 2) {
			return history.replace('/');
		}
		history.push('/');
	};

	return (
		<PokemonHeaderStyled>
			<button onClick={handleGoBack}>
				<ChevronLeft size={32} color="currentColor" />
			</button>
			<span>#{id < 10 ? '00' + id : id < 100 ? '0' + id : id}</span>
			{/* Div vacío para centrar el span */}
			<div />
		</PokemonHeaderStyled>
	);
}

export default PokemonHeader;
