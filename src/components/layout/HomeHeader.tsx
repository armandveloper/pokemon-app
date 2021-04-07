import styled from 'styled-components';
import Wrapper from './Wrapper';
import pokeball from '../../assets/pokeball.svg';

const HomeHeaderStyled = styled.header`
	position: relative;
	height: 20rem;
	display: flex;
	align-items: center;
	img {
		display: block;
		height: 24.8rem;
		width: 24.8rem;
		position: absolute;
		top: 0;
		right: -1rem;
		z-index: -1;
	}
	h1 {
		font-size: 3rem;
		letter-spacing: 1px;
	}
`;

function HomeHeader() {
	return (
		<HomeHeaderStyled>
			<Wrapper>
				<img src={pokeball} alt="pokeball" />
				<h1>Pokedex</h1>
			</Wrapper>
		</HomeHeaderStyled>
	);
}

export default HomeHeader;
