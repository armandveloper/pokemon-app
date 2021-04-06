import styled from 'styled-components';
import Wrapper from './Wrapper';
import pokeball from '../../assets/pokeball.svg';

const HomeHeaderStyled = styled.header`
	position: relative;
	height: 20rem;
	img {
		display: block;
		height: 24.8rem;
		width: 24.8rem;
		position: absolute;
		right: -1rem;
		z-index: -1;
	}
	h1 {
		font-size: 3rem;
		letter-spacing: 1px;
		line-height: 20rem;
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
