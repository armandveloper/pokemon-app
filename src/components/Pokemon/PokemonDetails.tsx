// import { useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../layout/Wrapper';
import PokemonTypeList from './PokemonTypeList';
import PokemonStats from './PokemonStats';
import { PokemonInfo } from '../../interfaces/pokemon-info.interface';

interface PokemonDetailsProps {
	pokemon: PokemonInfo;
}

const PokemonDetailsStyled = styled.div`
	color: #fff;
	@media (min-width: 56.25em) {
		margin-top: 6rem;
	}
	> div:first-of-type {
		margin-top: 3rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		div {
			text-align: center;
			span {
				@media (min-width: 56.25em) {
					font-size: 2.4rem;
				}
			}
		}
		p {
			font-size: 3rem;
			font-weight: 700;
			margin: 0;
			span {
				font-size: 1.8rem;
			}
			@media (min-width: 56.25em) {
				font-size: 4.5rem;
				span {
					font-size: 3rem;
				}
			}
		}
	}
`;

function PokemonDetails({ pokemon }: PokemonDetailsProps) {
	return (
		<Wrapper>
			<PokemonDetailsStyled>
				<PokemonTypeList typeList={pokemon.types} />
				<div>
					<div>
						<p>{pokemon.order}</p>
						<span>Order</span>
					</div>
					<div>
						{/* decimeter / 10 = meter */}
						<p>
							{pokemon.height / 10} <span>M</span>
						</p>
						<span>Height</span>
					</div>
					<div>
						{/* hectogram / 10 = kilogram */}
						<p>
							{pokemon.weight / 10} <span>KG</span>
						</p>
						<span>Weight</span>
					</div>
				</div>
				<PokemonStats stats={pokemon.stats} />
			</PokemonDetailsStyled>
		</Wrapper>
	);
}

export default PokemonDetails;
