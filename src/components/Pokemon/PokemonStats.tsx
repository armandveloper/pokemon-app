import styled from 'styled-components';
import { pokemonStats } from '../../helpers/pokemon';
import { Stat } from '../../interfaces/pokemon-info.interface';

interface PokemonStatsProps {
	stats: Stat[];
}

const PokemonStatsStyled = styled.div`
	h2 {
		text-align: center;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	li {
		margin-bottom: 2rem;
		display: grid;
		grid-template-columns: 35% 1fr;
		gap: 2rem;
		align-items: center;
		div:first-child {
			display: flex;
			justify-content: space-between;
		}
		div:last-child {
			background-color: #f4f5f4;
			border-radius: 0.4rem;
			height: 0.4rem;
      overflow: hidden;
			div {
				border-radius: 0.4rem;
				width: 0;
				transition: width 0.3s ease;
			}
		}
	}
`;

function PokemonStats({ stats }: PokemonStatsProps) {
	return (
		<PokemonStatsStyled>
			<h2>Base Stats</h2>
			<ul>
				{stats.map((stat) => (
					<li key={stat.stat.name}>
						<div>
							<span>{pokemonStats.get(stat.stat.name)}</span>{' '}
							{stat.base_stat}
						</div>
						<div>
							<div
								style={{
									backgroundColor:
										stat.base_stat < 50
											? '#FB6C6C'
											: '#4BC07A',
									width: `${stat.base_stat}%`,
								}}
							/>
						</div>
					</li>
				))}
			</ul>
		</PokemonStatsStyled>
	);
}

export default PokemonStats;
