import React from 'react';
import PokemonCard from '../pokemon-card/PokemonCard';
import './PokemonCards.css';

const PokemonsCards = (props) => (
    <ul className='a-pokemons-cards'>
      <li>
        <PokemonCard  />
      </li>
      <li>
        <PokemonCard  />
      </li>
    </ul>
  );
export default PokemonsCards;